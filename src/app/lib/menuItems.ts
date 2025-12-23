export const menuItems = [
  { title: "home", path: "/" as const },
  { title: "about", path: "/hakkimizda" as const },
  {
    title: "products",
    path: "/urunler" as const,
    productsChildren: [
      { title: "metal-profiles", path: "/urunler/metal-profiles" as const },
      { title: "metal-door-seals", path: "/urunler/metal-door-seals" as const },
      { title: "glass-seals", path: "/urunler/glass-seals" as const },
      { title: "foam-profiles", path: "/urunler/foam-profiles" as const },
      { title: "epdm-seals", path: "/urunler/epdm-seals" as const },
      { title: "hoses", path: "/urunler/hoses" as const },
      { title: "door-trunk-seals", path: "/urunler/door-trunk-seals" as const },
      { title: "pvc-tank-belts", path: "/urunler/pvc-tank-belts" as const },
    ],
  },
  { title: "contact", path: "/iletisim" as const },
];
