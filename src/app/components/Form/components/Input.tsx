import { ComponentProps, forwardRef } from "react";
import cn from "../../../../utils/cn";
import ErrorFeedback from "../../ErrorFeedback";

interface InputProps extends ComponentProps<"input"> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, className, type, disabled, ...props }, ref) => {
    return (
      <label
        htmlFor='id'
        className='flex flex-col items-start justify-start w-full'
      >
        {label}
        <input
          ref={ref}
          disabled={disabled}
          {...props}
          type={type || "text"}
          id='id'
          className={cn(
            "outline-none border border-blue-theme w-full rounded-[10px] h-[36px] px-2",
            className,
            error && "!border-red-900",
            disabled && "bg-neutral-300 cursor-not-allowed"
          )}
        />

        {error && <ErrorFeedback message={error} />}
      </label>
    );
  }
);

Input.displayName = "Input";
export default Input;
