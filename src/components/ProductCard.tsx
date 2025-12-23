"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function ProductCard({
  title,
  description,
  img,
  alt,
  detay,
}: {
  title: string;
  description: string;
  img: StaticImageData;
  alt: string;
  detay: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="card bg-base-100 w-full shadow-lg h-auto">
      <figure className="relative w-full aspect-[4/3] overflow-hidden rounded-t-lg">
        <Image
          src={img}
          alt={alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base-content">{title}</h2>
        <p className="text-base-content">{description}</p>
        <div className="card-actions justify-end">
          <Link
            href="/urunler"
            className="btn hover:bg-primary-btn-hover hover:text-base-content hover:bg-info-content">
            {detay}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
