export default function Footer() {
  return (
    <footer className="footer footer-center p-6 bg-base-200 mt-12">
      <aside>
        <p>© {new Date().getFullYear()} Şirket Adı • Tüm hakları saklıdır.</p>
        <div className="text-sm opacity-70">Adres • Telefon • Vergi No</div>
      </aside>
    </footer>
  );
}
