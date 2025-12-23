// components/ProductGrid.tsx
"use client";
import { ProductMsg } from "@/app/[locale]/urunler/page";
import { ProductImages } from "@/app/lib/productsImages";
import Image from "next/image";
import Link from "next/link";

import img1 from "@/public/images/res3_2.png";

export default function ProductGrid({ products }: { products: ProductMsg[] }) {
  // Split items into full rows (3 items) and remainder - same logic as ProductsGrid
  const itemsPerRow = 3;
  const fullRowsCount = Math.floor(products.length / itemsPerRow);
  const remainderCount = products.length % itemsPerRow;

  const fullRows = products.slice(0, fullRowsCount * itemsPerRow);
  const remainderItems = products.slice(fullRowsCount * itemsPerRow);

  // Render a single product card
  const renderProductCard = (p: ProductMsg, index: number) => (
    <li
      key={p.id}
      className="transform transition-transform duration-500 hover:scale-105">
      <Link
        href={`/urunler/${p.id}` as any}
        className="group relative block overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group-hover:scale-[1.05] h-full">
        {/* Background Image */}
        <div className="relative aspect-[21/9] w-full">
          <Image
            src={ProductImages[p.id] ? ProductImages[p.id] : img1}
            alt={p.alt}
            className="h-full w-full object-cover transition duration-300"
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            fill
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
  );

  return (
    <section className="mx-auto max-w-7xl px-4 pt-18">
      {/* Full rows (3 items per row) */}
      {fullRows.length > 0 && (
        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {fullRows.map((p, index) => renderProductCard(p, index))}
        </ul>
      )}

      {/* Remainder items - centered using flexbox */}
      {remainderItems.length > 0 && (
        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center gap-6 w-full max-w-full">
            {remainderItems.map((p, index) => {
              const globalIndex = fullRows.length + index;
              // Calculate width based on number of items
              const widthClass =
                remainderItems.length === 1
                  ? "w-full sm:w-1/2 lg:w-1/3 max-w-sm"
                  : "w-full sm:w-1/2 lg:w-[calc(33.333%-1rem)] max-w-sm";

              return (
                <li
                  key={p.id}
                  className={`transform transition-transform duration-500 hover:scale-105 ${widthClass}`}>
                  <Link
                    href={`/urunler/${p.id}` as any}
                    className="group relative block overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition group-hover:scale-[1.05] h-full">
                    {/* Background Image */}
                    <div className="relative aspect-[21/9] w-full">
                      <Image
                        src={ProductImages[p.id] ? ProductImages[p.id] : img1}
                        alt={p.alt}
                        className="h-full w-full object-cover transition duration-300"
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        fill
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
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
