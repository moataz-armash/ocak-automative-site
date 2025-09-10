import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const routes = ["", "/hakkimizda", "/urunler", "/iletisim"];
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() }));
}
