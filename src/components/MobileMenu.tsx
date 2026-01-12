import { X } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from './ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
  onSignupClick: () => void;
}

export function MobileMenu({ isOpen, onClose, currentPage, onNavigate, onSignupClick }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-[240ms] ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-background border-r border-border/40 z-50 transition-transform duration-[240ms] ease-[var(--ease-out)] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-out)' }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/40">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-lg font-semibold text-transparent">
              Menu
            </span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary/50 rounded-md transition-all active:scale-95"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              <button
                onClick={() => handleNavigate('home')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'home'
                    ? 'bg-blue-500/15 text-blue-400'
                    : 'text-foreground/80 hover:bg-secondary/50 hover:text-foreground active:scale-[0.98]'
                }`}
              >
                Markets
              </button>
              <button
                onClick={() => handleNavigate('features')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'features'
                    ? 'bg-blue-500/15 text-blue-400'
                    : 'text-foreground/80 hover:bg-secondary/50 hover:text-foreground active:scale-[0.98]'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => handleNavigate('pricing')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'pricing'
                    ? 'bg-blue-500/15 text-blue-400'
                    : 'text-foreground/80 hover:bg-secondary/50 hover:text-foreground active:scale-[0.98]'
                }`}
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavigate('about')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'about'
                    ? 'bg-blue-500/15 text-blue-400'
                    : 'text-foreground/80 hover:bg-secondary/50 hover:text-foreground active:scale-[0.98]'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavigate('contact')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  currentPage === 'contact'
                    ? 'bg-blue-500/15 text-blue-400'
                    : 'text-foreground/80 hover:bg-secondary/50 hover:text-foreground active:scale-[0.98]'
                }`}
              >
                Contact
              </button>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="p-4 border-t border-border/40">
            <Button 
              onClick={() => {
                onSignupClick();
                onClose();
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-[0.98]"
            >
              Try it free
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}