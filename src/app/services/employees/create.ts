import { api } from "../api";

export interface CreateEmployeeParams {
  name: string;
  cpf: string;
  rg: string;
  genre: string;
  dateOfBirth: string | Date;
  empPosition: string;
  usesEPI: boolean;
  EPIS: Array<{
    EPI?: string;
    activity?: string;
    numberCA?: string;
  }>;
  medicalCertificateFile: string | null;
  isActive: boolean;
}

export async function create(body: CreateEmployeeParams) {
  const { data } = await api.post(
    "/employees",
    {
      name: body.name,
      cpf: body.cpf,
      rg: body.rg,
      genre: body.genre,
      dateOfBirth: body.dateOfBirth,
      empPosition: body.empPosition,
      usesEPI: body.usesEPI,
      EPIS: body.EPIS,
      isActive: body.isActive,
      medicalCertificateFile: body.medicalCertificateFile,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
}
