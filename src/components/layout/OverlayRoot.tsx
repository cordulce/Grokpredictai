import { ReactNode } from 'react';

interface OverlayRootProps {
  children: ReactNode;
}

export function OverlayRoot({ children }: OverlayRootProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      <div className="pointer-events-auto">
        {children}
      </div>
    </div>
  );
}
