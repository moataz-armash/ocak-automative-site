"use client";
import { cards } from "@/app/lib/cards";
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* <h1 className="text-2xl font-bold mb-4">İletişim</h1> */}
      <Header title="get-in-touch" translation="contact" />
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
      <ContactForm />
    </div>
  );
}
