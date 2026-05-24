"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/navigation";
import { menuItems } from "@/app/lib/menuItems";
import { useTranslations } from "next-intl";

export default function MobileMenu() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative lg:hidden">
      <button
        className="btn btn-ghost"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu">
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
      </button>

      {isOpen && (
        <ul className="menu menu-sm absolute left-0 top-full bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow">
          {menuItems.map((item) =>
            item.productsChildren ? (
              <li key={item.title}>
                <details>
                  <summary className="hover:bg-base-100 hover:text-primary">
                    <Link href={item.path} onClick={() => setIsOpen(false)}>
                      {t(item.title)}
                    </Link>
                  </summary>
                  <ul className="p-2">
                    {item.productsChildren.map((child) => (
                      <li key={child.title}>
                        <Link
                          href={child.path as any}
                          className="hover:text-primary-btn"
                          onClick={() => setIsOpen(false)}>
                          {t(`productsChildren.${child.title}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={item.title}>
                <Link
                  href={item.path}
                  className="hover:text-primary hover:bg-base-100"
                  onClick={() => setIsOpen(false)}>
                  {t(item.title)}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}
