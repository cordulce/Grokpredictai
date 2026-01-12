import { TrendingUp, Users } from 'lucide-react';

// Card Variant A - Simple Yes/No
interface MarketCardAProps {
  question: string;
  probability: number;
  volume: string;
}

export function MarketCardA({ question, probability, volume }: MarketCardAProps) {
  return (
    <div className="group bg-card border border-border/40 rounded-lg p-4 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
      <h3 className="text-sm mb-4 line-clamp-2 min-h-[40px]">{question}</h3>
      
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-3xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            {probability}%
          </div>
          <div className="text-xs text-muted-foreground mt-1">Chance</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-muted-foreground">Volume</div>
          <div className="text-sm font-medium">{volume}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button className="relative px-4 py-2.5 rounded-md bg-green-500/15 text-green-400 border-2 border-green-500/40 font-medium text-sm transition-all hover:bg-green-500/30 hover:border-green-400/70 hover:text-green-300 hover:shadow-xl hover:shadow-green-500/40 hover:scale-[1.04] active:scale-[0.96] active:bg-green-500/40">
          Yes
        </button>
        <button className="relative px-4 py-2.5 rounded-md bg-red-500/15 text-red-400 border-2 border-red-500/40 font-medium text-sm transition-all hover:bg-red-500/30 hover:border-red-400/70 hover:text-red-300 hover:shadow-xl hover:shadow-red-500/40 hover:scale-[1.04] active:scale-[0.96] active:bg-red-500/40">
          No
        </button>
      </div>
    </div>
  );
}

// Card Variant B - Multi-option outcome
interface MarketCardBProps {
  title: string;
  options: { name: string; probability: number }[];
  volume: string;
}

export function MarketCardB({ title, options, volume }: MarketCardBProps) {
  return (
    <div className="group bg-card border border-border/40 rounded-lg p-4 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Users className="h-3 w-3" />
          {volume}
        </div>
      </div>

      <div className="space-y-2">
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
                <span className="px-2 py-1 text-xs rounded bg-green-500/10 text-green-400 border border-green-500/30 opacity-0 group-hover/option:opacity-100 transition-all hover:bg-green-500/20 hover:scale-105">
                  Yes
                </span>
                <span className="px-2 py-1 text-xs rounded bg-red-500/10 text-red-400 border border-red-500/30 opacity-0 group-hover/option:opacity-100 transition-all hover:bg-red-500/20 hover:scale-105">
                  No
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Card Variant C - Sports / Match-based
interface MarketCardCProps {
  team1: { name: string; flag?: string; probability: number };
  team2: { name: string; flag?: string; probability: number };
  draw?: number;
  eventName: string;
  volume: string;
}

export function MarketCardC({ team1, team2, draw, eventName, volume }: MarketCardCProps) {
  return (
    <div className="group bg-card border border-border/40 rounded-lg p-4 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs text-muted-foreground">{eventName}</h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <TrendingUp className="h-3 w-3" />
          {volume}
        </div>
      </div>

      <div className="space-y-2">
        <button className="w-full flex items-center justify-between p-3 rounded-md bg-secondary/30 hover:bg-green-500/10 border border-border/30 hover:border-green-500/50 transition-all hover:shadow-md hover:shadow-green-500/20">
          <div className="flex items-center gap-2">
            {team1.flag && <span className="text-lg">{team1.flag}</span>}
            <span className="text-sm font-medium">{team1.name}</span>
          </div>
          <span className="text-lg font-semibold text-green-400">{team1.probability}%</span>
        </button>

        {draw !== undefined && (
          <button className="w-full flex items-center justify-between p-3 rounded-md bg-secondary/30 hover:bg-blue-500/10 border border-border/30 hover:border-blue-500/50 transition-all hover:shadow-md hover:shadow-blue-500/20">
            <span className="text-sm font-medium">Draw</span>
            <span className="text-lg font-semibold text-blue-400">{draw}%</span>
          </button>
        )}

        <button className="w-full flex items-center justify-between p-3 rounded-md bg-secondary/30 hover:bg-red-500/10 border border-border/30 hover:border-red-500/50 transition-all hover:shadow-md hover:shadow-red-500/20">
          <div className="flex items-center gap-2">
            {team2.flag && <span className="text-lg">{team2.flag}</span>}
            <span className="text-sm font-medium">{team2.name}</span>
          </div>
          <span className="text-lg font-semibold text-red-400">{team2.probability}%</span>
        </button>
      </div>
    </div>
  );
}

// Card Variant D - Compact list-style
interface MarketCardDProps {
  question: string;
  yesProb: number;
  volume: string;
  category: string;
}

export function MarketCardD({ question, yesProb, volume, category }: MarketCardDProps) {
  return (
    <div className="group w-full flex items-center gap-4 p-3 rounded-lg bg-card border border-border/40 hover:bg-secondary/30 hover:border-blue-500/50 transition-all cursor-pointer">
      <div className="flex-1 text-left">
        <div className="text-sm mb-1 line-clamp-1">{question}</div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{category}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {volume}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-right">
          <div className="text-xl font-semibold text-green-400">{yesProb}%</div>
          <div className="text-xs text-muted-foreground">Yes</div>
        </div>
        <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="px-3 py-1.5 rounded bg-green-500/10 text-green-400 border border-green-500/30 text-xs font-medium hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 transition-all">
            Yes
          </button>
          <button className="px-3 py-1.5 rounded bg-red-500/10 text-red-400 border border-red-500/30 text-xs font-medium hover:bg-red-500/20 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 transition-all">
            No
          </button>
        </div>
      </div>
    </div>
  );
}

// Card Variant E - Three-option market
interface MarketCardEProps {
  question: string;
  options: { label: string; probability: number; color: string }[];
  volume: string;
}

export function MarketCardE({ question, options, volume }: MarketCardEProps) {
  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; hoverBg: string; hoverBorder: string; hoverShadow: string }> = {
      green: {
        bg: 'bg-green-500/10',
        text: 'text-green-400',
        border: 'border-green-500/30',
        hoverBg: 'hover:bg-green-500/25',
        hoverBorder: 'hover:border-green-400/60',
        hoverShadow: 'hover:shadow-green-500/30',
      },
      blue: {
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        border: 'border-blue-500/30',
        hoverBg: 'hover:bg-blue-500/25',
        hoverBorder: 'hover:border-blue-400/60',
        hoverShadow: 'hover:shadow-blue-500/30',
      },
      red: {
        bg: 'bg-red-500/10',
        text: 'text-red-400',
        border: 'border-red-500/30',
        hoverBg: 'hover:bg-red-500/25',
        hoverBorder: 'hover:border-red-400/60',
        hoverShadow: 'hover:shadow-red-500/30',
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="group bg-card border border-border/40 rounded-lg p-4 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
      <h3 className="text-sm mb-3 line-clamp-2 min-h-[40px]">{question}</h3>
      
      <div className="flex items-center justify-end mb-4 text-xs text-muted-foreground">
        <Users className="h-3 w-3 mr-1" />
        {volume}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {options.map((option, index) => {
          const colors = getColorClasses(option.color);
          return (
            <button
              key={index}
              className={`relative px-3 py-3 rounded-md ${colors.bg} ${colors.text} border ${colors.border} font-medium text-sm transition-all ${colors.hoverBg} ${colors.hoverBorder} hover:shadow-lg ${colors.hoverShadow} hover:scale-[1.03] active:scale-[0.97]`}
            >
              <div className="text-xs opacity-80 mb-1">{option.label}</div>
              <div className="text-lg font-semibold">{option.probability}%</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Card Variant F - Dual choice with sub-options
interface MarketCardFProps {
  question: string;
  yesOptions: { label: string; probability: number }[];
  noOptions: { label: string; probability: number }[];
  volume: string;
}

export function MarketCardF({ question, yesOptions, noOptions, volume }: MarketCardFProps) {
  return (
    <div className="group bg-card border border-border/40 rounded-lg p-4 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
      <h3 className="text-sm mb-3 line-clamp-2">{question}</h3>
      
      <div className="flex items-center justify-end mb-4 text-xs text-muted-foreground">
        <Users className="h-3 w-3 mr-1" />
        {volume}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* YES Group */}
        <div className="space-y-2">
          <div className="text-xs font-medium text-green-400 mb-2 px-2">YES</div>
          {yesOptions.map((option, index) => (
            <button
              key={index}
              className="w-full p-2.5 rounded-md bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/25 hover:border-green-400/60 hover:shadow-md hover:shadow-green-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="text-xs opacity-90 mb-0.5">{option.label}</div>
              <div className="text-base font-semibold">{option.probability}%</div>
            </button>
          ))}
        </div>

        {/* NO Group */}
        <div className="space-y-2">
          <div className="text-xs font-medium text-red-400 mb-2 px-2">NO</div>
          {noOptions.map((option, index) => (
            <button
              key={index}
              className="w-full p-2.5 rounded-md bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/25 hover:border-red-400/60 hover:shadow-md hover:shadow-red-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="text-xs opacity-90 mb-0.5">{option.label}</div>
              <div className="text-base font-semibold">{option.probability}%</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}