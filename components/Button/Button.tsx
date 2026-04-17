import css from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export default function Button({ text, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={clsx(css.btn, className)}>
      {text}
    </button>
  );
}
