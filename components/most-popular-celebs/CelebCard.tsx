import { Celebrity, PopularCelebs } from "@/_types/types";
import CelebCarousel from "./CelebCarousel";
import { PopularMovieStars } from "@/lib/popular_movie_stars";

// async function fetchCelebs(): Promise<Celebrity[]> {
//   const response = await fetch(PopularCelebs);
//   return response.results.slice(0, 10).map((celeb) => ({
//     id: celeb.id,
//     name: celeb.name,
//     profile_path: celeb.profile_path,
//     popularity: celeb.popularity,
//   }));
// }

function fetchCelebs(): PopularCelebs["results"] {
  // Slice the first 10 celebrities from the results array
  return PopularMovieStars.results.slice(0, 10);
}

export default function PopularCelebrities() {
  const celebs = fetchCelebs();

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Most Popular Celebrities
      </h2>
      <CelebCarousel celebs={celebs} />
    </section>
  );
}
