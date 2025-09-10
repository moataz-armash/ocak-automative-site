import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en", "ar"],
  defaultLocale: "tr",
  localePrefix: "as-needed",
  pathnames: {
    "/": {
      en: "/home",
      ar: "/الرئيسية",
    },
    "/hakkimizda": {
      en: "/about",
      ar: "/عن-الموقع",
    },
    "/iletisim": {
      en: "/contact",
      ar: "/اتصل-بنا",
    },
    "/urunler": {
      en: "/products",
      ar: "/منتجات",
    },
  },
});
