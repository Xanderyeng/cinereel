import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// This would typically come from an API call
const movieData = {
  title: "Borderlands",
  tagline: "Chaos loves company.",
  rating: 5.8,
  views: 513,
  duration: "1h 7m",
  overview: "Returning to her home planet, an infamous bounty hunter forms an unexpected alliance with a team of unlikely heroes. Together, they battle monsters and dangerous bandits to protect a young girl who holds the key to unimaginable power.",
  status: "Released",
  releaseDate: "August 7th 2024",
  revenue: 30863794,
  director: "Kristof Pataricza",
  backdropPath: "/masonry-3.webp",
}

export default function MovieDetailPage({ params }: { params: { type: string, id: string } }) {
  return (
    <div>
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src={movieData.backdropPath}
          alt={movieData.title}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">{movieData.title}</h1>
        <p className="text-xl text-muted-foreground mb-4">{movieData.tagline}</p>
        <div className="flex flex-wrap gap-4 mb-6">
          <Badge variant="secondary">Rating: {movieData.rating}</Badge>
          <Badge variant="secondary">Views: {movieData.views}</Badge>
          <Badge variant="secondary">Duration: {movieData.duration}</Badge>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p className="mb-6">{movieData.overview}</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="font-semibold">Status</h3>
            <p>{movieData.status}</p>
          </div>
          <div>
            <h3 className="font-semibold">Release Date</h3>
            <p>{movieData.releaseDate}</p>
          </div>
          <div>
            <h3 className="font-semibold">Revenue</h3>
            <p>${movieData.revenue.toLocaleString()}</p>
          </div>
          <div>
            <h3 className="font-semibold">Director</h3>
            <p>{movieData.director}</p>
          </div>
        </div>
        <Button>Watch Trailer</Button>
      </div>
    </div>
  )
}