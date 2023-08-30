import { ComponentProps } from "react";

interface CheckboxProps extends ComponentProps<"input"> {
  label?: string;
}

export default function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label htmlFor='check' className="flex items-center gap-2">
      <input type='checkbox' id='check' {...props}/>
      {label}
    </label>
  );
}
