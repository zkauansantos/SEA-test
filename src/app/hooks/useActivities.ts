import { useQuery } from "@tanstack/react-query";
import { activitiesService } from "../services/activities";

export default function useActivities() {
  const { data, isError, refetch } = useQuery({
    queryKey: ["activities"],
    queryFn: () => activitiesService.getAll(),
  });

  return {
    activities: data ?? [],
    isError,
    refetch,
  };
}
