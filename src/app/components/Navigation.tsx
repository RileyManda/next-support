import Image from "next/image";
import NavButtons from "./NavButtons";
import AppLogo from "../../../app-logo.png"


export default function Navigation() {
  return (
    <>
      <NavButtons href="/">
        <Image src={AppLogo} alt="Logo" width={50} height={50} />
      </NavButtons>
      <NavButtons href="/api/auth/signin">Sign In</NavButtons>
      <NavButtons href="/api/auth/signout">Sign Out</NavButtons>
    </>
  );
}
