import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import {Inter} from "next/font/google"

import { ClerkProvider} from "@clerk/nextjs";
import { cn } from "@/lib/utils";

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
    <ClerkProvider>
    <html lang="en" className="h-full">
      <head>
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="Notee" />
<link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={cn(`h-full antialiased overflow-x-hidden` , inter.className)}
      >
        <main>
        {children}
        </main>
        <Footer/> 
      </body>
    </html>
    </ClerkProvider>
  );
}
