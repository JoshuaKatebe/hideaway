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
  title: "HideAway Apartments",
  description: "Only the best apartment services in Zambia",
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
        <header>
          {/* Placeholder for Header component */}
          <nav>{/* Placeholder for Navigation */}</nav>
        </header>
        <main>
          {children}
          {/* Placeholder for Property Listings component */}
          {/* Placeholder for Contact Form component */}
        </main>
        <footer>{/* Placeholder for Footer component */}</footer>
      </body>
    </html>
  );
}
