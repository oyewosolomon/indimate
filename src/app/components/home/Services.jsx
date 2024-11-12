"use client"

import React, { useState } from "react";

const ServiceCard = ({ title, backgroundImage, content }) => {
  const [isContentVisible, setContentVisible] = useState(false);

  const handleToggleContent = () => {
    setContentVisible(!isContentVisible);
    // Prevent body scroll when card is expanded on mobile
    if (!isContentVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <div 
        className="relative justify-start h-[15rem] md:h-[30rem] border-[1px] border-white rounded-2xl overflow-hidden group cursor-pointer"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={handleToggleContent}
      >
        {/* Default View */}
        <div className={`absolute inset-0 transition-all duration-300 ${
          isContentVisible ? "md:bg-white" : "bg-black/40 group-hover:bg-black/50"
        }`}>
          {/* Desktop Content View */}
          {isContentVisible ? (
            <div className="hidden md:flex absolute inset-0 flex-col items-center justify-start text-gray-900 p-2 md:p-6">
              <div className="text-md sm:text-md md:text-md lg:text-md overflow-y-auto md:overflow-y-hidden text-left space-y-2 px-3 items-start justify-start">
                {content.map((item, index) => {
                  if (item.type === "p") {
                    return <p key={index}>{item.text}</p>;
                  }
                  if (item.type === "strong") {
                    return <strong key={index}>{item.text}</strong>;
                  }
                  return null;
                })} 
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex flex-col text-center place-items-center place-content-center items-center justify-center text-white p-3 md:p-6">
              <h3 className="text-sm md:text-xl font-semibold mb-2">{title}</h3>
              <span className="text-[8px] md:text-sm tracking-wider opacity-80 text-[#D4A300]">TAP TO READ</span>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Full Screen Overlay */}
      {isContentVisible && (
        <div className="fixed inset-0 bg-white z-50 md:hidden flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <button 
              onClick={handleToggleContent}
              className="text-gray-600 hover:text-gray-900 text-xl"
            >
              ×
            </button>
          </div>
          <div 
            className="flex-1 p-6 text-gray-900"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="h-full flex flex-col justify-center space-y-4 text-left">
              {content.map((item, index) => {
                if (item.type === "p") {
                  return <p key={index} className="text-base">{item.text}</p>;
                }
                if (item.type === "strong") {
                  return <strong key={index} className="text-lg">{item.text}</strong>;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Services = () => {
  const serviceData = [
    {
      title: "Full Planning",
      backgroundImage: "/api/placeholder/400/320",
      content: [
        { type: "p", text: "We are excited to help you plan a wedding that beautifully combines the magic of a fairytale with the excitement of an unconventional celebration." },
        { type: "p", text: `To start, we'll craft a mood board tailored to suit your personal style, imagine pastel colours, bold accents, twinkling lights, and quirky elements that capture your vision. For the venue, we can explore enchanting options like botanical gardens, art galleries, or eclectic spaces that can be transformed into a whimsical setting.` },
        { type: "p", text: "We'll carefully select vendors who align with your style and fit into the function of the day." },
        { type: "p", text: "Your wedding should feel like one read from a classic storybook." }
      ]
    },
    {
      title: "Full Decoration Service",
      backgroundImage: "/api/placeholder/400/320",
      content: [
        { type: "p", text: "We specialize in creating wedding environments that are calm, ethereal, and uniquely tailored to reflect each couple's vision." },
        { type: "p", text: "Our approach combines delicate aesthetics with a personalized touch, ensuring that every detail aligns seamlessly with your mood board. We believe that your wedding should evoke a sense of serenity and magic, transforming your chosen venue into a captivating space that resonates with your style and emotions." },
      ]
    },
    {
      title: "Full Coordinating Services",
      backgroundImage: "/api/placeholder/400/320",
      content: [
        { type: "p", text: "We bring your wedding vision to life with our expert coordinating services. From personalized planning to day-of coordination, we handle every detail to ensure a seamless celebration." },
     ]
    }
  ];

  const processData = [
    {
      title: "Vision Development",
      backgroundImage: "/api/placeholder/400/320",
      content: [
        { type: "p", text: "Our process begins with a personalized consultation, where we take the time to understand your personalities, preferences, and aspirations." },
       
        { type: "p", text: "Based on your input, we will explore various themes and concepts, suggesting venue options and decor styles that align with your vision." }
      ]
    },
    {
      title: "Vendor Selection/ Coordination",
      backgroundImage: "/api/placeholder/400/320",
      content: [
        { type: "p", text: "Once potential vendors are identified, we initiate contact to discuss packages, pricing, and availability. Request detailed proposals that outline services, ensuring transparency in costs." },
       
        { type: "p", text: "Next, we create a timeline for vendor communication and decision-making, setting clear deadlines for contracts and deposits. Regular check-ins can keep everyone aligned and address any concerns promptly." }
      ]
    },
    {
      title: "Timeline/Event management",
      backgroundImage: "/api/placeholder/400/320",
      content: [
        { type: "p", text: "Our wedding event management skills are centered on meticulous planning and attention to detail, ensuring every aspect of the event is flawlessly executed." },
      
        { type: "p", text: "From the initial consultation to the final farewell, we prioritize understanding the couple's vision, preferences, and unique story. This allows us to curate personalized elements that reflect their individuality." }
      ]
    }
  ];


  return (
    <div
      className="min-h-screen relative text-white py-16 px-4 md:px-8 bg-cover bg-center font-gilroy"
      style={{
        backgroundImage: `url('/assets/images/hero_background.png')`,
      }}
    > {/* Hero Text Section */}
         <div className="max-w-4xl mx-auto text-center mb-20">
        <p className="text-2xl md:text-3xl leading-relaxed mb-8 font-gilroy">
          With words like <span className="font-semibold">RARE, ETHEREAL, DELICATE AND EFFORTLESS</span>, we capture the essence of your dream wedding and bring it to life.
        </p>
        <p className="text-lg md:text-xl leading-relaxed opacity-90">
          We&apos;ll take you on a journey to a destination wedding no matter where you are and pay attention to every detail, culture and aesthetic to elevate your wedding experience to new heights. Trust us to create a one-of-a-kind mood board that will make your intimate wedding unforgettable.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl text-center text-black mb-12">Our Services</h1>
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {serviceData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              backgroundImage={service.backgroundImage}
              content={service.content}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-16">
        <h1 className="text-5xl text-black text-center mb-12">Our Process</h1>
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {processData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              backgroundImage={service.backgroundImage}
              content={service.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;