import Link from "next/link";
import css from "./BurgerMenu.module.css";
import { IoIosClose } from "react-icons/io";
import clsx from "clsx";

interface BurgerMenuProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function BurgerMenu({ onClose, isOpen }: BurgerMenuProps) {
  return (
    <div className={clsx(css.mobileMenu, isOpen && css.isOpen)}>
      <div className={css.container}>
        <button className={css.btnClose} type="button" onClick={onClose}>
          <IoIosClose className={css.closeIcon} />
        </button>
        <Link className={css.logo} href="/" aria-label="Home" onClick={onClose}>
          <svg aria-hidden="true" width={136} height={16}>
            <use href="/icons/logo.svg" />
          </svg>
        </Link>
        <nav className={css.menuNav} aria-label="Main Navigation">
          <ul className={css.menuList}>
            <li className={css.menuItem}>
              <Link className={css.menuLink} href="/" onClick={onClose}>
                Home
              </Link>
            </li>
            <li className={css.menuItem}>
              <Link className={css.menuLink} href="/catalog" onClick={onClose}>
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
