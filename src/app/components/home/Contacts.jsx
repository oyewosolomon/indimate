import React from 'react';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4 inset-0 bg-[url('/assets/images/bg-img.png')] bg-cover bg-center bg-no-repeat">
      
      {/* Main Image and Content */}
      <div className="max-w-lg w-full relative">

        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img
            src="/assets/images/logo.png"
            alt="Company logo"
            className="w-12 h-12"
          />
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-white/20 bg-black/60 rounded-lg p-6">
            <h3 className="text-xl italic mb-4">Contact us</h3>
            <p className="text-sm mb-2">Glamorousspacesbyfave@gmail.com</p>
            <p className="text-sm">+234 8166734100</p>
          </div>
          <div className="border border-white/20 bg-black/60 rounded-lg p-6">
            <h3 className="text-xl italic mb-4">Working hours</h3>
            <p className="text-sm mb-2">Monday - Friday: 8:00am - 6pm</p>
            <p className="text-sm">Saturday - Sunday: 1:00pm - 6pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;