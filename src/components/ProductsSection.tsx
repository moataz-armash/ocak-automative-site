import ProductCard from "./ProductCard";

export default function ProductsSection() {
  return (
    <section className="grid p-4 md:grid-cols-4 gap-6 px-6 lg:px-16">
      {products.slice(0, 4).map((p) => (
        <ProductCard
          key={p.id}
          title={p.title}
          description={p.description}
          img={productImagesHome[p.id]}
          alt={p.alt}
          detay={t("detail")}
        />
      ))}
    </section>
  );
}
