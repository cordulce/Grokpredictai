import { ArrowLeft, TrendingUp, Users, Clock, Share2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import { MarketCardA } from '../MarketCards';
import { AppContainer } from '../layout/AppContainer';

interface MarketDetailProps {
  onBack: () => void;
}

export function MarketDetail({ onBack }: MarketDetailProps) {
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no' | null>(null);
  const [amount, setAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const probability = 67;
  const noProb = 100 - probability;

  const handleConfirm = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setSelectedOption(null);
      setAmount('');
      setShowSuccess(false);
    }, 2000);
  };

  const calculateReturn = () => {
    const investAmount = parseFloat(amount) || 0;
    if (selectedOption === 'yes') {
      return (investAmount / (probability / 100)).toFixed(2);
    } else {
      return (investAmount / (noProb / 100)).toFixed(2);
    }
  };

  return (
    <AppContainer>
      <div className="py-8 max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Back to Markets</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Market Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Market Title & Stats */}
            <div className="bg-card border border-border/40 rounded-lg p-6">
              <h1 className="text-2xl font-semibold mb-4">
                Will Bitcoin reach $100,000 by end of 2026?
              </h1>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  <span>$2.4M volume</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>1,234 traders</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Ends Dec 31, 2026</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Description */}
            <div className="bg-card border border-border/40 rounded-lg p-6">
              <h3 className="font-semibold mb-3">About this market</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                This market resolves to "Yes" if Bitcoin (BTC) reaches a price of $100,000 USD or higher at any point before December 31, 2026, 11:59 PM EST. The resolution will be based on the closing price reported by major cryptocurrency exchanges including Coinbase, Binance, and Kraken.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If Bitcoin reaches $100,000 even momentarily during the specified timeframe, the market resolves to "Yes". The market will resolve to "No" if Bitcoin does not reach this price threshold by the deadline.
              </p>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-card border border-border/40 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Probability History</h3>
              <div className="h-64 bg-secondary/30 rounded-md flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Chart visualization would appear here</p>
              </div>
            </div>

            {/* Related Markets */}
            <div>
              <h3 className="font-semibold mb-4">Related Markets</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MarketCardA
                  question="Will Ethereum reach $10,000 in 2026?"
                  probability={45}
                  volume="$1.8M"
                />
                <MarketCardA
                  question="Will crypto market cap exceed $5T in 2026?"
                  probability={38}
                  volume="$950K"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Trading Panel */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border/40 rounded-lg p-6 sticky top-24">
              <h3 className="font-semibold mb-4">Place Position</h3>

              {/* Success State */}
              {showSuccess && (
                <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-md animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <p className="text-sm text-green-400 text-center font-medium">
                    Position placed successfully!
                  </p>
                </div>
              )}

              {/* Yes/No Buttons */}
              <div className="space-y-3 mb-4">
                <button
                  onClick={() => setSelectedOption('yes')}
                  className={`w-full p-4 rounded-lg transition-all ${
                    selectedOption === 'yes'
                      ? 'bg-green-500/20 border-2 border-green-500/50 scale-[1.02]'
                      : 'bg-green-500/10 border border-green-500/30 hover:bg-green-500/15'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${selectedOption === 'yes' ? 'text-green-400' : 'text-green-300'}`}>
                      Yes
                    </span>
                    <span className={`text-xl font-semibold ${selectedOption === 'yes' ? 'text-green-400' : 'text-green-300'}`}>
                      {probability}¢
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedOption('no')}
                  className={`w-full p-4 rounded-lg transition-all ${
                    selectedOption === 'no'
                      ? 'bg-red-500/20 border-2 border-red-500/50 scale-[1.02]'
                      : 'bg-red-500/10 border border-red-500/30 hover:bg-red-500/15'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${selectedOption === 'no' ? 'text-red-400' : 'text-red-300'}`}>
                      No
                    </span>
                    <span className={`text-xl font-semibold ${selectedOption === 'no' ? 'text-red-400' : 'text-red-300'}`}>
                      {noProb}¢
                    </span>
                  </div>
                </button>
              </div>

              {/* Selection Info */}
              {selectedOption && !showSuccess && (
                <div className="mb-4 p-3 bg-secondary/30 rounded-md border border-border/40 animate-in fade-in slide-in-from-bottom-1 duration-200">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current odds:</span>
                      <span className="font-medium">
                        {selectedOption === 'yes' ? `${probability}¢` : `${noProb}¢`}
                      </span>
                    </div>
                    {amount && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Investment:</span>
                          <span className="font-medium">${amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Potential return:</span>
                          <span className="font-medium text-green-400">${calculateReturn()}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Amount Input */}
              {selectedOption && !showSuccess && (
                <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  {/* Preset Amounts */}
                  <div className="grid grid-cols-4 gap-2">
                    {['10', '25', '50', '100'].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setAmount(preset)}
                        className={`px-2 py-2 text-sm rounded border transition-all ${
                          amount === preset
                            ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                            : 'bg-secondary/50 border-border/40 hover:bg-secondary'
                        }`}
                      >
                        ${preset}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full pl-8 pr-3 py-2.5 bg-secondary/50 border border-border/40 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedOption(null);
                        setAmount('');
                      }}
                      className="flex-1 px-4 py-2.5 bg-secondary/50 hover:bg-secondary border border-border/40 rounded-md text-sm font-medium transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleConfirm}
                      disabled={!amount || parseFloat(amount) <= 0}
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-500 disabled:to-gray-500 disabled:opacity-50 text-white rounded-md text-sm font-medium transition-all disabled:cursor-not-allowed"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              )}

              {!selectedOption && (
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Select Yes or No to get started
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}