import Image from "next/image"
import { Card, CardTitle } from "@/components/ui/card"
import { Movie } from '@/_types/types'

export default function MovieCard({ movie }: { movie: Movie & { blurDataURL: string | null }}) {
  return (
    <Card className="h-full w-full overflow-hidden cursor-pointer">
      <div className="relative w-full aspect-[27/40]" > 
        {/* 2:3 aspect ratio */}
        {/* style={{ paddingTop: '100%' }} */}
        <Image
          src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
          alt={movie.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          placeholder={movie.blurDataURL ? "blur" : "empty"}
          blurDataURL={movie.blurDataURL || 'https://image.tmdb.org/t/p/w200/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg'}
        />
      </div>
      {/* <CardTitle className="p-4 text-sm md:text-base lg:text-lg truncate">{movie.title}</CardTitle> */}
    </Card>
  )
}