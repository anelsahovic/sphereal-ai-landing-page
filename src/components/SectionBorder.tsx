import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const SectionBorder = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={twMerge('border-x border-[var(--color-border)]', className)}
      {...otherProps}
    />
  );
};
