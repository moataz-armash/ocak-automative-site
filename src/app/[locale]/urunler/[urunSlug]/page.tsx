// import { CATEGORY_SLUGS } from "@/app/lib/catalog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/metadata";
import ProductsGrid from "@/components/ProductsGrid";

export const dynamicParams = false;

type Props = { params: Promise<{ locale: string; urunSlug: string }> };

const LOCALES = ["tr", "en", "ar"] as const;
const CATEGORY_SLUGS = [
  "metal-profiles",
  "glass-seals",
  "foam-profiles",
  "hoses",
  "door-trunk-seals",
  "pvc-tank-belts",
  "truck-trailer-materials",
  "pneumatic-fittings",
  "other-products",
] as const;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    CATEGORY_SLUGS.map((category) => ({ locale, category }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; urunSlug: string };
}) {
  const { locale, urunSlug } = await params;
  console.log(locale);
  const tCat = await getTranslations({ locale, namespace: "categories.list" });
  const displayName = tCat(`${urunSlug}.title`);
  const description = `${displayName} ürünlerini inceleyin: dayanıklı malzemeler, hassas üretim ve hızlı tedarik.`;

  return generatePageMetadata(locale, {
    // namespace: "category",
    customTitle: displayName, // page title string → layout makes "Title | Brand"
    customDescription: description,
  });
}
type ProductMsg = {
  id: string;
  title: string;
  alt: string;
};

export default async function CategoryPage({ params }: Props) {
  const t = await getTranslations("categories");
  const { urunSlug } = await params;
  const category = t.raw(`list.${urunSlug}.products`) as ProductMsg[];

  if (!category) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-base-content">
        <Link href="/urunler" className="hover:underline">
          {t("heading")}
        </Link>
        <span className="mx-2 text-base-content">/</span>
        <span className="text-error">{t(`list.${urunSlug}.title`)}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">{t(`list.${urunSlug}.title`)}</h1>

      {/* Products grid */}
      <ProductsGrid category={category} urunSlug={urunSlug} />
    </main>
  );
}
