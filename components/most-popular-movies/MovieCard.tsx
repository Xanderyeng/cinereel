'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Movie } from '@/_types/types'
import ImageLoading from "@/components/ImageLoading"

export default function MovieCard({ movie }: { movie: Movie & { blurDataURL: string | null }}) {
  // const isTopThree = isPopular && index !== undefined && index < 3

  return (
    <Link href={`/movie/${movie.id}`} passHref>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="h-full w-full overflow-hidden cursor-pointer relative">
          <div className="relative w-full aspect-[27/40]">
            <Image
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              alt={movie.title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              placeholder={movie.blurDataURL ? "blur" : "empty"}
              blurDataURL={movie.blurDataURL || 'https://image.tmdb.org/t/p/w200/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg'}
            />
          </div>
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
            {movie.vote_average.toFixed(1)}
          </Badge>
          {/* <CardTitle className="p-4 text-sm md:text-base lg:text-lg truncate">{movie.title}</CardTitle>  */}
        </Card>
      </motion.div>
    </Link>
  )
}