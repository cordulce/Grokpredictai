import { Clock, TrendingUp, TrendingDown } from 'lucide-react';
import { useState } from 'react';
import { AppContainer } from '../layout/AppContainer';

export function HistoryPage() {
  const [activeTab, setActiveTab] = useState<'active' | 'resolved'>('active');

  const trades = [
    {
      id: 1,
      question: 'Will Bitcoin reach $100,000 by end of 2026?',
      position: 'Yes',
      entryPrice: 0.65,
      currentPrice: 0.67,
      amount: 100,
      date: 'Jan 8, 2026',
      status: 'active',
      pnl: +3.08,
    },
    {
      id: 2,
      question: 'Will the Fed cut interest rates in Q2 2026?',
      position: 'Yes',
      entryPrice: 0.68,
      currentPrice: 0.71,
      amount: 200,
      date: 'Jan 7, 2026',
      status: 'active',
      pnl: +8.82,
    },
    {
      id: 3,
      question: 'Will Trump win the 2026 presidential nomination?',
      position: 'No',
      entryPrice: 0.48,
      currentPrice: 0.46,
      amount: 150,
      date: 'Jan 6, 2026',
      status: 'active',
      pnl: +6.52,
    },
    {
      id: 4,
      question: 'Will ChatGPT-5 be released in 2026?',
      position: 'Yes',
      entryPrice: 0.72,
      currentPrice: 0.78,
      amount: 80,
      date: 'Jan 5, 2026',
      status: 'active',
      pnl: +6.67,
    },
    {
      id: 5,
      question: 'Will Ethereum flip Bitcoin in market cap by 2026?',
      position: 'Yes',
      entryPrice: 0.28,
      currentPrice: 0.23,
      amount: 120,
      date: 'Jan 4, 2026',
      status: 'active',
      pnl: -21.43,
    },
    {
      id: 6,
      question: 'Will Apple announce a foldable iPhone in 2026?',
      position: 'No',
      entryPrice: 0.62,
      currentPrice: 0.66,
      amount: 90,
      date: 'Jan 3, 2026',
      status: 'closed',
      pnl: -6.45,
    },
    {
      id: 7,
      question: 'Will Tesla stock exceed $300 by March 2026?',
      position: 'Yes',
      entryPrice: 0.55,
      currentPrice: 0.58,
      amount: 180,
      date: 'Jan 2, 2026',
      status: 'closed',
      pnl: +9.82,
    },
  ];

  const totalPnL = trades.reduce((acc, trade) => acc + trade.pnl, 0);
  const activeTrades = trades.filter(t => t.status === 'active').length;
  const closedTrades = trades.filter(t => t.status === 'closed').length;

  return (
    <AppContainer>
      <div className="py-8">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="h-7 w-7 text-green-400" />
          <h1 className="text-3xl font-semibold">Trading History</h1>
        </div>
        <p className="text-muted-foreground">Track your positions and performance</p>

        {/* Tab Navigation */}
        <div className="flex items-center gap-4 mt-4">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            } rounded`}
            onClick={() => setActiveTab('active')}
          >
            Active Positions
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'resolved' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            } rounded`}
            onClick={() => setActiveTab('resolved')}
          >
            Resolved Positions
          </button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border/40 rounded-lg p-5">
            <div className="text-sm text-muted-foreground mb-1">Total P&L</div>
            <div className={`text-2xl font-semibold ${totalPnL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {totalPnL >= 0 ? '+' : ''}{totalPnL.toFixed(2)}%
            </div>
          </div>
          <div className="bg-card border border-border/40 rounded-lg p-5">
            <div className="text-sm text-muted-foreground mb-1">Active Positions</div>
            <div className="text-2xl font-semibold">{activeTrades}</div>
          </div>
          <div className="bg-card border border-border/40 rounded-lg p-5">
            <div className="text-sm text-muted-foreground mb-1">Closed Positions</div>
            <div className="text-2xl font-semibold">{closedTrades}</div>
          </div>
          <div className="bg-card border border-border/40 rounded-lg p-5">
            <div className="text-sm text-muted-foreground mb-1">Win Rate</div>
            <div className="text-2xl font-semibold text-green-400">73%</div>
          </div>
        </div>

        {/* Trade History Table */}
        <div className="bg-card border border-border/40 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/30 border-b border-border/40">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium">Market</th>
                  <th className="text-left px-4 py-3 text-sm font-medium">Position</th>
                  <th className="text-right px-4 py-3 text-sm font-medium">Entry</th>
                  <th className="text-right px-4 py-3 text-sm font-medium">Current</th>
                  <th className="text-right px-4 py-3 text-sm font-medium">Amount</th>
                  <th className="text-right px-4 py-3 text-sm font-medium">P&L %</th>
                  <th className="text-left px-4 py-3 text-sm font-medium">Date</th>
                  <th className="text-center px-4 py-3 text-sm font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {trades
                  .filter(trade => activeTab === 'active' ? trade.status === 'active' : trade.status === 'closed')
                  .map((trade) => (
                    <tr key={trade.id} className="hover:bg-secondary/20 transition-colors">
                      <td className="px-4 py-4 text-sm max-w-xs">
                        <div className="line-clamp-2">{trade.question}</div>
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                          trade.position === 'Yes' 
                            ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                            : 'bg-red-500/10 text-red-400 border border-red-500/30'
                        }`}>
                          {trade.position}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-right">${trade.entryPrice.toFixed(2)}</td>
                      <td className="px-4 py-4 text-sm text-right">${trade.currentPrice.toFixed(2)}</td>
                      <td className="px-4 py-4 text-sm text-right">${trade.amount}</td>
                      <td className={`px-4 py-4 text-sm text-right font-medium ${
                        trade.pnl >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {trade.pnl >= 0 ? '+' : ''}{trade.pnl.toFixed(2)}%
                      </td>
                      <td className="px-4 py-4 text-sm text-muted-foreground">{trade.date}</td>
                      <td className="px-4 py-4 text-center">
                        {trade.status === 'active' ? (
                          <div className="flex items-center justify-center gap-1 text-blue-400">
                            <TrendingUp className="h-4 w-4" />
                            <span className="text-xs">Active</span>
                          </div>
                        ) : trade.pnl >= 0 ? (
                          <div className="flex items-center justify-center gap-1 text-green-400">
                            <TrendingUp className="h-4 w-4" />
                            <span className="text-xs">Win</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-1 text-red-400">
                            <TrendingDown className="h-4 w-4" />
                            <span className="text-xs">Loss</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}