import {
  Camper,
  CamperAmenities,
  CamperEngine,
  CamperForm,
  CamperGallery,
  CamperTransmission,
} from "@/types/camper";
import axios from "axios";

const ENDPOINT = "/campers";

const apiClient = axios.create({
  baseURL: "https://campers-api.goit.study",
});

interface GetCampersParams {
  page?: number;
  perPage?: number;
  location?: string;
  form?: string;
  transmission?: string;
  engine?: string;
}

interface GetCampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

interface GetCampersFiltersResponse {
  forms: CamperForm[];
  transmissions: CamperTransmission[];
  engines: CamperEngine[];
}

interface GetCamperByIdResponse {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: CamperTransmission;
  engine: CamperEngine;
  amenities: CamperAmenities[];
  gallery: CamperGallery[];
  createdAt: string;
  updatedAt: string;
}

export async function getCampers(
  params: GetCampersParams,
): Promise<GetCampersResponse> {
  const { data } = await apiClient.get<GetCampersResponse>(ENDPOINT, {
    params,
  });
  return data;
}

export async function getCampersFilters(): Promise<GetCampersFiltersResponse> {
  const { data } = await apiClient.get<GetCampersFiltersResponse>(
    `${ENDPOINT}/filters`,
  );
  return data;
}

export async function getCamperById(
  id: Camper["id"],
): Promise<GetCamperByIdResponse> {
  const { data } = await apiClient.get<GetCamperByIdResponse>(
    `${ENDPOINT}/${id}`,
  );
  return data;
}
