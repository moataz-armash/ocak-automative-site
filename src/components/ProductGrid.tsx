// components/ProductGrid.tsx
"use client";
import { ProductMsg } from "@/app/[locale]/urunler/page";
import { ProductImages } from "@/app/lib/productsImages";
import Image from "next/image";
import Link from "next/link";

import img1 from "@/public/images/res3_2.png";

export default function ProductGrid({ products }: { products: ProductMsg[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-18">
      <ul className="grid gap-6 grid-cols-2 lg:grid-cols-3">
        {products.map((p, index) => (
          <li
            key={p.id}
            className={`transform transition-transform duration-500 hover:scale-105 ${products.length % 2 && products.length - 1 === index && " col-span-2 md:col-auto"}`}>
            <Link
              href={`/urunler/${p.id}` as any}
              className="group relative block overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group-hover:scale-[1.05]">
              {/* Background Image */}
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src={ProductImages[p.id] ? ProductImages[p.id] : img1}
                  alt={p.alt}
                  className="h-full w-full object-right transition duration-300"
                  sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
                />

                {/* Gradient overlay on the left side */}
                <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-gray-900/100 via-gray-700/80 to-transparent" />

                {/* Title inside gradient */}
                <div className="absolute inset-y-0 left-0 rtl:right-0 flex items-center px-4">
                  <h3 className="text-white text-lg md:text-lg font-semibold">
                    {p.title}
                  </h3>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
