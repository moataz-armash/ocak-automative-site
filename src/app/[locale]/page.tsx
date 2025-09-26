"use client";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { useTranslations } from "next-intl";
import { ProductMsg } from "../types/productMsg";
import { productImagesHome } from "../lib/productImagesHome";

export default function Home() {
  const t = useTranslations("products");
  const products = t.raw("list") as ProductMsg[];
  return (
    <div>
      <Hero />
      <div className="bg-secondary-bg py-2">
        <h1 className="px-6 font-bold text-2xl py-6 text-center">
          {t("ourProducts")}
        </h1>
        <section className="grid p-4 md:grid-cols-4 gap-6 px-6 lg:px-16">
          {products.slice(0, 4).map((p) => (
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
