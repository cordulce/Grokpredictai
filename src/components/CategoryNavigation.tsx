import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';

const PRIMARY_CATEGORIES = [
  { id: 'trending', label: 'Trending', fixed: true, icon: TrendingUp },
  { id: 'breaking', label: 'Breaking', fixed: true },
  { id: 'new', label: 'New', fixed: true },
  { id: 'politics', label: 'Politics' },
  { id: 'sports', label: 'Sports' },
  { id: 'crypto', label: 'Crypto' },
  { id: 'finance', label: 'Finance' },
  { id: 'tech', label: 'Tech' },
  { id: 'culture', label: 'Culture' },
  { id: 'world', label: 'World' },
  { id: 'economy', label: 'Economy' },
  { id: 'climate', label: 'Climate & Science' },
  { id: 'elections', label: 'Elections' },
];

const SUBCATEGORIES: Record<string, string[]> = {
  trending: ['AI', 'Bitcoin', 'Elections', 'Sports'],
  breaking: ['Latest', 'Past 24h', 'This Week'],
  new: ['Just Added', 'Popular', 'High Volume'],
  politics: ['US Politics', 'World Leaders', 'Congress', 'Elections 2026', 'Policy'],
  sports: ['NFL', 'NBA', 'Soccer', 'Tennis', 'Olympics', 'UFC'],
  crypto: ['Bitcoin', 'Ethereum', 'Altcoins', 'DeFi', 'NFTs'],
  finance: ['Stocks', 'Markets', 'Economy', 'Fed Policy', 'Earnings'],
  tech: ['AI', 'Apple', 'Tesla', 'Startups', 'IPOs'],
  culture: ['Entertainment', 'Music', 'Awards', 'Celebrities'],
  world: ['Middle East', 'Europe', 'Asia', 'Africa', 'Americas'],
  economy: ['GDP', 'Inflation', 'Jobs', 'Markets', 'Commodities'],
  climate: ['Climate', 'Space', 'Research', 'Energy'],
  elections: ['Presidential', 'Senate', 'House', 'State', 'International'],
};

export function CategoryNavigation() {
  const [selectedCategory, setSelectedCategory] = useState('trending');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const subScrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setShowLeftScroll(scrollLeft > 10);
    setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
    setIsScrolled(scrollLeft > 0);
  };

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (!ref.current) return;
    const scrollAmount = 200;
    ref.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      handleScroll(scrollRef);
      ref.addEventListener('scroll', () => handleScroll(scrollRef));
      return () => ref.removeEventListener('scroll', () => handleScroll(scrollRef));
    }
  }, []);

  useEffect(() => {
    // Reset subcategory to "All" when primary category changes
    setSelectedSubcategory('All');
  }, [selectedCategory]);

  useEffect(() => {
    // Mobile scroll behavior - hide categories on scroll down
    let lastScrollY = window.scrollY;
    let isHorizontalScroll = false;
    let scrollTimeout: NodeJS.Timeout;

    const handlePageScroll = () => {
      const currentScrollY = window.scrollY;
      if (window.innerWidth < 1024) { // Only on mobile/tablet
        // Don't hide header if user is scrolling horizontally in categories
        if (!isHorizontalScroll) {
          if (currentScrollY > lastScrollY && currentScrollY > 80) {
            setIsScrolled(true);
          } else if (currentScrollY < lastScrollY) {
            setIsScrolled(false);
          }
        }
      }
      lastScrollY = currentScrollY;
    };

    const handleCategoryScroll = () => {
      // User is scrolling categories horizontally, lock header position
      isHorizontalScroll = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isHorizontalScroll = false;
      }, 150);
    };

    window.addEventListener('scroll', handlePageScroll, { passive: true });
    
    const scrollRefElement = scrollRef.current;
    const subScrollRefElement = subScrollRef.current;
    
    if (scrollRefElement) {
      scrollRefElement.addEventListener('scroll', handleCategoryScroll, { passive: true });
    }
    if (subScrollRefElement) {
      subScrollRefElement.addEventListener('scroll', handleCategoryScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handlePageScroll);
      if (scrollRefElement) {
        scrollRefElement.removeEventListener('scroll', handleCategoryScroll);
      }
      if (subScrollRefElement) {
        subScrollRefElement.removeEventListener('scroll', handleCategoryScroll);
      }
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className={`sticky top-16 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 lg:translate-y-0 ${isScrolled ? 'lg:translate-y-0 -translate-y-full' : 'translate-y-0'}`}>
      {/* Primary Categories */}
      <div className="relative border-b border-border/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1280px]">
          <div className="relative">
            {showLeftScroll && (
              <button
                onClick={() => scroll(scrollRef, 'left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-background/90 hover:bg-secondary/80 border border-border/40 rounded-full flex items-center justify-center shadow-sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
            
            <div
              ref={scrollRef}
              className="flex gap-2 overflow-x-auto scrollbar-hide py-3 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {PRIMARY_CATEGORIES.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      flex-shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all
                      ${
                        selectedCategory === category.id
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                          : 'bg-secondary/50 text-foreground/70 hover:bg-secondary hover:text-foreground border border-transparent'
                      }
                    `}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {category.label}
                  </button>
                );
              })}
            </div>

            {showRightScroll && (
              <button
                onClick={() => scroll(scrollRef, 'right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-background/90 hover:bg-secondary/80 border border-border/40 rounded-full flex items-center justify-center shadow-sm"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Subcategories */}
      <div className="relative border-b border-border/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1280px]">
          <div
            ref={subScrollRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide py-2.5 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <button
              onClick={() => setSelectedSubcategory('All')}
              className={`flex-shrink-0 px-3 py-1 rounded-full text-xs transition-all ${
                selectedSubcategory === 'All'
                  ? 'bg-blue-500/15 text-blue-400 border border-blue-500/40 font-medium'
                  : 'bg-secondary/30 text-foreground/60 hover:bg-secondary/50 hover:text-foreground border border-border/20'
              }`}
            >
              All
            </button>
            {SUBCATEGORIES[selectedCategory]?.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={`flex-shrink-0 px-3 py-1 rounded-full text-xs transition-all ${
                  selectedSubcategory === sub
                    ? 'bg-blue-500/15 text-blue-400 border border-blue-500/40 font-medium'
                    : 'bg-secondary/30 text-foreground/60 hover:bg-secondary/50 hover:text-foreground border border-border/20'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}