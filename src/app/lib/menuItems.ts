export const menuItems = [
  { title: "home", path: "/" },
  { title: "about", path: "/hakkimizda" },
  {
    title: "products",
    path: "/urunler",
    productsChildren: [
      { title: "metal-profiles", path: "/urunler/metal-profiles" },
      { title: "glass-seals", path: "/urunler/glass-seals" },
      { title: "foam-profiles", path: "/urunler/foam-profiles" },
      { title: "hoses", path: "/urunler/hoses" },
      { title: "door-trunk-seals", path: "/urunler/door-trunk-seals" },
      { title: "pvc-tank-belts", path: "/urunler/pvc-tank-belts" },
      {
        title: "truck-trailer-materials",
        path: "/urunler/truck-trailer-materials",
      },
      { title: "pneumatic-fittings", path: "/urunler/pneumatic-fittings" },
      { title: "other-products", path: "/urunler/other-products" },
    ],
  },
  { title: "contact", path: "/iletisim" },
];
