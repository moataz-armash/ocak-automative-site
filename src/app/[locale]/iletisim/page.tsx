import ContactForm from "@/components/ContactForm";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Use default meta namespace
  return generatePageMetadata(locale, {
    namespace: "contactMeta",
  });
}

export default function Contact() {
  // const t = useTranslations("contact");

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* <h1 className="text-2xl font-bold mb-4">İletişim</h1> */}
      <Header title="get-in-touch" translation="contact" />
      <ContactSection />
      <ContactForm />
    </div>
  );
}
