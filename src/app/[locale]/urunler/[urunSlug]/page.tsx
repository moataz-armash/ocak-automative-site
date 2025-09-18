"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import img1 from "@/public/images/res3_2.png";
import img2 from "@/public/images/res4_2.png";
import img3 from "@/public/images/urun1_2.png";
import img4 from "@/public/images/urun2_2.png";
import img5 from "@/public/images/urun4_2.png";
import img6 from "@/public/images/urun5_2.png";
import img7 from "@/public/images/urun_4.jpg";
import img8 from "@/public/images/urun_5.jpg";
import img9 from "@/public/images/other.png";
import { CATALOG, CATEGORY_SLUGS } from "@/app/lib/catalog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";

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

const ProductImages: Record<string, StaticImageData> = {
  "metal-profiles": img1,
  "glass-seals": img2,
  "foam-profiles": img3,
  hoses: img4,
  "door-trunk-seals": img5,
  "pvc-tank-belts": img6,
  "truck-trailer": img7,
  "pneumatic-fittings": img8,
  other: img9,
};

export default function CategoryPage({ params }: Props) {
  const { urunSlug } = use(params);
  const category = CATALOG[urunSlug];
  if (!category) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-gray-600">
        <Link href="/urunler" className="hover:underline">
          Ürünler
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{category.title}</span>
      </nav>

      <h1 className="text-3xl font-bold mb-6">{category.title}</h1>

      {/* Products grid */}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.products.map((p) => (
          <li
            key={p.id}
            className="transform transition-transform duration-500 hover:scale-105">
            <Link
              href={`/urunler/${category.slug}/${p.id}`} // detail page route
              className="block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg">
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
