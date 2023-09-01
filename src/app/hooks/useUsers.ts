import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/users";

export default function useUsers() {
  const { data, isFetching, isInitialLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => usersService.getAll(),
  });

  return {
    users: data ?? [],
    isLoading: isFetching,
    isInitialLoading,
    refetch,
  };
}
