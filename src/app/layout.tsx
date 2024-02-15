import type { Metadata } from "next";
import { Montserrat as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/Footer";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans", }
);

export const metadata: Metadata = {
  title: "João Costa - Software Engineer",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen h-full relative bg-background font-sans antialiased   ",
        fontSans.variable,
      )}>
        <main className="relative flex flex-col min-h-screen ">
          <Navbar />
          <div className="flex-grow flex-1">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
