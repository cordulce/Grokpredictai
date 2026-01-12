import { Target, TrendingUp, Shield, Sparkles } from 'lucide-react';
import { AppContainer } from '../layout/AppContainer';

export function AboutPage() {
  return (
    <AppContainer>
      <div className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4">
            About GrokPredict
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building the future of transparent, data-driven prediction markets
          </p>
        </div>

        {/* Mission */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
              <Target className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-semibold">Our Mission</h2>
          </div>
          <div className="bg-card border border-border/40 rounded-lg p-6">
            <p className="text-muted-foreground mb-4">
              GrokPredict democratizes access to prediction markets by combining collective intelligence with AI-powered insights. We believe in transparent, probability-based forecasting for real-world events.
            </p>
            <p className="text-muted-foreground">
              Our platform empowers individuals to make informed decisions about the future—whether in politics, finance, technology, or culture—through market-driven probability assessments.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border/40 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Every market is backed by verifiable data. No hidden algorithms or opaque pricing mechanisms.
              </p>
            </div>

            <div className="bg-card border border-border/40 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30">
                  <Sparkles className="h-6 w-6 text-purple-400" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Leveraging AI and machine learning to surface insights and patterns invisible to human analysis alone.
              </p>
            </div>

            <div className="bg-card border border-border/40 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Accuracy</h3>
              <p className="text-sm text-muted-foreground">
                Markets aggregate information from thousands of participants, creating more accurate forecasts than expert opinions.
              </p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Why We Built This</h2>
          <div className="bg-card border border-border/40 rounded-lg p-6 space-y-4">
            <p className="text-muted-foreground">
              Traditional forecasting relies on pundits, polls, and expert opinions—all of which have proven unreliable. Prediction markets harness the wisdom of crowds, incentivizing accurate forecasts through financial stakes.
            </p>
            <p className="text-muted-foreground">
              By combining market mechanisms with AI-powered analysis, GrokPredict offers a new way to understand probability and make decisions based on data rather than speculation.
            </p>
            <p className="text-muted-foreground">
              We're building a platform for the intellectually curious, the analytically minded, and anyone who values evidence-based thinking about the future.
            </p>
          </div>
        </div>

        {/* Team CTA */}
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">Join Us</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're building a team of engineers, data scientists, and market designers who share our vision for transparent, AI-enhanced forecasting.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-md transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </AppContainer>
  );
}