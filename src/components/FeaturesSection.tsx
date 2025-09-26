import { Shield, Cpu, Leaf, Heart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Climate-Adaptive Design',
      description: 'Flood-resistant and portable construction',
      details: [
        'Waterproof housing rated IP67',
        'Lightweight yet durable materials',
        'Easy transport and setup',
        'Resistant to extreme weather'
      ],
      gradient: 'from-primary to-primary-light',
    },
    {
      icon: Cpu,
      title: 'Smart Automation',
      description: 'Arduino-based intelligent control system',
      details: [
        'Real-time water quality monitoring',
        'Automated filtration cycles',
        'Remote system diagnostics',
        'User-friendly LCD interface'
      ],
      gradient: 'from-accent to-accent-light',
    },
    {
      icon: Leaf,
      title: 'Sustainable Engineering',
      description: 'Solar energy with extended backup power',
      details: [
        '300W high-efficiency solar panel',
        '20-hour battery backup system',
        'Zero carbon footprint operation',
        'Minimal maintenance required'
      ],
      gradient: 'from-secondary to-secondary-light',
    },
    {
      icon: Heart,
      title: 'Community-Centered',
      description: 'User-friendly with mobile connectivity',
      details: [
        'Simple one-button operation',
        'Mobile app connectivity',
        'Community training programs',
        'Local technician support'
      ],
      gradient: 'from-water to-primary',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-ocean">
            Innovation That Makes a Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four core innovations that set HopeDrop apart in the fight for clean water access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Feature Card */}
              <div className="card-feature h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <feature.icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature Details */}
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li 
                        key={detailIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${feature.gradient} rounded-full`} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-2xl px-8 py-6">
            <div className="flex -space-x-2">
              {[Shield, Cpu, Leaf, Heart].map((Icon, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 bg-gradient-to-br ${features[index].gradient} rounded-full flex items-center justify-center border-2 border-background`}
                >
                  <Icon size={16} className="text-white" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Complete Water Solution</div>
              <div className="text-sm text-muted-foreground">All features work together seamlessly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;