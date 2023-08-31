import { Plus } from "lucide-react";
import { useState } from "react";
import Switch from "react-switch";
import Button from "./Button";
import EmployeeCard from "./EmployeeCard";

interface EmployeesListProps {
  onShowForm: () => void;
}

export default function EmployeesList({ onShowForm }: EmployeesListProps) {
  const [isConclused, setIsConclused] = useState(false);

  return (
    <div className='w-full h-full max-h-[487px] flex flex-col gap-[35px] rounded-[20px] overflow-hidden bg-white shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)]'>
      <header className=' bg-blue-theme w-full pl-5 py-2'>
        <h2 className='text-white text-[28px]'>Funcionário(s)</h2>
      </header>

      <div className='px-4'>
        <Button
          onClick={onShowForm}
          className='mt-0 h-[60px] flex items-center justify-center gap-2 text-blue-theme'
        >
          <Plus />
          <span>Adicionar funcionário</span>
        </Button>

        <div className='w-full flex items-start justify-start gap-4 mt-5 text-blue-theme text-sm relative'>
          <Button className='mt-0 w-auto h-[32px] px-10'>
            Ver apenas ativos
          </Button>
          <Button className='mt-0 w-auto h-[32px] px-10'>Limpar Filtros</Button>

          <span className='text-gray-theme200 absolute right-2 top-2.5'>
            Ativos 2/25
          </span>
        </div>

        <div className='overflow-y-auto space-y-2 h-[180px] w-full mt-5 gap-2'>
          {Array.from(Array(5)).map((_, i) => (
            <EmployeeCard key={i} />
          ))}
        </div>

        <div className='w-full flex items-end justify-end gap-2 mt-8 pr-2 text-sm text-gray-theme300'>
          <span>A etapa está concluida ?</span>
          <Switch
            onChange={() => setIsConclused((prev) => !prev)}
            checked={isConclused}
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
