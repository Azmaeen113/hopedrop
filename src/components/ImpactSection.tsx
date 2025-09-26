import { Users, Droplets, Battery, Award, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Lives Improved',
      description: 'Communities across Bangladesh benefiting from clean water access',
      color: 'text-primary',
      gradient: 'from-primary to-primary-light',
    },
    {
      icon: Shield,
      value: 99.9,
      suffix: '%',
      label: 'Pathogen Elimination',
      description: 'Bacteria and virus removal efficiency in real-world testing',
      color: 'text-secondary',
      gradient: 'from-secondary to-secondary-light',
    },
    {
      icon: Battery,
      value: 20,
      suffix: 'hr',
      label: 'Battery Backup',
      description: 'Continuous operation during cloudy days and nights',
      color: 'text-accent',
      gradient: 'from-accent to-accent-light',
    },
    {
      icon: Droplets,
      value: 96.6,
      suffix: '%',
      label: 'Purification Efficiency',
      description: 'Overall contaminant removal including salts and chemicals',
      color: 'text-water',
      gradient: 'from-water to-primary',
    },
  ];

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span>
        {value < 100 ? count.toFixed(1) : Math.floor(count).toLocaleString()}{suffix}
      </span>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('impact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-water/10 via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-ocean">
            Creating Lasting Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real deployments across Bangladesh's most challenging environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="card-stat group-hover:scale-105 transition-all duration-500">
                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 rounded-xl`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon size={32} className="text-white" />
                </div>

                {/* Stats */}
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>

                {/* Progress Ring */}
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 bg-gradient-to-r ${stat.gradient} rounded-full animate-pulse-slow`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stories */}
        <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-medium">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient-solar">
            Transforming Communities
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Flood Recovery',
                description: 'Providing immediate clean water access to flood-affected communities in Sylhet region.',
                impact: '15 villages served',
              },
              {
                title: 'Coastal Resilience',
                description: 'Addressing saltwater intrusion in Barisal coastal areas with sustainable solutions.',
                impact: '8,000 people helped',
              },
              {
                title: 'Remote Access',
                description: 'Bringing clean water technology to isolated hill track communities in Chittagong.',
                impact: '25 installations',
              },
            ].map((story, index) => (
              <div key={index} className="text-center p-4 rounded-xl hover:bg-primary/5 transition-colors duration-300">
                <div className="text-lg font-semibold text-foreground mb-2">{story.title}</div>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{story.description}</p>
                <div className="text-primary font-semibold text-sm">{story.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;