import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How do prediction markets work?',
    answer: 'Prediction markets allow you to buy and sell shares on the outcome of future events. Prices represent the market\'s collective probability of an outcome occurring. If you believe an event is more likely than the current price suggests, you can buy shares. If it happens, you profit. Markets aggregate information from many participants, often producing more accurate forecasts than individual experts.',
  },
  {
    question: 'How are AI insights generated?',
    answer: 'Our AI analyzes historical market data, news sentiment, social media trends, and statistical patterns to identify correlations and probability shifts. The insights highlight unusual market movements, historical precedents, and data-driven predictions. AI suggestions are supplementary—final trading decisions remain yours.',
  },
  {
    question: 'Is GrokPredict free to use?',
    answer: 'Yes! Our Starter plan is completely free and gives you access to all public markets, basic analytics, and up to 10 trades per day. For unlimited trading, AI-powered insights, and advanced analytics, upgrade to our Pro plan for $29/month. All plans include transparent pricing with no hidden fees.',
  },
  {
    question: 'How are probabilities calculated?',
    answer: 'Probabilities are determined by market prices. If a "Yes" share trades at $0.67, that represents a 67% probability. Prices adjust in real-time as traders buy and sell based on their beliefs and information. This market-driven approach aggregates collective intelligence rather than relying on a single algorithm.',
  },
  {
    question: 'How does GrokPredict ensure data transparency and trust?',
    answer: 'Every market displays live volume, number of traders, and historical price movements. We don\'t use hidden algorithms to set prices—markets are entirely user-driven. All trades are recorded and verifiable. Our AI insights show their reasoning and data sources. We prioritize transparency to build trust and credibility.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1280px]">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-3">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`bg-card border rounded-lg overflow-hidden transition-all duration-200 ${
                  openIndex === index 
                    ? 'border-blue-500/50 bg-secondary/20' 
                    : 'border-border/40 hover:border-blue-500/30'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-secondary/30"
                >
                  <span className="font-medium pr-4">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-l-2 border-blue-500/50 ml-5">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}