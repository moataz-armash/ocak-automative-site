"use client";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import imgDoorTrunk from "@/public/images/RES_1.jpg";
import imgFoam from "@/public/images/RES_2.jpg";
import imgTire from "@/public/images/RES_3.jpg";
import imgFuel from "@/public/images/RES_4.jpg";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
type ProductMsg = {
  id: string;
  title: string;
  description: string;
  alt: string;
  detay: string;
};

const productImages: Record<string, StaticImageData> = {
  "door-trunk-seals": imgDoorTrunk,
  "foam-strips": imgFoam,
  "tire-hoses": imgTire,
  "fuel-hoses": imgFuel,
};

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
        <section className="grid p-4 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              description={p.description}
              img={productImages[p.id]}
              alt={p.alt}
              detay={t("detail")}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
