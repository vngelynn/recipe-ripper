"use client"

import { signOut } from "next-auth/react"

type AvatarMenuProps = {
  initial: string
}

export default function AvatarMenu({ initial }: AvatarMenuProps) {
  return (
    <button
      type='button'
      onClick={() => signOut({ callbackUrl: "/" })}
      id='avatar'
      aria-label='Log out'
    >
      {initial}
    </button>
  )
}
