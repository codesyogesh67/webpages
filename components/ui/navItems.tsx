

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"


const navItemsVariants = cva(
    "hidden md:justify-end md:flex  md:items-center flex w-full flex-col items-start gap-10 md:flex-row",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
)
  
export interface NavItemsProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navItemsVariants> {
  asChild?: boolean
}



const NavItems = React.forwardRef<HTMLButtonElement, NavItemsProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "nav-item"
      return (
        <Comp
          className={cn(navItemsVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }
  )
  NavItems.displayName = "NavItems"
  
  export { NavItems, navItemsVariants }
  