import React, { Suspense } from "react";
import Hero from "@/components/hero/Hero";
import MostPopularMovies from "@/components/most-popular-movies/MostPopularMovies";
import Loading from "./loading";
import MostPopularCelebs from "@/components/most-popular-celebs/MostPopularCelebs";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[90dvh] max-w-full mx-auto relative items-center justify-between p-0 outline outline-1 outline-fuchsia-500">
      <Hero />
      <Suspense fallback={<Loading />}>
        <MostPopularMovies />
      </Suspense>
        <MostPopularCelebs />
    </main>
  );
}
