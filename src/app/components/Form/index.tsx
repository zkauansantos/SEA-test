import Switch from "react-switch";
import { Controller } from "react-hook-form";
import { ArrowLeft } from "lucide-react";

import Button from "../Button";
import Input from "./components/Input";
import Select from "./components/Select";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import useFormController from "./useFormController";
import DatePickerInput from "./components/DatePickerInput";
import cn from "../../utils/cn";
import { hideForm } from "../../redux/dashboard/actions";

export default function Form() {
  const {
    errors,
    fields,
    formIsVisible,
    control,
    positions,
    activities,
    epis,
    notUsesEPIchecked,
    namePhotoSelected,
    append,
    dispatch,
    handleSubmit,
    register,
    setNotUsesEPIchecked,
  } = useFormController();


  if (!formIsVisible) {
    return null;
  }

  return (
    <div className='flex-1 rounded-[20px] overflow-hidden bg-white shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)]'>
      <header className=' bg-blue-theme w-full pl-5 py-2 text-white text-[28px] flex items-center gap-2'>
        <button onClick={() => dispatch(hideForm())}>
          <ArrowLeft />
        </button>
        <h2>Adicionar funcionário</h2>
      </header>

      <div className='px-4 pb-6' onSubmit={handleSubmit}>
        <form>
          <div className='mt-4 h-[43px] px-3 flex items-center justify-between rounded-[10px] border border-blue-theme w-full'>
            <span>O trabalhador está ativo ou inativo ?</span>

            <Controller
              control={control}
              name='isActive'
              defaultValue={true}
              render={({ field: { onChange, value } }) => (
                <Switch
                  onChange={(newValue) => onChange(newValue)}
                  checked={Boolean(value)}
                  checkedIcon={
                    <span className='text-xs left-2 top-1 absolute'>ativo</span>
                  }
                  uncheckedIcon={
                    <span className='text-xs right-0.5 top-0.5 absolute'>
                      inativo
                    </span>
                  }
                  height={20}
                  handleDiameter={16}
                  offHandleColor='#4FA1C1'
                  onHandleColor='#4FA1C1'
                  offColor='#DBDBDB'
                  onColor='#DBDBDB'
                />
              )}
            />
          </div>

          <div className='mt-6 grid-cols-2 place-items-start gap-6 grid w-full border border-blue-theme min-h-[235px] rounded-[10px] px-3 py-2'>
            <div className='flex flex-col items-center justify-center gap-3 w-full'>
              <Input
                label='Nome'
                {...register("name")}
                error={errors.name?.message}
              />
              <Input
                label='CPF'
                {...register("cpf")}
                error={errors.cpf?.message}
              />
              <Input
                label='RG'
                {...register("rg")}
                error={errors.rg?.message}
              />
            </div>

            <div className='flex flex-col items-center justify-center gap-3 w-full'>
              <div className='flex flex-col gap-4 items-start justify-center w-full'>
                <span>Sexo</span>

                <div className='flex items-center gap-8'>
                  <Controller
                    control={control}
                    name='genre'
                    defaultValue=''
                    render={({ field: { onChange } }) => (
                      <Radio
                        error={errors.genre?.message}
                        onChange={onChange}
                        options={[
                          { value: "M", label: "Masculino" },
                          { value: "F", label: "Feminino" },
                        ]}
                      />
                    )}
                  />
                </div>
              </div>

              <Controller
                control={control}
                defaultValue={new Date(2000, 5)}
                name='dateOfBirth'
                render={({ field: { value, onChange } }) => (
                  <DatePickerInput onChange={onChange} value={value} />
                )}
              />

              <div className='w-full'>
                <span>Cargo</span>
                <Controller
                  control={control}
                  name='empPosition'
                  defaultValue=''
                  render={({ field: { onChange, value } }) => (
                    <Select
                      error={errors.empPosition?.message}
                      onChange={onChange}
                      value={value}
                      options={positions}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          <div className='mt-6 gap-6 space-y-2 w-full border border-blue-theme min-h-[294px] rounded-[10px] px-3 py-2'>
            <span className='font-medium text-gray-theme300'>
              Quais EPIs o trabalhador usa na atividade?
            </span>

            <div className='my-3'>
              <Controller
                control={control}
                name='usesEPI'
                defaultValue={true}
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    value={value as unknown as string}
                    onChanges={(newValue) => {
                      onChange(newValue);
                      setNotUsesEPIchecked(!newValue as boolean);
                    }}
                    placeholder='O trabalhador não usa EPI.'
                  />
                )}
              />
            </div>

            {fields.map((field, index) => (
              <div
                key={field.id}
                className={cn(
                  "w-full border border-blue-theme min-h-[159px] rounded-[10px] px-3 py-2",
                  notUsesEPIchecked && "bg-neutral-300"
                )}
              >
                <div>
                  <span>Selecione a atividade</span>
                  <Controller
                    control={control}
                    name={`EPIS.${index}.activity`}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        disabled={notUsesEPIchecked}
                        error={errors.EPIS?.[index]?.activity?.message}
                        onChange={onChange}
                        value={value}
                        options={activities}
                      />
                    )}
                  />
                </div>

                <div className='flex items-start gap-3 mt-3'>
                  <div className='w-full max-w-[266px]'>
                    <span>Selecione o EPI:</span>

                    <Controller
                      control={control}
                      name={`EPIS.${index}.EPI`}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          disabled={notUsesEPIchecked}
                          error={errors.EPIS?.[index]?.EPI?.message}
                          onChange={onChange}
                          value={value}
                          options={epis}
                        />
                      )}
                    />
                  </div>

                  <div className='w-full max-w-[266px]'>
                    <span className='mb-2'>Informe o número do CA:</span>
                    <Input
                      type='number'
                      disabled={notUsesEPIchecked}
                      placeholder='9352'
                      {...register(`EPIS.${index}.numberCA`)}
                      error={errors.EPIS?.[index]?.numberCA?.message}
                    />
                  </div>

                  <Button
                    className='mt-6 flex-1 border-none bg-transparent cursor-not-allowed'
                    type='button'
                    disabled
                  >
                    Adicionar EPI
                  </Button>
                </div>
              </div>
            ))}

            <Button
              className={cn(
                notUsesEPIchecked &&
                  "bg-neutral-300 cursor-not-allowed hover:bg-neutral-300"
              )}
              onClick={() =>
                append({
                  activity: "",
                  EPI: "",
                  numberCA: "",
                })
              }
              type='button'
              disabled={notUsesEPIchecked}
            >
              Adicionar outra atividade
            </Button>
          </div>

          <div className='mt-6 w-full border border-blue-theme h-[138px] rounded-[10px] px-3 py-2'>
            <span className='font-medium text-gray-theme300'>
              Adicione Atestado de Saúde Ocupacional (opicional):
            </span>

            <div className='flex flex-col gap-3 mt-3'>
              <Input
                placeholder={namePhotoSelected}
                disabled
                className='h-[36px] disabled:bg-transparent disabled:cursor-default'
              />

              <label
                className={cn(
                  "border border-blue-theme w-full h-[36px]",
                  "relative rounded-[10px] hover:bg-blue-theme/20 transition-colors"
                )}
              >
                <span className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                  Selecionar Arquivo
                </span>
                <Input
                  className='hidden'
                  type='file'
                  accept='image/*'
                  {...register("medicalCertificateFile")}
                />
              </label>
            </div>
          </div>

          <Button type='submit'>Salvar</Button>
        </form>
      </div>
    </div>
  );
}
