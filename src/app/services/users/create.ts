import { api } from "../api";

export interface CreateUserParams {
  nome?: string;
  cpf?: string;
  rg?: string;
  genre?: string;
  dateOfBirth?: string;
  empPosition?: string;
  usesEPI?: boolean;
  activity?: string;
  EPI?: string;
  numberCA?: string;
  isActive?: boolean;
}

export async function create(body: CreateUserParams) {
  const { data } = await api.post(
    "/users",
    { body },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
}
