"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function ProductCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="card bg-base-100 shadow">
      <figure className="aspect-video bg-base-200" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-sm">Detay</button>
        </div>
      </div>
    </motion.div>
  );
}
