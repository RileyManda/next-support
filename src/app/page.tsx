import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import SingnInForm from "./components/authenticatedsession/SignInForm";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <SingnInForm user={session?.user} pagetype={"Home"} />
      ) : (
        <h1>Please Login to see your tickets</h1>
      )}
    </>
  );
}
