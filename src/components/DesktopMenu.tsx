"use client";
import { menuItems } from "@/app/lib/menuItems";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function DesktopMenu() {
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
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 z-20">
        {menuItems.map((item) =>
          item.productsChildren ? (
            <li
              key={item.title}
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setOpen(!open)}>
              <Link href={item.path} className="hover:text-primary text-base">
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
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-primary text-base">
                        {t(`productsChildren.${child.title}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={item.title}>
              <Link href={item.path} className="hover:text-primary text-base">
                {t(item.title)}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
