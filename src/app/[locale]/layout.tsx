import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";
import { Toaster } from "react-hot-toast";
import { getMessages } from "next-intl/server";
import { generateLayoutMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateLayoutMetadata(locale);
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages();
  // const messages = (await import(`@/messages/${locale}.json`)).default;

  const dir = locale === "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main className="min-h-[70vh]">{children}</main>
            <Toaster />
            <Footer />
          </NextIntlClientProvider>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
