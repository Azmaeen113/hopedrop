import { ArrowDown, PlayCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden cursor-water">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/src/assets/ocean.mp4" type="video/mp4" />
      </video>
      
      {/* Video Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo at the top */}
          <div className="mb-2 animate-fade-in-up">
            <img 
              src="/src/assets/Untitled design (11).png" 
              alt="HopeDrop Logo" 
              className="mx-auto max-w-xs h-auto"
            />
          </div>

          {/* Main Headline with Mixed Colors */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-white">Clean Water.</span>{' '}
            <span className="text-gradient-ocean animate-wave">Anywhere.</span>{' '}
            <span className="text-gradient-water animate-wave" style={{ animationDelay: '0.5s' }}>Anytime.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl mb-6 text-white max-w-3xl mx-auto leading-relaxed animate-water-flow">
            Portable Solar Water Purifying System for Flood-Affected, Coastal Areas and Hill Tracks
          </p>

          {/* CTA Buttons with Water Ripple Effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="#solution"
              className="btn-hero water-ripple px-8 py-4 text-lg font-semibold flex items-center gap-2 group"
            >
              Learn More
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300 animate-wave" />
            </a>
            <a
              href="#contact"
              className="btn-outline water-ripple px-8 py-4 text-lg font-semibold flex items-center gap-2"
            >
              <PlayCircle size={20} className="animate-bubble" />
              Contact Our Team
            </a>
          </div>

          {/* Stats Preview with Water Drop Effects */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { value: '3.8L', label: 'Per Minute', color: 'primary' },
              { value: '99.9%', label: 'Purification', color: 'secondary' },
              { value: '50W', label: 'Solar Power', color: 'accent' },
              { value: '20hr', label: 'Battery Life', color: 'primary' },
            ].map((stat, index) => (
              <div key={index} className="text-center group water-drop">
                <div className={`text-2xl md:text-3xl font-bold mb-2 group-hover:scale-110 transition-all duration-500 animate-water-flow ${
                  stat.color === 'primary' ? 'text-gradient-ocean' :
                  stat.color === 'secondary' ? 'text-secondary' :
                  'text-gradient-water'
                }`} style={{ animationDelay: `${index * 0.2}s` }}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;