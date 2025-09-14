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

export type ProductMsg = {
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

export default function Page() {
  const t = useTranslations("productsPage");
  const products = t.raw("list") as ProductMsg[];
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Our Products</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-500 hover:scale-105 bg-white">
            {/* Image */}
            <div className="relative aspect-square w-full">
              <Image
                src={ProductImages[p.id]}
                alt={p.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
