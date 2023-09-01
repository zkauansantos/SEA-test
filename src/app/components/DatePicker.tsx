import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

interface DatePickerProps {
  value: Date | undefined;
  onChange: (date: Date) => void;
}

export default function DatePicker({ onChange, value }: DatePickerProps) {
  return (
    <DayPicker
      locale={ptBR}
      selected={value}
      mode='single'
      toYear={new Date().getFullYear() - 18}
      onSelect={(date) => onChange(date ?? new Date())}
      pagedNavigation
      classNames={{
        root: 'w-full',
        caption: "flex items-center justify-between",
        nav: "flex gap-1",
        nav_button_previous:
          "!text-blue-theme flex items-center justify-center !bg-transparent",
        nav_button_next:
          "!text-blue-theme flex items-center justify-center !bg-transparent",
        head_cell: "uppercase text-xs text-blue-theme font-bold pt-1 pb-2",
        button:
          "text-gray-700 cursor-pointer w-10 h-10 hover:bg-blue-theme/40 rounded-full",
        day_today: "bg-gray-100 font-bold text-gray-900",
        day_selected: "!bg-blue-theme !text-white font-medium",
      }}
      formatters={{
        formatCaption: (date, options) => {
          return (
            <span className='text-gray-900 tracking-[-0.408px] font-medium capitalize'>
              {format(date, "LLLL yyyy", options)}
            </span>
          );
        },
      }}
    />
  );
}
