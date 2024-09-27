'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Movie, TVShow } from "@/_types/types"
import { Card, CardContent } from "@/components/ui/card"
import { cardVariants } from '@/_utils/masonryGridCardvariants'

interface MasonryGridProps {
  items: (Movie | TVShow)[]
   type: 'movie' | 'tvshows'
}

export default function MasonryGrid({ items, type }: MasonryGridProps) {

  return (
    <motion.div 
      className="grid grid-cols-1 gap-y-8 md:gap-y-6 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {items.slice(0, 12).map((item, index) => (
        <motion.div key={item.id} variants={cardVariants}>
          <Link href={`/${type === 'movie' ? 'movie' : 'tvshow'}/${item.id}`}>
          <Card key={item.id} className={`w-full ${index % 2 === 1 ? 'sm:translate-y-8' : ''} ${index % 4 === 1 ? 'sm:translate-y-8' : ''} hover:scale-105 transition-all duration-300 hover:cursor-pointer overflow-hidden`}>
            <CardContent className="p-0 ">
              <div className="relative aspect-[27/40] ">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={`${item.title} movie` || `${(item as TVShow).name}} tvshow`}
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-white text-lg font-semibold truncate">
                  {item.title || (item as TVShow).name}
                </h3>
              </div>
            </CardContent>
          </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}