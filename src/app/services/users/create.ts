import { api } from "../api";

export interface CreateUserParams {
  name?: string;
  cpf?: string;
  rg?: string;
  genre?: string;
  dateOfBirth?: string | Date;
  empPosition?: string;
  usesEPI?: boolean;
  activity?: string;
  EPIS?: Array<{
    EPI?: string;
    activity?: string;
    numberCA?: string;
  }>;
  numberCA?: string;
  isActive?: boolean;
}

export async function create(body: CreateUserParams) {
  const { data } = await api.post(
    "/users",
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
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
}
