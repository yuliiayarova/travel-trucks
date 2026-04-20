import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelTrucks | Rent your perfect camper",
  description:
    "Find and rent the best campers for your road trip. Wide variety of trucks with all amenities.",

  openGraph: {
    title: "TravelTrucks — Camper Rental Service",
    description: "Chose your camper and start your adventure today!",
    url: "https://your-deployment-url.vercel.app", // Змінити після деплою
    siteName: "TravelTrucks",
    images: [
      {
        url: "/img/bg-img.jpg",
        width: 1200,
        height: 630,
        alt: "TravelTrucks camper catalog",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <TanStackProvider>
          <Header />
          {children}
          <Toaster position="bottom-center" />
        </TanStackProvider>
      </body>
    </html>
  );
}
