"use client";

import { useRouter } from "next/navigation";

type NavigationButtonProps = {
  href: string;
  children: React.ReactNode;
};

const NavigationButton = ({ href, children }: NavigationButtonProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      style={{ backgroundColor: "black", color: "white" }}
    >
      {children}
    </button>
  );
};

export default NavigationButton;
