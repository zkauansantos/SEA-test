import { api } from "../api";

export interface GetAllResponse {
  id: number;
  nome: string;
  cpf: string;
  rg: string;
  genre: string;
  dateOfBirth: string;
  empPosition: string;
  usesEPI: boolean;
  activity: string;
  EPI: string;
  numberCA: string;
  isActive: boolean;
}

export async function getAll() {
  const { data } = await api.get<GetAllResponse[]>("/users");

  return data;
}
