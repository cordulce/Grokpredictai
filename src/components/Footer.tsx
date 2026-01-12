export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1280px] py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-3 text-sm">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Markets</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API Docs</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-sm">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-baseline" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="text-muted-foreground" style={{ fontWeight: 600 }}>Grok</span>
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text" style={{ fontWeight: 700 }}>PREDICT</span>
            <span className="text-[0.75em] text-muted-foreground/70" style={{ fontWeight: 500 }}>.ai</span>
          </div>
          <div>© 2026 GrokPredict. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}