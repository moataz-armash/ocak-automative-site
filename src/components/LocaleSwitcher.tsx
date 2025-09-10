"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  return (
    <div className="ml-2 dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-sm">
        TR/EN/AR
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
        {routing.locales.map((l) => {
          const parts = pathname?.split("/") ?? [];
          if (parts[1] && routing.locales.includes(parts[1] as any))
            parts[1] = l;
          else parts.unshift("", l);
          const href = parts.join("/") || "/" + l;
          return (
            <li key={l}>
              <Link href={href}>{l.toUpperCase()}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
