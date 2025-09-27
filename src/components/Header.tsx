import { useTranslations } from "next-intl";

export default function Header({
  translation,
  title,
}: {
  translation: string;
  title: string;
}) {
  const t = useTranslations(`${translation}`);
  return (
    <h1 className="text-3xl rtl:text-4xl font-extrabold text-center text-gray-900 dark:text-white md:text-5xl md:rtl:text-6xl lg:text-5xl lg:rtl:text-6xl">
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-primary from-info">
        {t(`${title}`).toUpperCase()}
      </span>{" "}
    </h1>
  );
}
