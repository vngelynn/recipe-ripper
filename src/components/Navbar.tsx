import Link from "next/link"
import { auth } from "@/auth"
import AvatarMenu from "@/components/AvatarMenu"

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

export default async function Navbar() {
  const session = await auth()
  const isLoggedIn = !!session?.user

  return (
    <nav className='w-full max-w-5xl mx-auto flex items-center justify-between px-10 py-7'>
      <Link className='logo' href='/'>
        gathered pantry
      </Link>

      {isLoggedIn ? (
        <div className='flex items-center gap-7 font-inter'>
          <Link href='/extract' className='navlink'>
            Clip
          </Link>

          <Link href='/dashboard' className='navlink'>
            Your Pantry
          </Link>

          <AvatarMenu
            initial={session.user?.email?.charAt(0).toUpperCase() ?? "A"}
          />
        </div>
      ) : (
        // Logged-out navbar
        <>
          <div className='hidden md:flex items-center gap-8 font-inter'>
            {["How it works", "Features", "Browse recipes", "About"].map(
              (l) => (
                <a
                  key={l}
                  className='text-[14.5px] font-medium cursor-pointer'
                  style={{ color: COLORS.inkSoft }}
                >
                  {l}
                </a>
              ),
            )}
          </div>

          <div className='flex gap-3'>
            <Link
              href='/login'
              className='px-5 py-2.5 rounded-[9px] text-[13.5px] font-semibold border-[1.5px]
                border-line-strong text-ink bg-transparent
                transition-all duration-300 ease-out
               hover:bg-cream-deep
                hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(173,106,78,0.18)]
                font-inter'
            >
              Log in
            </Link>

            <Link
              href='/signup'
              className='px-5 py-2.5 rounded-[9px] text-[13.5px] font-semibold border-[1.5px]
                border-line-strong text-ink 
                transition-all duration-300 ease-out
               hover:bg-cream-deep
                hover:-translate-y-px hover:shadow-[0_6px_16px_rgba(173,106,78,0.18)]
                font-inter'
            >
              Sign up
            </Link>
          </div>
        </>
      )}
    </nav>
  )
}
