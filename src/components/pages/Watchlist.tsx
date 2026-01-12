import { Bookmark, TrendingUp } from 'lucide-react';
import { MarketCardA, MarketCardD } from '../MarketCards';
import { AppContainer } from '../layout/AppContainer';

export function WatchlistPage() {
  return (
    <AppContainer>
      <div className="py-8">
        <div className="flex items-center gap-3 mb-6">
          <Bookmark className="h-7 w-7 text-blue-400" />
          <h1 className="text-3xl font-semibold">My Watchlist</h1>
        </div>
        <p className="text-muted-foreground">Markets you're tracking</p>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border border-border/40 rounded-lg p-5">
            <div className="text-sm text-muted-foreground mb-1">Total Watched</div>
            <div className="text-2xl font-semibold">12 Markets</div>
          </div>
          <div className="bg-card border border-border/40 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <div className="text-sm text-muted-foreground">Trending Up</div>
            </div>
            <div className="text-2xl font-semibold text-green-400">7 Markets</div>
          </div>
        </div>

        {/* Watchlist Markets - List View */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Active Markets</h3>
          <div className="space-y-2">
            <MarketCardD
              question="Will Bitcoin reach $100,000 by end of 2026?"
              yesProb={67}
              volume="$2.4M"
              category="Crypto"
            />
            <MarketCardD
              question="Will the Fed cut interest rates in Q2 2026?"
              yesProb={71}
              volume="$2.8M"
              category="Finance"
            />
            <MarketCardD
              question="Will ChatGPT-5 be released in 2026?"
              yesProb={78}
              volume="$1.2M"
              category="Tech"
            />
            <MarketCardD
              question="Will Apple announce AR glasses in 2026?"
              yesProb={41}
              volume="$980K"
              category="Tech"
            />
            <MarketCardD
              question="Will Tesla's stock price exceed $400 by end of 2026?"
              yesProb={62}
              volume="$3.2M"
              category="Finance"
            />
          </div>
        </div>

        {/* Featured Watched Markets - Grid View */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Featured from Watchlist</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <MarketCardA
              question="Will SpaceX land humans on Mars by 2026?"
              probability={12}
              volume="$890K"
            />
            <MarketCardA
              question="Will Sam Altman still be CEO of OpenAI by end of 2026?"
              probability={85}
              volume="$2.1M"
            />
            <MarketCardA
              question="Will NASA announce a major discovery in 2026?"
              probability={59}
              volume="$1.3M"
            />
          </div>
        </div>
      </div>
    </AppContainer>
  );
}