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
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

// export default getRequestConfig(async ({ locale }) => {
//   // Validate that the incoming `locale` parameter is valid
//   if (!routing.locales.includes(locale as any)) {
//     return {
//       messages: {},
//     };
//   }

//   return {
//     locale,
//     messages: (await import(`../messages/${locale}.json`)).default,
//   };
// });
