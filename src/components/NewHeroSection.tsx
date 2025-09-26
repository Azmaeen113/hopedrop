const NewHeroSection = () => {
  return (
    <section id="new-hero" className="min-h-screen relative overflow-hidden">
      {/* Full-screen Image */}
      <img 
        src="/src/assets/HpoeDrop (2).png" 
        alt="HopeDrop Logo" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Optional overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black/10" />
    </section>
  );
};

export default NewHeroSection;
