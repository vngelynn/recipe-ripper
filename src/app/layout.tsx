import "./globals.css"
import type { Metadata } from "next"
import Providers from "./providers"
import { Lora, Inter, Fraunces, Gaegu } from "next/font/google"
import Navbar from "../components/Navbar"

const lora = Lora({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal", "italic"],
})

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
  style: ["normal", "italic"],
})

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  style: ["normal", "italic"],
})

const gaegu = Gaegu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gaegu",
  weight: "400",
  style: "normal",
})

export const metadata: Metadata = {
  title: "gathered pantry",
  description: "One place to save favorite simplified recipes",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${lora.variable} ${inter.variable} ${fraunces.variable} ${gaegu.variable} h-full antialiased`}
    >
      <body className='min-h-full bg-cream flex flex-col'>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
