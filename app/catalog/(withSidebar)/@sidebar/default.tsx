import FormFilters from "@/components/FormFilters/FormFilters";
import { getCampersFilters } from "@/lib/api";

export default async function Sidebar() {
  const filtersData = await getCampersFilters();

  return <FormFilters initialData={filtersData} />;
}
