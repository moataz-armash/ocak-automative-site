// lib/metadata.ts
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

function invalidLocale(locale: string) {
  return !routing.locales.includes(locale as any);
}

/** Site-wide metadata with title template (Brand) — call this in the [locale] layout */
export async function generateLayoutMetadata(
  locale: string
): Promise<Metadata> {
  if (invalidLocale(locale)) return { title: "Not found" };

  try {
    const tMeta = await getTranslations({ locale, namespace: "meta" });
    const baseTitle = tMeta("title");
    const baseDesc = await safeGet(tMeta, "description");

    return {
      // The template lives here (applies to all child pages)
      title: {
        default: baseTitle, // used when a page doesn't set a title
        template: `%s | ${baseTitle}`, // used when a page sets a title string
      },
      description: baseDesc,
      openGraph: {
        title: baseTitle,
        description: baseDesc,
        images: ["/og.png"],
        locale,
        type: "website",
      },
      alternates: {
        languages: {
          tr: "https://ocakotomative.tr/",
          en: "https://ocakotomative.tr/en",
          ar: "https://ocakotomative.tr/ar",
        },
      },
      robots: { index: true, follow: true },
    };
  } catch (e) {
    return fallbackMeta(locale);
  }
}

/** Per-page metadata — returns the page title string; layout template adds " | Brand". */
export async function generatePageMetadata(
  locale: string,
  {
    namespace = "meta",
    titleKey = "title",
    descriptionKey = "description",
    customTitle,
    customDescription,
  }: {
    namespace?: string;
    titleKey?: string;
    descriptionKey?: string;
    customTitle?: string;
    customDescription?: string;
  } = {}
): Promise<Metadata> {
  if (invalidLocale(locale)) return { title: "Not found" };

  try {
    const t = await getTranslations({ locale, namespace });
    const tMeta = await getTranslations({ locale, namespace: "meta" });

    const pageTitle = customTitle ?? t(titleKey);
    const pageDesc =
      customDescription ??
      (await safeGet(t, descriptionKey)) ??
      (await safeGet(tMeta, "description"));

    const brand = tMeta("title");

    // HOME: force plain brand on <title> (no template)
    if (namespace === "home") {
      return {
        title: { absolute: brand }, // bypasses "%s | Brand"
        description: pageDesc,
        openGraph: {
          title: brand,
          description: pageDesc,
          images: ["/og.png"],
          locale,
          type: "website",
        },
      };
    }

    // OTHERS: return the page title as a string; layout template makes "Page | Brand"
    return {
      title: pageTitle,
      description: pageDesc,
      openGraph: {
        // OG doesn't use the layout template — set full string yourself:
        title: `${pageTitle} | ${brand}`,
        description: pageDesc,
        images: ["/og.png"],
        locale,
        type: "website",
      },
    };
  } catch (e) {
    return fallbackMeta(locale);
  }
}

// ---------- helpers ----------
async function safeGet(
  t: Awaited<ReturnType<typeof getTranslations>>,
  key: string
): Promise<string | undefined> {
  try {
    return t(key);
  } catch {
    return undefined;
  }
}

function fallbackMeta(locale: string): Metadata {
  const fallbackTitles = {
    tr: "Ocak Otomotiv - Otomotiv Parçaları",
    en: "Ocak Automotive - Automotive Parts",
    ar: "أوجاك للسيارات - قطع السيارات",
  } as const;

  return {
    title:
      fallbackTitles[locale as keyof typeof fallbackTitles] ||
      "Ocak Automotive",
    description: "Automotive parts and seals manufacturer",
    openGraph: { images: ["/og.png"] },
  };
}
