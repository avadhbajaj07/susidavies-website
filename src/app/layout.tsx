import type { Metadata } from "next";
import { Inter, Cardo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Using Inter for functional text and Cardo for headings (serif) to match a premium feel
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cardo = Cardo({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: {
    template: "%s | Susi Davies",
    default: "Susi Davies | Yoga, Retreats, Coaching & Mentoring",
  },
  description: "Some people only exist. Susi Davies thrives — and teaches others to do the same. 30+ years of experience. One name. One method. Worldwide impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cardo.variable} scroll-smooth`}>
      <body className={`font-sans bg-[#fdfaf5] text-gray-800 antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
