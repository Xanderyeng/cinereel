import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "@/app/[type]/[id]/loading";
import Hero from "@/components/hero/Hero";
import MostPopularMovies from "@/components/most-popular-movies/MostPopularMovies";
import MostPopularCelebs from "@/components/most-popular-celebs/MostPopularCelebs";

import getMovies from "@/lib/getMovies";
import getTVShows from "@/lib/getTVShows";

export default async function Home() {
  const movies = await getMovies()
  const tvShows = await getTVShows()

  const DynamicTrendingSection = dynamic(() => import("@/components/TrendingSection"), {
    loading: () => <Loading />,
    suspense: true,
  });
  const DynamicMediaGrid = dynamic(() => import("@/components/media-grid/MediaGrid"), {
    loading: () => <Loading />,
    suspense: true,
  });

  return (
    <main className="flex flex-col min-h-[90dvh] max-w-full mx-auto relative items-center justify-between p-0 overflow-hidden">
      <Suspense fallback={<Loading />}>
      <Hero />
      <MostPopularMovies />
      <MostPopularCelebs />
      </Suspense>
        <Suspense fallback={<Loading />}>
          <DynamicTrendingSection items={movies.map(movie => ({ ...movie, media_type: 'movie', name: movie.title }))} title="Trending Movies" />
          <DynamicTrendingSection items={tvShows.map(show => ({ ...show, media_type: 'tvshow', name: show.name }))} title="Trending TV Shows" />
          <DynamicMediaGrid 
            type="movie"
            movies={movies.map(movie => ({
              ...movie,
              title: movie.title,
              blurDataURL: '' 
            }))} 
            tvShows={tvShows.map(show => ({
              ...show,
              title: show.name,
              blurDataURL: '' 
            }))}
          />
        </Suspense>
    </main>
  );
}
