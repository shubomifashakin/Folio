import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
    images: [], //FIXME: ADD IMAGEs
  },
  twitter: {
    title: "Olashubomi Fashakin",
    description: "Software engineer",
    creator: "Fashakin Olashubomi",
    card: "summary",
    images: [], //FIXME: ADD IMAGE
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
