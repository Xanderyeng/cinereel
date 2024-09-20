'use client'
import Link from "next/link"
import { motion } from "framer-motion"
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa"
import ByLine from "./ByLine"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">Cinereel</Link>
            <p className="text-sm mt-2">Your ultimate movie and TV show companion</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4">
            <Link href="/movies" className="hover:text-primary transition-colors">Movies</Link>
            <Link href="/tvshows" className="hover:text-primary transition-colors">TV Shows</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© {currentYear} Cinereel. All rights reserved.</p>
          <ByLine>Alexander Chepkiyeng</ByLine>
          <div className="flex align-middle gap-4">
            <motion.a
              href="https://github.com/xanderyeng/nextflix"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="mr-2" />
              View Source
            </motion.a>
            <a href="mailto:alexander.chepkiyeng@spaceai.io" className="hover:text-primary transition-colors">
              <FaEnvelope size={24} />
            </a>
            <a href="https://www.linkedin.com/in/alexander-chepkiyeng/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}