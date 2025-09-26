import { CheckCircle, Droplets, Sun, Battery, Shield } from 'lucide-react';
import hopeDropSystem from '@/assets/hopedrop-system.jpg';

const SolutionSection = () => {
  const specifications = [
    {
      icon: Droplets,
      title: 'Processing Capacity',
      value: '3.8 liters/minute',
      subtitle: '5,472 liters/day',
      color: 'text-primary',
    },
    {
      icon: Sun,
      title: 'Power Source',
      value: '300W Solar Panel',
      subtitle: 'with 12V battery backup',
      color: 'text-accent',
    },
    {
      icon: Shield,
      title: 'Purification Efficiency',
      value: '96.6%',
      subtitle: 'contaminant removal',
      color: 'text-secondary',
    },
    {
      icon: Battery,
      title: 'Salt Reduction',
      value: '500 → 200 ppm',
      subtitle: 'TDS improvement',
      color: 'text-water',
    },
    {
      icon: CheckCircle,
      title: 'Pathogen Elimination',
      value: '99.9%',
      subtitle: 'bacteria and virus removal',
      color: 'text-secondary',
    },
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-background via-muted/30 to-water/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-ocean">
            Meet HopeDrop: Your Water Purification Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary solar-powered technology that transforms contaminated water into safe, clean drinking water anywhere, anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-ocean rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative bg-background rounded-2xl p-8 shadow-strong">
              <img
                src={hopeDropSystem}
                alt="HopeDrop Solar Water Purification System"
                className="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                Solar Powered
              </div>
              <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                Portable
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient-solar">
                Technical Excellence
              </h3>
              <p className="text-muted-foreground">
                Advanced engineering designed specifically for Bangladesh's challenging environments.
              </p>
            </div>

            <div className="grid gap-4">
              {specifications.map((spec, index) => (
                <div
                  key={index}
                  className="card-feature group cursor-pointer hover:border-primary/30"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${spec.color} bg-current/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <spec.icon size={24} className={spec.color} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {spec.title}
                      </h4>
                      <div className={`text-lg font-bold ${spec.color} mb-1 group-hover:scale-105 transition-transform duration-300`}>
                        {spec.value}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {spec.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 mb-8">
            {[
              'Climate Adaptive',
              'Flood Resistant', 
              'Portable Design',
              'Smart Automation',
              'Community Focused'
            ].map((benefit, index) => (
              <span
                key={index}
                className="bg-gradient-sustainability text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300"
              >
                {benefit}
              </span>
            ))}
          </div>
          
          <a
            href="#features"
            className="btn-secondary px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2"
          >
            Explore All Features
            <CheckCircle size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;