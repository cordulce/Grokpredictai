import { Search, X } from 'lucide-react';
import { MarketCardA, MarketCardD } from './MarketCards';
import { AppContainer } from './layout/AppContainer';

interface SearchResultsProps {
  query: string;
  onClose: () => void;
}

export function SearchResults({ query, onClose }: SearchResultsProps) {
  // Mock search results - in real app, this would filter based on query
  const results = [
    {
      type: 'card',
      question: 'Will Bitcoin reach $100,000 by end of 2026?',
      probability: 67,
      volume: '$2.4M',
    },
    {
      type: 'list',
      question: 'Will the Fed cut interest rates in Q2 2026?',
      yesProb: 71,
      volume: '$2.8M',
      category: 'Finance',
    },
    {
      type: 'card',
      question: 'Will ChatGPT-5 be released in 2026?',
      probability: 78,
      volume: '$1.2M',
    },
    {
      type: 'list',
      question: 'Will Apple announce AR glasses in 2026?',
      yesProb: 41,
      volume: '$980K',
      category: 'Tech',
    },
  ];

  const highlightQuery = (text: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} className="bg-blue-500/30 text-blue-300 rounded px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <AppContainer>
      <div className="py-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Search className="h-6 w-6 text-blue-400" />
              <h1 className="text-2xl font-semibold">Search Results</h1>
            </div>
            <p className="text-muted-foreground">
              Found {results.length} {results.length === 1 ? 'market' : 'markets'} for{' '}
              <span className="text-foreground font-medium">"{query}"</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary/50 rounded-md transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="space-y-6">
            {/* Grid Results */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Featured Markets</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results
                  .filter((r) => r.type === 'card')
                  .map((result, index) => (
                    <div key={index}>
                      <MarketCardA
                        question={result.question}
                        probability={result.probability!}
                        volume={result.volume}
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* List Results */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">All Results</h3>
              <div className="space-y-2">
                {results
                  .filter((r) => r.type === 'list')
                  .map((result, index) => (
                    <MarketCardD
                      key={index}
                      question={result.question}
                      yesProb={result.yesProb!}
                      volume={result.volume}
                      category={result.category!}
                    />
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="py-16 text-center">
            <Search className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No results found</h3>
            <p className="text-muted-foreground mb-6">
              We couldn't find any markets matching "{query}"
            </p>
            <div>
              <p className="text-sm text-muted-foreground mb-3">Try searching for:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <button className="px-3 py-1.5 bg-secondary/50 hover:bg-secondary text-sm rounded-md transition-colors">
                  Bitcoin
                </button>
                <button className="px-3 py-1.5 bg-secondary/50 hover:bg-secondary text-sm rounded-md transition-colors">
                  Elections
                </button>
                <button className="px-3 py-1.5 bg-secondary/50 hover:bg-secondary text-sm rounded-md transition-colors">
                  AI
                </button>
                <button className="px-3 py-1.5 bg-secondary/50 hover:bg-secondary text-sm rounded-md transition-colors">
                  Sports
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppContainer>
  );
}