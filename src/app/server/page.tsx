import { options } from  "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import Dashboard from "../components/authenticatedsession/Dashboard";

const ServerPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <div>
      <Dashboard user={session?.user} pagetype={"Server"} />
    </div>
  );
};
export default ServerPage;
