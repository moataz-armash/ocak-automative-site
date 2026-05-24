import { Link } from "@/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

import ThemeSwitch from "./ThemeSwitch";
import LogoTheme from "./LogoTheme";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default async function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-16">
      {/* Left: Logo + Mobile Menu */}
      <div className="navbar-start">
        <MobileMenu />

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
