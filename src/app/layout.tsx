import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? 'https://jg-university.vercel.app'
  ),
  title: "JG University | Excellence in Education Since 2001",
  description:
    "Join JG University — NAAC A++ accredited, 98% placement rate, 50+ programmes. Admissions open for 2026-27. Shape your future with us.",
  keywords: [
    "JG University", "NAAC A++ University", "engineering college Greater Noida",
    "MBA college UP", "BCA MCA college", "best university Greater Noida",
    "university admissions 2026", "top placement college India",
  ],
  authors: [{ name: "JG University" }],
  creator: "JG University",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jguniversity.edu.in",
    siteName: "JG University",
    title: "JG University | Empowering Minds, Shaping Futures",
    description:
      "NAAC A++ accredited university with 98% placement rate. Explore 50+ UG & PG programmes. Admissions open 2026-27.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JG University — Excellence in Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JG University | Empowering Minds, Shaping Futures",
    description: "NAAC A++ accredited. 98% placements. 50+ programmes. Apply now for 2026-27.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white dark:bg-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}

