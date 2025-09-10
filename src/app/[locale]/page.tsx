import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="container mx-auto p-6 space-y-12">
      <Hero />
      <section className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <ProductCard
            key={i}
            title={`Ürün ${i + 1}`}
            description="Kısa açıklama"
          />
        ))}
      </section>
    </div>
  );
}
