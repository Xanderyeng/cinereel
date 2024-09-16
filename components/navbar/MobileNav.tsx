'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { X, Menu } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0 }
  }

  const menuItems = ['Home', 'Movies', 'TV Shows', 'About']

  return (
    <>
      <button
        className='md:hidden text-white'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      <motion.div
        className='fixed top-0 right-0 h-full w-64 bg-black/90 text-white p-8 z-50'
        initial='closed'
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        <button
          className='absolute top-4 right-4 text-white'
          onClick={() => setIsOpen(false)}
        >
          <X />
        </button>
        <nav className='mt-12'>
          <ul className='space-y-4'>
            {menuItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <a href='#' className='text-xl hover:text-gray-300'>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  )
}

export default MobileMenu