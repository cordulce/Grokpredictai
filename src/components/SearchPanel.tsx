import { Search, TrendingUp, Clock } from 'lucide-react';
import { Input } from './ui/input';
import { useState } from 'react';

interface SearchPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
}

const RECENT_SEARCHES = [
  'Trump presidency',
  'Bitcoin $100k',
  'Super Bowl 2026',
];

const SUGGESTED_MARKETS = [
  { title: 'Will Bitcoin hit $100k in 2026?', category: 'Crypto' },
  { title: 'Trump win 2026 election?', category: 'Politics' },
  { title: 'SpaceX Mars landing 2026?', category: 'Tech' },
];

const TRENDING_QUERIES = [
  'AI regulation',
  'Fed rate cuts',
  'Climate summit',
];

export function SearchPanel({ isOpen, onClose, onSearch }: SearchPanelProps) {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Search Panel */}
      <div className="fixed top-16 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4">
        <div className="bg-card border border-border/40 rounded-lg shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="p-4 border-b border-border/40">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search markets"
                autoFocus
                className="w-full pl-11 pr-4 h-12 bg-secondary/30 border-border/40 text-base"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    onSearch(query);
                    onClose();
                  }
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[70vh] overflow-y-auto p-4 space-y-6">
            {/* Recent Searches */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm text-muted-foreground">Recent</h3>
              </div>
              <div className="space-y-2">
                {RECENT_SEARCHES.map((search, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-secondary/50 transition-colors text-sm"
                    onClick={() => {
                      onSearch(search);
                      onClose();
                    }}
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Suggested Markets */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm text-muted-foreground">Suggested Markets</h3>
              </div>
              <div className="space-y-2">
                {SUGGESTED_MARKETS.map((market, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 py-2.5 rounded-md hover:bg-secondary/50 transition-colors"
                  >
                    <div className="text-sm">{market.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {market.category}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Trending Queries */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm text-muted-foreground">Trending</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {TRENDING_QUERIES.map((trendingQuery, index) => (
                  <button
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-secondary text-sm transition-colors"
                    onClick={() => {
                      onSearch(trendingQuery);
                      onClose();
                    }}
                  >
                    {trendingQuery}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}