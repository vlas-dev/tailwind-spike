import { VariantProps, cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { cn } from "../util/cn";

// Customized button variations
const buttonVariants = cva(
    `px-3 py-2 rounded-md`,
    {
        variants: {
            variant: {
                blue: "bg-blue-500 hover:bg-blue-600 text-gray-100",
                red: "bg-red-500 hover:bg-red-600 text-gray-100",
                purple: "bg-purple-500 hover:bg-purple-600 text-gray-100",
                green: "bg-green-500 hover:bg-green-600 text-gray-100",
            },
            size: {
                small: "py-2 px-4",
                large: "text-xl py-3 px-6",
            },
        },
        defaultVariants: {
            size: "small",
            variant: "blue",
        },
    }
);

// It is our ButtonProps interafce it extends ButtonHTMLAttributes of HTMLButtonElement interface
// Also extends from class-variance-authority lastly we passed our forwarded Reference type
export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    ref?: React.Ref<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = forwardRef(
    ({ size, variant, className, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                type="button"
                className={cn(buttonVariants({ className, variant, size }))}
                {...props}
            >
                {children}
            </button>
        );
    }
);

export default Button;