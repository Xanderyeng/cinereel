import "./globals.css";
import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'

import { inter, nunito, raleway } from "./fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/_components/theme-provider";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import BottomNav from "@/components/navbar/BottomNavbar";

export const metadata: Metadata = {
  title: 'Cinereel - Your Ultimate Movie and TV Show Companion',
  description: 'Discover, explore, and track your favorite movies and TV shows with Cinereel. Get personalized recommendations, read reviews, and stay up-to-date with the latest in entertainment.',
  keywords: 'movies, TV shows, cinema, entertainment, reviews, recommendations',
  openGraph: {
    title: 'Cinereel - Your Ultimate Movie and TV Show Companion',
    description: 'Discover, explore, and track your favorite movies and TV shows with Cinereel.',
    url: 'https://cinereel.vercel.app',
    siteName: 'Cinereel',
    images: [
      {
        url: 'https://cinereel.vercel.app/reel-image-placeholder.webp',
        width: 300,
        height: 300,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="GTM-TJCF55LG" />
        <body
          className={`${inter.className} ${nunito.className} ${raleway.className}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <BottomNav />
            <Footer />
            <SpeedInsights />
          </ThemeProvider>
        </body>
       
      </html>
    </>
  );
}
