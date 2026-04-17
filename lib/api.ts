import {
  Camper,
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
  camper: Camper;
  gallery: CamperGallery[];
}

interface GetCamperReviewsResponse {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

interface CreateBookingRequestBody {
  name: string;
  email: string;
}

interface CreateBookingResponse {
  message: string;
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

export async function getCamperReviews(
  id: Camper["id"],
): Promise<GetCamperReviewsResponse> {
  const { data } = await apiClient.get<GetCamperReviewsResponse>(
    `${ENDPOINT}/${id}/reviews`,
  );
  return data;
}

export async function createBookingRequest(
  id: Camper["id"],
  body: CreateBookingRequestBody,
): Promise<CreateBookingResponse> {
  const { data } = await apiClient.post<CreateBookingResponse>(
    `${ENDPOINT}/${id}/booking-request`,
    body,
  );
  return data;
}
