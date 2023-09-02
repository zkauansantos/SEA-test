import * as RadioGroup from "@radix-ui/react-radio-group";
import cn from "../../../utils/cn";
import ErrorFeedback from "../../ErrorFeedback";

interface RadioProps {
  options: {
    value: string;
    label: string;
  }[];
  error?: string;
  onChange: (value: string) => void;
}

export default function Radio({ error, options, onChange }: RadioProps) {
  return (
    <RadioGroup.Root
      className='flex flex-col '
      aria-label='View density'
      onValueChange={(value) => onChange(value)}
    >
      <div className='flex items-center gap-4'>
        {options.map((opt) => (
          <div key={opt.value} className='flex items-center gap-2'>
            <RadioGroup.Item
              className={cn(
                "bg-white w-[12px] h-[12px] rounded-full border",
                "border-blue-theme outline-none cursor-default data-[state=checked]:bg-blue-theme",
                error && "!border-red-900"
              )}
              value={opt.value}
              id={opt.label}
            />
            <label htmlFor={opt.label} className={cn(error && "text-red-900")}>
              {opt.label}
            </label>
          </div>
        ))}
      </div>

      {error && <ErrorFeedback message={error} />}
    </RadioGroup.Root>
  );
}
