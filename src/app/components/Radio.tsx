import * as RadioGroup from "@radix-ui/react-radio-group";

interface RadioProps {
  options: {
    value: string;
    label: string;
  }[];
}

export default function Radio({ options }: RadioProps) {
  return (
    <RadioGroup.Root
      className='flex items-center gap-4'
      defaultValue='default'
      aria-label='View density'
    >
      {options.map((opt) => (
        <div key={opt.value} className='flex items-center gap-2'>
          <RadioGroup.Item
            className='bg-white w-[12px] h-[12px] rounded-full border border-blue-theme outline-none cursor-default data-[state=checked]:bg-blue-theme'
            value={opt.value}
            id={opt.label}
          />
          <label htmlFor={opt.label}>{opt.label}</label>
        </div>
      ))}
    </RadioGroup.Root>
  );
}
