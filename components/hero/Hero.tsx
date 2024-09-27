import Image from 'next/image'
import { Suspense } from 'react'
import AnimatedHeroContent from './AnimatedHeroContent'
import Loading from '@/app/[type]/[id]/loading'

export default function Hero() {
  return (
    <section className="relative h-[50vh] md:h-[70vh] w-full bg-white dark:bg-gray-950">
      <Image
        src="/hero-banner.webp"
        alt="Movie collage representing Cinereels's diverse content"
        fill
        style={{objectFit: "cover"}}	
        priority
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
        placeholder="blur"
        sizes="(min-width: 1280px) 334px, (min-width: 1080px) 291px, (min-width: 780px) calc(28.93vw - 16px), calc(100vw - 66px)"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-75% via-white/30 via-90% to-white to-100% dark:from-transparent dark:from-70% dark:via-gray-950/90 dark:via-95% dark:to-gray-950 dark:to-100%"></div>
      <Suspense fallback={<Loading />}>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-8">
          <AnimatedHeroContent />
        </div>
      </Suspense>
    </section>
  )
}