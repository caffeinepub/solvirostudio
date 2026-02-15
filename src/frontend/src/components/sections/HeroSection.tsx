import GradientButton from '../GradientButton';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center brand-gradient overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            SolviroStudio – Meta Ads & Creative Designs That Solve Your Solar Business Challenges
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
            We help solar companies attract leads, engage their audience, and maximize ROI with creative campaigns.
          </p>
          
          <GradientButton
            onClick={onGetStarted}
            className="bg-white text-brand-primary hover:bg-white/90"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </GradientButton>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
