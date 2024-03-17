import { options } from  "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import SignInForm from "../components/authenticatedsession/SignInForm";

export default async function ServerPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <div>
      <SignInForm user={session?.user} pagetype={"Server"} />
    </div>
  );
}
