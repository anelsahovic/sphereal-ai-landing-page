import { ButtonVariant } from '@/types/types';
import { cva } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

const buttonVariants = cva(
  'relative h-10 rounded-lg text-xs tracking-widest uppercase font-bold',
  {
    variants: {
      block: {
        true: 'w-full',
      },
      variant: {
        primary:
          'p-[2px] bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))] border-transparent bg-clip-border text-gray-200',
        secondary: '',
        tertiary: 'bg-gray-800 text-gray-200 border-2 border-gray-700',
      },
    },
    defaultVariants: {
      variant: 'primary',
      block: false,
    },
  }
);
const spanVariants = cva(
  'flex items-center justify-center rounded-md w-full h-full h-10 px-6 ',
  {
    variants: {
      variant: {
        primary: 'bg-gray-950 ',
        secondary: '',
        tertiary: '',
      },
    },
  }
);

type Props = {
  children: string;
  variant?: ButtonVariant;
  block?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = 'primary',
  block = false,
  className = '',
  ...otherProps
}: Props) => {
  return (
    <button
      className={buttonVariants({ variant, block, className })}
      {...otherProps}
    >
      <span className={spanVariants({ variant })}>{children}</span>
    </button>
  );
};
