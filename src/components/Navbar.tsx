"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import Image from "next/image";
import logo from "@/public/Images/ocak_logo.png";

const menuItems = [
  { title: "home", path: "/" },
  { title: "about", path: "/hakkimizda" },
  { title: "products", path: "/urunler" },
  { title: "contact", path: "/iletisim" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  return (
    <div className="navbar bg-base-100 shadow-sm px-12 lg:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link href={item.path}>{t(`${item.title}`)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <Image
            src={logo}
            alt="ocak automative logo"
            placeholder="blur"
            width="90"
            height="90"
            blurDataURL="data:image/jpeg;base64,..."
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link href={item.path}>{t(`${item.title}`)}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <LocaleSwitcher />
      </div>
    </div>
  );
}
