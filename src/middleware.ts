import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
// import i18n from "../next-intl.config";

// export default createMiddleware({ ...i18n, localePrefix: "as-needed" });
export default createMiddleware(routing);
export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  // matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};
