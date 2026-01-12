import { useState, useEffect } from 'react';
import { TrendingUp, Users, ChevronDown } from 'lucide-react';

// Mobile Tap-to-Expand Wrapper for Multi-Outcome Cards
interface MarketCardMobileMultiProps {
  title: string;
  options: { name: string; probability: number }[];
  volume: string;
  onTitleClick?: () => void;
}

export function MarketCardMobileMulti({ title, options, volume, onTitleClick }: MarketCardMobileMultiProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Close when clicking outside (for mobile)
  useEffect(() => {
    if (!isExpanded) return;

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-market-card]')) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isExpanded]);

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    // Don't expand if clicking on title or already expanded buttons
    if (target.closest('[data-title]') || target.closest('button[data-action]')) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      data-market-card
      className={`bg-card border rounded-lg transition-all duration-200 ${
        isExpanded 
          ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
          : 'border-border/40'
      }`}
    >
      {/* Header - Always Visible */}
      <div 
        className="p-4 cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="flex items-start justify-between mb-2">
          <button
            data-title
            onClick={(e) => {
              e.stopPropagation();
              onTitleClick?.();
            }}
            className="text-sm font-medium text-left hover:text-blue-400 transition-colors flex-1 pr-2"
          >
            {title}
          </button>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              {volume}
            </div>
            <ChevronDown 
              className={`h-4 w-4 text-muted-foreground transition-transform lg:hidden ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </div>
        </div>

        {/* Collapsed State - Show Top Option Only */}
        {!isExpanded && (
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{options[0]?.name}</span>
            <span className="font-semibold text-blue-400">{options[0]?.probability}%</span>
          </div>
        )}
      </div>

      {/* Expanded State - Show All Options (Mobile) or Always Show (Desktop) */}
      <div 
        className={`overflow-hidden transition-all duration-200 ${
          isExpanded ? 'max-h-[1000px] lg:max-h-none' : 'max-h-0 lg:max-h-none'
        }`}
      >
        <div className="px-4 pb-4 space-y-2 lg:block hidden">
          {/* Desktop: Always show options with hover interaction */}
          {options.map((option, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-3 rounded-md bg-secondary/30 hover:bg-secondary/60 border border-border/30 hover:border-border transition-all group/option"
            >
              <span className="text-sm">{option.name}</span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-blue-400">
                  {option.probability}%
                </span>
                <div className="flex gap-1">
                  <span className="px-2 py-1 text-xs rounded bg-green-500/10 text-green-400 border border-green-500/30 opacity-0 group-hover/option:opacity-100 transition-all hover:bg-green-500/20">
                    Yes
                  </span>
                  <span className="px-2 py-1 text-xs rounded bg-red-500/10 text-red-400 border border-red-500/30 opacity-0 group-hover/option:opacity-100 transition-all hover:bg-red-500/20">
                    No
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile: Show options with visible action buttons when expanded */}
        <div className="px-4 pb-4 space-y-2 lg:hidden">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-3 rounded-md bg-secondary/30 border border-border/30"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">{option.name}</span>
                <span className="text-sm font-semibold text-blue-400">
                  {option.probability}%
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  data-action
                  className="flex-1 px-3 py-2 text-xs rounded bg-green-500/15 text-green-400 border border-green-500/30 font-medium active:bg-green-500/30"
                >
                  Yes
                </button>
                <button
                  data-action
                  className="flex-1 px-3 py-2 text-xs rounded bg-red-500/15 text-red-400 border border-red-500/30 font-medium active:bg-red-500/30"
                >
                  No
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Mobile Tap-to-Expand Wrapper for Sports Cards
interface MarketCardMobileSportsProps {
  team1: { name: string; flag?: string; probability: number };
  team2: { name: string; flag?: string; probability: number };
  draw?: number;
  eventName: string;
  volume: string;
  onTitleClick?: () => void;
}

export function MarketCardMobileSports({ team1, team2, draw, eventName, volume, onTitleClick }: MarketCardMobileSportsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) return;

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-market-card]')) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isExpanded]);

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-title]') || target.closest('button[data-action]')) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      data-market-card
      className={`bg-card border rounded-lg transition-all duration-200 ${
        isExpanded 
          ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' 
          : 'border-border/40'
      }`}
    >
      {/* Header - Always Visible */}
      <div 
        className="p-4 cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="flex items-center justify-between mb-3">
          <button
            data-title
            onClick={(e) => {
              e.stopPropagation();
              onTitleClick?.();
            }}
            className="text-xs text-muted-foreground hover:text-blue-400 transition-colors"
          >
            {eventName}
          </button>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3" />
              {volume}
            </div>
            <ChevronDown 
              className={`h-4 w-4 text-muted-foreground transition-transform lg:hidden ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </div>
        </div>

        {/* Collapsed State - Show Probabilities Only */}
        {!isExpanded && (
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <span>{team1.flag} {team1.name}</span>
              <span className="ml-2 text-blue-400 font-semibold">{team1.probability}%</span>
            </div>
            <div className="text-sm">
              <span className="mr-2 text-blue-400 font-semibold">{team2.probability}%</span>
              <span>{team2.flag} {team2.name}</span>
            </div>
          </div>
        )}
      </div>

      {/* Expanded State - Show Action Buttons */}
      <div 
        className={`overflow-hidden transition-all duration-200 ${
          isExpanded ? 'max-h-[500px] lg:max-h-none' : 'max-h-0 lg:max-h-none'
        }`}
      >
        <div className="px-4 pb-4 space-y-2 lg:block hidden">
          {/* Desktop: Hover-based interaction */}
          <div className="grid grid-cols-2 gap-2">
            <button className="group/team relative p-3 rounded-md bg-secondary/30 hover:bg-blue-500/10 border border-border/30 hover:border-blue-500/50 transition-all">
              <div className="text-sm mb-1">{team1.flag} {team1.name}</div>
              <div className="text-lg font-semibold text-blue-400">{team1.probability}%</div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/team:opacity-100 transition-opacity bg-blue-500/10 rounded-md">
                <span className="text-sm font-medium text-blue-400">Bet</span>
              </div>
            </button>
            <button className="group/team relative p-3 rounded-md bg-secondary/30 hover:bg-blue-500/10 border border-border/30 hover:border-blue-500/50 transition-all">
              <div className="text-sm mb-1">{team2.flag} {team2.name}</div>
              <div className="text-lg font-semibold text-blue-400">{team2.probability}%</div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/team:opacity-100 transition-opacity bg-blue-500/10 rounded-md">
                <span className="text-sm font-medium text-blue-400">Bet</span>
              </div>
            </button>
          </div>
          {draw !== undefined && (
            <button className="w-full p-3 rounded-md bg-secondary/30 hover:bg-orange-500/10 border border-border/30 hover:border-orange-500/50 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-sm">Draw</span>
                <span className="text-lg font-semibold text-orange-400">{draw}%</span>
              </div>
            </button>
          )}
        </div>

        {/* Mobile: Tap-based with explicit buttons */}
        <div className="px-4 pb-4 space-y-3 lg:hidden">
          <div className="p-3 rounded-md bg-secondary/30 border border-border/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">{team1.flag} {team1.name}</span>
              <span className="text-sm font-semibold text-blue-400">{team1.probability}%</span>
            </div>
            <button
              data-action
              className="w-full px-3 py-2 text-sm rounded bg-blue-500/15 text-blue-400 border border-blue-500/30 font-medium active:bg-blue-500/30"
            >
              Bet on {team1.name}
            </button>
          </div>

          <div className="p-3 rounded-md bg-secondary/30 border border-border/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">{team2.flag} {team2.name}</span>
              <span className="text-sm font-semibold text-blue-400">{team2.probability}%</span>
            </div>
            <button
              data-action
              className="w-full px-3 py-2 text-sm rounded bg-blue-500/15 text-blue-400 border border-blue-500/30 font-medium active:bg-blue-500/30"
            >
              Bet on {team2.name}
            </button>
          </div>

          {draw !== undefined && (
            <div className="p-3 rounded-md bg-secondary/30 border border-border/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Draw</span>
                <span className="text-sm font-semibold text-orange-400">{draw}%</span>
              </div>
              <button
                data-action
                className="w-full px-3 py-2 text-sm rounded bg-orange-500/15 text-orange-400 border border-orange-500/30 font-medium active:bg-orange-500/30"
              >
                Bet on Draw
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Mobile Tap-to-Expand for List-style cards (Recently Active)
interface MarketCardMobileListProps {
  question: string;
  yesProb: number;
  volume: string;
  category: string;
  onTitleClick?: () => void;
}

export function MarketCardMobileList({ question, yesProb, volume, category, onTitleClick }: MarketCardMobileListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const noProb = 100 - yesProb;

  useEffect(() => {
    if (!isExpanded) return;

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-market-card]')) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isExpanded]);

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-title]') || target.closest('button[data-action]')) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      data-market-card
      className={`bg-card border rounded-lg transition-all duration-200 ${
        isExpanded 
          ? 'border-blue-500/50 shadow-md shadow-blue-500/10' 
          : 'border-border/40'
      }`}
    >
      {/* Header - Always Visible */}
      <div 
        className="p-3 cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="flex items-start justify-between gap-2 mb-2">
          <button
            data-title
            onClick={(e) => {
              e.stopPropagation();
              onTitleClick?.();
            }}
            className="text-sm font-medium text-left hover:text-blue-400 transition-colors flex-1"
          >
            {question}
          </button>
          <ChevronDown 
            className={`h-4 w-4 text-muted-foreground transition-transform flex-shrink-0 mt-0.5 lg:hidden ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>

        {/* Collapsed State - Show Basic Info */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{category}</span>
          <div className="flex items-center gap-3">
            <span className="text-green-400 font-semibold">Yes {yesProb}%</span>
            <span className="text-muted-foreground">{volume}</span>
          </div>
        </div>
      </div>

      {/* Expanded State - Show Action Buttons (Mobile only) */}
      <div 
        className={`overflow-hidden transition-all duration-200 lg:hidden ${
          isExpanded ? 'max-h-[200px]' : 'max-h-0'
        }`}
      >
        <div className="px-3 pb-3">
          <div className="grid grid-cols-2 gap-2">
            <button
              data-action
              className="px-4 py-2.5 rounded-md bg-green-500/15 text-green-400 border border-green-500/30 font-medium text-sm active:bg-green-500/30"
            >
              Yes {yesProb}%
            </button>
            <button
              data-action
              className="px-4 py-2.5 rounded-md bg-red-500/15 text-red-400 border border-red-500/30 font-medium text-sm active:bg-red-500/30"
            >
              No {noProb}%
            </button>
          </div>
        </div>
      </div>

      {/* Desktop - Always show hover buttons */}
      <div className="hidden lg:block px-3 pb-3">
        <div className="grid grid-cols-2 gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="px-4 py-2 rounded-md bg-green-500/15 text-green-400 border border-green-500/30 font-medium text-sm hover:bg-green-500/30">
            Yes {yesProb}%
          </button>
          <button className="px-4 py-2 rounded-md bg-red-500/15 text-red-400 border border-red-500/30 font-medium text-sm hover:bg-red-500/30">
            No {noProb}%
          </button>
        </div>
      </div>
    </div>
  );
}
