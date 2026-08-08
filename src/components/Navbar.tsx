import Link from "next/link"

export default function Navbar() {
  return (
    <nav className='max-w-5xl mx-auto flex items-center justify-between px-10 py-7'>
      <div id='logo'>gathered pantry</div>
      <div className='flex items-center gap-7 font-inter'>
        <Link href='/extract' className='navlink'>
          Clip
        </Link>
        <a className='navlink'>Your Pantry</a>
        {/* TODO: dynamically display first name initial */}
        <div id='avatar'>A</div>
      </div>
    </nav>
  )
}
