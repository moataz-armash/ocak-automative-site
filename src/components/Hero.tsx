"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Image from "next/image";
import araba from "@/public/Images/calisma.jpg";
import benzinMazot from "@/public/Images/ocak_otomotiv_benzin_mazot_hortumu.jpg";
import kapiVeBagaj from "@/public/Images/ocak_otomotiv_kapi_ve_bagaj_fitili.jpg";
import sungerliFitiller from "@/public/Images/ocak_otomotiv_sungerli_fitiller.jpg";
import { useTranslations } from "use-intl";

const images = [araba, benzinMazot, kapiVeBagaj, sungerliFitiller];

export default function Hero() {
  const t = useTranslations();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = carouselRef.current;
      if (carousel) {
        // Scroll to next slide
        carousel.scrollLeft += carousel.offsetWidth;
        // If at end, go back to start
        if (
          carousel.scrollLeft + carousel.offsetWidth >=
          carousel.scrollWidth
        ) {
          carousel.scrollLeft = 0;
        }
      }
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className="hero min-h-[50vh] bg-base-200 rounded-2xl">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            className="carousel w-full rounded-lg shadow-lg"
            ref={carouselRef}>
            {images.map((img, index) => (
              <div
                id={`slide${index + 1}`}
                className="carousel-item relative w-full"
                key={index}>
                <Image
                  src={img}
                  className="w-full"
                  alt={`Slide ${index + 1}`}
                  placeholder="blur"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a
                    href={`#slide${index === 0 ? images.length : index}`}
                    className="btn btn-circle">
                    ❮
                  </a>
                  <a
                    href={`#slide${
                      index === images.length - 1 ? 1 : index + 2
                    }`}
                    className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
