"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Navbar() {
  const t = useTranslations();
  return (
    <div className="navbar bg-base-100 border-b">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Ocak Otomotive
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">{t("nav.home")}</Link>
          </li>
          <li>
            <Link href="/hakkimizda">{t("nav.about")}</Link>
          </li>
          <li>
            <Link href="/urunler">{t("nav.products")}</Link>
          </li>
          <li>
            <Link href="/iletisim">{t("nav.contact")}</Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
