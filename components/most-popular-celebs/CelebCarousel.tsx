'use client'

import { useState } from 'react'
import Image from 'next/image'
import { sendGTMEvent } from '@next/third-parties/google'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Celebrity } from '@/_types/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import AnimatedDialog from './AnimatedModal'

const CELEBS_PER_PAGE = 4

interface CelebCarouselProps {
  celebs: Celebrity[]
}

export default function CelebCarousel({ celebs }: CelebCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [displayedCelebs, setDisplayedCelebs] = useState(CELEBS_PER_PAGE)

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(displayedCelebs / CELEBS_PER_PAGE) - 1))
  }

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0))
  }

  const loadMore = () => {
    setDisplayedCelebs((prev) => {
      const newDisplayed = Math.min(prev + CELEBS_PER_PAGE, celebs.length)
      if (newDisplayed > prev) {
        setTimeout(() => {
          setCurrentPage((currentPage) => currentPage + 1)
        }, 100)
      }
      return newDisplayed
    })
    sendGTMEvent({ event: 'buttonClicked', value: 'Load More' })
  }

  const visibleCelebs = celebs.slice(currentPage * CELEBS_PER_PAGE, (currentPage + 1) * CELEBS_PER_PAGE)

  return (
    <div className="relative px-4 md:px-0">
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 "
        >
          {visibleCelebs.map((celeb) => (
            <Card key={celeb.id} className="w-full overflow-hidden hover:cursor-pointer border-none outline-none">
              <CardContent className="p-4 border-none outline-none">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-2 border-none outline-none">
                  <Image
                    src={`https://image.tmdb.org/t/p/w200${celeb.profile_path}`}
                    alt={celeb.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full border-none outline-none"
                    quality={75}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    // placeholder="blur"
                    // blurDataURL={`https://image.tmdb.org/t/p/w200${celeb.profile_path}`}
                  />
                </div>
                <h3 className="text-center font-semibold truncate">{celeb.name}</h3>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
    {currentPage > 0 && (
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-full"
        onClick={prevPage}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
    )}
    {(currentPage + 1) * CELEBS_PER_PAGE < displayedCelebs && (
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 md:translate-x-full"
        onClick={nextPage}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    )}
    <div className="mt-8 flex justify-center gap-4">
      <Button onClick={loadMore}>Load More</Button>
      {/* MODAL DIALOG WINDOW */}
      <AnimatedDialog celebrities={celebs} gtmEvent={sendGTMEvent} />
    </div>
  </div>
  )
}
