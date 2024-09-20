'use client'

import Link from 'next/link'
import Image from 'next/image'

import { useState , useEffect} from 'react'
import { Badge } from "@/components/ui/badge"
import { useSwipeable } from 'react-swipeable'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface TrendingItem {
  name: string
  id: number
  title: string
  poster_path: string
  vote_average: number
  media_type: 'movie' | 'tvshow'
}

interface TrendingSectionProps {
  items: TrendingItem[]
  title: string
}

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
  })}

export default function TrendingSection({ items, title }: TrendingSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(2)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setItemsPerView(6)
      } else if (window.innerWidth >= 1024) {
        setItemsPerView(5)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3)
      } else {
        setItemsPerView(2)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerView) % items.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsPerView + items.length) % items.length)
  }

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true
  })

  const visibleItems = Array.from({ length: itemsPerView }, (_, i) => 
    items[(currentIndex + i) % items.length]
  )


  return (
    <section id="trending-section" className="flex flex-col gap-4 my-8 max-w-[90vw] mx-auto">
      <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white capitalize">{title}</h2>
      <div className="relative" {...handlers}>
        <div className="overflow-hidden md:overflow-visible">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid grid-rows-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-4"
              style={{ display: 'grid' }}
            >
              {visibleItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`w-full h-full ${index === itemsPerView - 1 ? 'opacity-50' : ''}`}
                >
                  <Link href={`/${item.media_type}/${item.id}`}>
                    <Card className="relative">
                      <CardContent className="p-0">
                        <Image
                          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                          alt={item.title || item.name}
                          width={300}
                          height={450}
                          className="rounded-t-lg"
                        />
                        <div className="p-2">
                          <h3 className="font-semibold truncate">
                            {item.media_type === 'movie' ? item.title : item.name}
                          </h3>
                        </div>
                        <Badge className='absolute top-2 right-2 bg-gray-950/80 text-white'>
                          {item.vote_average.toFixed(1)}
                        </Badge>
                        {index < 3 && (
                          <div className="absolute top-2 left-2 bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs font-bold">
                            #{index + 1} Top Rated
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <Button
          className="absolute top-1/2 -left-16 transform -translate-y-1/2 hidden lg:block"
          onClick={handlePrev}
          aria-label="Previous items"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          className="absolute top-1/2 -right-16 transform -translate-y-1/2 hidden lg:block"
          onClick={handleNext}
          aria-label="Next items"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="pointer-events-none absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-background to-transparent" />
    </section>
  )
}