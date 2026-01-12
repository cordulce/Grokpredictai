import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { AppContainer } from '../layout/AppContainer';

export function ContactPage() {
  return (
    <AppContainer>
      <div className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about GrokPredict? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border/40 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="font-semibold">Email Us</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                For general inquiries and support:
              </p>
              <a 
                href="mailto:hello@grokpredict.ai" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                hello@grokpredict.ai
              </a>
            </div>

            <div className="bg-card border border-border/40 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30">
                  <MessageSquare className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="font-semibold">Response Time</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24 hours during business days. Pro users receive priority support.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border/40 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  className="bg-secondary/30"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-secondary/30"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell us what's on your mind..."
                  className="bg-secondary/30 min-h-[120px]"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-secondary/30 border border-border/20 rounded-lg p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Looking for technical support? Check our{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">Help Center</a>
            {' '}or browse our{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">API Documentation</a>.
          </p>
        </div>
      </div>
    </AppContainer>
  );
}