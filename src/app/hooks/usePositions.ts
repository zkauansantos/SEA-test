import { useQuery } from "@tanstack/react-query";
import { positionsService } from "../services/positions";

export default function usePositions() {
  const { data, isError, refetch } = useQuery({
    queryKey: ["positions"],
    queryFn: () => positionsService.getAll(),
  });

  return {
    positions: data ?? [],
    isError,
    refetch,
  };
}
