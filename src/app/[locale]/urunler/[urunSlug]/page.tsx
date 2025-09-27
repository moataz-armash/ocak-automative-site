"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { CATALOG, CATEGORY_SLUGS } from "@/app/lib/catalog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { use, useState } from "react";
import { ProductImagesSubCategory } from "@/app/lib/productImagesSubCategory";

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

export default function CategoryPage({ params }: Props) {
  const [selectedImage, setSelectedImage] = useState<ProductMsg | null>(null);
  const t = useTranslations("categories");
  const { urunSlug } = use(params);
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
                {ProductImagesSubCategory[urunSlug as string][p.id] ? (
                  <Image
                    src={ProductImagesSubCategory[urunSlug as string][p.id]!}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="aspect-[4/3] bg-gray-50 border-2 border-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-600">
                    <svg
                      className="w-16 h-16 mb-4 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                    </svg>
                  </div>
                )}
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
      {selectedImage &&
        ProductImagesSubCategory[urunSlug][selectedImage.id] && (
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
                  src={ProductImagesSubCategory[urunSlug][selectedImage.id]!}
                  alt={selectedImage.alt}
                  fill
                  className="object-fill"
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
