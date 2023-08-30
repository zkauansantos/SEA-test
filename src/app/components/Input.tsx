import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <label htmlFor='id' className='flex flex-col items-start justify-start w-full'>
      {label}
      <input
        {...props}
        type='text'
        id='id'
        className='outline-none border border-blue-theme w-full rounded-[10px] h-[41px]'
      />
    </label>
  );
}
