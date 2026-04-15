import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CHIPI | Crypto Payment Solutions",
  description: "Pay with Crypto. Instantly. Just Scan. CHIPI enables seamless crypto payments through a simple QR-based experience.",
  keywords: ["crypto payments", "QR payments", "crypto to fiat", "digital payments", "blockchain payments"],
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
