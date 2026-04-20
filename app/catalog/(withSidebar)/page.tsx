import { getCampers } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CatalogClient from "./Catalog.client";
import { Metadata } from "next";
import { getFilters } from "@/utils/getFilters";

export const metadata: Metadata = {
  title: "Camper Catalog | TravelTrucks",
  description:
    "Browse our extensive catalog of premium campers and trucks for your next adventure.",
  openGraph: {
    title: "Explore Our Campers",
    description: "Find the perfect truck for your road trip.",
    url: "https://travel-trucks-ebon-alpha.vercel.app/catalog",
  },
};

interface CatalogProps {
  searchParams: Promise<Record<string, string | undefined>>;
}
export default async function Catalog({ searchParams }: CatalogProps) {
  const params = await searchParams;
  const filters = getFilters(params);

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam = 1 }) =>
      getCampers({ page: pageParam, perPage: 4, ...filters }),
    initialPageParam: 1,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
}
