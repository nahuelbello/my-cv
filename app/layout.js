import { Geist, Geist_Mono } from "next/font/google";
import "@/src/styles/globals.css"; // Ajustado para la nueva ruta
import { Analytics } from "@vercel/analytics/react"
import { Instrument_Sans, Plus_Jakarta_Sans } from 'next/font/google'

const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['600'],          // Solo SemiBold → ahorras KB
  variable: '--font-title',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],   // 400 regular, 500 medium para énfasis
  variable: '--font-body',
  display: 'swap',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nahuel Bello",
  description: "My cv as a software developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${instrument.variable} ${jakarta.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}