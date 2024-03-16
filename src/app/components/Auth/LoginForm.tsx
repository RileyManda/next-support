import Image from "next/image";

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

export default function Card({ user, pagetype }: Props) {
  const welcome = user?.name ? <div>Hello {user?.name}!</div> : null;
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
    </div>
  );
}
