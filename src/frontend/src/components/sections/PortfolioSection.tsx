import GradientButton from '../GradientButton';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PortfolioSectionProps {
  onViewFullPortfolio: () => void;
}

export default function PortfolioSection({ onViewFullPortfolio }: PortfolioSectionProps) {
  const projects = [
    {
      image: '/assets/generated/portfolio-ad-1.dim_1200x900.png',
      goal: 'Generate qualified solar installation leads',
      leads: '450+ leads',
      engagement: '12.5% CTR',
      roi: '380% ROI',
    },
    {
      image: '/assets/generated/portfolio-ad-2.dim_1200x900.png',
      goal: 'Increase brand awareness for residential solar',
      leads: '620+ leads',
      engagement: '15.2% engagement rate',
      roi: '425% ROI',
    },
    {
      image: '/assets/generated/portfolio-ad-3.dim_1200x900.png',
      goal: 'Drive commercial solar consultations',
      leads: '280+ leads',
      engagement: '9.8% CTR',
      roi: '310% ROI',
    },
    {
      image: '/assets/generated/portfolio-ad-4.dim_1200x900.png',
      goal: 'Promote solar financing options',
      leads: '540+ leads',
      engagement: '14.1% engagement rate',
      roi: '395% ROI',
    },
    {
      image: '/assets/generated/portfolio-ad-5.dim_1200x900.png',
      goal: 'Launch new solar product line',
      leads: '380+ leads',
      engagement: '11.3% CTR',
      roi: '340% ROI',
    },
    {
      image: '/assets/generated/portfolio-ad-6.dim_1200x900.png',
      goal: 'Retarget website visitors for conversions',
      leads: '490+ leads',
      engagement: '16.7% engagement rate',
      roi: '450% ROI',
    },
    {
      image: '/assets/generated/portfolio-ad-7.dim_1200x900.png',
      goal: 'Generate solar leads in new markets',
      leads: '710+ leads',
      engagement: '13.9% CTR',
      roi: '410% ROI',
    },
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 brand-gradient-text">
              Our Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real campaigns, real results. See how we've helped solar companies grow their business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-brand-primary"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Portfolio project ${index + 1}: ${project.goal}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge className="brand-gradient text-white mb-3">Campaign Goal</Badge>
                    <p className="font-semibold text-lg">{project.goal}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Leads Generated:</span>
                      <span className="font-bold brand-gradient-text">{project.leads}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Engagement:</span>
                      <span className="font-bold brand-gradient-text">{project.engagement}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Return on Investment:</span>
                      <span className="font-bold brand-gradient-text">{project.roi}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <GradientButton onClick={onViewFullPortfolio}>
              View Full Portfolio
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
