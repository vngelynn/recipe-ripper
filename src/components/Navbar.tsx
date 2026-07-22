export default function Navbar() {
  return (
    <div className='max-w-5xl mx-auto flex items-center justify-between px-10 py-7'>
      <div id='logo'>gathered pantry</div>
      <div className='flex items-center gap-7 sans-serif'>
        <a className='navlink'>Clip</a>
        <a className='navlink'>Your Pantry</a>
        {/* TODO: dynamically display first name initial */}
        <div id='avatar'>A</div>
      </div>
    </div>
  )
}
