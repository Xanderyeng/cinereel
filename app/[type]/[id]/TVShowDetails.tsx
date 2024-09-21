import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Star, Calendar, Clock } from 'lucide-react'

interface TVShowDetailsProps {
  tvShow: any;
}

export default function TVShowDetails({ tvShow }: TVShowDetailsProps) {
  

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original${tvShow.backdrop_path}`}
          alt={tvShow.name}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
      </div>
      <div className="container mx-auto px-4 py-8 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Image
              src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
              alt={tvShow.name}
              width={300}
              height={450}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-2">
              {tvShow.name}
              <Badge className="ml-2 bg-primary">{tvShow.status}</Badge>
            </h1>
            <p className="text-muted-foreground mb-4">
              {tvShow.first_air_date.split('-')[0]} • {tvShow.genres.map((g: any) => g.name).join(', ')}
            </p>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-semibold">User Score</span>
              <Button variant="outline" size="icon">
                <Star className="h-4 w-4" />
              </Button>
              <Button variant="default">
                <Play className="h-4 w-4 mr-2" />
                Watch Trailer
              </Button>
            </div>
            <h2 className="text-xl italic mb-4">{tvShow.tagline}</h2>
            <h3 className="text-2xl font-semibold mb-2">Overview</h3>
            <p className="mb-6">{tvShow.overview}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div>
                <h4 className="font-semibold flex items-center"><Calendar className="mr-2" /> First Air Date</h4>
                <p>{tvShow.first_air_date}</p>
              </div>
              <div>
                <h4 className="font-semibold flex items-center"><Clock className="mr-2" /> Episodes</h4>
                <p>{tvShow.number_of_episodes}</p>
              </div>
              <div>
                <h4 className="font-semibold">Seasons</h4>
                <p>{tvShow.number_of_seasons}</p>
              </div>
              <div>
                <h4 className="font-semibold">Language</h4>
                <p>{tvShow.original_language.toUpperCase()}</p>
              </div>
            </div>
          </div>
        </div>
        <Tabs defaultValue="seasons" className="mt-8">
          <TabsList>
            <TabsTrigger value="seasons">Seasons</TabsTrigger>
            <TabsTrigger value="cast">Cast</TabsTrigger>
          </TabsList>
          <TabsContent value="seasons">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {tvShow.seasons.map((season: any) => (
                <Card key={season.id} className="cursor-pointer">
                  <CardContent className="p-4">
                    <Image
                      src={`https://image.tmdb.org/t/p/w200${season.poster_path}`}
                      alt={season.name}
                      width={200}
                      height={300}
                      className="rounded-md mb-2"
                    />
                    <h4 className="font-semibold">{season.name}</h4>
                    <p className="text-sm text-muted-foreground">{season.episode_count} episodes</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="cast">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {tvShow.credits.cast.slice(0, 12).map((actor: any) => (
                <Card key={actor.id}>
                  <CardContent className="p-4">
                    <Image
                      src={actor.profile_path ? `https://image.tmdb.org/t/p/w400/${actor.profile_path}` : '/image_reel_placeholder.webp'}
                      alt={actor.name}
                      width={200}
                      height={300}
                      className="rounded-md mb-2"
                    />
                    <h4 className="font-semibold">{actor.name}</h4>
                    <p className="text-sm text-muted-foreground">{actor.character}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}