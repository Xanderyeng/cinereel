'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface SearchResult {
  id: number
  media_type: 'movie' | 'tvshow' | 'person' | 'company'
  title?: string
  name?: string
  poster_path: string
}

interface SearchResultsProps {
  initialResults: SearchResult[]
}

export default function SearchResults({ initialResults }: SearchResultsProps) {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({})

  const handleImageLoad = (id: number) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }))
  }

  if (initialResults.length === 0) return <div>No results found</div>

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {initialResults.map((result) => (
        <Link key={result.id} href={`/${result.media_type}/${result.id}`}>
          <Card className="hover:scale-105 transition-transform duration-200">
            <CardContent className="p-2">
              <div className="aspect-[2/3] relative mb-2">
                {!imagesLoaded[result.id] && (
                  <Skeleton className="w-full h-full absolute" />
                )}
                <Image
                  src={result.poster_path ? `https://image.tmdb.org/t/p/${result.poster_path && 'w500' || 'w185' || 'h632' || 'original'}/${result.poster_path}` : '/image_reel_placeholder.webp'}
                  alt={result.title || result.name || 'Poster'}
                  fill
                  style={{ objectFit: 'cover' }}
                  className={`rounded-md ${imagesLoaded[result.id] ? 'opacity-100' : 'opacity-0'}`}
                  quality={75}
                  loading='lazy'
                  onLoad={() => handleImageLoad(result.id)}
                />
              </div>
              <h3 className="text-sm font-medium truncate">{result.title || result.name}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}