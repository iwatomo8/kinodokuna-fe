"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn } from "next-auth/react";

export function LoginForm() {
  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>アカウントにログイン</CardTitle>
        <CardDescription>
          以下のオプションからログインしてください。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleGoogleLogin} className="w-full">
          Googleでログイン
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          ログインすることで、利用規約とプライバシーポリシーに同意したことになります。
        </p>
      </CardFooter>
    </Card>
  );
}
