"use client";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { useTranslations } from "next-intl";

export type ProductMsg = {
  id: string;
  title: string;
  alt: string;
};

export default function Products() {
  const t = useTranslations("productsPage");
  const products = t.raw("list") as ProductMsg[];
  return (
    <div className="p-6">
      <Header title="heading" translation="productsPage" />
      <ProductGrid products={products} />;
    </div>
  );
}
