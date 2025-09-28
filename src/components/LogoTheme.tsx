"use client";
import { useTheme } from "next-themes";
import logo from "@/public/Images/ocak_logo.png";
import Image from "next/image";
export default function LogoTheme() {
  const { resolvedTheme } = useTheme();
  return (
    <>
      {resolvedTheme === "light" ? (
        <Image
          src={logo}
          alt="ocak automotive logo"
          placeholder="blur"
          width={90}
          height={90}
          blurDataURL="data:image/jpeg;base64,..."
        />
      ) : (
        <h1>OCAK OTOMOTİV</h1>
      )}
    </>
  );
}
