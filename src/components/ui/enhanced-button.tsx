import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90 active:scale-95",
        destructive: "bg-destructive text-destructive-foreground shadow-soft hover:bg-destructive/90 active:scale-95",
        outline: "border border-input bg-background shadow-soft hover:bg-accent hover:text-accent-foreground active:scale-95",
        secondary: "bg-secondary text-secondary-foreground shadow-soft hover:bg-secondary/80 active:scale-95",
        ghost: "hover:bg-accent hover:text-accent-foreground active:scale-95",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Enhanced variants for rural healthcare use
        hero: "bg-gradient-primary text-primary-foreground shadow-medium hover:shadow-strong active:scale-95 font-semibold",
        warm: "bg-gradient-warm text-secondary-foreground shadow-medium hover:shadow-strong active:scale-95 font-semibold",
        emergency: "bg-emergency text-emergency-foreground shadow-medium hover:bg-emergency/90 active:scale-95 font-bold animate-pulse",
        success: "bg-success text-success-foreground shadow-soft hover:bg-success/90 active:scale-95",
        warning: "bg-warning text-warning-foreground shadow-soft hover:bg-warning/90 active:scale-95",
        
        // CHW mode - extra large and simple
        chw: "bg-primary text-primary-foreground shadow-strong text-lg font-bold hover:bg-primary/90 active:scale-95",
        "chw-secondary": "bg-secondary text-secondary-foreground shadow-medium text-lg font-semibold hover:bg-secondary/80 active:scale-95",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        
        // Touch-friendly sizes for rural use
        touch: "min-h-touch min-w-touch px-6 py-3",
        "touch-lg": "min-h-touch-lg min-w-touch-lg px-8 py-4 text-lg",
        
        // CHW mode - extra large touch targets
        chw: "min-h-16 min-w-32 px-8 py-4 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  badge?: string | number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, badge, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // When using asChild, we need to be careful about multiple children
    const content = asChild ? (
      // For asChild, clone the single child and add loading state
      React.cloneElement(
        children as React.ReactElement,
        {
          className: cn(buttonVariants({ variant, size, className })),
          ref,
          disabled: disabled || loading,
          ...props,
        },
        <>
          {loading && (
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          )}
          {(children as React.ReactElement).props.children}
        </>
      )
    ) : (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </Comp>
    );
    
    return (
      <div className="relative inline-flex">
        {content}
        
        {badge && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-emergency text-xs font-bold text-emergency-foreground">
            {badge}
          </span>
        )}
      </div>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };