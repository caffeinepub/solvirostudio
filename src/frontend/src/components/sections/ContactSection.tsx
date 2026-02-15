import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import GradientButton from '../GradientButton';
import { Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { useSubmitContactForm } from '../../hooks/useSubmitContactForm';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const { submitForm, isSubmitting, isSuccess, isError, error } = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullMessage = formData.company
      ? `Company: ${formData.company}\n\n${formData.message}`
      : formData.message;
    
    await submitForm(formData.name, formData.email, fullMessage);
    
    if (!isError) {
      setFormData({ name: '', email: '', company: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 brand-gradient-text">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to solve your solar business marketing challenges and see measurable results? Contact SolviroStudio today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="mb-8 border-2 hover:border-brand-primary transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 brand-gradient rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:solvirostudio@gmail.com"
                    className="text-lg brand-gradient-text font-semibold hover:underline"
                  >
                    solvirostudio@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-brand-primary transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 brand-gradient rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">Phone placeholder</p>
                </CardContent>
              </Card>

              <div className="mt-8 p-8 bg-card rounded-2xl border-2 border-brand-primary/20">
                <h3 className="text-2xl font-bold mb-4">Why Choose SolviroStudio?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>Specialized in solar industry marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>Proven track record of generating qualified leads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>Data-driven strategies with measurable ROI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                    <span>Creative excellence that stands out</span>
                  </li>
                </ul>
              </div>
            </div>

            <Card className="border-2 border-brand-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your solar company"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your marketing challenges..."
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  {isSuccess && (
                    <Alert className="bg-green-50 border-green-200">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </AlertDescription>
                    </Alert>
                  )}

                  {isError && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        {error || 'Failed to send message. Please try again.'}
                      </AlertDescription>
                    </Alert>
                  )}

                  <GradientButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Contact Me'}
                  </GradientButton>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
