import Image from 'next/image'
// import { Button } from '@/components/ui/button'
import AnimatedHeroContent from './AnimatedHeroContent'

export default function Hero() {
  return (
    <section className="relative h-[70dvh] w-full bg-white dark:bg-gray-950">
      <Image
        src="/hero-banner.webp"
        alt="Movie collage representing ReelFlix's diverse content"
        fill
        style={{objectFit: "cover"}}	
        priority
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
        placeholder="blur"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-75% via-white/30 via-90% to-white to-100% dark:from-transparent dark:from-70% dark:via-gray-950/90 dark:via-95% dark:to-gray-950 dark:to-100%"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8">
        <AnimatedHeroContent />
      </div>
    </section>
  )
}