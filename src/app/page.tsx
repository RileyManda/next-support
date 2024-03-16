import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import LogInForm from "./components/Auth/LoginForm";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <LogInForm user={session?.user} pagetype={"Home"} />
      ) : (
        <h1>Please Login to see your tickets</h1>
      )}
    </>
  );
}
