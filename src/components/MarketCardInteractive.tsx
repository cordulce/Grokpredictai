import { useState } from 'react';
import { TrendingUp, X } from 'lucide-react';
import { Button } from './ui/button';

interface MarketCardInteractiveProps {
  question: string;
  probability: number;
  volume: string;
  onNavigateToDetail: () => void;
}

export function MarketCardInteractive({ question, probability, volume, onNavigateToDetail }: MarketCardInteractiveProps) {
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no' | null>(null);
  const [amount, setAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleOptionClick = (option: 'yes' | 'no', e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedOption(option);
    setShowSuccess(false);
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedOption(null);
    setAmount('');
    setShowSuccess(false);
  };

  const handleConfirm = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSuccess(true);
    setTimeout(() => {
      setSelectedOption(null);
      setAmount('');
      setShowSuccess(false);
    }, 2000);
  };

  const handlePresetAmount = (value: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setAmount(value);
  };

  const calculateReturn = () => {
    const investAmount = parseFloat(amount) || 0;
    if (selectedOption === 'yes') {
      return (investAmount / (probability / 100)).toFixed(2);
    } else {
      return (investAmount / ((100 - probability) / 100)).toFixed(2);
    }
  };

  const noProb = 100 - probability;

  return (
    <div 
      onClick={onNavigateToDetail}
      className="bg-card border border-border/40 rounded-lg p-4 hover:border-blue-500/50 transition-all cursor-pointer group overflow-hidden"
    >
      {/* Question */}
      <p className="text-sm mb-4 leading-snug group-hover:text-blue-400 transition-colors">
        {question}
      </p>

      {/* Success State */}
      {showSuccess && (
        <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-md animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-sm text-green-400 text-center font-medium">
            Position placed successfully!
          </p>
        </div>
      )}

      {/* Yes/No Buttons */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <button
          onClick={(e) => handleOptionClick('yes', e)}
          className={`p-3 rounded-md transition-all ${
            selectedOption === 'yes'
              ? 'bg-green-500/20 border-2 border-green-500/50 scale-[1.02]'
              : 'bg-green-500/10 border border-green-500/30 hover:bg-green-500/15'
          }`}
        >
          <div className="text-center">
            <div className="text-xs text-green-400 mb-1">Yes</div>
            <div className={`text-lg font-semibold ${selectedOption === 'yes' ? 'text-green-400' : 'text-green-300'}`}>
              {probability}¢
            </div>
          </div>
        </button>

        <button
          onClick={(e) => handleOptionClick('no', e)}
          className={`p-3 rounded-md transition-all ${
            selectedOption === 'no'
              ? 'bg-red-500/20 border-2 border-red-500/50 scale-[1.02]'
              : 'bg-red-500/10 border border-red-500/30 hover:bg-red-500/15'
          }`}
        >
          <div className="text-center">
            <div className="text-xs text-red-400 mb-1">No</div>
            <div className={`text-lg font-semibold ${selectedOption === 'no' ? 'text-red-400' : 'text-red-300'}`}>
              {noProb}¢
            </div>
          </div>
        </button>
      </div>

      {/* Step 1: Selection Info */}
      {selectedOption && !showSuccess && (
        <div className="mt-3 p-3 bg-secondary/30 rounded-md border border-border/40 animate-in fade-in slide-in-from-bottom-1 duration-200">
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Current odds:</span>
              <span className="font-medium">
                {selectedOption === 'yes' ? `${probability}¢` : `${noProb}¢`}
              </span>
            </div>
            {amount && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Potential return:</span>
                <span className="font-medium text-green-400">${calculateReturn()}</span>
              </div>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Enter amount below to continue
          </p>
        </div>
      )}

      {/* Step 2: Amount Input & Confirm */}
      {selectedOption && !showSuccess && (
        <div className="mt-3 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300" onClick={(e) => e.stopPropagation()}>
          {/* Preset Amounts */}
          <div className="flex gap-2">
            {['10', '25', '50', '100'].map((preset) => (
              <button
                key={preset}
                onClick={(e) => handlePresetAmount(preset, e)}
                className={`flex-1 px-2 py-1.5 text-xs rounded border transition-all ${
                  amount === preset
                    ? 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                    : 'bg-secondary/50 border-border/40 hover:bg-secondary'
                }`}
              >
                ${preset}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              placeholder="Enter amount"
              className="w-full pl-7 pr-3 py-2 bg-secondary/50 border border-border/40 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              className="flex-1 px-3 py-2 bg-secondary/50 hover:bg-secondary border border-border/40 rounded-md text-xs font-medium transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={!amount || parseFloat(amount) <= 0}
              className="flex-1 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-500 disabled:to-gray-500 disabled:opacity-50 text-white rounded-md text-xs font-medium transition-all disabled:cursor-not-allowed"
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* Volume - Always Visible */}
      {!selectedOption && (
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <TrendingUp className="h-3 w-3" />
          <span>{volume} volume</span>
        </div>
      )}
    </div>
  );
}