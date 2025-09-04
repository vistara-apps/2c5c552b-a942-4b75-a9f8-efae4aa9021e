'use client';

import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function InputField({ 
  label, 
  error, 
  className, 
  ...props 
}: InputFieldProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-400 mb-2">
          {label}
        </label>
      )}
      <input
        className={clsx(
          'w-full px-4 py-3 glass-effect rounded-lg border border-white/20',
          'bg-transparent text-white placeholder-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent',
          'transition-all duration-200',
          {
            'border-red-500 focus:ring-red-500': error,
          },
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}
