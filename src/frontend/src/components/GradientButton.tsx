import { Button } from '@/components/ui/button';
import { type ComponentPropsWithoutRef } from 'react';

interface GradientButtonProps extends ComponentPropsWithoutRef<typeof Button> {
  children: React.ReactNode;
}

export default function GradientButton({ children, className = '', ...props }: GradientButtonProps) {
  return (
    <Button
      className={`brand-gradient text-white font-semibold px-8 py-6 text-lg rounded-full hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
