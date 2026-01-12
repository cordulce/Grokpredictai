import { Check } from 'lucide-react';
import { Button } from '../ui/button';
import { AppContainer } from '../layout/AppContainer';

export function PricingPage() {
  return (
    <AppContainer>
      <div className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade as you grow. No hidden fees or complex tiers.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Starter Tier */}
          <div className="bg-card border border-border/40 rounded-lg p-8 hover:border-blue-500/50 transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Starter</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl font-semibold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Perfect for exploring prediction markets
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Access to all public markets</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Basic market analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Up to 10 trades per day</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Community insights</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Email support</span>
              </li>
            </ul>

            <Button 
              variant="outline" 
              className="w-full hover:bg-secondary/80"
            >
              Get Started Free
            </Button>
          </div>

          {/* Pro Tier */}
          <div className="bg-card border-2 border-blue-500/50 rounded-lg p-8 relative hover:border-blue-500/70 transition-all shadow-lg shadow-blue-500/10 md:scale-105">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Pro</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl font-semibold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For serious traders and analysts
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Everything in Starter</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  <strong>Unlimited trades</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  <strong>AI-powered insights & predictions</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Advanced analytics dashboard</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Real-time price alerts</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Custom watchlists & portfolios</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Historical data export</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Priority support</span>
              </li>
            </ul>

            <Button 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Pro Trial
            </Button>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-card border border-border/40 rounded-lg p-8 hover:border-purple-500/50 transition-all">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl font-semibold">Custom</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For teams and institutions
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Everything in Pro</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  <strong>White-label solutions</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  <strong>Custom market creation</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">API access & integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Dedicated account manager</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Custom analytics & reporting</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">24/7 priority support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">SLA guarantees</span>
              </li>
            </ul>

            <Button 
              variant="outline" 
              className="w-full hover:bg-secondary/80"
            >
              Contact Sales
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-card border border-border/40 rounded-lg p-5">
              <h4 className="font-medium mb-2">Can I switch plans anytime?</h4>
              <p className="text-sm text-muted-foreground">
                Yes. Upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.
              </p>
            </div>
            <div className="bg-card border border-border/40 rounded-lg p-5">
              <h4 className="font-medium mb-2">What payment methods do you accept?</h4>
              <p className="text-sm text-muted-foreground">
                We accept all major credit cards, PayPal, and cryptocurrency payments.
              </p>
            </div>
            <div className="bg-card border border-border/40 rounded-lg p-5">
              <h4 className="font-medium mb-2">Is there a free trial for Pro?</h4>
              <p className="text-sm text-muted-foreground">
                Yes. New users get a 14-day free trial of Pro with full access to all features. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}