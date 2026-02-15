import GradientButton from '../GradientButton';
import { Card } from '@/components/ui/card';
import { Target, Zap, TrendingUp } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export default function AboutSection({ onLearnMore }: AboutSectionProps) {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 brand-gradient-text">
                About SolviroStudio
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                At SolviroStudio, we specialize in Meta Ads and Creative Design to help solar companies overcome marketing challenges and achieve measurable growth.
              </p>
              <GradientButton onClick={onLearnMore}>
                Learn More
              </GradientButton>
            </div>

            <div className="relative">
              <img
                src="/assets/generated/team-illustration.dim_1200x800.png"
                alt="SolviroStudio team working on creative campaigns"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-brand-primary">
              <div className="w-16 h-16 brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Targeted Solutions</h3>
              <p className="text-muted-foreground">
                We understand solar business challenges and create campaigns that directly address them.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-brand-primary">
              <div className="w-16 h-16 brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Creative Excellence</h3>
              <p className="text-muted-foreground">
                Eye-catching designs that stop scrollers and convert them into qualified leads.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2 hover:border-brand-primary">
              <div className="w-16 h-16 brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Measurable Growth</h3>
              <p className="text-muted-foreground">
                Data-driven strategies that deliver real ROI and sustainable business growth.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
