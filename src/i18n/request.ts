// import { getRequestConfig } from "next-intl/server";
// export default getRequestConfig(async () => {
//   const locale = "tr";

//   return {
//     locale,
//     messages: (await import(`@/messages/${locale}.json`)).default,
//   };
// });

import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { getRequestConfig } from "next-intl/server";
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  return {
    locale,
  };
});
