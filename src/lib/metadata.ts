// lib/metadata.ts
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

function invalidLocale(locale: string) {
  return !routing.locales.includes(locale as "tr" | "en" | "ar");
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

    const keywords = await safeGet(tMeta, "keywords");

    return {
      // The template lives here (applies to all child pages)
      title: {
        default: baseTitle, // used when a page doesn't set a title
        template: `%s | ${baseTitle}`, // used when a page sets a title string
      },
      description: baseDesc,
      keywords: keywords
        ? keywords.split(",").map((k: string) => k.trim())
        : undefined,
      openGraph: {
        title: baseTitle,
        description: baseDesc,
        images: ["/og.png"],
        locale,
        type: "website",
        siteName: baseTitle,
      },
      alternates: {
        languages: {
          tr: "https://www.ocakotomotiv.com.tr/",
          en: "https://www.ocakotomotiv.com.tr/en",
          ar: "https://www.ocakotomotiv.com.tr/ar",
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
      const keywords = await safeGet(tMeta, "keywords");

      return {
        title: { absolute: brand }, // bypasses "%s | Brand"
        description: pageDesc,
        keywords: keywords
          ? keywords.split(",").map((k: string) => k.trim())
          : undefined,
        openGraph: {
          title: brand,
          description: pageDesc,
          images: ["/og.png"],
          locale,
          type: "website",
          siteName: brand,
        },
      };
    }

    // OTHERS: return the page title as a string; layout template makes "Page | Brand"
    const keywords = await safeGet(tMeta, "keywords");

    return {
      title: pageTitle,
      description: pageDesc,
      keywords: keywords
        ? keywords.split(",").map((k: string) => k.trim())
        : undefined,
      openGraph: {
        // OG doesn't use the layout template — set full string yourself:
        title: `${pageTitle} | ${brand}`,
        description: pageDesc,
        images: ["/og.png"],
        locale,
        type: "website",
        siteName: brand,
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
    tr: "Ocak Otomotiv Oto Kapı ve Cam fitilleri ikitelli istanbul",
    en: "Ocak Automotive Auto Door and Glass Seals Ikitelli Istanbul",
    ar: "أوجاك للسيارات جوانات الأبواب والزجاج إيكيتيلي إسطنبول",
  } as const;

  const fallbackDescriptions = {
    tr: "Ocak otomotiv Oto kapı ve cam fitilleri, hava ve yakıt hortumları üretimi, üreticisi ikitelli istanbul",
    en: "Ocak automotive Auto door and glass seals, air and fuel hoses manufacturing, manufacturer Ikitelli Istanbul",
    ar: "أوجاك للسيارات جوانات الأبواب والزجاج، تصنيع خراطيم الهواء والوقود، مصنع إيكيتيلي إسطنبول",
  } as const;

  return {
    title:
      fallbackTitles[locale as keyof typeof fallbackTitles] ||
      "Ocak Automotive",
    description:
      fallbackDescriptions[locale as keyof typeof fallbackDescriptions] ||
      "Automotive parts and seals manufacturer",
    openGraph: { images: ["/og.png"] },
  };
}
