'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { ModeToggle } from './ThemeToggle'
import { usePathname } from 'next/navigation'
import SearchBar from '../SearchBar'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/movies', label: 'Movies' },
  { href: '/tvshows', label: 'TV Shows' },
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <motion.header
      className='fixed top-0 left-0 w-full px-8 pt-6 z-50 min-h-[10dvh] mx-auto '
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
            <Link href="/" className='hover:cursor-pointer'>
              CineReel
            </Link>
          </motion.span>
        </motion.span>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" asChild className="relative text-lg font-bold">
              <Link href={item.href}>
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="underline"
                    initial={false}
                  />
                )}
              </Link>
            </Button>
          ))}
        </div>
        <div className="order-3 mt-4 w-full md:order-2 md:mt-0 md:w-auto">
          <SearchBar />
        </div>
        <div className='flex items-center pr-8 space-x-4 '>
          <ModeToggle />
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar