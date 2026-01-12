import { ReactNode } from 'react';

interface AppContainerProps {
  children: ReactNode;
  className?: string;
}

export function AppContainer({ children, className = '' }: AppContainerProps) {
  return (
    <div className={`mx-auto px-4 lg:px-8 max-w-[1280px] ${className}`}>
      {children}
    </div>
  );
}
