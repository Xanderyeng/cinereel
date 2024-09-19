import "./globals.css";
import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'

import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/_components/theme-provider";
import { inter, lato, ubuntu, zilla_slab, nunito, raleway } from "./fonts";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import BottomNav from "@/components/navbar/BottomNavbar";

export const metadata: Metadata = {
  title: "Cinema",
  description: "Created by Alexander Chepkiyeng",
  icons: {
    icon: "/favicon.ico",
  },
};

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
          className={`${inter.className} ${lato.className}  ${ubuntu.className} ${zilla_slab.className} ${nunito.className} ${raleway.className}`}
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
