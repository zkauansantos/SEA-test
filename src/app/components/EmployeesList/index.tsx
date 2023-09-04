import { Plus } from "lucide-react";

import { showForm } from "../../redux/dashboard/actions";
import useEmployeesListController from "./useEmployeesListController";

import EmployeeCard from "../EmployeeCard";
import Switch from "../Switch";
import Button from "../Button";

import cn from "../../utils/cn";

export default function EmployeesList() {
  const {
    showOnlyActiveEmployees,
    activeEmployees,
    conclusedStage,
    formIsVisible,
    currentStage,
    employees,
    isError,
    setShowOnlyActiveEmployees,
    dispatch,
    clearFilters,
    employeesToShow,
  } = useEmployeesListController();

  if (formIsVisible || currentStage !== 1) {
    return null;
  }

  return (
    <div className='w-full h-full max-h-[487px] flex flex-col gap-[35px] rounded-[20px] overflow-hidden bg-white shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)]'>
      <header className=' bg-blue-theme w-full pl-5 py-2'>
        <h2 className='text-white text-[28px]'>Funcionário(s)</h2>
      </header>

      <div className='px-4'>
        <Button
          onClick={() => dispatch(showForm())}
          className='mt-0 h-[60px] flex items-center justify-center gap-2 text-blue-theme'
        >
          <Plus />
          <span>Adicionar funcionário</span>
        </Button>

        <div className='w-full flex items-end justify-between mt-5 text-blue-theme text-sm relative'>
          <div className='flex items-center gap-4'>
            <Button
              className={cn(
                "mt-0 w-auto h-[32px] px-10",
                showOnlyActiveEmployees &&
                  "bg-blue-theme text-white hover:bg-blue-theme/40"
              )}
              onClick={() => setShowOnlyActiveEmployees((prev) => !prev)}
            >
              Ver apenas ativos
            </Button>
            <Button
              className='mt-0 w-auto h-[32px] px-10'
              onClick={clearFilters}
            >
              Limpar Filtros
            </Button>
          </div>

          <span className='text-gray-theme200'>
            Ativos {activeEmployees}/{employees.length}
          </span>
        </div>

        {!isError && (
          <div className='overflow-y-auto space-y-2 h-[180px] w-full mt-5 gap-2'>
            {employeesToShow.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </div>
        )}

        {isError && (
          <div className=' h-[180px] w-full mt-5'>
            <span className='text-red-900'>
              Ops ocorreu um erro ao carregar os funcionários, tente novamente depois!
            </span>
          </div>
        )}

        <div className='w-full flex items-end justify-end gap-2 mt-8 pr-2 text-sm text-gray-theme300'>
          <span>A etapa está concluida ?</span>
          <Switch
            onChange={() => {}}
            checked={conclusedStage}
            checkedIcon={<span className='pl-2'>Sim</span>}
            uncheckedIcon={<span className='pr-2'>Não</span>}
          />
        </div>
      </div>
    </div>
  );
}
