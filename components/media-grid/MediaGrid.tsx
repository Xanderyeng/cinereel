'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Movie } from "@/_types/types"
import { TVShow } from "@/_types/types"

interface MediaGridProps {
  movies: Movie[]
  tvShows: TVShow[]
}

export default function MediaGrid({ movies, tvShows }: MediaGridProps) {
  const [activeTab, setActiveTab] = useState<'movies' | 'tvshows'>('movies')

  const renderMasonryGrid = (items: (Movie | TVShow)[]) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.slice(0, 15).map((item, index) => (
          <Card key={item.id} className={`w-full ${index % 3 === 1 ? 'sm:translate-y-4' : ''} hover:scale-105 transition-all duration-300 hover:cursor-pointer overflow-hidden`}>
            <CardContent className="p-0 ">
              <div className="relative aspect-[27/40] ">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title || (item as TVShow).name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                />
              </div>
              <h3 className="py-4 text-md text-center tracking-wider font-raleway font-semibold truncate">
                {item.title || (item as TVShow).name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <Tabs defaultValue="movies" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="movies" onClick={() => setActiveTab('movies')}>Movies</TabsTrigger>
        <TabsTrigger value="tvshows" onClick={() => setActiveTab('tvshows')}>TV Shows</TabsTrigger>
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