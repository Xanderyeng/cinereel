'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Celebrity, PopularCelebs } from '@/_types/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

const CELEBS_PER_PAGE = 3

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
    setDisplayedCelebs((prev) => Math.min(prev + CELEBS_PER_PAGE, celebs.length))
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
            className="flex justify-center gap-4"
          >
            {visibleCelebs.map((celeb) => (
              <Card key={celeb.id} className="w-full sm:w-48">
                <CardContent className="p-4">
                  <div className="relative w-24 h-24 sm:w-40 sm:h-40 mx-auto mb-2">
                    <Image
                      src={`https://image.tmdb.org/t/p/w200${celeb.profile_path}`}
                      alt={celeb.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-full"
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
        {displayedCelebs < celebs.length && (
          <Button onClick={loadMore}>Load More</Button>
        )}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">See Other Partners</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Other Partners</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[400px] pr-4">
              {celebs.map((celeb) => (
                <div key={celeb.id} className="flex items-center gap-4 mb-4">
                  <Image
                    src={`https://image.tmdb.org/t/p/w200${celeb.profile_path}`}
                    alt={celeb.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <span>{celeb.name}</span>
                </div>
              ))}
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
