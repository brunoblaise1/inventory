import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";



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
    <html lang="en">
      <body
        className={` antialiased`}
      >
     
       <Header/>
        {children}
        <Footer/> 
      </body>
    </html>
  );
}
