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

    // children of urunler
    "/urunler/metal-profiles": {
      en: "/products/metal-profiles",
      ar: "/منتجات/مقاطع-مدعمة-بالمعدن",
      tr: "/urunler/metal-takviyeli-profiller",
    },
    "/urunler/glass-seals": {
      en: "/products/glass-seals",
      ar: "/منتجات/جوانات-وزجاج",
      tr: "/urunler/cam-lastik-ve-fitilleri",
    },
    "/urunler/foam-profiles": {
      en: "/products/foam-profiles",
      ar: "/منتجات/مقاطع-رغوية",
      tr: "/urunler/sungerli-profiller",
    },
    "/urunler/hoses": {
      en: "/products/hoses",
      ar: "/منتجات/خراطيم",
      tr: "/urunler/hortum-cesitleri",
    },
    "/urunler/door-trunk-seals": {
      en: "/products/door-trunk-seals",
      ar: "/منتجات/جوانات-الأبواب-والشنطة",
      tr: "/urunler/kapi-ve-bagaj-fitilleri",
    },
    "/urunler/pvc-tank-belts": {
      en: "/products/pvc-tank-belts",
      ar: "/منتجات/أحزمة-الخزان-و-PVC",
      tr: "/urunler/pvc-profiller-ve-depo-kusak-lastikleri",
    },
    "/urunler/truck-trailer": {
      en: "/products/truck-trailer",
      ar: "/منتجات/مواد-الشاحنات-والمقطورات",
      tr: "/urunler/tir-ve-dorse-malzemeleri",
    },
    "/urunler/pneumatic-fittings": {
      en: "/products/pneumatic-fittings",
      ar: "/منتجات/وصلات-نيوماتيكية",
      tr: "/urunler/pnomatik-rakorlar",
    },
    "/urunler/other": {
      en: "/products/other",
      ar: "/منتجات/أخرى",
      tr: "/urunler/diger-urunler",
    },
  },
});
