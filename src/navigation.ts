// src/navigation.ts
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["tr", "en", "ar"] as const;
export const defaultLocale = "tr";

export const pathnames = {
  "/": "/",
  "/hakkimizde": { en: "/about", ar: "/about" },
  "/urunler": { en: "/products", ar: "/products" },
  "/iletisim": { en: "/contact", ar: "/contact" },
} as const;

export const { Link, useRouter, usePathname, useSearchParams } =
  createLocalizedPathnamesNavigation({
    locales,
    defaultLocale,
    localePrefix: "as-needed",
    pathnames,
  });
