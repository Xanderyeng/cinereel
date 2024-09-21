'use client'

import { motion } from 'framer-motion'

export default function CardSkeleton() {
  return (
    <motion.div
      className="w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden relative"
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-300 to-transparent" />
      <motion.div
        className="absolute bottom-4 left-4 right-4 h-4 bg-gray-300 rounded"
        initial={{ width: '60%' }}
        animate={{ width: ['60%', '100%', '60%'] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
    </motion.div>
  )
}