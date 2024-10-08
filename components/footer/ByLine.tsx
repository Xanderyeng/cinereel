"use client"
import React from 'react'
import { motion } from 'framer-motion';

interface BylineProps {
    children?: React.ReactNode;
  }

export default function ByLine({ children }: BylineProps) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className='flex items-end align-middle justify-center gap-2 text-[0.75rem]'
  >
    Tinker-built by
    <motion.span 
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className=' text-[0.75rem] cursor-pointer pl-2'>
    {children}
    </motion.span>
  </motion.div>
  )
}
