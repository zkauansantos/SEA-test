import useUsers from "../../hooks/useUsers";

export default function useEmployeesListController() {
  const { isInitialLoading, isLoading, refetch, users } = useUsers();

  return {
    isInitialLoading,
    isLoading,
    refetch,
    users,
  };
}
