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

  const productsWithImages = category.filter(
    (p) => ProductImagesSubCategory[urunSlug]?.[p.id]
  );

  const itemsPerRow = 3;
  const fullRowsCount = Math.floor(productsWithImages.length / itemsPerRow);

  const fullRows = productsWithImages.slice(0, fullRowsCount * itemsPerRow);
  const remainderItems = productsWithImages.slice(fullRowsCount * itemsPerRow);

  const renderCard = (p: ProductMsg, index: number, extraClass = "") => (
    <li
      key={p.id}
      onClick={() => setSelectedImage(p)}
      className={`group cursor-pointer ${extraClass}`}
      style={{ animationDelay: `${index * 80}ms` }}>
      <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
          <Image
            src={ProductImagesSubCategory[urunSlug][p.id]!}
            alt={p.alt}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          />
        </div>
        <div className="px-4 py-3 border-t border-gray-100">
          <h3 className="text-gray-800 font-semibold text-base leading-tight text-center">
            {p.title}
          </h3>
        </div>
      </div>
    </li>
  );

  const remainderWidthClass =
    remainderItems.length === 1
      ? "w-full sm:w-1/2 lg:w-1/3"
      : "w-full sm:w-1/2 lg:w-1/3";

  return (
    <>
      {fullRows.length > 0 && (
        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {fullRows.map((p, index) => renderCard(p, index))}
        </ul>
      )}

      {remainderItems.length > 0 && (
        <ul className="flex flex-wrap justify-center gap-6">
          {remainderItems.map((p, index) =>
            renderCard(p, fullRows.length + index, remainderWidthClass)
          )}
        </ul>
      )}

      {selectedImage && ProductImagesSubCategory[urunSlug][selectedImage.id] && (
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
            <div className="relative w-full h-[80vh] overflow-hidden rounded-xl bg-gray-100 shadow-2xl">
              <Image
                src={ProductImagesSubCategory[urunSlug][selectedImage.id]!}
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
    </>
  );
}
