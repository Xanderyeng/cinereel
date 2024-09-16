import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Movie, TVShow } from "@/_types/types"

interface MasonryGridProps {
  items: (Movie | TVShow)[]
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { duration: 0.3, ease: "easeIn" }
  }
}

export default function MasonryGrid({ items }: MasonryGridProps) {
  return (
    <motion.div 
      className="grid grid-cols-1 gap-y-8 md:gap-y-0 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {items.slice(0, 9).map((item, index) => (
        <motion.div key={item.id} variants={cardVariants}>
          <Card key={item.id} className={`w-full ${index % 3 === 1 ? 'sm:translate-y-4' : ''} hover:scale-105 transition-all duration-300 hover:cursor-pointer overflow-hidden`}>
            <CardContent className="p-0 ">
              <div className="relative aspect-[27/40] ">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title || (item as TVShow).name}
                  fill
                  aria-describedby={item.title || (item as TVShow).name}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-white text-lg font-semibold truncate">
                  {item.title || (item as TVShow).name}
                </h3>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}