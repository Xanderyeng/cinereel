'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Movie } from "@/_types/types"
import { TVShow } from "@/_types/types"
import MasonryGrid from './MasonryGrid'

interface MediaGridProps {
  movies: Movie[]
  tvShows: TVShow[]
}

const tabVariants = {
  inactive: { x: 0 },
  active: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } }
}

export default function MediaGrid({ movies, tvShows }: MediaGridProps) {
  const [activeTab, setActiveTab] = useState<'movies' | 'tvshows'>('movies');

  return (
    <Tabs defaultValue="movies" className=" py-12 px-8 md:px-0 w-full md:max-w-5xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-8xl 3xl:max-w-9xl">
      <TabsList className="grid w-full grid-cols-2 mb-4 h-12 text-lg font-nunito font-semibold tracking-wider ">
        <TabsTrigger className="text-md" value="movies" onClick={() => setActiveTab('movies')}>Movies</TabsTrigger>
        <TabsTrigger className="text-md" value="tvshows" onClick={() => setActiveTab('tvshows')}>TV Shows</TabsTrigger>
      </TabsList>
      <TabsContent value="movies">
        <MasonryGrid items={movies} />
      </TabsContent>
      <TabsContent value="tvshows">
        <MasonryGrid items={tvShows} />
      </TabsContent>
    </Tabs>
  )
}