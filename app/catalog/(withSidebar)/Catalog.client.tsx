"use client";

import { useSearchParams } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import Button from "@/components/Button/Button";
import CamperList from "@/components/CamperList/CamperList";
import { getCampers } from "@/lib/api";
import css from "./Catalog.module.css";
import Loader from "@/components/Loader/Loader";

export default function CatalogClient() {
  const searchParams = useSearchParams();

  const filters = {
    location: searchParams.get("location") || "",
    form: searchParams.get("form") || "",
    transmission: searchParams.get("transmission") || "",
    engine: searchParams.get("engine") || "",
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam = 1 }) => {
      return getCampers({
        page: pageParam,
        perPage: 4,
        ...filters,
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {campers.length > 0 && <CamperList campers={campers} />}

      {hasNextPage && (
        <Button
          className={css.btnLoadMore}
          text={isFetchingNextPage ? "Loading..." : "Load More"}
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        />
      )}

      {status === "success" && campers.length === 0 && (
        <p className={css.noResults}>
          Sorry, no campers found for these filters. Try something else, please.
        </p>
      )}
    </div>
  );
}
