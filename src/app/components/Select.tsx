import { ComponentProps } from "react";
import cn from "../../utils/cn";

interface SelectProps extends ComponentProps<"select"> {
  label?: string;
  className?: string;
}

export default function Select({ label, className, ...props }: SelectProps) {
  return (
    <label
      htmlFor='id'
      className='flex flex-col items-start justify-start w-full'
    >
      {label}
      <select
        {...props}
        id='id'
        className={cn(
          "outline-none border bg-transparent border-blue-theme w-full rounded-[10px] h-[41px]",
          className
        )}
      >
        <option>Eletricista</option>
      </select>
    </label>
  );
}
