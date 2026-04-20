"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();

  const isCatalog = pathname === "/catalog";

  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Link className={css.logo} href="/" aria-label="Home">
          <svg aria-hidden="true" width={136} height={16}>
            <use href="/icons/logo.svg" />
          </svg>
        </Link>
        <nav className={css.headerNav} aria-label="Main Navigation">
          <ul className={css.headerList}>
            <li className={css.headerItem}>
              <Link className={css.headerLink} href="/">
                Home
              </Link>
            </li>
            <li className={css.headerItem}>
              <Link
                className={clsx(
                  css.headerLink,
                  isCatalog ? css.activeLink : "",
                )}
                href="/catalog"
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
