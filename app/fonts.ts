import {
  Inter,
  Lato,
  Raleway,
  Nunito,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  variable: "--font-inter",
});
export const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["system-ui", "Arial", "sans-serif"],
  variable: "--font-lato",
});
export const raleway = Raleway({
  subsets: ["latin"],
  fallback: ["Verdana", "Geneva", "sans-serif"],
  variable: "--font-raleway",
});
export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["Segoe UI", "Tahoma", "sans-serif"],
  variable: "--font-nunito",
});
