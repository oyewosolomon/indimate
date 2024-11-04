import React from 'react';

const Rsvp = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-8 italic">
        <h1 className="text-2xl">Join us in celebrating forever</h1>
      </div>

      {/* Main Image and Content */}
      <div className="max-w-lg w-full relative">
        {/* Wedding Photo */}
        <div className="relative">
          <img
            src="/assets/images/rsvp_1.png"
            alt="Wedding couple"
            className="w-full rounded-t-lg"
          />
          
          {/* Green Overlay Section */}
          <div className="bg-[#014421] p-8 rounded-b-lg hidden">
            <div className="text-center text-sm mb-6">
              <p>THE FAMILIES OF ADLI TAKAYI AND KOFOWOROLA</p>
              <p className="text-yellow-400">Wish to invite you to the holy matrimony of their son</p>
            </div>

            <div className="text-center mb-6">
              <div className="flex justify-center items-center gap-2">
                <span>SATURDAY</span>
                <span className="text-yellow-400 text-xl">06</span>
                <span>11:30AM</span>
              </div>
            </div>

            <div className="text-center italic">
              <h2 className="text-2xl mb-2">King Vincente</h2>
              <p className="text-lg">and</p>
              <h2 className="text-2xl">Precious Eshun</h2>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6 mb-8">
          <button className="w-6 h-1 bg-gray-600 rounded-full"></button>
          <button className="w-6 h-1 bg-white rounded-full"></button>
          <button className="w-6 h-1 bg-gray-600 rounded-full"></button>
          <button className="w-6 h-1 bg-gray-600 rounded-full"></button>
          <button className="w-6 h-1 bg-gray-600 rounded-full"></button>
        </div>

        {/* RSVP Button */}
        <div className="flex justify-center mb-12">
          <button className="bg-white text-black px-8 py-2 rounded-full">
            RSVP
          </button>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img
            src="/assets/images/logo.png"
            alt="Company logo"
            className="w-12 h-12"
          />
        </div>

        {/* Contact Information */}
        {/* <div className="grid grid-cols-2 gap-4 ">
          <div className="border border-white/20 rounded-lg p-6">
            <h3 className="text-xl italic mb-4">Contact us</h3>
            <p className="text-sm mb-2">Glamorousspacesbyfave@gmail.com</p>
            <p className="text-sm">+234 8166734100</p>
          </div>
          <div className="border border-white/20 rounded-lg p-6">
            <h3 className="text-xl italic mb-4">Working hours</h3>
            <p className="text-sm mb-2">Monday - Friday: 8:00am - 6pm</p>
            <p className="text-sm">Saturday - Sunday: 1:00pm - 6pm</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Rsvp;