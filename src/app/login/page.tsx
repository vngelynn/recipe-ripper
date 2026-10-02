"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Field from "../../components/Field"
import GoogleButton from "@/components/GoogleButton"

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
    <div className='flex flex-1 items-center justify-center bg-cream px-6 font-lora text-ink'>
      <div className='w-full max-w-[420px] text-center'>
        <p className='mb-6 text-m'>
          Log in to your <span className='logo text-lg'> gathered pantry</span>.
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
            inputRight={
              <button
                type='button'
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-ink-soft transition-colors hover:text-ink'
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            }
          />
          <div className='mb-4 text-right'>
            <a
              href='#'
              onClick={(e) => e.preventDefault()}
              className='font-inter text-[12.5px] font-medium text-terra-deep hover:underline'
            >
              Forgot Password
            </a>
          </div>

          <button
            type='submit'
            className='mb-3 w-full rounded-[9px] bg-terra py-3.5 font-inter text-[15px] font-semibold text-light transition-colors hover:bg-terra-deep'
          >
            Log in
          </button>
        </form>
        <div className='my-5 flex items-center gap-3 font-inter text-xs text-ink-faint'>
          <div className='h-px flex-1 bg-line' />
          <span>or</span>
          <div className='h-px flex-1 bg-line' />
        </div>
        <GoogleButton />
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
