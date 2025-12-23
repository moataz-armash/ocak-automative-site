"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Image from "next/image";
import { useTranslations } from "use-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Link from "next/link";
import { Route } from "next";
import { heroSliderSlides } from "@/app/lib/heroSliderImages";

export default function Hero() {
  const t = useTranslations("hero");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className="bg-base-200">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Stretch rows to same height */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Text column (left on desktop) */}
          <div className="space-y-6 order-2 lg:order-1 lg:col-span-1">
            <h1 className="text-base-content text-4xl font-bold sm:text-5xl text-center md:text-left md:rtl:text-right">
              {t("title")}
            </h1>
            <p className="text-base-content sm:text-lg text-center md:text-left md:rtl:text-right">
              {t("subtitle")}
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                className="btn bg-primary text-primary-content rounded-xl hover:bg-error"
                href={t("cta.href") as Route}>
                {t("cta.label")}
              </Link>
            </div>
          </div>

          {/* Media column (right on desktop) */}
          {mounted && (
            <motion.div className="min-w-0 order-1 lg:order-2 lg:col-span-2">
              <Swiper
                effect="fade"
                slidesPerView={1}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                speed={600}
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                className="mySwiper rounded-lg shadow-lg w-full h-[50vh] sm:h-[60vh] lg:h-[70vh]">
                {heroSliderSlides.map((slideImages, slideIndex) => (
                  <SwiperSlide key={slideIndex}>
                    {/* Grid of 4 images (2x2) */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full rounded-lg overflow-hidden">
                      {slideImages.map((img, imgIndex) => (
                        <div key={imgIndex} className="relative w-full h-full">
                          <Image
                            src={img}
                            alt={`Slide ${slideIndex + 1} - Image ${imgIndex + 1}`}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 25vw, 50vw"
                            priority={slideIndex === 0 && imgIndex === 0}
                            fetchPriority={
                              slideIndex === 0 && imgIndex === 0
                                ? "high"
                                : "auto"
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
