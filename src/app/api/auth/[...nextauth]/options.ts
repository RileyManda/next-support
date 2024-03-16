import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        if (
          !process.env.USER_ID ||
          !process.env.USER_NAME ||
          !process.env.USER_PASSWORD
        ) {
          throw new Error(
            "Environment variables USER_ID, USER_NAME, and USER_PASSWORD must be set"
          );
        }

        const user = {
          id: process.env.USER_ID,
          name: process.env.USER_NAME,
          password: process.env.USER_PASSWORD,
        };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
