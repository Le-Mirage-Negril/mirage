import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import TransparentHoverMenu from "@/components/layout/TransparentHoverMenu";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

emailjs.init({
  publicKey: process.env.EMAILJS_PUBLIC_KEY,
});

export const metadata: Metadata = {
  title: "Le Mirage - Negril Jamaica",
  description: "Le Mirage is a luxury boutique resort in Negril Jamaica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={cn("min-h-screen font-sans antialiased", inter.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen ">
            {/* <Header /> */}
            {/* <DrawerNavigation /> */}
            <TransparentHoverMenu />
            <main className="grow mx-auto ">{children}</main>
            <Toaster />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
