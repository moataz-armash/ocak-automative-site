"use client";
import Image from "next/image";
import Link from "next/link";
import { Link as LocaleLink } from "@/navigation";
import logo from "@/public/images/ocak_logo.png";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export default function Footer() {
  const t = useTranslations("footer");
  const { resolvedTheme } = useTheme();

  return (
    <footer className="footer footer-horizontal footer-center p-10 mt-4">
      <aside>
        {resolvedTheme === "light" ? (
          <LocaleLink href="/" className="text-xl">
            <Image
              src={logo}
              alt="Ocak Automotive logo"
              placeholder="blur"
              width={90}
              height={90}
              blurDataURL="data:image/jpeg;base64,..."
            />
          </LocaleLink>
        ) : (
          <h1 className="text-xl text-base-content bg-error-content px-4 py-1 rounded-2xl">
            OCAK OTOMOTİV
          </h1>
        )}
        <p className="font-bold">{t("company")}</p>
        <p>
          Copyright © {new Date().getFullYear()} – {t("copyright")}
        </p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <div className="flex gap-4">
            {/* Facebook link */}
            <Link
              href="https://www.facebook.com/pages/OCAK-OTOMOT%C4%B0V/446271218779453"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="Facebook link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current text-gray-800">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>

            {/* Twitter (X) link */}
            <Link
              href="https://x.com/OCAKOTOMOTV"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
              aria-label="X link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-current text-gray-800"
                viewBox="0 0 50 50">
                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </footer>
  );
}
