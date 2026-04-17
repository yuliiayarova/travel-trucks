import css from "./Button.module.css";
import clsx from "clsx";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  href?: string;
}

export default function Button({
  text,
  className,
  href,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={clsx(css.btn, className)}>
        {text}
      </Link>
    );
  }

  return (
    <button {...props} className={clsx(css.btn, className)}>
      {text}
    </button>
  );
}
