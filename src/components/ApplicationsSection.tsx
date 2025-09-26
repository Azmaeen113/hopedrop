import { Waves, MapPin, Mountain } from 'lucide-react';

const ApplicationsSection = () => {
  const applications = [
    {
      icon: Waves,
      title: 'Flood-Affected Communities',
      description: 'Immediate clean water access during and after flood disasters',
      features: [
        'Emergency response deployment',
        'Waterproof operation in flood zones',
        'Quick setup and mobility',
        'Community-scale water production'
      ],
      stats: '2.5M people in flood-prone areas',
      image: '/api/placeholder/400/300',
      gradient: 'from-primary to-primary-light',
    },
    {
      icon: MapPin,
      title: 'Coastal Areas with Salinity Issues',
      description: 'Combating saltwater intrusion in vulnerable coastal regions',
      features: [
        'Salt reduction from 500 to 200 ppm',
        'Corrosion-resistant components',
        'Tidal zone operation capability',
        'Remote monitoring systems'
      ],
      stats: '5.2M people in coastal areas',
      image: '/api/placeholder/400/300',
      gradient: 'from-water to-primary',
    },
    {
      icon: Mountain,
      title: 'Remote Hill Track Regions',
      description: 'Sustainable water solutions for isolated highland communities',
      features: [
        'Off-grid solar operation',
        'Portable installation design',
        'High-altitude performance',
        'Minimal maintenance requirements'
      ],
      stats: '1.8M people in hill regions',
      image: '/api/placeholder/400/300',
      gradient: 'from-secondary to-secondary-light',
    },
  ];

  return (
    <section id="applications" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-ocean">
            Where HopeDrop Makes a Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored solutions for Bangladesh's most challenging water access environments.
          </p>
        </div>

        <div className="space-y-16">
          {applications.map((app, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-6">
                  <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${app.gradient} text-white px-4 py-2 rounded-full mb-4`}>
                    <app.icon size={20} />
                    <span className="font-semibold text-sm">{app.stats}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    {app.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {app.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${app.gradient} rounded-full flex-shrink-0`} />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className={`btn-hero px-6 py-3 rounded-full font-semibold flex items-center gap-2`}>
                    Learn More
                    <app.icon size={18} />
                  </button>
                  <button className="btn-outline px-6 py-3 rounded-full font-semibold">
                    View Case Study
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="relative bg-background rounded-2xl p-6 shadow-strong">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      {index === 0 && (
                        <img 
                          src="/flood-communities.jpg" 
                          alt="Flood-Affected Communities" 
                          className="w-full h-full object-cover"
                        />
                      )}
                      {index === 1 && (
                        <img 
                          src="/coastal-salinity.webp" 
                          alt="Coastal Areas with Salinity Issues" 
                          className="w-full h-full object-cover"
                        />
                      )}
                      {index === 2 && (
                        <img 
                          src="/hill-tracks.jpg" 
                          alt="Remote Hill Track Regions" 
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-border">
                        <div className="text-center">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${app.gradient} bg-clip-text text-transparent`}>
                            {app.title}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Deployment Ready
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-water/10 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-gradient-ocean">
              One Solution, Three Critical Applications
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              HopeDrop's modular design adapts to each environment's unique challenges while maintaining consistent performance and reliability.
            </p>
            
            <div className="flex justify-center gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 bg-gradient-to-br ${app.gradient} rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                >
                  <app.icon size={24} className="text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;