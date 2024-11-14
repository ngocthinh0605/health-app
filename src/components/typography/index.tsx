import React from 'react';
import { twMerge } from 'tailwind-merge';

const VARIANTS = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-xl font-bold',
  h5: 'text-lg font-bold',
  h6: 'text-base font-bold',
  body: 'text-base',
  small: 'text-sm',
  xxl: 'text-[25px] leading-[30px]',
  xl: 'text-[20px] leading-[24px]',
  lg: 'text-[18px] leading-[26px]',
  md: 'text-[15px] leading-[22px]',
  xs: 'text-[14px] leading-[20px]',
  '2xs': 'text-[12px] leading-[18px]',
  '3xs': 'text-[11px] leading-[16px]',
  '4xs': 'text-[10px] leading-[12px]',
  custom: '',
} as const;

type VariantType = keyof typeof VARIANTS;

interface TypographyProps {
  variant?: VariantType;
  children: React.ReactNode;
  className?: string;
}

const Typography = ({
  variant = 'body',
  children,
  className,
}: TypographyProps) => {
  const Component = (
    variant.startsWith('h') ? variant : 'p'
  ) as keyof JSX.IntrinsicElements;

  return (
    <Component className={twMerge(VARIANTS[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;
