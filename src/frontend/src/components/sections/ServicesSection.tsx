import GradientButton from '../GradientButton';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Megaphone, Palette, LineChart } from 'lucide-react';

interface ServicesSectionProps {
  onExploreServices: () => void;
}

export default function ServicesSection({ onExploreServices }: ServicesSectionProps) {
  const services = [
    {
      icon: Megaphone,
      title: 'Meta Ads Management for Solar Companies',
      description:
        'Strategic Meta advertising campaigns designed to generate high-quality solar leads. We optimize targeting, creative, and budget to maximize your return on ad spend.',
    },
    {
      icon: Palette,
      title: 'Creative Design & Visual Campaigns',
      description:
        'Stunning ad creatives and visual content that capture attention and communicate your solar solutions effectively. From static images to video ads, we create content that converts.',
    },
    {
      icon: LineChart,
      title: 'ROI-Focused Lead Generation',
      description:
        'Data-driven lead generation strategies that deliver measurable results. We track every metric to ensure your marketing investment generates qualified leads and real business growth.',
    },
  ];

  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 brand-gradient-text">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive Meta Ads and creative solutions tailored for solar companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-brand-primary"
                >
                  <CardHeader>
                    <div className="w-16 h-16 brand-gradient rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <GradientButton onClick={onExploreServices}>
              Explore Services
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
