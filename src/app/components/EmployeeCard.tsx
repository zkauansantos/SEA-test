import { Employee } from "../entities/Employee";
import Button from "./Button";

interface EmployeeCardProps {
  employee: Employee;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className='bg-blue-theme rounded-[36px] py-1 px-4 text-white text-sm'>
      {children}
    </span>
  );
}

export default function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div className='relative flex items-baseline w-full pl-[15px] h-[84px] justify-between rounded-[10px] bg-blue-theme0 overflow-hidden'>
      <div className='flex flex-col gap-2 '>
        <p className='text-gray-theme100 text-2xl mt-1'>{employee.name}</p>

        <div className='flex items-center gap-3'>
          <Badge>{employee.cpf}</Badge>

          {employee.EPIS.length > 0 ? (
            <Badge>{employee.EPIS[0].activity}</Badge>
          ) : (
            <Badge>Não usa EPI</Badge>
          )}

          <Badge>{employee.empPosition}</Badge>
        </div>
      </div>

      <Button
        disabled
        className='mt-0 rounded-none max-w-[50px] bg-blue-theme text-white text-lg font-bold absolute right-0 top-0 h-full flex items-center justify-center cursor-not-allowed hover:bg-blue-theme/80'
      >
        ...
      </Button>
    </div>
  );
}
