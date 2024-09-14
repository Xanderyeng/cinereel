import React from 'react'
import { ModeToggle } from './ThemeToggle'

const Navbar = () => {
  return (
    <header className=' flex flex-grow gap-2 fixed top-0 left-0 w-full px-8 z-50 justify-between min-h-[10dvh] mx-auto items-center outline outline-2 outline-yellow-500'>
        <span className='text-2xl font-bold text-black text-lato dark:text-black'>
          <span className=' uppercase'>
            cinema
          </span>
        </span>
        <ModeToggle />
    </header>
  )
}

export default Navbar