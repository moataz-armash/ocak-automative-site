import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { generatePageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export type ProductMsg = {
  id: string;
  title: string;
  alt: string;
};

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;

  // Use default meta namespace
  return generatePageMetadata(locale, {
    namespace: "productsMeta",
  });
}

export default async function Products() {
  const t = await getTranslations("productsPage");
  const products = t.raw("list") as ProductMsg[];
  return (
    <div className="p-6">
      <Header title="heading" translation="productsPage" />
      <ProductGrid products={products} />
    </div>
  );
}
