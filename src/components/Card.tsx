import React, { FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../util/cn";

// Card Variants
const cardVariants = cva(
  "bg-white shadow-lg rounded-lg p-6 text-center  transition duration-100",
  {
    variants: {
      color: {
        black: "bg-stone-950 dark:bg-gray-100 text-gray-100 dark:text-gray-800",
        white: "bg-white dark:bg-stone-950 text-gray-800 dark:text-gray-100",
        blue: "bg-blue-400",
        red: "bg-red-500",
      },
    },
    defaultVariants: {
        color: "white",
    },
  }
);

// CardProps interface
export interface CardProps extends VariantProps<typeof cardVariants> {
  children?: React.ReactNode;
  className?: string; 
}

// Card Component
const Card: FC<CardProps> = ({ children, color, className }) => {
  return (
    <div className={cn(cardVariants({ className, color }))}>
      {children}
    </div>
  );
};

export default Card;