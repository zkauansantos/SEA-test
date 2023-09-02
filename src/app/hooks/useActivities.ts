import { useQuery } from "@tanstack/react-query";
import { activitiesService } from "../services/activities";

export default function useActivities() {
  const { data, isFetching, isInitialLoading, refetch } = useQuery({
    queryKey: ["activities"],
    queryFn: () => activitiesService.getAll(),
  });

  return {
    activities: data ?? [],
    isLoading: isFetching,
    isInitialLoading,
    refetch,
  };
}
