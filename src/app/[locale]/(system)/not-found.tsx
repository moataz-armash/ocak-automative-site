import { Link } from "@/navigation";

export default function NotFound() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold">Sayfa bulunamadı</h1>
      <Link href="/" className="btn btn-primary mt-4">
        Anasayfa
      </Link>
    </div>
  );
}
