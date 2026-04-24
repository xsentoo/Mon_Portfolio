import type { Metadata } from "next";
import localFont from "next/font/local";
import { FloatingAvatar } from "@/components/ui/floating-avatar";
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
  title: "Software Developer Portfolio",
  description: "A premium, hand-crafted developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        {children}
        <FloatingAvatar />
      </body>
    </html>
  );
}
