import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://545plea.xyz"),
  title: "Olashubomi",
  description: "Software engineer",
  creator: "Fashakin Olashubomi",
  category: "portfolio, resume",
  keywords: [
    "Olashubomi",
    "Fashakin Olashubomi",
    "Software engineer",
    "Backend engineer",
    "resume",
    "portfolio",
  ],
  openGraph: {
    title: "Olashubomi Fashakin",
    description: "Software engineer",
    type: "website",
    url: "https://545plea.xyz",
    siteName: "Olashubomi's Portfolio",
    images: ["/images/notion-face.png"],
  },
  twitter: {
    title: "Olashubomi Fashakin",
    description: "Software engineer",
    creator: "Fashakin Olashubomi",
    card: "summary_large_image",
    images: ["/images/notion-face.png"],
    site: "https://545plea.xyz",
  },
  alternates: {
    canonical: "https://545plea.xyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
