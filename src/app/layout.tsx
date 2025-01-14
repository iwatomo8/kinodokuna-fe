import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "支援マッチングプラットフォーム",
  description: "支援を必要とする団体と支援できる団体をつなぐプラットフォーム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>
          <Navbar />
          <main>{children}</main>
          <footer className="border-t mt-8">
            <div className="container mx-auto py-4 text-center text-sm text-muted-foreground">
              © 2024 支援マッチングプラットフォーム
            </div>
          </footer>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
