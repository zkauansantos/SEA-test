import { useQuery } from "@tanstack/react-query";
import { episService } from "../services/epis";

export default function useEpis() {
  const { data, isError, refetch } = useQuery({
    queryKey: ["epis"],
    queryFn: () => episService.getAll(),
  });

  return {
    epis: data ?? [],
    isError,
    refetch,
  };
}
