// // src/navigation.ts
// import { createNavigation } from "next-intl/navigation";
// import i18n from "../next-intl.config";
// export const { Link, useRouter, usePathname } = createNavigation({
//   locales: i18n.locales,
//   defaultLocale: i18n.defaultLocale,
//   // keeps TR at "/" and prefixes others (/en, /ar)
//   localePrefix: "as-needed",
// });

import { createNavigation } from "next-intl/navigation";
import { routing } from "./i18n/routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
