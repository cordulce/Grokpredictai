import { TrendingUp, Brain, Shield, Zap, BarChart3, Users } from 'lucide-react';
import { AppContainer } from '../layout/AppContainer';

export function FeaturesPage() {
  return (
    <AppContainer>
      <div className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4">
            Prediction Markets, Powered by AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trade on real-world events with transparent, data-driven insights. Make informed decisions with AI-assisted analytics.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Real-time Markets */}
          <div className="bg-card border border-border/40 rounded-lg p-6 hover:border-blue-500/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <TrendingUp className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Real-time Markets</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Trade on live prediction markets across politics, finance, tech, sports, and culture. Prices update instantly based on collective market intelligence.
            </p>
            <div className="bg-secondary/30 rounded-md p-4 border border-border/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Bitcoin $100k by 2026?</span>
                <span className="text-green-400 font-semibold">67%</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 w-[67%]" />
              </div>
            </div>
          </div>

          {/* AI-Assisted Insights */}
          <div className="bg-card border border-border/40 rounded-lg p-6 hover:border-purple-500/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30">
                <Brain className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold">AI-Assisted Insights</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Get intelligent market analysis powered by advanced AI. Understand trends, correlations, and probability shifts before making decisions.
            </p>
            <div className="bg-secondary/30 rounded-md p-4 border border-border/20">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-medium">AI Insight</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Market confidence increased 12% after recent Fed announcement. Historical pattern suggests continued momentum.
              </p>
            </div>
          </div>

          {/* Transparent Data */}
          <div className="bg-card border border-border/40 rounded-lg p-6 hover:border-green-500/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/30">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Transparent & Data-Driven</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Every prediction is backed by verifiable data. See volume, liquidity, and market depth. No hidden algorithms or opaque pricing.
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-secondary/30 rounded-md p-3 border border-border/20 text-center">
                <div className="text-sm font-semibold">$2.4M</div>
                <div className="text-xs text-muted-foreground">Volume</div>
              </div>
              <div className="bg-secondary/30 rounded-md p-3 border border-border/20 text-center">
                <div className="text-sm font-semibold">8,429</div>
                <div className="text-xs text-muted-foreground">Traders</div>
              </div>
              <div className="bg-secondary/30 rounded-md p-3 border border-border/20 text-center">
                <div className="text-sm font-semibold">99.8%</div>
                <div className="text-xs text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Advanced Analytics */}
          <div className="bg-card border border-border/40 rounded-lg p-6 hover:border-orange-500/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/30">
                <BarChart3 className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold">Advanced Analytics</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Track your performance, analyze market movements, and refine your strategy with comprehensive dashboards and historical data.
            </p>
            <div className="bg-secondary/30 rounded-md p-4 border border-border/20">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Win Rate</span>
                  <span className="font-medium">73%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Avg. Return</span>
                  <span className="font-medium text-green-400">+18.4%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Total Trades</span>
                  <span className="font-medium">142</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-500/40">
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-3">Join the Community</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Connect with thousands of traders making data-driven predictions. Share insights, discuss markets, and learn from the collective intelligence.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <div>
              <div className="text-2xl font-semibold text-blue-400">50K+</div>
              <div className="text-muted-foreground">Active Traders</div>
            </div>
            <div className="w-px bg-border/40" />
            <div>
              <div className="text-2xl font-semibold text-purple-400">$120M+</div>
              <div className="text-muted-foreground">Total Volume</div>
            </div>
            <div className="w-px bg-border/40" />
            <div>
              <div className="text-2xl font-semibold text-green-400">2,400+</div>
              <div className="text-muted-foreground">Markets</div>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}