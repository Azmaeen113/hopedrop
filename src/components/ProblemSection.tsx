import { AlertTriangle, Waves, Zap, TrendingUp } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: Waves,
      title: 'Flood Water Contamination',
      stat: '18%',
      description: 'of Bangladesh affected by floods annually',
      details: 'Millions lack access to clean drinking water during and after floods, leading to waterborne diseases and health crises.',
    },
    {
      icon: AlertTriangle,
      title: 'Coastal Salinity Intrusion',
      stat: '2.5M',
      description: 'people affected by saltwater contamination',
      details: 'Rising sea levels and climate change have made freshwater sources increasingly saline in coastal regions.',
    },
    {
      icon: Zap,
      title: 'Energy Poverty',
      stat: '40%',
      description: 'of rural communities lack reliable electricity',
      details: 'Without consistent power, traditional water treatment solutions cannot function effectively in remote areas.',
    },
  ];

  return (
    <section id="problem" className="py-20 bg-gradient-water relative overflow-hidden">
      {/* Water Flow Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-flow animate-gradient-flow" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-ocean">
            The Water Crisis We're Solving
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Across Bangladesh's vulnerable regions, communities face unprecedented challenges in accessing clean, safe drinking water.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group cursor-pointer scroll-wave"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-feature hover:shadow-medium transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-destructive/15 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 border border-destructive/20">
                  <problem.icon size={32} className="text-destructive" />
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient-water mb-2 group-hover:scale-110 transition-transform duration-300">
                    {problem.stat}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 font-medium">
                    {problem.description}
                  </p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {problem.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Water Crisis Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group cursor-pointer scroll-wave" style={{ animationDelay: '0.6s' }}>
            <div className="card-feature hover:shadow-medium transition-all duration-500 hover:scale-105">
              <img 
                src="/src/assets/WhatsApp Image 2025-09-26 at 17.09.18_295232ad.jpg" 
                alt="Water Crisis in Bangladesh" 
                className="w-full h-64 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  Flood-Affected Communities
                </h3>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  Real images showing the devastating impact of floods on water access and community infrastructure.
                </p>
              </div>
            </div>
          </div>
          
          <div className="group cursor-pointer scroll-wave" style={{ animationDelay: '0.8s' }}>
            <div className="card-feature hover:shadow-medium transition-all duration-500 hover:scale-105">
              <img 
                src="/src/assets/1000035484 (1).jpg" 
                alt="Water Crisis Impact" 
                className="w-full h-64 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  Coastal Water Challenges
                </h3>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  Visual evidence of salinity intrusion and water scarcity affecting coastal regions and rural communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action with Water Effect */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-primary/30 rounded-2xl px-8 py-4 shadow-soft hover:shadow-medium transition-all duration-300">
            <TrendingUp size={24} className="text-accent animate-wave" />
            <span className="text-lg font-semibold text-foreground">
              These challenges demand innovative, sustainable solutions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;