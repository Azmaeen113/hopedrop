import { Cpu, Wifi, Layers, Settings } from 'lucide-react';
import technicalDiagram from '@/assets/technical-diagram.png';
import circuitDiagram from '@/assets/circuit-diagram.png';

const TechnologySection = () => {
  const technologies = [
    {
      icon: Layers,
      title: 'Hybrid Filtration System',
      description: 'Multi-stage purification combining RO membrane and UV sterilization',
      features: [
        'Reverse Osmosis membrane technology',
        'UV-C LED sterilization chamber', 
        'Pre-filtration sediment removal',
        'Post-treatment mineralization'
      ],
      color: 'primary',
    },
    {
      icon: Settings,
      title: 'Smart Energy Management',
      description: 'Intelligent power optimization for continuous operation',
      features: [
        '300W monocrystalline solar panel',
        'MPPT charge controller',
        '12V lithium battery backup',
        'Automatic load balancing'
      ],
      color: 'accent',
    },
    {
      icon: Wifi,
      title: 'Remote Monitoring Capabilities',
      description: 'IoT-enabled system monitoring and diagnostics',
      features: [
        'Real-time water quality sensors',
        'GSM/WiFi connectivity options',
        'Mobile app integration',
        'Predictive maintenance alerts'
      ],
      color: 'secondary',
    },
    {
      icon: Cpu,
      title: 'Modular Scalability',
      description: 'Expandable system architecture for community growth',
      features: [
        'Stackable filtration modules',
        'Parallel system connectivity',
        'Capacity expansion capability',
        'Standardized component design'
      ],
      color: 'water',
    },
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-br from-blue-500 to-indigo-600 text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Advanced Technology for Clean Water
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Cutting-edge engineering designed specifically for Bangladesh's challenging water treatment requirements.
          </p>
        </div>

        {/* Technical Diagrams */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-black/20">
            <h3 className="text-xl font-bold mb-4 text-black">System Architecture</h3>
            <div className="aspect-[4/3] bg-white/20 rounded-xl overflow-hidden">
              <img
                src={technicalDiagram}
                alt="HopeDrop Technical System Diagram"
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-sm text-black/70 mt-3">
              Complete system flow from solar input to purified water output
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-black/20">
            <h3 className="text-xl font-bold mb-4 text-black">Circuit Design</h3>
            <div className="aspect-[4/3] bg-white/20 rounded-xl overflow-hidden">
              <img
                src={circuitDiagram}
                alt="HopeDrop Circuit Diagram"
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-sm text-black/70 mt-3">
              Arduino-based control system with sensor integration
            </p>
          </div>
        </div>

        {/* Technology Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="bg-white/20 backdrop-blur-sm border border-black/20 rounded-xl p-6 h-full hover:bg-white/30 transition-all duration-500 hover:scale-105">
                {/* Icon */}
                <div className={`w-14 h-14 bg-${tech.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon size={28} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 text-black group-hover:text-black/80 transition-colors duration-300">
                  {tech.title}
                </h3>
                
                <p className="text-black/80 text-sm mb-4 leading-relaxed">
                  {tech.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-xs text-black/70">
                      <div className={`w-1.5 h-1.5 bg-${tech.color} rounded-full flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-black/20">
          <h3 className="text-2xl font-bold text-center mb-8 text-black">
            Complete Technical Specifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Processing Rate', value: '3.8 L/min (228 L/hr)' },
              { label: 'Daily Capacity', value: '5,472 liters maximum' },
              { label: 'Power Consumption', value: '150W average operation' },
              { label: 'Solar Panel', value: '300W monocrystalline' },
              { label: 'Battery Backup', value: '12V 200Ah lithium' },
              { label: 'Operating Temperature', value: '-10°C to +55°C' },
              { label: 'Water Recovery Rate', value: '75% from source water' },
              { label: 'TDS Reduction', value: '500 ppm → 200 ppm' },
              { label: 'Pathogen Removal', value: '99.9% bacteria/virus' },
            ].map((spec, index) => (
              <div key={index} className="text-center p-4 rounded-xl hover:bg-white/30 transition-colors duration-300">
                <div className="text-sm text-black/70 mb-1">{spec.label}</div>
                <div className="font-bold text-black">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="btn-hero px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2"
          >
            <Cpu size={20} />
            Request Technical Documentation
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;