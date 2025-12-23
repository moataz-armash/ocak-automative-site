import { Link } from "@/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

import ThemeSwitch from "./ThemeSwitch";
import { menuItems } from "@/app/lib/menuItems";
import { getTranslations } from "next-intl/server";
import LogoTheme from "./LogoTheme";
import DesktopMenu from "./DesktopMenu";

export default async function Navbar() {
  const t = await getTranslations("nav");

  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-16">
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
                    <summary className="hover:bg-base-100 hover:text-primary">
                      <Link href={item.path}>{t(item.title)}</Link>
                    </summary>
                    <ul className="p-2">
                      {item.productsChildren.map((child) => (
                        <li key={child.title}>
                          <Link
                            href={child.path as any}
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
                  <Link
                    href={item.path}
                    className="hover:text-primary hover:bg-base-100">
                    {t(item.title)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="text-xl">
          <LogoTheme />
        </Link>
      </div>

      {/* Center: Desktop Menu */}
      <DesktopMenu />

      {/* Right: Locale Switcher */}
      <div className="flex navbar-end gap-2">
        <ThemeSwitch />
        <LocaleSwitcher />
      </div>
    </div>
  );
}
