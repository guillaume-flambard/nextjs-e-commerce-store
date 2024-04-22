import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        className={cn(
          `
      w-auto
      rounded-full
      bg-black
      dark:bg-slate-800
      border-transparent
      px-5
      py-3
      disabled:cursor-not-allowed
      disabled:opacity-50
      text-white
      font-semibold
      hover:opacity-75
      transition
      `,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
