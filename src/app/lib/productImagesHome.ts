import imgDoorTrunk from "@/public/images/RES_1.jpg";
import imgFoam from "@/public/images/RES_2.jpg";
import imgTire from "@/public/images/RES_3.jpg";
import imgFuel from "@/public/images/RES_4.jpg";
import { StaticImageData } from "next/image";

export const productImagesHome: Record<string, StaticImageData> = {
  "door-trunk-seals": imgDoorTrunk,
  "foam-strips": imgFoam,
  "tire-hoses": imgTire,
  "fuel-hoses": imgFuel,
};
