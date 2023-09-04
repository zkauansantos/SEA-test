import { useQuery } from "@tanstack/react-query";
import { employeesService } from "../services/employees";

export default function useEmployees() {
  const { data, isError, refetch } = useQuery({
    queryKey: ["employees"],
    queryFn: () => employeesService.getAll(),
  });

  return {
    employees: data ?? [],
    isError,
    refetch,
  };
}
