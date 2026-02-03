import type { Metadata, Viewport } from "next"
import { Rubik, Suez_One } from "next/font/google"
import "./globals.css"

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "700", "900"],
})

const suezOne = Suez_One({
  subsets: ["latin", "hebrew"],
  variable: "--font-suez-one",
  weight: "400",
})

export const metadata: Metadata = {
  title: "טוסטיקה — טוסטים חמים בעיר",
  description: "בית לטוסטים נדיבים עם נשמה עירונית. לחם טרי, גבינות שנמסות בדיוק, ותוספות שמרימות.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.variable} ${suezOne.variable}`}>{children}</body>
    </html>
  )
}
