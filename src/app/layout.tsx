import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RailJet Pvt. Ltd. | Indian Railways Engineering & Component Solutions",
  description:
    "RailJet Pvt. Ltd. is a premier railway engineering, rolling stock, bogie suspension, and coach interior equipment manufacturer for Indian Railways across all zones.",
  keywords: [
    "RailJet",
    "RailJet Pvt Ltd",
    "Indian Railways supplier",
    "bogie suspension",
    "CBC coupler",
    "coach interior panels",
    "railway engineering",
    "RDSO approved vendor",
    "Northern Railways",
    "Western Railways",
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
