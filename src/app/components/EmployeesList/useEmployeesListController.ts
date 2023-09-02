import { useDispatch } from "react-redux";
import { useSelector } from "../../hooks/useSelector";
import useUsers from "../../hooks/useUsers";
import { useMemo, useState } from "react";

export default function useEmployeesListController() {
  const { users } = useUsers();
  const currentStage = useSelector((state) => state.dashboard.currentStage);
  const [showOnlyActiveUsers, setShowOnlyActiveUsers] = useState(false);
  const activeUsers = users.filter((user) => user.isActive).length;
  const conclusedStage = useSelector((state) => state.dashboard.completedStage);
  const formIsVisible = useSelector((state) => state.dashboard.formVisible);
  const dispatch = useDispatch();

  const usersToShow = useMemo(() => {
    if (showOnlyActiveUsers) {
      return users.filter((user) => user.isActive);
    }

    return users;
  }, [showOnlyActiveUsers, users]);

  function clearFilters() {
    setShowOnlyActiveUsers(false);
  }

  return {
    usersToShow,
    showOnlyActiveUsers,
    activeUsers,
    conclusedStage,
    formIsVisible,
    currentStage,
    users,
    clearFilters,
    setShowOnlyActiveUsers,
    dispatch,
  };
}
