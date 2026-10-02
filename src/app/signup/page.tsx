"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import Field from "../../components/Field"
import GoogleButton from "../../components/GoogleButton"

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
    <div className='flex items-center justify-center px-6 bg-cream text-ink font-lora '>
      <div className='w-full max-w-[420px] text-center'>
        <h1 className='mb-7 font-fraunces text-[32px] font-medium italic'>
          Start your{" "}
          <Link className='logo text-2xl font-semibold not-italic' href='/'>
            gathered pantry
          </Link>
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
            className='w-full py-3.5 rounded-[9px] font-semibold text-[15px] mb-3 mt-4 text-light transition-colors hover:bg-terra-deep font-inter bg-terra'
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

        <GoogleButton />

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

        <p className='mt-5 text-[13.5px] text-ink-soft font-inter mb-4'>
          Already have an account?{" "}
          <a
            className='cursor-pointer font-semibold text-terra-deep hover:underline'
            href='/login'
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
