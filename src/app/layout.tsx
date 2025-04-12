import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PrintEase",
  description: "Smart printing for students & shops",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <nav>Navbar</nav>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <footer className="bg-primary text-white text-center py-4">
          © 2025 PrintEase. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
