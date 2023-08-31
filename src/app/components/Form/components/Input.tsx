import { ComponentProps, forwardRef } from "react";
import cn from "../../../../utils/cn";
import ErrorFeedback from "../../ErrorFeedback";

interface InputProps extends ComponentProps<"input"> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, className, ...props }, ref) => {
    return (
      <label
        htmlFor='id'
        className='flex flex-col items-start justify-start w-full'
      >
        {label}
        <input
          ref={ref}
          {...props}
          type='text'
          id='id'
          className={cn(
            "outline-none border border-blue-theme w-full rounded-[10px] h-[36px] px-2",
            className,
            error && "!border-red-900"
          )}
        />

        {error && <ErrorFeedback message={error} />}
      </label>
    );
  }
);

Input.displayName = "Input";
export default Input;
