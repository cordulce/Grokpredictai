import { Search, Bell, User, ChevronDown, UserCircle, Bookmark, Clock, LogOut, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';
import { NotificationDropdown } from './NotificationDropdown';

interface TopNavigationProps {
  isLoggedIn?: boolean;
  onSearchToggle: () => void;
  onLogout: () => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
  onMobileMenuToggle?: () => void;
}

export function TopNavigation({ isLoggedIn = false, onSearchToggle, onLogout, onLoginClick, onSignupClick, currentPage, onNavigate, onMobileMenuToggle }: TopNavigationProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1280px]">
        <div className="flex h-16 items-center justify-between">
          {/* Left Side - Mobile Menu + Logo */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Menu */}
            <button
              onClick={onMobileMenuToggle}
              className="lg:hidden p-2 hover:bg-secondary/50 rounded-md transition-colors -ml-2"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Logo */}
            <button onClick={() => onNavigate('home')} className="flex items-center group">
              <span className="text-xl flex items-baseline" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <span className="text-muted-foreground" style={{ fontWeight: 600 }}>Grok</span>
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text transition-all group-hover:brightness-110" style={{ fontWeight: 700 }}>PREDICT</span>
                <span className="text-[0.75em] text-muted-foreground/70" style={{ fontWeight: 500 }}>.ai</span>
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 ml-8">
              <button 
                onClick={() => onNavigate('features')}
                className={`text-sm transition-colors ${currentPage === 'features' ? 'text-foreground' : 'text-foreground/80 hover:text-foreground'}`}
              >
                Features
              </button>
              <button 
                onClick={() => onNavigate('pricing')}
                className={`text-sm transition-colors ${currentPage === 'pricing' ? 'text-foreground' : 'text-foreground/80 hover:text-foreground'}`}
              >
                Pricing
              </button>
              <button 
                onClick={() => onNavigate('about')}
                className={`text-sm transition-colors ${currentPage === 'about' ? 'text-foreground' : 'text-foreground/80 hover:text-foreground'}`}
              >
                About
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className={`text-sm transition-colors ${currentPage === 'contact' ? 'text-foreground' : 'text-foreground/80 hover:text-foreground'}`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search markets"
                className="w-full pl-10 bg-secondary/50 border-border/40 focus-visible:ring-1 focus-visible:ring-ring"
                onClick={onSearchToggle}
              />
            </div>
          </div>

          {/* Mobile Search Icon */}
          <button
            onClick={onSearchToggle}
            className="md:hidden p-2 hover:bg-secondary/50 rounded-md transition-colors"
          >
            <Search className="h-5 w-5 text-muted-foreground" />
          </button>

          {/* Right Side - Auth / User Menu */}
          <div className="flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <Button variant="ghost" size="sm" className="hidden sm:flex" onClick={onLoginClick}>
                  Log in
                </Button>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]" 
                  onClick={onSignupClick}
                >
                  Try it free
                </Button>
              </>
            ) : (
              <>
                <div className="relative">
                  <button 
                    onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                    className={`group p-2 hover:bg-secondary/50 rounded-md transition-all relative ${isNotificationOpen ? 'bg-secondary/50 text-blue-400' : ''}`}
                  >
                    <Bell className={`h-5 w-5 transition-all ${isNotificationOpen ? 'text-blue-400 fill-current' : 'group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] group-active:fill-current'}`} />
                    <span className="absolute top-1 right-1 h-2 w-2 bg-blue-500 rounded-full" />
                  </button>
                  <NotificationDropdown 
                    isOpen={isNotificationOpen} 
                    onClose={() => setIsNotificationOpen(false)} 
                    onViewAll={() => {
                      setIsNotificationOpen(false);
                      onNavigate('notifications');
                    }}
                  />
                </div>
                <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                    <button className="group flex items-center gap-1.5 p-1 pr-2 hover:bg-secondary/50 rounded-md transition-colors">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm">
                          JD
                        </AvatarFallback>
                      </Avatar>
                      <ChevronDown className={`h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:text-foreground ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem onClick={() => onNavigate('profile')}>
                      <UserCircle className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onNavigate('watchlist')}>
                      <Bookmark className="mr-2 h-4 w-4" />
                      Watchlist
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onNavigate('history')}>
                      <Clock className="mr-2 h-4 w-4" />
                      History
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive" onClick={onLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}