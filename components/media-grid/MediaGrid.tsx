'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Movie } from "@/_types/types"
import { TVShow } from "@/_types/types"

interface MediaGridProps {
  movies: Movie[]
  tvShows: TVShow[]
}

const tabVariants = {
  inactive: { x: 0 },
  active: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } }
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

export default function MediaGrid({ movies, tvShows }: MediaGridProps) {
  const [activeTab, setActiveTab] = useState<'movies' | 'tvshows'>('movies');

  const renderMasonryGrid = (items: (Movie | TVShow)[]) => {
    return (
    <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {items.slice(0, 9).map((item, index) => (
        <motion.div key={item.id} variants={cardVariants}>
          <Card key={item.id} className={`w-full ${index % 3 === 1 ? 'sm:translate-y-4' : ''} hover:scale-105 transition-all duration-300 hover:cursor-pointer overflow-hidden`}>
            <CardContent className="p-0 ">
              <div className="relative aspect-[27/40] ">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title || (item as TVShow).name}
                  fill
                  aria-describedby={item.title || (item as TVShow).name}
                  loading="lazy"
                //   blurDataURL={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-white text-lg font-semibold truncate">
                    {item.title || (item as TVShow).name}
                  </h3>
              </div>
              {/* <h3 className="py-4 text-md text-center tracking-wider font-raleway font-semibold truncate">
                {item.title || (item as TVShow).name}
              </h3> */}
            </CardContent>
          </Card>
        </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <Tabs defaultValue="movies" className=" py-12 w-full md:max-w-5xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-8xl 3xl:max-w-9xl">
      <TabsList className="grid w-full grid-cols-2 mb-4 h-12 text-lg font-nunito font-semibold tracking-wider ">
        <TabsTrigger className="text-md" value="movies" onClick={() => setActiveTab('movies')}>Movies</TabsTrigger>
        <TabsTrigger className="text-md" value="tvshows" onClick={() => setActiveTab('tvshows')}>TV Shows</TabsTrigger>
      </TabsList>
      <TabsContent value="movies">
        {renderMasonryGrid(movies)}
      </TabsContent>
      <TabsContent value="tvshows">
        {renderMasonryGrid(tvShows)}
      </TabsContent>
    </Tabs>
  )
}