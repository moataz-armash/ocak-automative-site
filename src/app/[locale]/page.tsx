import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
// import { useTranslations } from "next-intl";
import { ProductMsg } from "../types/productMsg";
import { productImagesHome } from "../lib/productImagesHome";
import { getTranslations } from "next-intl/server";

import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  // Use default meta namespace
  return generatePageMetadata(locale, {
    namespace: "home",
  });
}

export default async function Home() {
  const t = await getTranslations("products");
  const products = t.raw("list") as ProductMsg[];

  // Swap first and third items (title/description)
  const reorderedProducts = [...products.slice(0, 4)];
  if (reorderedProducts.length >= 3) {
    [reorderedProducts[0], reorderedProducts[2]] = [
      reorderedProducts[2],
      reorderedProducts[0],
    ];
  }

  return (
    <div>
      <Hero />
      <div className="bg-base-100 py-2">
        <h1 className="px-6 font-bold text-3xl py-6 text-center tracking-wider">
          {t("ourProducts")}
        </h1>
        <section className="grid p-4 md:grid-cols-4 gap-6 px-6 lg:px-16">
          {reorderedProducts.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              description={p.description}
              img={productImagesHome[p.id]}
              alt={p.alt}
              detay={t("detail")}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
