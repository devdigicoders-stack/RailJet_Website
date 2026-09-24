import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RailJet Co., Ltd. | High-Precision Japanese Industrial & Transit Testing Instruments",
  description:
    "RailJet Co., Ltd. (Tokyo, Japan) is a premier manufacturer of precision Earth Resistance Clamp Testers, Phase Volt-Ampere Meters, and electrical diagnostic instruments (Made in Japan).",
  keywords: [
    "RailJet",
    "RailJet Japan",
    "RailJet Co Ltd",
    "Tokyo Testing Instruments",
    "Earth Resistance Clamp Tester",
    "Phase Volt-Ampere Meter",
    "Made in Japan Testing Equipment",
    "JIS C 1302",
    "IEC 61010-1",
    "Shinkansen Testing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 selection:bg-[#CCE5FF] selection:text-[#001D32]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
