import * as RdxCheckbox from "@radix-ui/react-checkbox";

interface CheckboxProps extends RdxCheckbox.CheckboxProps {
  onChanges: (value: boolean | string) => void;
}

export default function Checkbox({
  onChanges,
  placeholder,
  value,
  ...props
}: CheckboxProps) {
  return (
    <div className='flex items-center gap-2'>
      <RdxCheckbox.Root
        {...props}
        value={value}
        className='flex border border-blue-theme h-[20px] w-[20px] appearance-none items-center justify-center rounded-[8px] outline-none data-[state=checked]:bg-blue-theme '
        id={placeholder}
        onCheckedChange={(v) => onChanges(!v)}
      />
      <label htmlFor={placeholder}>{placeholder}</label>
    </div>
  );
}
