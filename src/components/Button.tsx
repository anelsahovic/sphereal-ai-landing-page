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
          'p-[2px] bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))] hover:bg-[conic-gradient(from_180deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))] border-transparent bg-clip-border text-gray-200 hover:text-violet-400 transition duration-300',
        secondary:
          'bg-gray-100 text-gray-950 hover:bg-violet-950 hover:border-2 hover:border-violet-800 hover:text-violet-200 transition duration-300',
        tertiary:
          'bg-gray-800 text-gray-200 border-2 border-gray-700 hover:bg-gray-900 transition duration-300',
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
        primary: 'bg-gray-950 hover:opacity-95',
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
