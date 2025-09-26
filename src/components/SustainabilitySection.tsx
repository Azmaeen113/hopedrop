import { Leaf, Heart, Target, TrendingUp } from 'lucide-react';

const SustainabilitySection = () => {
  const sdgGoals = [
    {
      icon: Leaf,
      number: '6',
      title: 'Clean Water & Sanitation',
      description: 'Ensure availability and sustainable management of water and sanitation for all',
      impact: 'Direct contribution to SDG 6 through accessible clean water technology',
      metrics: ['5,472L daily capacity', '99.9% purification', '24/7 availability'],
      gradient: 'from-primary to-primary-light',
    },
    {
      icon: Target,
      number: '13',
      title: 'Climate Action',
      description: 'Take urgent action to combat climate change and its impacts',
      impact: 'Solar-powered operation with zero carbon emissions during use',
      metrics: ['300W solar power', '0 CO₂ emissions', '20hr battery backup'],
      gradient: 'from-secondary to-secondary-light',
    },
    {
      icon: Heart,
      number: '3',
      title: 'Good Health & Well-being',
      description: 'Ensure healthy lives and promote well-being for all at all ages',
      impact: 'Preventing waterborne diseases in vulnerable communities',
      metrics: ['96.6% contaminant removal', '50,000+ lives improved', 'Disease prevention'],
      gradient: 'from-accent to-accent-light',
    },
  ];

  const impactMetrics = [
    { label: 'Carbon Footprint', value: '0 kg CO₂', description: 'During operation' },
    { label: 'Energy Source', value: '100%', description: 'Renewable solar' },
    { label: 'Water Recovery', value: '75%', description: 'Efficiency rate' },
    { label: 'Maintenance', value: 'Minimal', description: 'Low environmental impact' },
  ];

  return (
    <section id="sustainability" className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-ocean">
            Aligned with Global Goals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            HopeDrop directly contributes to the United Nations Sustainable Development Goals, creating positive environmental and social impact.
          </p>
        </div>

        {/* SDG Goals */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {sdgGoals.map((goal, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="card-feature h-full relative overflow-hidden hover:scale-105 transition-all duration-500">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${goal.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* SDG Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${goal.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <goal.icon size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">SDG {goal.number}</div>
                    <div className="text-sm text-muted-foreground">UN Goal</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {goal.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {goal.description}
                </p>

                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium text-foreground mb-3">{goal.impact}</p>
                  <div className="space-y-2">
                    {goal.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${goal.gradient} rounded-full`} />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Impact */}
        <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient-solar">
            Environmental & Social Impact Metrics
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="bg-background/80 rounded-xl p-6 hover:bg-background transition-colors duration-300 hover:scale-105">
                  <div className="text-2xl md:text-3xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                    {metric.value}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="text-center">
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-medium max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-2">
                {sdgGoals.map((goal, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 bg-gradient-to-br ${goal.gradient} rounded-full flex items-center justify-center border-2 border-background text-white font-bold`}
                  >
                    {goal.number}
                  </div>
                ))}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-gradient-ocean">
              Our Commitment to Sustainable Development
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Every HopeDrop system represents a step toward achieving global sustainability goals. 
              Through innovative technology and community-centered design, we're not just providing clean water—we're building a foundation for healthier, more resilient communities.
            </p>

            <div className="flex justify-center gap-4">
              <button className="btn-secondary px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                <TrendingUp size={18} />
                View Impact Report
              </button>
              <a
                href="#contact"
                className="btn-outline px-6 py-3 rounded-full font-semibold"
              >
                Partner with Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;