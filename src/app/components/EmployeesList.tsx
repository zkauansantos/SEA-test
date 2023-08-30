import { Plus } from "lucide-react";
import { useState } from "react";
import Switch from "react-switch";

export default function EmployeesList() {
  const [isConclused, setIsConclused] = useState(false);

  return (
    <div className='w-full max-h-[484px] h-full flex flex-col gap-[35px] rounded-[20px] overflow-hidden bg-white shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)]'>
      <header className=' bg-blue-theme w-full pl-5 py-2'>
        <h2 className='text-white text-[28px]'>Funcionário(s)</h2>
      </header>

      <div className='px-4'>
        <button className='w-full border border-blue-theme rounded-[10px] h-[60px] flex items-center justify-center gap-2 text-blue-theme'>
          <Plus />
          <span>Adicionar funcionário</span>
        </button>

        <div className='w-full flex items-start justify-start gap-4 mt-5 text-blue-theme text-sm relative'>
          <button className='border-blue-theme border h-[32px] px-10 rounded-[10px]'>
            Ver apenas ativos
          </button>
          <button className='border-blue-theme border h-[32px] px-10 rounded-[10px]'>
            Limpar Filtros
          </button>

          <span className='text-gray-theme200 absolute right-2 top-2.5'>Ativos 2/25</span>
        </div>


        <div className='overflow-y-auto space-y-2 h-[180px] w-full mt-5 gap-2'>
          {Array.from(Array(5)).map((_, i) => (
            <div
              key={i}
              className='relative flex items-baseline w-full pl-[15px] h-[84px] justify-between rounded-[10px] bg-blue-theme0 overflow-hidden'
            >
              <div className='flex flex-col gap-2 '>
                <p className='text-gray-theme100 text-2xl mt-1'>
                  Daniel Alves da Silva
                </p>

                <div className='flex items-center gap-3'>
                  <span className='bg-blue-theme rounded-[36px] py-1 px-4 text-white text-sm'>
                    000.000.000-99
                  </span>
                  <span className='bg-blue-theme rounded-[36px] py-1 px-4 text-white text-sm'>
                    000.000.000-99
                  </span>
                  <span className='bg-blue-theme rounded-[36px] py-1 px-4 text-white text-sm'>
                    000.000.000-99
                  </span>
                </div>
              </div>

              <button className='w-full max-w-[50px] bg-blue-theme text-white text-lg font-bold absolute right-0 top-0 h-full flex items-center justify-center'>
                ...
              </button>
            </div>
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
