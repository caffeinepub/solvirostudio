import GradientButton from '../GradientButton';
import { Card } from '@/components/ui/card';

interface ClientResultsSectionProps {
  onGetYourResults: () => void;
}

export default function ClientResultsSection({ onGetYourResults }: ClientResultsSectionProps) {
  const resultGraphics = [
    {
      image: '/assets/generated/results-graphic-1.dim_1400x900.png',
      alt: 'Campaign performance metrics showing lead growth',
    },
    {
      image: '/assets/generated/results-graphic-2.dim_1400x900.png',
      alt: 'ROI analysis and conversion rates',
    },
    {
      image: '/assets/generated/results-graphic-3.dim_1400x900.png',
      alt: 'Engagement metrics and audience reach',
    },
    {
      image: '/assets/generated/results-graphic-4.dim_1400x900.png',
      alt: 'Cost per lead and campaign efficiency',
    },
  ];

  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 brand-gradient-text">
              Client Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We deliver measurable results for solar companies. Here's what our clients achieved with SolviroStudio:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {resultGraphics.map((graphic, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-brand-primary"
              >
                <img
                  src={graphic.image}
                  alt={graphic.alt}
                  className="w-full h-auto"
                />
              </Card>
            ))}
          </div>

          <div className="text-center bg-card p-12 rounded-3xl shadow-xl border-2 border-brand-primary/20">
            <h3 className="text-3xl font-bold mb-4">Ready to See These Results for Your Business?</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the solar companies that are already growing with SolviroStudio's proven strategies.
            </p>
            <GradientButton onClick={onGetYourResults}>
              Get Your Results
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
