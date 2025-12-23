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
      ar: "/من-نحن",
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
    "/urunler/metal-door-seals": {
      en: "/products/metal-door-seals",
      ar: "/منتجات/جوانات-الأبواب-المدعمة-بالمعدن",
      tr: "/urunler/metal-takviyeli-kapi-fitilleri",
    },
    "/urunler/epdm-seals": {
      en: "/products/epdm-seals",
      ar: "/منتجات/جوانات-EPDM",
      tr: "/urunler/epdm-fitilleri",
    },
    "/urunler/pvc-tank-belts": {
      en: "/products/pvc-tank-belts",
      ar: "/منتجات/أحزمة-الخزان-و-PVC",
      tr: "/urunler/pvc-profiller-ve-depo-kusak-lastikleri",
    },
  },
});
