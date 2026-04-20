import { Metadata } from "next";
import css from "./page.module.css";
import Button from "@/components/Button/Button";

export const metadata: Metadata = {
  title: "404 - Page not found",
  description: "The page you are looking for does not exist",
  openGraph: {
    title: "Page not found",
    description: "The page you are looking for does not exist",
    url: "https://08-zustand-sage-nine.vercel.app/not-found",
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub app",
      },
    ],
  },
};

export default function NotFound() {
  return (
    <main>
      <div className={css.container}>
        <h1>404 - Page not found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Button href="/" text="Back Home" className={css.btnBackHome} />
      </div>
    </main>
  );
}
