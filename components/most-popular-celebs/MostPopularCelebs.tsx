import React from "react";
import CelebCard from "./CelebCard";
import CelebCarousel from "./CelebCarousel";
import { Celebrity, PopularCelebs } from "@/_types/types";
import { PopularMovieStars } from "@/lib/popular_movie_stars";

function fetchCelebs(): PopularCelebs["results"] {
  // Slice the first 10 celebrities from the results array
  return PopularMovieStars.results.slice(0, 10);
}

export default function MostPopularCelebs() {
  const celebs = fetchCelebs();

  return (
    <section className="py-12 w-full md:max-w-5xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto ">
      <h2 className="text-3xl font-bold text-center mb-8">
        Most Popular Celebrities
      </h2>
      <CelebCarousel celebs={celebs} />
    </section>
  );
}
