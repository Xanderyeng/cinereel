'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChartConfig } from "@/components/ui/chart"

import { Play, Heart, Bookmark, TrendingUp } from 'lucide-react'
import { UserScoreChart } from '@/components/UserScoreChart'

interface MovieDetailsProps {
    movie: any;
  }

export default function MoviePage({ movie }: MovieDetailsProps){
  const [userScoreProgress, setUserScoreProgress] = useState(0)

  const director = movie.credits.crew.find((crewMember: any) => crewMember.job === 'Director')
  const screenplay = movie.credits.crew.find((crewMember: any) => crewMember.job === 'Screenplay')
  const writer = movie.credits.crew.find((crewMember: any) => crewMember.job === 'Writer')

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserScoreProgress(Math.ceil(movie.popularity))
    }, 500)

    return () => clearTimeout(timer)
  }, [movie.userScore])

  const chartData = [
    { score: userScoreProgress, fill: "var(--color-score)" },
  ]

  const chartConfig = {
    score: {
      label: 'Score',
      color: `hsl(${userScoreProgress * 1.2}, 100%, 50%)`,
    },
  } satisfies ChartConfig

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative h-[60vh] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={movie.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={`${movie.original_title} backdrop`}
              layout="fill"
              objectFit="cover"
              style={{ objectPosition: '10% 10%' }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
      </div>
      <div className="container mx-auto px-4 py-8 -mt-34 relative z-10 outline outline-0 outline-orange-500">
        <div className="flex flex-col md:flex-row gap-8  outline outline-0 outline-green-500">
          <div className="flex flex-row flex-auto md:w-1/3 outline outline-0 outline-fuchsia-500">
            <Image
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              alt={movie.title}
            //   fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              width={800}
              height={1200}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-2 hover:cursor-default">
              {movie.title} ({movie.release_date.slice(0, 4)})
              <Badge className="ml-2 bg-primary hover:cursor-default">{movie.rating}</Badge>
            </h1>
            <p className="text-muted-foreground mb-4">
              {movie.release_date}&nbsp; • &nbsp;{movie.genres.map((genre: any) => genre.name).join(', ')}&nbsp; • &nbsp;{movie.runtime}&nbsp;minutes
            </p>
            <div className="flex items-center gap-4 mb-6 ">
                <div className="w-[90px] outline outline-0 outline-orange-500">
                    <UserScoreChart chartData={chartData} chartConfig={chartConfig} />
                </div>
              <span className="font-semibold">Score</span>
              <Button variant="outline" size="icon">
                <TrendingUp className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="default">
                <Play className="h-4 w-4 mr-2" />
                Play Trailer
              </Button>
            </div>
            <h2 className="text-xl italic mb-4">{movie.tagline}</h2>
            <h3 className="text-2xl font-semibold mb-2">Overview</h3>
            <p className="mb-6">{movie.overview}</p>
            <div className="grid grid-cols-3 items-center justify-items-center gap-4 mb-8">
            {director && (
               <div className=" md:w-[80%]">
               <h4 className="font-semibold">{director ? director.name : 'N/A'}</h4>
               <p className="text-sm text-muted-foreground">Director</p>
                <motion.div
               key={director.name}
               className="bg-card mt-0 rounded-lg overflow-hidden shadow-md"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <Image
                 src={`https://image.tmdb.org/t/p/w400/${director.profile_path}`}
                 alt={director.name}
                 width={300}
                 height={450}
                  style={{ objectFit: 'cover', objectPosition: '10% 15%', width: '100%' }}
                  quality={75}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={`https://image.tmdb.org/t/p/w200${director.profile_path}`}
                 className="h-48"
               />
                </motion.div>
             </div>
              )}
              {/* <div className=" w-[80%]">
                <h4 className="font-semibold">{director ? director.name : 'N/A'}</h4>
                <p className="text-sm text-muted-foreground">Director</p>
                 <motion.div
                key={director.name}
                className="bg-card rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w400/${director.profile_path}`}
                  alt={director.name}
                  loading='lazy'
                  width={200}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                 </motion.div>
                
              </div> */}
              {screenplay && (
               <div className=" md:w-[80%]">
               <h4 className="font-semibold">{screenplay ? screenplay.name : 'N/A'}</h4>
               <p className="text-sm text-muted-foreground">Screenplay</p>
                <motion.div
               key={screenplay.name}
               className="bg-card mt-0 rounded-lg overflow-hidden shadow-md"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <Image
                 src={`https://image.tmdb.org/t/p/w400/${screenplay.profile_path}`}
                 alt={screenplay.name}
                 width={300}
                 height={450}
                  style={{ objectFit: 'cover', objectPosition: '10% 5%', width: '100%' }}
                  quality={75}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={`https://image.tmdb.org/t/p/w200${screenplay.profile_path}`}
                 className="h-48"
               />
                </motion.div>
             </div>
              )}
                {/* <h4 className="font-semibold">{screenplay ? screenplay.name : 'N/A'}</h4>
                <p className="text-sm text-muted-foreground">Screenplay</p>
                
                <motion.div
                key={screenplay.name}
                className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-2 border-none outline-none shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                  <Image
                    src={`https://image.tmdb.org/t/p/w200${screenplay.profile_path}`}
                    alt={screenplay.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full border-none outline-none"
                    quality={75}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL={`https://image.tmdb.org/t/p/w200${screenplay.profile_path}`}
                  />
                </motion.div>  */}
                
                {/* <motion.div
                key={screenplay.name}
                className="bg-card rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w400/${screenplay.profile_path}`}
                  alt={screenplay.name}
                  loading='lazy'
                  width={200}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                 </motion.div> */}
              {writer && (
               <div className=" md:w-[80%]">
               <h4 className="font-semibold">{writer ? writer.name : 'N/A'}</h4>
               <p className="text-sm text-muted-foreground">Writer</p>
                <motion.div
               key={writer.name}
               className="bg-card mt-0 rounded-lg overflow-hidden shadow-md"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <Image
                 src={`https://image.tmdb.org/t/p/w400/${writer.profile_path}`}
                 alt={writer.name}
                 width={300}
                 height={450}
                  style={{ objectFit: 'cover', objectPosition: '10% 15%', width: '100%' }}
                  quality={75}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={`https://image.tmdb.org/t/p/w200${writer.profile_path}`}
                 className="h-48"
               />
                </motion.div>
             </div>
              )}
            </div>
            {/* GENRES */}
            <div className="mt-8 ">
                <h4 className="font-semibold mb-2">Genres</h4>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre: any) => (
                    <Badge key={genre.id} variant="secondary">{genre.name}</Badge>
                  ))}
                </div>
            {/* STATUS */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold">Status</h4>
                    <p>{movie.status}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Original Language</h4>
                    <p>{movie.original_language.toUpperCase()}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Runtime</h4>
                    <p>{movie.runtime} minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Country</h4>
                    <p>{movie.production_countries.map((company: any) => company.name).join(', ')}</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Top Billed Cast</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {movie.credits.cast.map((actor: any) => (
              <motion.div
                key={actor.name}
                className="bg-card hover:cursor-pointer rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w400/${actor.profile_path}`}
                  alt={actor.name}
                  loading='lazy'
                  width={200}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-2">
                  <h4 className="font-semibold">{actor.name}</h4>
                  <p className="text-sm text-muted-foreground">{actor.character}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
       
      </div>
    </div>
  )
}