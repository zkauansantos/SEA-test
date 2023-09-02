import { Plus } from "lucide-react";
import Switch from "react-switch";
import Button from "../Button";
import EmployeeCard from "../EmployeeCard";
import useEmployeesListController from "./useEmployeesListController";
import cn from "../../utils/cn";
import { showForm } from "../../redux/dashboard/actions";

export default function EmployeesList() {
  const {
    showOnlyActiveUsers,
    activeUsers,
    conclusedStage,
    formIsVisible,
    currentStage,
    users,
    setShowOnlyActiveUsers,
    dispatch,
    clearFilters,
    usersToShow,
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

        <div className='w-full flex items-start justify-start gap-4 mt-5 text-blue-theme text-sm relative'>
          <Button
            className={cn(
              "mt-0 w-auto h-[32px] px-10",
              showOnlyActiveUsers &&
                "bg-blue-theme text-white hover:bg-blue-theme/40"
            )}
            onClick={() => setShowOnlyActiveUsers((prev) => !prev)}
          >
            Ver apenas ativos
          </Button>
          <Button className='mt-0 w-auto h-[32px] px-10' onClick={clearFilters}>
            Limpar Filtros
          </Button>

          <span className='text-gray-theme200 absolute right-2 top-2.5'>
            Ativos {activeUsers}/{users.length}
          </span>
        </div>

        <div className='overflow-y-auto space-y-2 h-[180px] w-full mt-5 gap-2'>
          {usersToShow.map((user) => (
            <EmployeeCard key={user.id} user={user} />
          ))}
        </div>

        <div className='w-full flex items-end justify-end gap-2 mt-8 pr-2 text-sm text-gray-theme300'>
          <span>A etapa está concluida ?</span>
          <Switch
            onChange={() => {}}
            checked={conclusedStage}
            checkedIcon={<span className='pl-2'>Sim</span>}
            uncheckedIcon={<span className='pr-2'>Não</span>}
            height={20}
            handleDiameter={16}
            offHandleColor='#4FA1C1'
            onHandleColor='#4FA1C1'
            offColor='#DBDBDB'
            onColor='#DBDBDB'
          />
        </div>
      </div>
    </div>
  );
}
