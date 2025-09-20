"use client";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

import imgMetal1 from "@/public/images/metal_takviyeli_profiller/1.jpg";
import imgMetal2 from "@/public/images/metal_takviyeli_profiller/2.jpeg";
import imgMetal3 from "@/public/images/metal_takviyeli_profiller/5.jpeg";
import imgMetal4 from "@/public/images/metal_takviyeli_profiller/3.jpeg";
import imgMetal5 from "@/public/images/metal_takviyeli_profiller/4.jpeg";
import imgMetal6 from "@/public/images/metal_takviyeli_profiller/6.jpeg";
import imgMetal7 from "@/public/images/metal_takviyeli_profiller/7.jpeg";
import imgMetal8 from "@/public/images/metal_takviyeli_profiller/8.jpeg";
import imgMetal9 from "@/public/images/metal_takviyeli_profiller/9.jpeg";
import imgMetal10 from "@/public/images/metal_takviyeli_profiller/42.jpg";
import imgMetal11 from "@/public/images/metal_takviyeli_profiller/76.jpg";
import imgMetal12 from "@/public/images/metal_takviyeli_profiller/81.jpg";
import imgMetal13 from "@/public/images/metal_takviyeli_profiller/80.jpg";
import imgMetal14 from "@/public/images/metal_takviyeli_profiller/82.jpg";
import { CATALOG, CATEGORY_SLUGS } from "@/app/lib/catalog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { use, useState } from "react";

export const dynamicParams = false;

type Props = { params: Promise<{ locale: string; urunSlug: string }> };

export function generateStaticParams() {
  return CATEGORY_SLUGS.map((slug) => ({ urunSlug: slug }));
}

export async function generateMetaData({ params }: Props) {
  const { urunSlug } = await params;
  const cat = CATALOG[urunSlug];
  if (!cat) return {};
  return {
    title: `${cat.title} | Ürünler`,
    description: `${cat.title} kategorisindeki ürünler.`,
  };
}
type ProductMsg = {
  id: string;
  title: string;
  alt: string;
};

const ProductImages: Record<string, Record<string, StaticImageData>> = {
  "metal-profiles": {
    "sheet-pass-door-seal": imgMetal1,
    "sheet-trunk-seal": imgMetal2,
    "mercedes-lada-door-seal": imgMetal3,
    "solid-door-seal": imgMetal4,
    "m23-automatic-door-seal": imgMetal5,
    "panel-door-seal-type": imgMetal6,
    "panel-trunk-seal-type": imgMetal7,
    "small-sheet-profile": imgMetal8,
    "wide-sheet-profile": imgMetal9,
    "doblo-door-rubber": imgMetal10,
    "tractor-door-seal": imgMetal11,
    "sheet-profile-varieties": imgMetal12,
    "medium-door-seal": imgMetal13,
    "solid-trunk-seal": imgMetal14,
  },
};

export default function CategoryPage({ params }: Props) {
  const [selectedImage, setSelectedImage] = useState<ProductMsg | null>(null);
  const t = useTranslations("categories");
  const { urunSlug } = use(params);
  const category = t.raw(`list.${urunSlug}.products`) as ProductMsg[];

  if (!category) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-gray-600">
        <Link href="/urunler" className="hover:underline">
          {t("heading")}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{t(`list.${urunSlug}.title`)}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">{t(`list.${urunSlug}.title`)}</h1>

      {/* Products grid */}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {category.map((p, index) => (
          <li
            key={p.id}
            onClick={() => setSelectedImage(p)}
            className="group cursor-pointer"
            style={{ animationDelay: `${index * 80}ms` }}>
            <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={ProductImages[urunSlug as string][p.id]}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Title */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {p.title}
                  </h3>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}>
          <div
            className="relative max-w-4xl max-h-[90vh] w-full transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-all duration-200 hover:bg-white/30 hover:scale-110">
              ✕
            </button>

            {/* Image */}
            <div className="relative w-full h-[80vh] overflow-hidden rounded-xl bg-white shadow-2xl">
              <Image
                src={ProductImages[urunSlug][selectedImage.id]}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
