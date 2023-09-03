import { api } from "../api";

export interface GetAllResponse {
  id: number;
  name: string;
  cpf: string;
  rg: string;
  genre: string;
  dateOfBirth: string;
  empPosition: string;
  usesEPI: boolean;
  EPIS: Array<{
    EPI: string;
    activity: string;
    numberCA: string;
  }>;
  medicalCertificateFile: string | null;
  isActive: boolean;
}

export async function getAll() {
  const { data } = await api.get<GetAllResponse[]>("/employees");

  return data;
}
