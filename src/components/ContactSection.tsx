"use client";
import { cards } from "@/app/lib/cards";
import ContactCard from "./ContactCard";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("contact");
  return (
    <>
      <p className="text-gray-400 w-full text-sm mt-2 font-medium text-center">
        {t("paragraph")}
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-4 mt-4">
        {cards.map((card) => (
          <ContactCard
            key={card.title}
            icon={card.icon}
            title={t(card.title)}
            description={card.description}
            className={card.title === "address" ? "md:col-span-2" : ""}
          />
        ))}
      </ul>
    </>
  );
}
