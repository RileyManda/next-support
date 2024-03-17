import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Support",
  description: "Next Support is a nextjs full stack application that enables users to signin | signup and create support tickets. The application is built using, Typescript.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navigation />
          <main className="">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
export default RootLayout;
