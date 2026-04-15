import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CHIPI | Crypto Payment Solutions",
  description: "CHIPI is a fintech platform, not a bank. Services via licensed partners.",
  keywords: ["crypto payments", "QR payments", "crypto to fiat", "digital payments", "blockchain payments"],
  openGraph: {
    title: "CHIPI | Pay with Fiat & Crypto. Instantly.",
    description: "CHIPI is a fintech platform, not a bank. Services via licensed partners.",
    url: "http://chipipay.co",
    siteName: "CHIPI",
    images: [
      {
        url: "http://chipipay.co/og-preview.png",
        width: 1200,
        height: 630,
        alt: "CHIPI - Crypto Payment Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHIPI | Pay with Fiat & Crypto. Instantly.",
    description: "CHIPI is a fintech platform, not a bank. Services via licensed partners.",
    images: ["http://chipipay.co/og-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
