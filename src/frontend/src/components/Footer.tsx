import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'solvirostudio'
  );

  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold brand-gradient-text mb-4">SolviroStudio</h3>
              <p className="text-muted-foreground">
                Meta Ads & Creative Design specialists for solar companies.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#home" className="hover:text-brand-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-brand-primary transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-brand-primary transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-brand-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="mailto:solvirostudio@gmail.com"
                    className="hover:text-brand-primary transition-colors"
                  >
                    solvirostudio@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-muted-foreground">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <span>© {currentYear} SolviroStudio. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-gradient-text font-semibold hover:underline"
                >
                  caffeine.ai
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
