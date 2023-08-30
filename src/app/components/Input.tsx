import { ComponentProps } from "react";
import cn from "../../utils/cn";

interface InputProps extends ComponentProps<"input"> {
  label?: string;
  className?: string;
}

export default function Input({ label, className, ...props }: InputProps) {
  return (
    <label
      htmlFor='id'
      className='flex flex-col items-start justify-start w-full'
    >
      {label}
      <input
        {...props}
        type='text'
        id='id'
        className={cn(
          "outline-none border border-blue-theme w-full rounded-[10px] h-[36px] px-2",
          className
        )}
      />
    </label>
  );
}
