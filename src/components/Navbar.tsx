"use client";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import Image from "next/image";
import logo from "@/public/Images/ocak_logo.png";
import { ChevronDown } from "lucide-react";
const menuItems = [
  { title: "home", path: "/" },
  { title: "about", path: "/hakkimizda" },
  {
    title: "products",
    path: "/urunler",
    productsChildren: [
      { title: "metal-profiles", path: "/urunler/metal-profiles" },
      { title: "glass-seals", path: "/urunler/glass-seals" },
      { title: "foam-profiles", path: "/urunler/foam-profiles" },
      { title: "hoses", path: "/urunler/hoses" },
      { title: "door-trunk-seals", path: "/urunler/door-trunk-seals" },
      { title: "pvc-tank-belts", path: "/urunler/pvc-tank-belts" },
      {
        title: "truck-trailer-materials",
        path: "/urunler/truck-trailer-materials",
      },
      { title: "pneumatic-fittings", path: "/urunler/pneumatic-fittings" },
      { title: "other", path: "/urunler/other" },
    ],
  },
  { title: "contact", path: "/iletisim" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mouseover", handleClickOutside);
    return () => document.removeEventListener("mouseover", handleClickOutside);
  }, []);

  return (
    <div className="navbar bg-base-100 shadow-sm px-12 lg:px-16">
      {/* Left: Logo + Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile dropdown (kept simple, <details> works fine on mobile) */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow">
            {menuItems.map((item) =>
              item.productsChildren ? (
                <li key={item.title}>
                  <details>
                    <summary>{t(item.title)}</summary>
                    <ul className="p-2">
                      {item.productsChildren.map((child) => (
                        <li key={child.title}>
                          <Link
                            href={child.path}
                            className="hover:text-primary-btn">
                            {t(`productsChildren.${child.title}`)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={item.title}>
                  <Link href={item.path} className="hover:text-primary-btn">
                    {t(item.title)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="text-xl">
          <Image
            src={logo}
            alt="ocak automotive logo"
            placeholder="blur"
            width={90}
            height={90}
            blurDataURL="data:image/jpeg;base64,..."
          />
        </Link>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-20">
          {menuItems.map((item) =>
            item.productsChildren ? (
              <li
                key={item.title}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setOpen(!open)}>
                <Link href={item.path} className="hover:text-primary-btn">
                  {" "}
                  {t(item.title)}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Link>
                {open && (
                  <ul className="absolute left-0 mt-8 bg-base-100 shadow-md rounded-md p-2 w-56">
                    {item.productsChildren.map((child) => (
                      <li key={child.title}>
                        <Link
                          href={child.path}
                          className="block px-4 py-2 hover:bg-gray-100">
                          {t(`productsChildren.${child.title}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.title}>
                <Link href={item.path} className="hover:text-primary-btn">
                  {t(item.title)}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Right: Locale Switcher */}
      <div className="navbar-end">
        <LocaleSwitcher />
      </div>
    </div>
  );
}
