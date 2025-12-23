// Hero slider images - 4 images from each folder combined into slides
import { StaticImageData } from "next/image";

// Metal door seals - metal_takviyeli_kapi_fitilleri
import metalDoor1 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/metal_takviyeli_kapi_fitilleri/1.jpg";
import metalDoor2 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/metal_takviyeli_kapi_fitilleri/3.jpg";
import metalDoor3 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/metal_takviyeli_kapi_fitilleri/6.jpg";
import metalDoor4 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/metal_takviyeli_kapi_fitilleri/7.jpg";

// Bagaj fitilleri - bagaj_fitilleri
import bagaj1 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/bagaj_fitilleri/1.jpg";
import bagaj2 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/bagaj_fitilleri/2.jpg";
import bagaj3 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/bagaj_fitilleri/4.jpg";
import bagaj4 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/bagaj_fitilleri/5.jpg";

// Hoses - benzin_mazot_ve_have_hortumları
import hoses1 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/benzin_mazot_ve_have_hortumları/2222.jpg";
import hoses2 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/benzin_mazot_ve_have_hortumları/24.jpg";
import hoses3 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/benzin_mazot_ve_have_hortumları/27.jpg";
import hoses4 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/benzin_mazot_ve_have_hortumları/28.jpg";

// Glass seals - cam_lastik_fittiller
import glass1 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/cam_lastik_fittiller/222.jpg";
import glass2 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/cam_lastik_fittiller/25.jpg";
import glass3 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/cam_lastik_fittiller/32.jpg";
import glass4 from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/cam_lastik_fittiller/34.jpg";

export type SlideImages = [StaticImageData, StaticImageData, StaticImageData, StaticImageData];

export const heroSliderSlides: SlideImages[] = [
  [metalDoor1, metalDoor2, metalDoor3, metalDoor4], // Slide 1: Metal door seals
  [bagaj1, bagaj2, bagaj3, bagaj4], // Slide 2: Bagaj fitilleri
  [hoses1, hoses2, hoses3, hoses4], // Slide 3: Hoses
  [glass1, glass2, glass3, glass4], // Slide 4: Glass seals
];

