import "./globals.css";
import Script from 'next/script';
import type { Metadata } from "next";

import { inter, nunito, raleway } from "./fonts";
import { Analytics } from "@vercel/analytics/react"

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
      {/* <GoogleTagManager gtmId="GTM-TJCF55LG" /> */}
      
      
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
            <Analytics/>
            <SpeedInsights />
          </ThemeProvider>
        </body>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TJCF55LG');
            `,
          }}
        />
      </html>
    </>
  );
}
