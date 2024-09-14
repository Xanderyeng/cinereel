import type { Metadata } from "next";
import { Inter, Lato, Raleway, Ubuntu, Zilla_Slab, Nunito } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/_components/theme-provider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"], fallback: ["system-ui", "Arial", "sans-serif"], variable: '--font-inter' });
const lato = Lato({ subsets: ["latin"], weight: ["400"], fallback: ["system-ui", "Arial", "sans-serif"], variable: '--font-lato' });
const raleway = Raleway({ subsets: ["latin"], fallback: ["Verdana", "Geneva", "sans-serif"], variable: '--font-raleway' });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400"], fallback: ["Roboto", "Arial", "sans-serif"], variable: '--font-ubuntu' });
const zilla_slab = Zilla_Slab({ subsets: ["latin"], weight: ["400"], fallback: ["Georgia", "serif"], variable: '--font-zilla_slab' });
const nunito = Nunito({ subsets: ["latin"], weight: ["400"], fallback: ["Segoe UI", "Tahoma", "sans-serif"], variable: '--font-nunito' });

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
       {/* <head /> */}
       <body className={`${inter.className} ${lato.className}  ${ubuntu.className} ${zilla_slab.className} ${nunito.className} ${raleway.className}`}>
         <ThemeProvider
           attribute="class"
           defaultTheme="system"
           enableSystem
           disableTransitionOnChange
         >
          <Navbar />
           {children}
          <Footer />
         </ThemeProvider>
       </body>
     </html>
   </>
  );
}