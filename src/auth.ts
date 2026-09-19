import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

import { db } from "./prisma/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,

  session: {
    strategy: "jwt",
  },

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const email =
          typeof credentials?.email === "string"
            ? credentials.email.trim().toLowerCase()
            : ""

        const password =
          typeof credentials?.password === "string" ? credentials.password : ""

        if (!email || !password) {
          return null
        }

        const user = await db.orm.public.User.first({ email })

        if (!user?.passwordHash) {
          return null
        }

        const passwordMatches = await bcrypt.compare(
          password,
          user.passwordHash,
        )

        if (!passwordMatches) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      console.log("[signIn]", {
        provider: account?.provider,
        email: user.email,
        userId: user.id,
      })

      if (account?.provider === "google") {
        if (!user.email) {
          return false
        }

        const email = user.email.toLowerCase()

        const existingUser = await db.orm.public.User.first({ email })

        console.log("[signIn] Existing user:", !!existingUser)

        if (!existingUser) {
          await db.orm.public.User.create({
            email,
            passwordHash: null,
          })

          console.log("[signIn] User created")
        }
      }

      return true
    },

    async jwt({ token, user }) {
      if (user?.id) {
        token.sub = user.id
      }

      return token
    },

    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }

      return session
    },
  },
})
