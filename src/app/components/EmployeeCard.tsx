import Button from "./Button";

export default function EmployeeCard() {
  return (
    <div className='relative flex items-baseline w-full pl-[15px] h-[84px] justify-between rounded-[10px] bg-blue-theme0 overflow-hidden'>
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

      <Button className='mt-0 rounded-none max-w-[50px] bg-blue-theme text-white text-lg font-bold absolute right-0 top-0 h-full flex items-center justify-center hover:bg-blue-theme/80'>
        ...
      </Button>
    </div>
  );
}
