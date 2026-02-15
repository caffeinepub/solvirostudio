import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "SolviroStudio transformed our Meta Ads strategy. We went from struggling to get leads to generating 50+ qualified solar leads per month. Their creative designs are absolutely stunning!",
      author: 'Michael Chen',
      company: 'SunPower Solutions',
      role: 'Marketing Director',
    },
    {
      quote:
        "The ROI we've seen from working with SolviroStudio is incredible. Their team understands the solar industry and knows exactly how to craft campaigns that resonate with our target audience.",
      author: 'Sarah Martinez',
      company: 'Green Energy Pros',
      role: 'CEO',
    },
    {
      quote:
        "Working with SolviroStudio has been a game-changer. Their creative campaigns not only look amazing but actually convert. We've seen a 380% increase in lead generation since partnering with them.",
      author: 'David Thompson',
      company: 'Solar Innovations Inc',
      role: 'VP of Sales',
    },
    {
      quote:
        "The attention to detail and strategic thinking that SolviroStudio brings to every campaign is unmatched. They've helped us scale our solar business faster than we ever thought possible.",
      author: 'Jennifer Lee',
      company: 'EcoSolar Systems',
      role: 'Founder',
    },
    {
      quote:
        "SolviroStudio doesn't just create ads—they create results. Their data-driven approach and creative excellence have made them an invaluable partner in our growth journey.",
      author: 'Robert Williams',
      company: 'Bright Future Solar',
      role: 'Chief Marketing Officer',
    },
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 brand-gradient-text">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our clients love the results we deliver – from creative campaigns to lead generation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-brand-primary"
              >
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-brand-primary mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-lg">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm brand-gradient-text font-semibold">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
