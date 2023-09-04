import { useDispatch } from "react-redux";
import { useSelector } from "../../hooks/useSelector";
import useEmployees from "../../hooks/useEmployees";
import { useMemo, useState } from "react";

export default function useEmployeesListController() {
  const { employees, isError } = useEmployees();
  const currentStage = useSelector((state) => state.dashboard.currentStage);
  const [showOnlyActiveEmployees, setShowOnlyActiveEmployees] = useState(false);
  const activeEmployees = employees.filter(
    (employee) => employee.isActive
  ).length;
  const conclusedStage = useSelector((state) => state.dashboard.completedStage);
  const formIsVisible = useSelector((state) => state.dashboard.formVisible);
  const dispatch = useDispatch();

  const employeesToShow = useMemo(() => {
    if (showOnlyActiveEmployees) {
      return employees.filter((employee) => employee.isActive);
    }

    return employees;
  }, [showOnlyActiveEmployees, employees]);

  function clearFilters() {
    setShowOnlyActiveEmployees(false);
  }

  return {
    employeesToShow,
    showOnlyActiveEmployees,
    activeEmployees,
    isError,
    conclusedStage,
    formIsVisible,
    currentStage,
    employees,
    clearFilters,
    setShowOnlyActiveEmployees,
    dispatch,
  };
}
