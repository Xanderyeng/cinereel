'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { sendGTMEvent } from '@next/third-parties/google'

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function AnimatedHeroContent() {
  const title = "Welcome to CineReel"

  return (
    <>
      <h1 className="text-gray-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center" aria-label={title}>
        {title.split('').map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.08, duration: 0.5 }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
      <motion.p 
        className="text-gray-700 dark:text-gray-200 mt-4 text-center font-semibold text-sm sm:text-base md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: title.length * 0.05, duration: 0.5 }}
      >
        Your personalized movie streaming experience
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: title.length * 0.06 + 0.5, duration: 0.5 }}
      >
        <Button className="mt-8" onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'See Trending Button' })}>
          See Trending
        </Button>
      </motion.div>
    </>
  )
}