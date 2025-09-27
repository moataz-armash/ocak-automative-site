import { routing } from "@/i18n/routing";
import { MetadataRoute } from "next";
type Route = Array<[string, string | Record<"en" | "ar" | "tr", string>]>;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ocakotomotiv.com.tr";

  const items: MetadataRoute.Sitemap = [];

  const arrPathnames = Object.entries(routing.pathnames);
  for (const [key, val] of arrPathnames as Route) {
    if (val) {
      for (const [subKey, subVal] of Object.entries(val)) {
        items.push({
          url: `${baseUrl}${subKey === "ar" ? "/ar" : subKey === "en" ? "/en" : ""}${subVal}`,
          lastModified: new Date(),
        });
      }
    }
    items.push({
      url: `${baseUrl}${key === "/" ? "" : key}`,
      lastModified: new Date(),
    });
  }
  console.log(items.length);
  return items;
}
