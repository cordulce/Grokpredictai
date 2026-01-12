import { TrendingUp, Zap, Clock } from 'lucide-react';
import { MarketCardA, MarketCardB, MarketCardC, MarketCardD, MarketCardE, MarketCardF } from '../MarketCards';
import { MarketCardInteractive } from '../MarketCardInteractive';
import { AppContainer } from '../layout/AppContainer';
import { MarketCardMobileMulti, MarketCardMobileSports, MarketCardMobileList } from '../MarketCardMobile';

export function HomePage() {
  const handleNavigateToDetail = () => {
    // This will be handled by the parent App component
    console.log('Navigate to detail');
  };

  return (
    <AppContainer>
      <div className="py-8">
        {/* Trending Section */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp className="h-5 w-5 text-blue-400" />
            <h2 className="text-xl font-semibold">Trending Markets</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            <MarketCardA
              question="Will Bitcoin reach $100,000 by end of 2026?"
              probability={67}
              volume="$2.4M"
            />
            <MarketCardA
              question="Will Trump win the 2026 presidential nomination?"
              probability={54}
              volume="$3.8M"
            />
            <MarketCardA
              question="Will ChatGPT-5 be released in 2026?"
              probability={78}
              volume="$1.2M"
            />
            <MarketCardA
              question="Will SpaceX land humans on Mars by 2026?"
              probability={12}
              volume="$890K"
            />
            <MarketCardE
              question="Next Fed rate decision?"
              options={[
                { label: 'Cut', probability: 45, color: 'green' },
                { label: 'Hold', probability: 38, color: 'blue' },
                { label: 'Raise', probability: 17, color: 'red' },
              ]}
              volume="$1.6M"
            />
            <MarketCardA
              question="Will Apple announce AR glasses in 2026?"
              probability={41}
              volume="$980K"
            />
            <MarketCardA
              question="Will global oil prices exceed $120/barrel in 2026?"
              probability={35}
              volume="$1.5M"
            />
            <MarketCardA
              question="Will Amazon reach $3 trillion market cap?"
              probability={48}
              volume="$2.1M"
            />
          </div>
        </section>

        {/* Multi-Option Markets */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <Zap className="h-5 w-5 text-purple-400" />
            <h2 className="text-xl font-semibold">Multi-Outcome Markets</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <MarketCardB
              title="Who will win Super Bowl LXI in 2027?"
              volume="$5.2M"
              options={[
                { name: '🏈 Kansas City Chiefs', probability: 18 },
                { name: '🏈 San Francisco 49ers', probability: 15 },
                { name: '🏈 Buffalo Bills', probability: 12 },
                { name: '🏈 Philadelphia Eagles', probability: 11 },
                { name: '🏈 Other', probability: 44 },
              ]}
            />
            <MarketCardB
              title="Which company will reach $5T market cap first?"
              volume="$3.1M"
              options={[
                { name: '🍎 Apple', probability: 38 },
                { name: '🔍 Google', probability: 22 },
                { name: '⚡ Microsoft', probability: 20 },
                { name: '🤖 Nvidia', probability: 15 },
                { name: '⚡ Other', probability: 5 },
              ]}
            />
            <MarketCardF
              question="Will inflation exceed 3% by Q3 2026?"
              yesOptions={[
                { label: 'Above 4%', probability: 28 },
                { label: '3-4%', probability: 35 },
              ]}
              noOptions={[
                { label: '2-3%', probability: 26 },
                { label: 'Below 2%', probability: 11 },
              ]}
              volume="$2.7M"
            />
          </div>
        </section>

        {/* Sports Matches */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <h2 className="text-xl font-semibold">Sports & Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MarketCardC
              eventName="NBA Finals 2026"
              team1={{ name: 'Lakers', flag: '🏀', probability: 58 }}
              team2={{ name: 'Celtics', flag: '🏀', probability: 42 }}
              volume="$1.8M"
            />
            <MarketCardC
              eventName="Champions League Final"
              team1={{ name: 'Man City', flag: '⚽', probability: 45 }}
              team2={{ name: 'Real Madrid', flag: '⚽', probability: 38 }}
              draw={17}
              volume="$2.3M"
            />
            <MarketCardC
              eventName="World Series 2026"
              team1={{ name: 'Yankees', flag: '⚾', probability: 52 }}
              team2={{ name: 'Dodgers', flag: '⚾', probability: 48 }}
              volume="$1.1M"
            />
          </div>
        </section>

        {/* Recently Active - Two Column Layout */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <Clock className="h-5 w-5 text-green-400" />
            <h2 className="text-xl font-semibold">Recently Active</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-2">
              <MarketCardD
                question="Will the Fed cut interest rates in Q2 2026?"
                yesProb={71}
                volume="$2.8M"
                category="Finance"
              />
              <MarketCardD
                question="Will Apple announce a foldable iPhone in 2026?"
                yesProb={34}
                volume="$1.5M"
                category="Tech"
              />
              <MarketCardD
                question="Will unemployment rate drop below 3.5% by mid-2026?"
                yesProb={45}
                volume="$920K"
                category="Economy"
              />
            </div>

            {/* Right Column */}
            <div className="space-y-2">
              <MarketCardD
                question="Will Tesla's stock price exceed $400 by end of 2026?"
                yesProb={62}
                volume="$3.2M"
                category="Finance"
              />
              <MarketCardD
                question="Will there be a major AI safety regulation passed in the US in 2026?"
                yesProb={56}
                volume="$1.7M"
                category="Tech"
              />
              <MarketCardD
                question="Will global temperatures set a new record in 2026?"
                yesProb={68}
                volume="$890K"
                category="Climate"
              />
            </div>
          </div>
        </section>

        {/* More Markets */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <h2 className="text-xl font-semibold">More Markets</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MarketCardA
              question="Will Ethereum flip Bitcoin in market cap by 2026?"
              probability={23}
              volume="$1.9M"
            />
            <MarketCardA
              question="Will a new COVID variant emerge in 2026?"
              probability={41}
              volume="$750K"
            />
            <MarketCardA
              question="Will Twitter rebrand from X back to Twitter?"
              probability={8}
              volume="$620K"
            />
            <MarketCardA
              question="Will Sam Altman still be CEO of OpenAI by end of 2026?"
              probability={85}
              volume="$2.1M"
            />
            <MarketCardA
              question="Will gas prices exceed $5/gallon nationally in 2026?"
              probability={38}
              volume="$980K"
            />
            <MarketCardA
              question="Will NASA announce a major discovery in 2026?"
              probability={59}
              volume="$1.3M"
            />
            <MarketCardE
              question="Will the S&P 500 reach new highs in Q2?"
              options={[
                { label: 'Yes', probability: 58, color: 'green' },
                { label: 'Neutral', probability: 22, color: 'blue' },
                { label: 'No', probability: 20, color: 'red' },
              ]}
              volume="$2.9M"
            />
            <MarketCardA
              question="Will Meta launch a new VR headset in 2026?"
              probability={72}
              volume="$1.4M"
            />
            <MarketCardA
              question="Will China's GDP growth exceed 5% in 2026?"
              probability={64}
              volume="$1.8M"
            />
            <MarketCardA
              question="Will there be a major cybersecurity breach at a Fortune 500 company?"
              probability={77}
              volume="$920K"
            />
            <MarketCardA
              question="Will the EU pass major tech regulation in 2026?"
              probability={69}
              volume="$1.1M"
            />
            <MarketCardA
              question="Will renewable energy exceed 40% of US electricity generation?"
              probability={43}
              volume="$780K"
            />
          </div>
        </section>

        {/* AI & Technology */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <h2 className="text-xl font-semibold">AI & Technology</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            <MarketCardA
              question="Will GPT-5 be released before July 2026?"
              probability={45}
              volume="$3.5M"
            />
            <MarketCardA
              question="Will quantum computing achieve commercial viability?"
              probability={31}
              volume="$890K"
            />
            <MarketCardA
              question="Will autonomous vehicles be approved for major US cities?"
              probability={38}
              volume="$1.6M"
            />
            <MarketCardA
              question="Will a major social media platform shut down?"
              probability={15}
              volume="$670K"
            />
            <MarketCardE
              question="Which AI company will dominate by year-end?"
              options={[
                { label: 'OpenAI', probability: 42, color: 'green' },
                { label: 'Google', probability: 34, color: 'blue' },
                { label: 'Other', probability: 24, color: 'red' },
              ]}
              volume="$2.2M"
            />
            <MarketCardA
              question="Will brain-computer interfaces reach consumer market?"
              probability={22}
              volume="$540K"
            />
            <MarketCardA
              question="Will Apple Vision Pro sales exceed 1M units in 2026?"
              probability={53}
              volume="$1.9M"
            />
            <MarketCardA
              question="Will AI-generated content be regulated by major platforms?"
              probability={74}
              volume="$2.3M"
            />
          </div>
        </section>

        {/* Interactive Market Card */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <h2 className="text-xl font-semibold">Interactive Market Card</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <MarketCardInteractive
              question="Will the stock market crash in 2026?"
              probability={20}
              volume="$500K"
              onNavigateToDetail={handleNavigateToDetail}
            />
          </div>
        </section>
      </div>
    </AppContainer>
  );
}