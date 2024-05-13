import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/Navbar";
import { Cart } from "@/components/Cart";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tienda OnFit",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <div className="fixed bottom-20 z-50 right-2">
          <Cart />

        </div>
          <Toaster />
        {children}
      </body>
    </html>
  );
}
