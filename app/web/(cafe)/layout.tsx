import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/cafe/navbar/Navbar";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
        <Navbar />
        <div className="pb-20 pt-28">
        {children}
     </div>
      
    </div>
  );
}
