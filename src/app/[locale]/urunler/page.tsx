export default function Products() {
  const items = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    name: `Ürün ${i + 1}`,
  }));
  return (
    <div className="container mx-auto p-6 grid md:grid-cols-3 gap-6">
      {items.map((i) => (
        <div key={i.id} className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="card-title">{i.name}</h3>
            <p>Kısa açıklama</p>
          </div>
        </div>
      ))}
    </div>
  );
}
