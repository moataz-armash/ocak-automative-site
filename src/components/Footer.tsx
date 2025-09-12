export default function Footer() {
  return (
    <footer className="footer footer-center p-6 bg-base-200 mt-12">
      <aside>
        <p>
          © {new Date().getFullYear()} Ocak Otomotiv San. Ve Tic. Ltd.Şti. • Tüm
          hakları saklıdır.
        </p>
        <div className="text-sm opacity-70">
          BAŞAKŞEHİR / İSTANBUL - TÜRKİYE • 0 212 549 92 96 •
          info@ocakotomotiv.com.tr
        </div>
      </aside>
    </footer>
  );
}
