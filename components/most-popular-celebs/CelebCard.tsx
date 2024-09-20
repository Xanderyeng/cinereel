import CelebCarousel from "./CelebCarousel";

import { PopularCelebs } from "@/_types/types";
import { getPopularCelebs } from "@/lib/getPopularCelebs";

async function fetchCelebs(): Promise<PopularCelebs["results"]> {
  const data = await getPopularCelebs();
  return data.results;
}

export default async function PopularCelebrities() {
  const celebs = await fetchCelebs();

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Most Popular Celebrities
      </h2>
      <CelebCarousel celebs={celebs} />
    </section>
  );
}
