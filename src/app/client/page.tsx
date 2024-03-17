"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Dashboard from "../components/authenticatedsession/Dashboard";

export default function ClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  return (
    <div>
      <Dashboard user={session?.user} pagetype={"Dashboard"} />
    </div>
  );
}
