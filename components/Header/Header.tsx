import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <Link className={css.logo} href="/" aria-label="Home">
        <svg aria-hidden="true" width="136" height="15">
          <use href="/icons/logo.svg" />
        </svg>
      </Link>
      <nav className={css.headerNav}>
        <ul className={css.headerList}>
          <li className={css.headerItem}>
            <Link className={css.headerLink} href="/">
              Home
            </Link>
          </li>
          <li className={css.headerItem}>
            <Link className={css.headerLink} href="/catalog">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
