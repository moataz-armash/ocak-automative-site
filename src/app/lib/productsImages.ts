import img1 from "../../public/images/res3_2.png";
import img2 from "../../public/images/res4_2.png";
import img3 from "../../public/images/urun1_2.png";
import img4 from "../../public/images/urun2_2.png";
import img5 from "../../public/images/urun4_2.png";
import img6 from "../../public/images/urun5_2.png";
import img7 from "../../public/images/urun_4.jpg";
import img8 from "../../public/images/urun_5.jpg";
import img9 from "../../public/images/other.png";
import { StaticImageData } from "next/image";

export const ProductImages: Record<string, StaticImageData> = {
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
