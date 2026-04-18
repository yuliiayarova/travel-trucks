"use client";

import CamperList from "@/components/CamperList/CamperList";
import { getCampers } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function CatalogClient() {
  const [page, setPage] = useState(1);

  const { data, error, isError } = useQuery({
    queryKey: ["campers", page],
    queryFn: () => getCampers({ page, perPage: 4 }),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });
  if (isError) throw error;

  const campers = data?.campers ?? [];
  const totalPages = data?.totalPages ?? 0;

  return (
    <div>
      <CamperList campers={campers} />
    </div>
  );
}
