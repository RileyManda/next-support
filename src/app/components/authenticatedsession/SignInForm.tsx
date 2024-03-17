"use client";

import Image from "next/image";
import CaseList from "@/app/components/CaseList";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
  pagetype: string;
};

const SignInForm = ({ user, pagetype }: Props) => {
  const welcome = user?.name ? (
    <div>Hello {user?.name}! Welcome to Next Support</div>
  ) : null;
  const userImage = user?.image ? (
    <Image
      src={user?.image}
      width={200}
      height={200}
      alt={user?.name || ""}
      priority={true}
    />
  ) : null;

  return (
    <div>
      {welcome}
      {userImage}
      <p>{pagetype} Page!</p>
      {user && <CaseList initialCases={[]} />}
    </div>
  );
};
export default SignInForm;
