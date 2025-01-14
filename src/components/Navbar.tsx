"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="border-b">
      <nav className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          支援マッチング
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/projects">案件一覧</Link>
          </Button>
          {session ? (
            <>
              <span className="text-sm font-medium">{session.user?.name}</span>
              <Button
                variant="outline"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                ログアウト
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" asChild>
                <Link href="/login">ログイン</Link>
              </Button>
              <Button asChild>
                <Link href="/register">新規登録</Link>
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
