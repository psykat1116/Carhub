import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export const metadata: Metadata = {
  title: "Carhub - The Best Car Buying Service in the World",
  description:
    "Carhub is the best car buying service in the world because we are the only car buying service in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
