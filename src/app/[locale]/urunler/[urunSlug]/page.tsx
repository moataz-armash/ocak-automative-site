"use client";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

import imgTruck1 from "@/public/images/truck/truck1.jpeg";
import imgTruck2 from "@/public/images/truck/truck2.jpeg";
import imgTruck3 from "@/public/images/truck/truck3.jpeg";
import imgTruck4 from "@/public/images/truck/truck4.jpeg";
import imgTruck5 from "@/public/images/truck/truck5.jpeg";
import imgTruck6 from "@/public/images/truck/truck6.jpeg";
import imgTruck7 from "@/public/images/truck/truck7.jpeg";
import imgTruck8 from "@/public/images/truck/truck8.jpeg";
import imgTruck9 from "@/public/images/truck/truck9.jpeg";
import imgTruck10 from "@/public/images/truck/truck10.jpeg";
import imgTruck11 from "@/public/images/truck/truck11.jpeg";
import imgTruck12 from "@/public/images/truck/truck12.jpeg";
import imgTruck13 from "@/public/images/truck/truck13.jpeg";
import imgTruck14 from "@/public/images/truck/truck14.jpeg";
import imgTruck15 from "@/public/images/truck/truck15.jpeg";

import imgPvc1 from "@/public/images/pvc/pvc1.jpeg";
import imgPvc2 from "@/public/images/pvc/pvc2.jpeg";
import imgPvc3 from "@/public/images/pvc/pvc3.jpeg";
import imgPvc4 from "@/public/images/pvc/pvc4.jpeg";
import imgPvc5 from "@/public/images/pvc/pvc5.jpeg";
import imgPvc6 from "@/public/images/pvc/pvc6.jpeg";
import imgPvc7 from "@/public/images/pvc/pvc7.jpeg";
import imgPvc8 from "@/public/images/pvc/pvc8.jpeg";
import imgPvc9 from "@/public/images/pvc/pvc9.jpeg";
import imgPvc10 from "@/public/images/pvc/pvc10.jpeg";
import imgPvc11 from "@/public/images/pvc/pvc11.jpeg";

import imgHoses1 from "@/public/images/hoses_tubes/h1.jpeg";
import imgHoses2 from "@/public/images/hoses_tubes/h2.jpeg";
import imgHoses3 from "@/public/images/hoses_tubes/h3.jpeg";
import imgHoses4 from "@/public/images/hoses_tubes/h4.jpeg";
import imgHoses5 from "@/public/images/hoses_tubes/h5.jpeg";
import imgHoses6 from "@/public/images/hoses_tubes/h6.jpeg";
import imgHoses7 from "@/public/images/hoses_tubes/h7.jpeg";
import imgHoses8 from "@/public/images/hoses_tubes/h8.jpeg";
import imgHoses9 from "@/public/images/hoses_tubes/h9.jpeg";
import imgHoses10 from "@/public/images/hoses_tubes/h10.jpeg";
import imgHoses11 from "@/public/images/hoses_tubes/h11.jpeg";
import imgHoses12 from "@/public/images/hoses_tubes/h12.jpeg";
import imgHoses13 from "@/public/images/hoses_tubes/h13.jpeg";
import imgHoses14 from "@/public/images/hoses_tubes/h14.jpeg";
import imgHoses15 from "@/public/images/hoses_tubes/h15.jpeg";

import imgFoam1 from "@/public/images/foam_profiles/fp1.jpeg";
import imgFoam2 from "@/public/images/foam_profiles/fp2.jpeg";
import imgFoam3 from "@/public/images/foam_profiles/fp3.jpeg";
import imgFoam4 from "@/public/images/foam_profiles/fp4.jpeg";
import imgFoam5 from "@/public/images/foam_profiles/fp5.jpeg";
import imgFoam6 from "@/public/images/foam_profiles/fp6.jpeg";
import imgFoam7 from "@/public/images/foam_profiles/fp7.jpeg";
import imgFoam8 from "@/public/images/foam_profiles/fp8.jpeg";

import imgGlass1 from "@/public/images/glass_seals/g1.jpeg";
import imgGlass2 from "@/public/images/glass_seals/g2.jpeg";
import imgGlass3 from "@/public/images/glass_seals/g3.jpeg";
import imgGlass4 from "@/public/images/glass_seals/g4.jpeg";
import imgGlass5 from "@/public/images/glass_seals/g5.jpeg";
import imgGlass6 from "@/public/images/glass_seals/g6.jpeg";
import imgGlass7 from "@/public/images/glass_seals/g7.jpeg";
import imgGlass8 from "@/public/images/glass_seals/g8.jpeg";
import imgGlass9 from "@/public/images/glass_seals/g9.jpeg";
import imgGlass10 from "@/public/images/glass_seals/g10.jpeg";
import imgGlass11 from "@/public/images/glass_seals/g11.jpeg";
import imgGlass12 from "@/public/images/glass_seals/g12.jpeg";
import imgGlass13 from "@/public/images/glass_seals/g13.jpeg";
import imgGlass14 from "@/public/images/glass_seals/g14.jpeg";
import imgGlass15 from "@/public/images/glass_seals/g15.jpeg";

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

const ProductImages: Record<string, Record<string, StaticImageData | null>> = {
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
  "glass-seals": {
    "glass-rubber-varieties": imgGlass1,
    "velvet-glass-seals": imgGlass2,
    "triangular-glass-seal-flange": imgGlass3,
    "nickel-free-u-glass-seal": imgGlass4,
    "quad-channel-glass-rubber": imgGlass5,
    "black-glass-seal": imgGlass6,
    "flanged-fixed-glass-rubber": imgGlass7,
    "adhesive-glass-rubber": imgGlass8,
    "velvet-glass-seal-type-1": imgGlass9,
    "velvet-glass-seal-type-2": imgGlass10,
    "velvet-glass-edge-seal": imgGlass11,
    "epdm-u-seals": imgGlass12,
    "glossy-glass-seal-flange": imgGlass13,
    "round-flange-varieties": imgGlass14,
    "velvet-glass-seal-type-3": imgGlass15,
  },
  "foam-profiles": {
    "solid-rubber-sponge-1": imgFoam1,
    "solid-rubber-sponge-2": imgFoam2,
    "medium-split-seal": imgFoam3,
    "epdm-sponge-1": imgFoam4,
    "epdm-sponge-2": imgFoam5,
    "epdm-sponge-3": imgFoam6,
    "epdm-sponge-4": imgFoam7,
    "epdm-sponge-tube-seal": imgFoam8,
  },

  hoses: {
    "rubber-inflation-hose-1": imgHoses1,
    "rubber-inflation-hose-2": imgHoses2,
    "rubber-inflation-hose-3": imgHoses3,
    "b-type-similar-hose": imgHoses4,
    "e-type-fuel-hose": imgHoses5,
    "air-oxygen-hose": imgHoses6,
    "thin-transparent-hoses": imgHoses7,
    "oval-transparent-hose": imgHoses8,
    "reinforced-transparent-hoses": imgHoses9,
    "polyurethane-hose": imgHoses10,
    "braided-transparent-hoses": imgHoses11,
    "3-2mm-e-type-hose": imgHoses12,
    "air-hose-pvc": imgHoses13,
    "wire-braided-transparent-hoses": imgHoses14,
    "macaroni-hoses": imgHoses15,
  },
  "door-trunk-seals": {
    "megan-door-seal-kit": null,
    "opel-corsa-door-seal-kit": null,
    "dacia-door-seal-kit": null,
    "laguna-door-seal-kit": null,
    "fiat-linea-door-seal-kit": null,
    "fiat-albea-door-seal-kit": null,
    "opel-vectra-door-seal-kit": null,
    "volkswagen-caddy-door-seal-kit": null,
    "ford-connect-door-seal-kit": null,
    "renault-kangoo-door-seal-kit": null,
    "ford-transit-door-seal-kit": null,
    "ford-cargo-door-seal-kit": null,
  },
  "pvc-tank-belts": {
    "tank-belt-seal": imgPvc1,
    "ym-mudguard-seal": imgPvc2,
    "mudguard-seal": imgPvc3,
    "special-mudguard-seal": imgPvc4,
    "special-pvc-profiles": imgPvc5,
    "triangular-glass-seal-flange": imgPvc6,
    "round-flange-varieties": imgPvc7,
    "oval-transparent-hose": imgPvc8,
    "butterfly-seal": imgPvc9,
    "fire-door-seal": imgPvc10,
    "joinery-interior-door-seal": imgPvc11,
  },
  "truck-trailer-materials": {
    "truck-trailer-hose": imgTruck1,
    "cabin-cleaning-hose": imgTruck2,
    "mudguard-back-rubber": imgTruck3,
    "truck-back-rubber": imgTruck4,
    "trailer-support-bracket": imgTruck5,
    "metal-tank-cap": imgTruck6,
    "customs-seal": imgTruck7,
    "led-marker-lamp": imgTruck8,
    "plastic-tank-cap": imgTruck9,
    "blue-led-marker-lamp": imgTruck10,
    "led-strip-light": imgTruck11,
    "led-emblems": imgTruck12,
    "trailer-support-bracket-set": imgTruck13,
    "tire-rubber": imgTruck14,
    "trailer-middle-cover-seal": imgTruck15,
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
                {ProductImages[urunSlug as string][p.id] ? (
                  <Image
                    src={ProductImages[urunSlug as string][p.id]!}
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
