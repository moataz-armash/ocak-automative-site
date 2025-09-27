import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
// import { locales } from "@/i18n/locales";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";
import { Toaster } from "react-hot-toast";

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
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
        <body>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main className="min-h-[70vh]">{children}</main>
            <Toaster />
            <Footer />
          </NextIntlClientProvider>
        </body>
      </ThemeProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Ocak Automotive",
            url: "https://ocakotomotiv.com.tr",
            logo: "https://ocakotomotiv.com.tr/images/ocak_logo.png",
            sameAs: [
              "https://www.facebook.com/pages/OCAK-OTOMOT%C4%B0V/446271218779453",
              "https://x.com/OCAKOTOMOTV",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "0 212 549 92 96",
                contactType: "customer service",
                areaServed: "TR",
                availableLanguage: ["Turkish", "English", "Arabic"],
              },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "İkitelli Organize Sanayi Bölgesi Dolapdere Sanayi Sitesi",
              addressLocality: "Istanbul",
              addressCountry: "TR",
              postalCode: "34490",
            },
          }),
        }}
      />
    </html>
  );
}
