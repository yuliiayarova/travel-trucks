import Button from "@/components/Button/Button";
import FormFilters from "@/components/FormFilters/FormFilters";
import { getCampersFilters } from "@/lib/api";
import css from "./SidebarCatalog.module.css";

export default async function Sidebar() {
  const filtersData = await getCampersFilters();

  return (
    <div>
      <Button className={css.btnFilters} text="Search and Filters" />
      <FormFilters initialData={filtersData} />
    </div>
  );
}
