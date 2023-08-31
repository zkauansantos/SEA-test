import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import cn from "../../../../utils/cn";
import formatDate from "../../../../utils/formatDate";
import DatePicker from "../../DatePicker";
import ErrorFeedback from "../../ErrorFeedback";

interface DatePickerInputProps {
  className?: string;
  error?: string;
  value?: Date;
  onChange: (date: Date) => void;
}

export default function DatePickerInput({
  className,
  error,
  onChange,
  value,
}: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    value ?? undefined
  );

  function handleChangeDate(date: Date) {
    setSelectedDate(date);
    onChange(date);
  }

  return (
    <div className='w-full flex flex-col'>
      <span>Data de Nascimento</span>

      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            type='button'
            className={cn(
              "text-left outline-none border border-blue-theme w-full rounded-[10px] h-[36px] px-2",
              error && "!border-red-900",
              className
            )}
          >
            {!!selectedDate && <span>{formatDate(selectedDate)}</span>}
          </button>
        </Popover.Trigger>

        <Popover.Content className='z-[99] bg-white border border-blue-theme rounded-[10px] p-2 '>
          <DatePicker
            onChange={(date) => handleChangeDate(date)}
            value={selectedDate}
          />
        </Popover.Content>
      </Popover.Root>

      {error && <ErrorFeedback message={error} />}
    </div>
  );
}
