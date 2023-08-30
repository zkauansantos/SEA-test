import { useState } from "react";
import Switch from "react-switch";

import { ArrowLeft } from "lucide-react";

import Button from "../Button";
import Input from "./components/Input";
import Select from "./components/Select";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";

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
              <div className='flex flex-col gap-4 items-start justify-center w-full'>
                <span>Sexo</span>

                <div className='flex items-center gap-8'>
                  <Radio
                    options={[
                      { value: "M", label: "Masculino" },
                      { value: "F", label: "Feminino" },
                    ]}
                  />
                </div>
              </div>

              <Input label='Data de Nascimento' />

              <div className='w-full'>
                <span>Cargo</span>
                <Select options={[{ value: "1", label: "Eletricista" }]} />
              </div>
            </div>
          </div>

          <div className='mt-6 gap-6 w-full border border-blue-theme h-[294px] rounded-[10px] px-3 py-2'>
            <span className='font-medium text-gray-theme300'>
              Quais EPIs o trabalhador usa na atividade?
            </span>

            <div className='my-3'>
              <Checkbox placeholder='O trabalhador não usa EPI.' />
            </div>

            <div className='w-full border border-blue-theme h-[159px] rounded-[10px] px-3 py-2'>
              <div>
                <span>Selecione a atividade</span>
                <Select options={[{ value: "2", label: "Carpinteiro" }]} />
              </div>

              <div className='flex items-center gap-3 mt-3'>
                <div className='w-full max-w-[266px]'>
                  <span>Selecione o EPI:</span>

                  <Select
                    placeholder='Selecione a atividade'
                    options={[{ value: "3", label: "Calçado de segurança" }]}
                  />
                </div>

                <div className='w-full max-w-[266px]'>
                  <span className='mb-2'>Informe o número do CA:</span>
                  <Input placeholder='9352' />
                </div>

                <Button
                  className='mt-3 flex-1 border-none bg-transparent'
                  type='button'
                >
                  Adicionar EPI
                </Button>
              </div>
            </div>

            <Button className='mt-[10px]' type='button'>
              Adicionar outra atividade
            </Button>
          </div>

          <div className='mt-6 w-full border border-blue-theme h-[138px] rounded-[10px] px-3 py-2'>
            <span className='font-medium text-gray-theme300'>
              Adicione Atestado de Saúde Ocupacional (opicional):
            </span>

            <div className='flex flex-col gap-3 mt-3'>
              <Input placeholder='Documento 1.png' className='h-[36px]' />

              <Button type='button' className='mt-0'>
                Selecionar arquivo
              </Button>
            </div>
          </div>

          <Button type='submit'>Salvar</Button>
        </form>
      </div>
    </div>
  );
}
