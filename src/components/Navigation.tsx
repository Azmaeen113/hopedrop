import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Solution', href: '#solution' },
    { label: 'Features', href: '#features' },
    { label: 'Impact', href: '#impact' },
    { label: 'Technology', href: '#technology' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-primary/20' 
          : 'bg-white/20 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Static Circular Design */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-sm border-2 border-primary/20">
              <img 
                src="/favicon.png" 
                alt="HopeDrop Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold text-gradient-flow">HopeDrop</span>
          </div>

          {/* Desktop Navigation with Water Ripple Effects */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-all duration-500 font-medium relative group water-ripple py-2 px-4 rounded-xl hover:bg-primary/5"
              >
                {item.label}
                <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-ocean scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
            ))}
          </div>

          {/* CTA Button with Enhanced Water Effects */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-hero water-ripple px-6 py-3 font-semibold animate-water-flow"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-all duration-300 water-ripple rounded-lg hover:bg-primary/10"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation with Water Theme */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-primary/20 bg-white/95 backdrop-blur-md rounded-xl shadow-soft animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-all duration-500 font-medium px-4 py-3 hover:bg-primary/10 rounded-lg water-ripple animate-water-flow"
                  style={{ animationDelay: `${navItems.indexOf(item) * 0.1}s` }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-hero water-ripple px-6 py-3 font-semibold mx-4 text-center mt-4"
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;