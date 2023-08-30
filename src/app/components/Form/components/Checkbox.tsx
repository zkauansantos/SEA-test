import * as RdxCheckbox from "@radix-ui/react-checkbox";
import { useState } from "react";

interface CheckboxProps extends RdxCheckbox.CheckboxProps {}

export default function Checkbox({ placeholder, ...props }: CheckboxProps) {
  const [, setIsChecked] = useState(false);

  return (
    <div className='flex items-center gap-2'>
      <RdxCheckbox.Root
        {...props}
        className='flex border border-blue-theme h-[20px] w-[20px] appearance-none items-center justify-center rounded-[8px] outline-none data-[state=checked]:bg-blue-theme '
        id={placeholder}
        onCheckedChange={(v) => setIsChecked(v as boolean)}
      />
      <label htmlFor={placeholder}>{placeholder}</label>
    </div>
  );
}
