'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import MovieCard from './MovieCard'
import { Movie } from '@/_types/types'

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: -50,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeIn"
    }
  })
}

export default function MovieCarousel({ movies }: { movies: Movie[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % movies.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + movies.length) % movies.length)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        handleNext()
      } else if (event.key === 'ArrowLeft') {
        handlePrev()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const visibleMovies = [
    movies[currentIndex],
    movies[(currentIndex + 1) % movies.length],
    movies[(currentIndex + 2) % movies.length],
  ]

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ display: 'grid' }}
          >
            {visibleMovies.map((movie, index) => (
              <motion.div
                key={movie.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ width: '300px', height: '445px' }}
              >
                 <Suspense fallback={"loading..."}>
                  <MovieCard movie={movie} />
                </Suspense>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <Button
        className="absolute top-1/2 -left-16 transform -translate-y-1/2"
        onClick={handlePrev}
        aria-label="Previous movies"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        className="absolute top-1/2 -right-16 transform -translate-y-1/2"
        onClick={handleNext}
        aria-label="Next movies"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}