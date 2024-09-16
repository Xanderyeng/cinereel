'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ModeToggle } from './ThemeToggle'
import MobileMenu from './MobileNav'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className='fixed top-0 left-0 w-full px-8 pt-2 z-50 min-h-[10dvh] mx-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='absolute inset-0 bg-gradient-to-b from-black/90 to-transparent pointer-events-none' />
      <div className='relative z-10 flex justify-between items-center h-full'>
        <motion.span
          className='text-2xl font-bold text-white'
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.span
            className='uppercase inline-block'
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            cinema
          </motion.span>
        </motion.span>
        <div className='flex items-center space-x-4'>
          <ModeToggle />
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar