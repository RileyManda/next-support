"use client";

import Image from "next/image";
import { Stack } from "@fluentui/react/lib/Stack";
import CaseList from "@/app/components/CaseList";
import { Breadcrumb } from "@fluentui/react/lib/Breadcrumb";

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

const Dashboard = ({ user, pagetype }: Props) => {
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
    <Stack
      horizontalAlign="center"
      verticalAlign="start"
      tokens={{ childrenGap: 12 }}
      styles={{ root: { marginTop: -400 } }}
    >
      <Stack.Item>
        <Breadcrumb items={[{ text: pagetype, key: "page" }]} />
        <Stack styles={{ root: { marginBottom: 12 } }}>{welcome}</Stack>
        {userImage}
        {user && <CaseList initialCases={[]} />}
      </Stack.Item>
    </Stack>
  );
};
export default Dashboard;
