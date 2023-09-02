import { api } from "../api";

export interface GetAllResponse {
  id: number;
  name: string;
}

export async function getAll() {
  const { data } = await api.get<GetAllResponse[]>("/positions");

  return data;
}
