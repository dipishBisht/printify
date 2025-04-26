'use client';

import type React from 'react';
import { cn } from '@/lib/utils';

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  color: 'light' | 'dark';
};

export function Heading({ level, children, className, color }: HeadingProps) {
  const Component = `h${level}` as React.ElementType;

  const sizes = {
    1: 'text-4xl sm:text-5xl font-bold md:leading-tight',
    2: 'text-3xl sm:text-4xl font-bold leading-snug',
    3: 'text-2xl sm:text-3xl font-bold leading-normal',
    4: 'text-xl sm:text-2xl font-semibold leading-relaxed',
    5: 'text-lg sm:text-xl font-semibold leading-loose',
    6: 'text-base sm:text-lg font-semibold leading-loose',
  };

  const colorStyles = {
    light: 'text-gray-200 dark:text-gray-100',
    dark: 'text-gray-800 dark:text-gray-100',
  };

  return (
    <Component className={cn(sizes[level], colorStyles[color], className)}>
      {children}
    </Component>
  );
}

type SubHeadingProps = {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  color: 'light' | 'dark';
}

export function SubHeading({ children, className, icon, color }: SubHeadingProps) {

  const colorStyles = {
    light: 'dark:bg-black/5 dark:hover:bg-black/10 dark:border-black/10 dark:text-black/80 bg-gray/5 hover:bg-gray/10 border-gray/10 text-gray/80',
    dark: 'bg-black/5 hover:bg-black/10 border-black/10 text-black/80 dark:bg-gray/5 dark:hover:bg-gray/10 dark:border-gray/10 dark:text-gray/80',
  };

  return (
    <div className={cn(colorStyles[color], "inline-flex items-center gap-2 backdrop-blur-xl border rounded-full py-2 px-4 text-sm animate-fade-in-up", className)}>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </div>
  )
}

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
  size: 'normal' | 'small';
  color: 'light' | 'dark';
};

export function Paragraph({
  children,
  className,
  size,
  color,
}: ParagraphProps) {

  const sizeStyles = {
    normal: 'text-base md:text-lg lg:text-lg leading-relaxed',
    small: 'text-sm md:text-base lg:text-base leading-normal',
  };

  const colorStyles = {
    light: 'text-gray-200',
    dark: 'text-gray-700',
  };

  return (
    <p className={cn(sizeStyles[size], colorStyles[color], className)}>
      {children}
    </p>
  );
}
