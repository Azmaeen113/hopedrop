import { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle, User, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest in HopeDrop. Our team will contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-ocean">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact our team to discover how HopeDrop can make a difference in your community or organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient-solar">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're a government agency, NGO, community organization, or individual interested in clean water solutions, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {[
                {
                  icon: MessageCircle,
                  title: 'Quick Response',
                  description: 'Get answers to your questions within 24 hours',
                  action: 'Send us a message using the form',
                },
                {
                  icon: Mail,
                  title: 'Direct Contact',
                  description: 'Reach out for partnerships and collaborations',
                  action: 'hopedrop.info@example.com',
                },
                {
                  icon: CheckCircle,
                  title: 'Technical Support',
                  description: 'Get detailed technical specifications and documentation',
                  action: 'Request technical materials',
                },
              ].map((method, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-ocean rounded-xl flex items-center justify-center">
                    <method.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                    <div className="text-sm text-primary font-medium">{method.action}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Organization Types */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-4">We Work With:</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Government Agencies',
                  'NGOs & Charities', 
                  'Community Organizations',
                  'Research Institutions',
                  'International Aid Groups',
                  'Private Foundations',
                ].map((org, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-gradient-ocean rounded-full" />
                    <span>{org}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-strong border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  <User size={16} className="inline mr-1" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  <Mail size={16} className="inline mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                  <Building size={16} className="inline mr-1" />
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your organization or company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  <MessageCircle size={16} className="inline mr-1" />
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your interest in HopeDrop, your community's needs, or any questions you have..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-hero py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Get In Touch
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by the HopeDrop team regarding your inquiry.
              </p>
            </form>
          </div>
        </div>

        {/* Social Media Placeholder */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-muted/30 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-muted-foreground">Follow our updates:</span>
            <div className="flex gap-2">
              {['LinkedIn', 'Twitter', 'Facebook'].map((platform, index) => (
                <button
                  key={index}
                  className="w-8 h-8 bg-gradient-ocean rounded-full flex items-center justify-center text-white text-xs font-semibold hover:scale-110 transition-transform duration-300"
                >
                  {platform[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;