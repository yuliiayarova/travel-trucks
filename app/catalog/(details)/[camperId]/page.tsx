import { getCamperById } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CamperDetailsClient from "./CamperDetails.client";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

  try {
    const camper = await getCamperById(id);

    const mainImage = camper.gallery?.[0]?.original || "/img/bg-img.jpg";

    return {
      title: `${camper.name} | TravelTrucks`,
      description:
        camper.description.length > 160
          ? `${camper.description.slice(0, 157)}...`
          : camper.description,

      openGraph: {
        title: camper.name,
        description: camper.description.slice(0, 160),
        url: `https://your-domain.vercel.app/campers/${id}`, //змінити
        siteName: "TravelTrucks",
        type: "website",
        images: [
          {
            url: mainImage,
            width: 1200,
            height: 630,
            alt: camper.name,
          },
        ],
      },
    };
  } catch {
    return {
      title: "Camper Details | TravelTrucks",
    };
  }
}

export default async function CamperDetails({ params }: Props) {
  const { id } = params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["camper", id],
    queryFn: () => getCamperById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetailsClient />
    </HydrationBoundary>
  );
}
