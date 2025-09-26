"use client";

import { languageItems } from "@/app/lib/langaugeItems";
import { Link, usePathname } from "@/navigation"; // <-- FROM next-intl helper you created
import Image from "next/image";
import { useMemo } from "react";

export default function LocaleSwitcher() {
  const pathname = usePathname(); // current path (next-intl aware)

  const locales = useMemo(() => languageItems, []);

  return (
    <div className="ml-2 dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-sm text-base-content">
        TR / EN / AR
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36">
        {locales.map((it) => (
          <li key={it.locale}>
            <Link
              href={pathname}
              locale={it.locale}
              className="flex items-center gap-2">
              <Image
                src={it.flag}
                alt={it.alt}
                width={4}
                height={4}
                className="h-4 w-6 object-cover rounded"
              />
              <span className="text-base-content">{it.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
