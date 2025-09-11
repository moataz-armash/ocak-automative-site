"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Image from "next/image";
import araba from "@/public/images/calisma.jpg";
import benzinMazot from "@/public/images/ocak_otomotiv_benzin_mazot_hortumu.jpg";
import kapiVeBagaj from "@/public/images/ocak_otomotiv_kapi_ve_bagaj_fitili.jpg";
import sungerliFitiller from "@/public/images/ocak_otomotiv_sungerli_fitiller.jpg";
import { useTranslations } from "use-intl";

const images = [araba, benzinMazot, kapiVeBagaj, sungerliFitiller];

export default function Hero() {
  const t = useTranslations("hero");
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const id = setInterval(() => {
      carousel.scrollLeft += carousel.offsetWidth;
      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
      }
    }, 4000);

    // Pause on hover/focus (nicer UX; doesn’t hurt SEO)
    const pause = () => clearInterval(id);
    carousel.addEventListener("mouseenter", pause);
    carousel.addEventListener("focusin", pause);

    return () => {
      clearInterval(id);
      carousel.removeEventListener("mouseenter", pause);
      carousel.removeEventListener("focusin", pause);
    };
  }, []);

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className="hero min-h-[50vh] bg-base-200 rounded-2xl">
      <div className="hero bg-base-200 py-16 px-8 md:px-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            className="carousel w-full rounded-lg shadow-lg overflow-hidden"
            ref={carouselRef}>
            {images.map((img, index) => (
              <div className="carousel-item relative w-full" key={index}>
                <Image
                  src={img}
                  alt={t(`carousel.slide${index + 1}Alt`, {
                    number: index + 1,
                  })}
                  // Static import provides width/height to prevent CLS.
                  // Help the browser pick the right size:
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  // LCP optimization for the first (visible) slide only:
                  priority={index === 0}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  // Nice UX; no SEO impact
                  placeholder="blur"
                  className="w-full h-auto object-cover"
                />

                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  {/* Keep anchors if you rely on DaisyUI hash nav; add labels for a11y */}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = carouselRef.current;
                      if (el) el.scrollLeft -= el.offsetWidth;
                    }}
                    className="btn btn-circle"
                    aria-label={t("carousel.prev")}>
                    ❮
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = carouselRef.current;
                      if (el) el.scrollLeft += el.offsetWidth;
                    }}
                    className="btn btn-circle"
                    aria-label={t("carousel.next")}>
                    ❯
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div>
            {/* Use a real, keyword-rich H1 for SEO */}
            <h1 className="text-5xl font-bold">{t("title")}</h1>
            <p className="py-6">{t("subtitle")}</p>
            <a
              className="btn bg-primary-btn text-white rounded-md border-0 hover:bg-primary-btn-hover"
              href={t("cta.href")}>
              {t("cta.label")}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
