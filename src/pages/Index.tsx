import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SolutionSection from '@/components/SolutionSection';
import FeaturesSection from '@/components/FeaturesSection';
import ImpactSection from '@/components/ImpactSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import TechnologySection from '@/components/TechnologySection';
import SustainabilitySection from '@/components/SustainabilitySection';
import ContactSection from '@/components/ContactSection';
import { useEffect } from 'react';

const Index = () => {
  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all scroll-animate elements
    const scrollElements = document.querySelectorAll('.scroll-animate');
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SEO Meta Tags */}
      <head>
        <title>HopeDrop - Portable Solar Water Purification System | Clean Water Anywhere, Anytime</title>
        <meta 
          name="description" 
          content="HopeDrop provides revolutionary solar-powered water purification systems for flood-affected, coastal areas, and hill tracks in Bangladesh. 99.9% purification efficiency, 20-hour battery backup." 
        />
        <meta 
          name="keywords" 
          content="water purification, solar power, Bangladesh, flood relief, clean water, portable water system, water treatment" 
        />
        <meta name="author" content="HopeDrop Team" />
        <meta property="og:title" content="HopeDrop - Clean Water. Anywhere. Anytime." />
        <meta property="og:description" content="Revolutionary portable solar water purification system for Bangladesh's challenging environments." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </head>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Solution Showcase */}
        <div className="scroll-animate">
          <SolutionSection />
        </div>

        {/* Key Features */}
        <div className="scroll-animate">
          <FeaturesSection />
        </div>

        {/* Impact & Benefits */}
        <div className="scroll-animate">
          <ImpactSection />
        </div>

        {/* Applications */}
        <div className="scroll-animate">
          <ApplicationsSection />
        </div>

        {/* Technology */}
        <div className="scroll-animate">
          <TechnologySection />
        </div>

        {/* Sustainability */}
        <div className="scroll-animate">
          <SustainabilitySection />
        </div>

        {/* Contact */}
        <div className="scroll-animate">
          <ContactSection />
        </div>
      </main>

      {/* Footer with Clean Water Theme */}
      <footer className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16 relative overflow-hidden">
        {/* Water Flow Background Effect */}
        <div className="absolute inset-0 bg-gradient-flow opacity-20 animate-gradient-flow" />
        
        {/* Floating Water Bubbles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <span className="text-3xl font-bold text-white animate-water-flow">HopeDrop</span>
              <p className="text-primary-foreground/80 mt-2 text-lg animate-wave">
                Pure Water. Bright Future.
              </p>
            </div>
            
            <div className="text-primary-foreground/70 mb-6 max-w-2xl mx-auto leading-relaxed">
              © 2024 HopeDrop. Bringing revolutionary water purification solutions to communities across Bangladesh and beyond.
            </div>
            
            <div className="flex justify-center gap-8 text-sm">
              <a href="#" className="hover:text-white transition-all duration-300 hover:scale-105 water-ripple px-4 py-2 rounded-lg">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-all duration-300 hover:scale-105 water-ripple px-4 py-2 rounded-lg">Terms of Service</a>
              <a href="#contact" className="hover:text-white transition-all duration-300 hover:scale-105 water-ripple px-4 py-2 rounded-lg">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
