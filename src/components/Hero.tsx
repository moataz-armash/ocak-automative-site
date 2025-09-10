"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations();
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className="hero min-h-[50vh] bg-base-200 rounded-2xl">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold">{t("hero.title")}</h1>
          <p className="py-4 opacity-80">{t("hero.subtitle")}</p>
          <Link href="/iletisim" className="btn btn-primary">
            {t("cta.contact")}
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
