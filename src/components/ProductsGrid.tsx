"use client";
import { ProductImagesSubCategory } from "@/app/lib/productImagesSubCategory";
import Image from "next/image";
import { useState } from "react";

type ProductMsg = {
  id: string;
  title: string;
  alt: string;
};

export default function ProductsGrid({
  category,
  urunSlug,
}: {
  category: ProductMsg[];
  urunSlug: string;
}) {
  const [selectedImage, setSelectedImage] = useState<ProductMsg | null>(null);

  // Filter out products without images
  const productsWithImages = category.filter(
    (p) => ProductImagesSubCategory[urunSlug as string]?.[p.id]
  );

  // Split items into full rows (3 items) and remainder
  const itemsPerRow = 3;
  const fullRowsCount = Math.floor(productsWithImages.length / itemsPerRow);
  const remainderCount = productsWithImages.length % itemsPerRow;

  const fullRows = productsWithImages.slice(0, fullRowsCount * itemsPerRow);
  const remainderItems = productsWithImages.slice(fullRowsCount * itemsPerRow);

  // Render a single product card
  const renderProductCard = (p: ProductMsg, index: number) => (
    <li
      key={p.id}
      onClick={() => setSelectedImage(p)}
      className="group cursor-pointer h-full"
      style={{ animationDelay: `${index * 80}ms` }}>
      <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
          {ProductImagesSubCategory[urunSlug as string][p.id] ? (
            <Image
              src={ProductImagesSubCategory[urunSlug as string][p.id]!}
              alt={p.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
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
  );

  return (
    <>
      {/* Full rows (3 items per row) */}
      {fullRows.length > 0 && (
        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {fullRows.map((p, index) => renderProductCard(p, index))}
        </ul>
      )}

      {/* Remainder items - centered using flexbox (cleaner approach) */}
      {remainderItems.length > 0 && (
        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center gap-6 w-full max-w-full">
            {remainderItems.map((p, index) => {
              const globalIndex = fullRows.length + index;
              // Calculate width based on number of items
              // 1 item: ~33% (1/3), 2 items: ~48% each (to fit 2 in row)
              const widthClass =
                remainderItems.length === 1
                  ? "w-full sm:w-1/2 lg:w-1/3 max-w-sm"
                  : "w-full sm:w-1/2 lg:w-[calc(33.333%-1rem)] max-w-sm";

              return (
                <li
                  key={p.id}
                  onClick={() => setSelectedImage(p)}
                  className={`group cursor-pointer h-full ${widthClass}`}
                  style={{ animationDelay: `${globalIndex * 80}ms` }}>
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                      {ProductImagesSubCategory[urunSlug as string][p.id] ? (
                        <Image
                          src={
                            ProductImagesSubCategory[urunSlug as string][p.id]!
                          }
                          alt={p.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
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
              );
            })}
          </ul>
        </div>
      )}
      {/* Modal */}
      {selectedImage &&
        ProductImagesSubCategory[urunSlug][selectedImage.id] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity duration-300"
            onClick={() => setSelectedImage(null)}>
            <div
              className="relative max-w-4xl max-h-[90vh] w-full transform transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-all duration-200 hover:bg-white/30 hover:scale-110">
                ✕
              </button>

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
    </>
  );
}
