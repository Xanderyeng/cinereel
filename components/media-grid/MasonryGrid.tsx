'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Movie, TVShow } from "@/_types/types"

interface MasonryGridProps {
  items: (Movie | TVShow)[]
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { duration: 0.3, ease: "easeIn" }
  }
}

export default function MasonryGrid({ items }: MasonryGridProps) {
  return (
    <motion.div 
      className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:grid-rows-3 max-w-6xl mx-auto"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {items.slice(0, 7).map((item, index) => (
        <motion.div 
          key={item.id} 
          variants={cardVariants}
          className={`
            ${index === 0 ? 'sm:col-start-1 sm:row-start-1' : ''}
            ${index === 1 ? 'sm:col-start-2 sm:row-start-1' : ''}
            ${index === 2 ? 'sm:col-start-3 sm:row-start-1' : ''}
            ${index === 3 ? 'sm:col-start-1 sm:row-start-2' : ''}
            ${index === 4 ? 'sm:col-start-2 sm:col-span-2 sm:row-start-2' : ''}
            ${index === 5 ? 'sm:col-start-1 sm:col-span-2 sm:row-start-3' : ''}
            ${index === 6 ? 'sm:col-start-3 sm:row-start-3' : ''}
          `}
        >
          <Card className="w-full h-full hover:scale-105 transition-all duration-300 hover:cursor-pointer overflow-hidden outline outline-0 outline-yellow-500">
            <CardContent className="p-0 h-full">
              <div className="relative w-full h-[320px] aspect-[16/9] pb-0">
                <Image
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title || (item as TVShow).name}
                  layout="intrinsic"
                  width={800}
                  height={400}
                  // fill
                  priority
                  style={{ objectFit: 'cover', objectPosition: 'top', height: '100%', width: '100%' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <h3 className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold truncate">
                  {item.title || (item as TVShow).name}
                </h3>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}