import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="text-sm text-muted-foreground">© 2025 きのどくなー</div>
        <div className="space-x-4">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            利用規約
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
