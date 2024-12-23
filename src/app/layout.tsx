import type { Metadata } from "next";
import localFont from "next/font/local";

import { Footer } from "@/components";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GoodHabitBadHabit",
  description: "Track your habits and improve your routine!",
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
        <div className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] h-screen overflow-x-hidden">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
