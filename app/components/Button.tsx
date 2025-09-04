'use client';

import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-6 py-3 rounded-lg font-medium transition-all duration-200 ease-out',
        {
          'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed': 
            variant === 'primary',
          'glass-effect border border-white/20 hover:bg-white/10 text-white': 
            variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
