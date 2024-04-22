import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import ModalProvider from "@/providers/modal-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import ToastProvider from "@/providers/toast-provider";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ToastProvider />
          <ModalProvider />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
