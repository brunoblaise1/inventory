import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import {Inter} from "next/font/google"
import { cn } from "@/utils/cn";

const inter = Inter({ subsets:["latin"]})
export const metadata: Metadata = {
  title: "Inventory",
  description: "Inventory App for small stores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(`relative h-full  fonst-sans antialiased `, inter.className)}
      >
     
 
        {children}
        <Footer/> 
      </body>
    </html>
  );
}
