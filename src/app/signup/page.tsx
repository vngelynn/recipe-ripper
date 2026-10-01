"use client"

import React, { useState } from "react"
import { Eye, EyeOff, Check } from "lucide-react"
import { signIn } from "next-auth/react"
import Link from "next/link"

// remove colors when updating svg images
const COLORS = {
  cream: "#F3E9D9",
  creamDeep: "#ECDFC6",
  card: "#FBF6EB",
  ink: "#3B2E22",
  inkSoft: "#7E6B57",
  inkFaint: "#AC9A81",
  sagePale: "#E5E7D6",
  sageDeep: "#59654A",
  terra: "#AD6A4E",
  terraDeep: "#8A5039",
  gold: "#C99A4E",
  line: "#DECBA9",
  lineStrong: "#CBB289",
}

function KitchenIllustration() {
  return (
    <svg
      width='240'
      height='176'
      viewBox='0 0 300 220'
      className='mx-auto mb-6'
    >
      <path
        d='M60 130 C56 165 60 195 66 210 C70 220 100 220 104 210 C110 195 114 165 110 130 Z'
        fill={COLORS.card}
        stroke={COLORS.ink}
        strokeWidth='1.4'
      />
      <path
        d='M60 130 C 78 137 92 137 110 130'
        stroke={COLORS.ink}
        strokeWidth='1.2'
        fill='none'
      />
      <g stroke={COLORS.sageDeep} strokeWidth='1.3' fill='none'>
        <path d='M85 130 C83 100 79 75 73 50' />
        <path d='M85 130 C89 100 95 78 105 55' />
        <path d='M85 130 C85 96 85 75 85 45' />
      </g>
      <circle
        cx='73'
        cy='46'
        r='8'
        fill={COLORS.card}
        stroke={COLORS.gold}
        strokeWidth='1.1'
      />
      <circle
        cx='85'
        cy='38'
        r='9'
        fill={COLORS.card}
        stroke={COLORS.terra}
        strokeWidth='1.1'
      />
      <circle
        cx='105'
        cy='49'
        r='7'
        fill={COLORS.card}
        stroke={COLORS.gold}
        strokeWidth='1.1'
      />
      <rect
        x='10'
        y='205'
        width='150'
        height='12'
        rx='4'
        fill={COLORS.creamDeep}
        stroke={COLORS.ink}
        strokeWidth='1.1'
      />
      <ellipse
        cx='80'
        cy='197'
        rx='52'
        ry='20'
        fill='#F1DED2'
        stroke={COLORS.ink}
        strokeWidth='1.3'
      />
      <rect
        x='185'
        y='120'
        width='40'
        height='52'
        rx='7'
        fill={COLORS.card}
        stroke={COLORS.ink}
        strokeWidth='1.2'
      />
      <rect
        x='180'
        y='112'
        width='50'
        height='12'
        rx='4'
        fill={COLORS.sagePale}
        stroke={COLORS.ink}
        strokeWidth='1.1'
      />
      <path
        d='M245 215 C245 180 234 145 240 118 C244 102 264 100 268 116 C272 130 266 140 258 142'
        fill='none'
        stroke={COLORS.ink}
        strokeWidth='1.3'
      />
      <ellipse
        cx='248'
        cy='210'
        rx='22'
        ry='14'
        fill={COLORS.card}
        stroke={COLORS.ink}
        strokeWidth='1.3'
      />
    </svg>
  )
}

function Field({ label, type = "text", value, onChange, placeholder }) {
  return (
    <div className='mb-4'>
      <label
        className='block text-[12px] font-semibold uppercase mb-1.5'
        style={{
          color: COLORS.inkSoft,
          letterSpacing: "0.06em",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full px-3.5 py-3 rounded-[9px] outline-none text-[15px]'
        style={{
          border: `1.5px solid ${COLORS.line}`,
          background: "#fff",
          color: COLORS.ink,
          fontFamily: "Lora, serif",
        }}
        onFocus={(e) => (e.target.style.borderColor = COLORS.sageDeep)}
        onBlur={(e) => (e.target.style.borderColor = COLORS.line)}
      />
    </div>
  )
}

const PASSWORD_RULES = [
  { label: "At least 8 characters", test: (p) => p.length >= 8 },
  { label: "One number", test: (p) => /\d/.test(p) },
]

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up to your real auth call, e.g.
    // await signUp({ name, email, password });
    console.log("sign up", { name, email, password })
  }

  return (
    <div
      className='min-h-screen flex items-center justify-center px-6 py-16'
      style={{
        background: COLORS.cream,
        color: COLORS.ink,
        fontFamily: "Lora, serif",
      }}
    >
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap'
      />

      <div className='w-full max-w-[420px] text-center'>
        <Link className='logo font-semibold text-2xl mb-7' href='/'>
          gathered pantry
        </Link>

        <KitchenIllustration />

        <h1
          style={{
            fontFamily: "Fraunces, serif",
            fontWeight: 500,
            fontStyle: "italic",
            fontSize: 32,
            margin: "0 0 8px",
          }}
        >
          Start your <span className='logo logo-hero'>gathered pantry</span>
        </h1>
        <p className='mb-8 text-[15px]' style={{ color: COLORS.inkSoft }}>
          Save your first recipe in under a minute.
        </p>

        <form onSubmit={handleSubmit} className='text-left'>
          <Field
            label='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Emily'
          />
          <Field
            label='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='you@example.com'
          />
          <div className='mb-2'>
            <label
              className='block text-[12px] font-semibold uppercase mb-1.5'
              style={{
                color: COLORS.inkSoft,
                letterSpacing: "0.06em",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Password
            </label>
            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Create a password'
                className='w-full px-3.5 py-3 pr-11 rounded-[9px] outline-none text-[15px]'
                style={{
                  border: `1.5px solid ${COLORS.line}`,
                  background: "#fff",
                  color: COLORS.ink,
                  fontFamily: "Lora, serif",
                }}
                onFocus={(e) => (e.target.style.borderColor = COLORS.sageDeep)}
                onBlur={(e) => (e.target.style.borderColor = COLORS.line)}
              />
              <button
                type='button'
                onClick={() => setShowPassword((s) => !s)}
                className='absolute right-3 top-1/2 -translate-y-1/2'
                style={{ color: COLORS.inkFaint }}
                aria-label='Toggle password visibility'
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>

          {/* implement password requirements
          <div className='mb-6'>
            {PASSWORD_RULES.map((rule) => {
              const passed = rule.test(password)
              return (
                <div
                  key={rule.label}
                  className='flex items-center gap-1.5 text-[12.5px] mb-1'
                  style={{
                    color: passed ? COLORS.sageDeep : COLORS.inkFaint,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <Check size={13} strokeWidth={passed ? 2.5 : 2} />
                  {rule.label}
                </div>
              )
            })}
          </div> */}

          <button
            type='submit'
            className='w-full py-3.5 rounded-[9px] font-semibold text-[15px] mb-3'
            style={{
              background: COLORS.terra,
              color: "#FBF3E9",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Create My Account
          </button>
        </form>

        <div
          className='flex items-center gap-3 my-5'
          style={{
            color: COLORS.inkFaint,
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
          }}
        >
          <div className='flex-1 h-px' style={{ background: COLORS.line }} />
          or
          <div className='flex-1 h-px' style={{ background: COLORS.line }} />
        </div>

        <button
          className='w-full py-3.5 rounded-[9px] font-semibold text-[14.5px] flex items-center justify-center gap-2.5'
          style={{
            border: `1.5px solid ${COLORS.lineStrong}`,
            color: COLORS.ink,
            fontFamily: "Inter, sans-serif",
          }}
          onClick={() => signIn("google")}
        >
          <svg width='16' height='16' viewBox='0 0 24 24'>
            <path
              fill='#4285F4'
              d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z'
            />
            <path
              fill='#34A853'
              d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.85A11 11 0 0012 23z'
            />
            <path
              fill='#FBBC05'
              d='M5.84 14.1a6.6 6.6 0 010-4.2V7.05H2.18a11 11 0 000 9.9l3.66-2.85z'
            />
            <path
              fill='#EA4335'
              d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 00-9.82 6.05l3.66 2.85C6.71 7.31 9.14 5.38 12 5.38z'
            />
          </svg>
          Continue with Google
        </button>

        <p
          className='mt-8 text-[13px]'
          style={{
            color: COLORS.inkFaint,
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.6,
          }}
        >
          By continuing, you agree to our{" "}
          <a
            className='font-semibold cursor-pointer'
            style={{ color: COLORS.terraDeep }}
          >
            Terms of Use
          </a>{" "}
          and{" "}
          <a
            className='font-semibold cursor-pointer'
            style={{ color: COLORS.terraDeep }}
          >
            Privacy Policy
          </a>
          .
        </p>

        <p
          className='mt-5 text-[13.5px]'
          style={{ color: COLORS.inkSoft, fontFamily: "Inter, sans-serif" }}
        >
          Already have an account?{" "}
          <a
            className='font-semibold cursor-pointer'
            style={{ color: COLORS.terraDeep }}
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
