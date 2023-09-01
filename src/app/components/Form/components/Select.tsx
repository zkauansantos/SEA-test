import { useState } from "react";
import * as RdxSelect from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import cn from "../../../../utils/cn";
import ErrorFeedback from "../../ErrorFeedback";

interface SelectProps {
  disabled?: boolean;
  className?: string;
  value?: string;
  error?: string;
  onChange?: (value: string) => void;
  options: {
    value: string;
    label: string;
  }[];
}

export default function Select({
  className,
  options,
  value,
  error,
  onChange,
  disabled,
}: SelectProps) {
  const [, setSelectedValue] = useState(value);

  function handleSelect(value: string) {
    setSelectedValue(value);
    onChange?.(value);
  }

  return (
    <div>
      <div className='relative'>
        <RdxSelect.Root onValueChange={handleSelect} value={value}>
          <RdxSelect.Trigger
            disabled={disabled}
            className={cn(
              "w-full rounded-[10px] border border-blue-theme px-3 h-[36px] outline-none text-left",
              className,
              error && "!border-red-900",
              disabled && "cursor-not-allowed"
            )}
          >
            <RdxSelect.Value />

            <RdxSelect.Icon className='absolute right-3 top-1/2 -translate-y-1/2'>
              <ChevronDownIcon className=' text-gray-800' />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>

          <RdxSelect.Portal>
            <RdxSelect.Content className='overflow-hidden mt-12 bg-white rounded-[10px] border border-blue-theme shadow-[0px_11px_20px_0px_rgba(0,0,0,0.25)]'>
              <RdxSelect.ScrollUpButton className='flex items-center justify-center  bg-white text-gray-800 cursor-default'>
                <ChevronUpIcon />
              </RdxSelect.ScrollUpButton>

              <RdxSelect.Viewport className='p-2'>
                {options.map((opt) => (
                  <RdxSelect.Item
                    key={Math.random()}
                    value={opt.value}
                    className='data-[state=checked]:font-bold data-[highlighted]:bg-gray-50 rounded-lg outline-none p-2 text-sm'
                  >
                    <RdxSelect.ItemText>{opt.label}</RdxSelect.ItemText>
                  </RdxSelect.Item>
                ))}
              </RdxSelect.Viewport>

              <RdxSelect.ScrollDownButton className='flex items-center justify-center  bg-white text-gray-800 cursor-default'>
                <ChevronDownIcon />
              </RdxSelect.ScrollDownButton>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>
      </div>

      {error && <ErrorFeedback message={error} />}
    </div>
  );
}
