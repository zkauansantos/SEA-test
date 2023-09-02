import { ComponentProps } from "react";
import cn from "../utils/cn";

interface ButtonProps extends ComponentProps<"button"> {}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "border border-blue-theme w-full h-[36px] mt-3 rounded-[10px] hover:bg-blue-theme/20 transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
}
