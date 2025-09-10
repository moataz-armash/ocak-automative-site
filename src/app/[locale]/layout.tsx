import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/locales";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Şirket Adı – Kurumsal",
  description: "Kurumsal web sitesi",
  openGraph: { images: ["/og.png"] },
  alternates: {
    languages: {
      tr: "https://ocakotomative.tr/",
      en: "https://ocakotomative.tr/en",
      ar: "https://ocakotomative.tr/ar",
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  // const messages = await getMessages();
  const messages = (await import(`@/messages/${locale}.json`)).default;

  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={dir} data-theme="corporate">
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
