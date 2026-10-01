"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { signIn } from "next-auth/react"
import Link from "next/link"

type FieldProps = {
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  right?: React.ReactNode
}

function KitchenIllustration() {
  return (
    <svg
      width='240'
      height='176'
      viewBox='0 0 300 220'
      className='mx-auto mb-6'
    >
      {" "}
      <path
        d='M60 130 C56 165 60 195 66 210 C70 220 100 220 104 210 C110 195 114 165 110 130 Z'
        fill='#FBF6EB'
        stroke='#3B2E22'
        strokeWidth='1.4'
      />
      <path
        d='M60 130 C78 137 92 137 110 130'
        stroke='#3B2E22'
        strokeWidth='1.2'
        fill='none'
      />
      <g stroke='#59654A' strokeWidth='1.3' fill='none'>
        <path d='M85 130 C83 100 79 75 73 50' />
        <path d='M85 130 C89 100 95 78 105 55' />
        <path d='M85 130 C85 96 85 75 85 45' />
      </g>
      <circle
        cx='73'
        cy='46'
        r='8'
        fill='#FBF6EB'
        stroke='#C99A4E'
        strokeWidth='1.1'
      />
      <circle
        cx='85'
        cy='38'
        r='9'
        fill='#FBF6EB'
        stroke='#AD6A4E'
        strokeWidth='1.1'
      />
      <circle
        cx='105'
        cy='49'
        r='7'
        fill='#FBF6EB'
        stroke='#C99A4E'
        strokeWidth='1.1'
      />
      <rect
        x='10'
        y='205'
        width='150'
        height='12'
        rx='4'
        fill='#ECDFC6'
        stroke='#3B2E22'
        strokeWidth='1.1'
      />
      <ellipse
        cx='80'
        cy='197'
        rx='52'
        ry='20'
        fill='#F1DED2'
        stroke='#3B2E22'
        strokeWidth='1.3'
      />
      <rect
        x='185'
        y='120'
        width='40'
        height='52'
        rx='7'
        fill='#FBF6EB'
        stroke='#3B2E22'
        strokeWidth='1.2'
      />
      <rect
        x='180'
        y='112'
        width='50'
        height='12'
        rx='4'
        fill='#E4E9DA'
        stroke='#3B2E22'
        strokeWidth='1.1'
      />
      <path
        d='M245 215 C245 180 234 145 240 118 C244 102 264 100 268 116 C272 130 266 140 258 142'
        fill='none'
        stroke='#3B2E22'
        strokeWidth='1.3'
      />
      <ellipse
        cx='248'
        cy='210'
        rx='22'
        ry='14'
        fill='#FBF6EB'
        stroke='#3B2E22'
        strokeWidth='1.3'
      />
    </svg>
  )
}

function Field({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  right,
}: FieldProps) {
  return (
    <div className='mb-4'>
      {" "}
      <div className='mb-1.5 flex items-center justify-between'>
        {" "}
        <label className='font-inter text-[12px] font-semibold uppercase tracking-[0.06em] text-ink-soft'>
          {label}{" "}
        </label>
        {right}
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full rounded-[9px] border-[1.5px] border-line bg-white px-3.5 py-3 font-lora text-[15px] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-sage-deep'
      />
    </div>
  )
}

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // TODO: Connect to your credentials authentication.
    // await signIn("credentials", { email, password });

    console.log("log in", { email, password })
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-cream px-6 py-16 font-lora text-ink'>
      {" "}
      <div className='w-full max-w-[420px] text-center'>
        {" "}
        <Link className='logo' href='/'>
          gathered pantry
        </Link>
        <KitchenIllustration />
        <h1 className='mb-2 font-fraunces text-[32px] font-medium italic'>
          Welcome back
        </h1>
        <p className='mb-8 text-[15px] text-ink-soft'>
          Log in to your <span className='logo logo-hero'>gathered pantry</span>
          .
        </p>
        <form onSubmit={handleSubmit} className='text-left'>
          <Field
            label='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='you@example.com'
          />

          <Field
            label='Password'
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='••••••••••'
            right={
              <a
                href='#'
                onClick={(e) => e.preventDefault()}
                className='cursor-pointer font-inter text-[12.5px] font-medium text-terra-deep'
              >
                Forgot password?
              </a>
            }
          />

          <button
            type='button'
            onClick={() => setShowPassword((s) => !s)}
            className='mb-6 flex cursor-pointer items-center gap-1.5 font-inter text-[12.5px] font-medium text-ink-soft'
          >
            {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
            {showPassword ? "Hide password" : "Show password"}
          </button>

          <button
            type='submit'
            className='mb-3 w-full rounded-[9px] bg-terra py-3.5 font-inter text-[15px] font-semibold text-[#FBF3E9] transition-colors hover:bg-terra-deep'
          >
            Log in
          </button>
        </form>
        <div className='my-5 flex items-center gap-3 font-inter text-xs text-ink-faint'>
          <div className='h-px flex-1 bg-line' />
          <span>or</span>
          <div className='h-px flex-1 bg-line' />
        </div>
        <button
          type='button'
          onClick={() => signIn("google")}
          className='flex w-full items-center justify-center gap-2.5 rounded-[9px] border-[1.5px] border-line-strong py-3.5 font-inter text-[14.5px] font-semibold text-ink transition-colors hover:bg-cream-deep'
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
        <p className='mt-8 font-inter text-[13.5px] text-ink-soft'>
          Don't have an account?{" "}
          <a
            href='/signup'
            className='cursor-pointer font-semibold text-terra-deep hover:underline'
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
