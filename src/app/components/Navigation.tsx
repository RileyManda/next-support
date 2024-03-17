"use client";

import * as React from "react";
import { Nav, INavStyles, INavLinkGroup } from "@fluentui/react/lib/Nav";
import Image from "next/image";
import AppLogo from "../../../app-logo.png";
import { Stack } from "@fluentui/react";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Sign In",
        url: "/api/auth/signin",
        key: "signin",
        icon: "Signin",
      },
      {
        name: "Sign Out",
        url: "/api/auth/signout",
        key: "signout",
        icon: "Signout",
      },
    ],
  },
];

export default function Navigation() {
  return (
    <>
      <Stack verticalAlign="center">
        <Image src={AppLogo} alt="Logo" width={50} height={50} />
      </Stack>
      <Stack
        horizontal
        verticalAlign="center"
        tokens={{ childrenGap: 10 }}
        styles={{ root: { marginTop: 30 } }}
      >
        <Stack verticalAlign="center">
          <Nav
            ariaLabel="Nav basic example"
            styles={navStyles}
            groups={navLinkGroups}
          />
        </Stack>
      </Stack>
    </>
  );
}
