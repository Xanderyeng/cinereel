
import CelebCarousel from "./CelebCarousel";
import { PopularCelebs } from "@/_types/types";

export async function fetchCelebs(): Promise<PopularCelebs["results"]> {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
      accept: 'application/json'
    }
  };

  try {
    const response = await fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options)
    if (!response.ok) {
      throw new Error('Failed to fetch popular movies')
    }
    const data = await response.json()
    return data.results.slice(0, 10)
  } catch (error) {
    console.error('Error fetching list of celebrities:', error)
    throw error
  }
}

export default async function MostPopularCelebs() {
  const celebs = await fetchCelebs();

  return (
    <section className="py-12 w-full md:max-w-5xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-8xl 3xl:max-w-9xl mx-auto ">
      <h2 className="text-3xl font-bold text-center mb-8">
        Most Popular Celebrities
      </h2>
      <CelebCarousel celebs={celebs} />
    </section>
  );
}
