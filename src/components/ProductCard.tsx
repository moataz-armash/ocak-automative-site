"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Image, { StaticImageData } from "next/image";

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
      className="card bg-base-100 w-full shadow-lg">
      <figure>
        <Image src={img} alt={alt} className="w-full h-auto rounded-t-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn hover:bg-primary-btn-hover hover:text-white">
            {detay}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
