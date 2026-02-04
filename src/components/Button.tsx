import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {

        const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95';

        const variants = {
            primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-lg shadow-primary/20',
            secondary: 'bg-white text-surface hover:bg-gray-100 focus:ring-white',
            outline: 'border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary',
            ghost: 'text-primary hover:bg-primary/10 focus:ring-primary',
        };

        const sizes = {
            sm: 'h-9 px-4 text-sm',
            md: 'h-11 px-6 text-base',
            lg: 'h-14 px-8 text-lg',
        };

        const variantStyles = variants[variant];
        const sizeStyles = sizes[size];
        const loadingIcon = isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null;

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {loadingIcon}
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
