import { useQuery } from "@tanstack/react-query";
import { positionsService } from "../services/positions";

export default function usePositions() {
  const { data, isFetching, isInitialLoading, refetch } = useQuery({
    queryKey: ["positions"],
    queryFn: () => positionsService.getAll(),
  });

  return {
    positions: data ?? [],
    isLoading: isFetching,
    isInitialLoading,
    refetch,
  };
}
