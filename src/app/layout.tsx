import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import Link from "next/link";

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
        <header className="border-b">
          <nav className="container mx-auto py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              支援マッチング
            </Link>
            <div className="space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/projects">案件一覧</Link>
              </Button>
              <Button variant="outline">ログイン</Button>
              <Button>新規登録</Button>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t mt-8">
          <div className="container mx-auto py-4 text-center text-sm text-muted-foreground">
            © 2024 支援マッチングプラットフォーム
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
