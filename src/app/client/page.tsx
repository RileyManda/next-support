"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import SignInForm from "../components/Auth/SignInForm";

export default function ClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  return (
    <div>
      <SignInForm user={session?.user} pagetype={"Client"} />
    </div>
  );
}
