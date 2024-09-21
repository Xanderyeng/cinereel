'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Film, Tv } from 'lucide-react'

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed z-50 bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="flex justify-around items-center h-16">
        <Link href="/" className={`flex flex-col items-center ${pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
          <Home size={24} className="hover:dark:text-violet-500/90 hover:text-zinc-800" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/movies" className={`flex flex-col items-center ${pathname.startsWith('/movie') ? 'text-primary' : 'text-muted-foreground'}`}>
          <Film size={24} className="hover:dark:text-violet-500/90 hover:text-zinc-800" />
          <span className="text-xs mt-1">Movies</span>
        </Link>
        <Link href="/tvshows" className={`flex flex-col items-center ${pathname.startsWith('/tvshows') ? 'text-primary' : 'text-muted-foreground'}`}>
          <Tv size={24} className="hover:dark:text-violet-500/90 hover:text-zinc-800" />
          <span className="text-xs mt-1">TV Shows</span>
        </Link>
      </div>
    </nav>
  )
}