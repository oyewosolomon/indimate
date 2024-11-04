import React from 'react';

const ServiceCard = ({ title, backgroundImage }) => (
  <div 
    className="relative h-64 border-[1px] border-white rounded-2xl overflow-hidden group cursor-pointer"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] group-hover:bg-black/50 transition-all duration-300"/>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <span className="text-sm tracking-wider opacity-80">TAP TO READ</span>
    </div>
  </div>
);

const Services = () => {
  return (
    <div  className="min-h-screen relative text-white py-16 px-4 md:px-8 bg-cover bg-center"
    style={{
      backgroundImage: `url('/assets/images/hero_background.png')`
    }}>
      {/* Hero Text Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <p className="text-2xl md:text-3xl leading-relaxed mb-8">
          With words like <span className="font-semibold">RARE, ETHEREAL, DELICATE AND EFFORTLESS</span>, we capture the essence of your dream wedding and bring it to life.
        </p>
        
        <p className="text-lg md:text-xl leading-relaxed opacity-90">
          We'll take you on a journey to a destination wedding no matter where you are and pay attention to every detail, culture and aesthetic to elevate your wedding experience to new heights. Trust us to create a one-of-a-kind mood board that will make your intimate wedding unforgettable.
        </p>
      </div>

      {/* Our Services Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-serif text-center italic mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            title="Full Planning"
            backgroundImage="/api/placeholder/400/320"
          />
          <ServiceCard 
            title="Full Decoration Service"
            backgroundImage="/api/placeholder/400/320"
          />
          <ServiceCard 
            title="Full Coordinating Services"
            backgroundImage="/api/placeholder/400/320"
          />
        </div>
      </div>

      {/* Our Process Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif text-center italic mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            title="Vision Development"
            backgroundImage="/api/placeholder/400/320"
          />
          <ServiceCard 
            title="Vendor Selection/ Coordination"
            backgroundImage="/api/placeholder/400/320"
          />
          <ServiceCard 
            title="Timeline/Event management"
            backgroundImage="/api/placeholder/400/320"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;