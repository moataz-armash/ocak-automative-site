export const menuItems = [
  { title: "home", path: "/" as const },
  { title: "about", path: "/hakkimizda" as const },
  {
    title: "products",
    path: "/urunler" as const,
    productsChildren: [
      { title: "metal-profiles", path: "/urunler/metal-profiles" as const },
      { title: "glass-seals", path: "/urunler/glass-seals" as const },
      { title: "foam-profiles", path: "/urunler/foam-profiles" as const },
      { title: "hoses", path: "/urunler/hoses" as const },
      { title: "door-trunk-seals", path: "/urunler/door-trunk-seals" as const },
      { title: "pvc-tank-belts", path: "/urunler/pvc-tank-belts" as const },
      {
        title: "truck-trailer-materials",
        path: "/urunler/truck-trailer-materials" as const,
      },
      {
        title: "pneumatic-fittings",
        path: "/urunler/pneumatic-fittings" as const,
      },
      { title: "other-products", path: "/urunler/other-products" as const },
    ],
  },
  { title: "contact", path: "/iletisim" as const },
];
