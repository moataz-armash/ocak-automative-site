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
export type SubProduct = { id: string; title: string; image: any; alt: string };
export type Category = { slug: string; title: string; products: SubProduct[] };

export const CATALOG: Record<string, Category> = {
  "metal-profiles": {
    slug: "metal-takviyeli-profiller",
    title: "Metal Takviyeli Profiller",
    products: [
      {
        id: "sheet-pass-door-seal",
        title: "Sheet Pass Door Seal",
        image: imgMetal1,
        alt: "Close-up of a sheet pass door seal",
      },
      {
        id: "sheet-trunk-seal",
        title: "Sheet Trunk Seal",
        image: imgMetal2,
        alt: "Black rubber sheet trunk seal",
      },
      {
        id: "mercedes-lada-door-seal",
        title: "Mercedes-Lada Door Seal",
        image: imgMetal3,
        alt: "Door seal for Mercedes and Lada vehicles",
      },
      {
        id: "solid-door-seal",
        title: "Solid Door Seal",
        image: imgMetal4,
        alt: "Solid type black rubber door seal",
      },
      {
        id: "m23-automatic-door-seal",
        title: "M23 Automatic Door Seal",
        image: imgMetal5,
        alt: "M23 model automatic door seal",
      },
      {
        id: "panel-door-seal-type",
        title: "Panel Seal Door Type",
        image: imgMetal6,
        alt: "Panel type rubber door seal",
      },
      {
        id: "panel-trunk-seal-type",
        title: "Panel Seal Trunk Type",
        image: imgMetal7,
        alt: "Panel type rubber trunk seal",
      },
      {
        id: "small-sheet-profile",
        title: "Small Sheet Profile",
        image: imgMetal8,
        alt: "Small black sheet profile rubber",
      },
      {
        id: "wide-sheet-profile",
        title: "Wide Sheet Profile",
        image: imgMetal9,
        alt: "Wide sheet profile rubber with textile reinforcement",
      },
      {
        id: "doblo-door-rubber",
        title: "Doblo Type Door Rubber",
        image: imgMetal10,
        alt: "Doblo type automotive door rubber seal",
      },
      {
        id: "tractor-door-seal",
        title: "Tractor Door Seal",
        image: imgMetal11,
        alt: "Black rubber tractor door seal",
      },
      {
        id: "sheet-profile-varieties",
        title: "Sheet Profile Varieties",
        image: imgMetal12,
        alt: "Different types of sheet rubber profiles",
      },
      {
        id: "medium-door-seal",
        title: "Medium Size Door Seal",
        image: imgMetal13,
        alt: "Medium-sized black rubber door seal",
      },
      {
        id: "solid-trunk-seal",
        title: "Solid Trunk Seal",
        image: imgMetal14,
        alt: "Solid type rubber trunk seal",
      },
    ],
  },
};

export const CATEGORY_SLUGS = Object.keys(CATALOG);
