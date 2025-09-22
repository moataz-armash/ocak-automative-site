"use client";
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Cards = [
  { icon: Phone, title: "phone", description: "0 212 549 92 96" },
  { icon: Mail, title: "email", description: "info@ocakotomotiv.com.tr" },
  {
    icon: MapPin,
    title: "address",
    description:
      "İkitelli Organize Sanayi Bölgesi Dolapdere Sanayi Sitesi 18 Ada No:32 BAŞAKŞEHİR / İSTANBUL - TÜRKİYE",
  },
];

export default function Contact() {
  const t = useTranslations("contact");
  // const [status, setStatus] = useState<string | null>(null);
  // async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const form = new FormData(e.currentTarget);
  //   const res = await fetch("/api/contact", { method: "POST", body: form });
  //   const data = await res.json();
  //   setStatus(data.ok ? "Mesajınız iletildi" : data.error || "Hata");
  // }
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* <h1 className="text-2xl font-bold mb-4">İletişim</h1> */}
      <Header title="get-in-touch" translation="contact" />
      <p className="text-gray-400 w-full text-sm mt-2 font-medium text-center">
        {t("paragraph")}
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-4 mt-4">
        {Cards.map((card) => (
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
      {status && <p className="mt-3 alert alert-info">{status}</p>}
    </div>
  );
}
