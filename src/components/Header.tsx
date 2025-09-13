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
    <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-primary-btn-hover from-third-bg">
        {t(`${title}`).toUpperCase()}
      </span>{" "}
    </h1>
  );
}
