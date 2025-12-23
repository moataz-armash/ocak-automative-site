// Home page product images from Ocak_Otomotiv_Urun_Fotograflari
import imgDoorTrunk from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/bagaj_fitilleri/1.jpg";
import imgFoam from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/süngerli_fitilleri/10.jpg";
import imgTire from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/benzin_mazot_ve_have_hortumları/2222.jpg";
import imgFuel from "@/public/images/Ocak_Otomotiv_Urun_Fotograflari/benzin_mazot_ve_have_hortumları/27.jpg";
import { StaticImageData } from "next/image";

export const productImagesHome: Record<string, StaticImageData> = {
  "door-trunk-seals": imgDoorTrunk,
  "foam-strips": imgFoam,
  "tire-hoses": imgTire,
  "fuel-hoses": imgFuel,
};
