import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Switch from "react-switch";
import Input from "./Input";
import Select from "./Select";

export default function Form() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='flex-1 rounded-[20px] overflow-hidden bg-white shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)]'>
      <header className=' bg-blue-theme w-full pl-5 py-2 text-white text-[28px] flex items-center gap-2'>
        <ArrowLeft />
        <h2>Adicionar funcionário</h2>
      </header>

      <div className='px-4 pb-6'>
        <form>
          <div className='mt-4 h-[43px] px-3 flex items-center justify-between rounded-[10px] border border-blue-theme w-full'>
            <span>O trabalhador está ativo ou inativo ?</span>

            <Switch
              onChange={() => setIsActive((prev) => !prev)}
              checked={isActive}
              checkedIcon={<></>}
              uncheckedIcon={<></>}
              height={20}
              handleDiameter={16}
              offHandleColor='#4FA1C1'
              onHandleColor='#4FA1C1'
              offColor='#DBDBDB'
              onColor='#DBDBDB'
            />
          </div>

          <div className='mt-6 grid-cols-2 gap-6 grid w-full border border-blue-theme h-[235px] rounded-[10px] px-3 py-2'>
            <div className='flex flex-col items-center justify-center gap-3 w-full'>
              <Input label='Nome' />
              <Input label='CPF' />
              <Input label='RG' />
            </div>

            <div className='flex flex-col items-center justify-center gap-3 w-full'>
              <Input label='Sexo' />
              <Input label='Data de Nascimento' />
              <Select label='Cargo' />
            </div>
          </div>

          <div className='mt-6 gap-6 w-full border border-blue-theme h-[294px] rounded-[10px] px-3 py-2'>
            <span className='font-medium text-gray-theme300'>
              Quais EPIs o trabalhador usa na atividade?
            </span>

            <div className='my-3'>
              <label htmlFor='tal' className='flex items-center gap-1'>
                <input type='checkbox' id='tal' />O trabalhador não usa EPI.
              </label>
            </div>

            <div className='w-full border border-blue-theme h-[159px] rounded-[10px] px-3 py-2'>
              <div>
                <Select label='Selecione a atividade' />
              </div>

              <div className='flex items-center gap-3 mt-3'>
                <div className='w-full'>
                  <Select label='Selecione a atividade' />
                </div>

                <div className='w-full'>
                  <span className='mb-2'>Informe o número do CA:</span>
                  <Input placeholder='9352' />
                </div>

                <button className='mt-3 w-full'>Adicionar EPI</button>
              </div>
            </div>

            <button className='border border-blue-theme w-full h-[36px] mt-[10px] rounded-[10px]'>
              Adicionar outra atividade
            </button>
          </div>

          <div className='mt-6 gap-6 w-full border border-blue-theme h-[135px] rounded-[10px] px-3 py-2'>
            <span className='font-medium text-gray-theme300'>
              Adicione Atestado de Saúde Ocupacional (opicional):
            </span>

            <div className='flex flex-col gap-3 mt-3'>
              <Input
                placeholder='Documento 1.png'
                className='h-[36px]'
              />

              <button className='border border-blue-theme w-full h-[36px] rounded-[10px]'>
                Selecionar arquivo
              </button>
            </div>
          </div>

          <button className='border border-blue-theme w-full h-[36px] mt-3 rounded-[10px]'>
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
