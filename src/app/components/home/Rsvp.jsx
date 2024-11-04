"use client"


import React, { useState, useEffect } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Rsvp = () => {
  // Define the list of images for the slider
  const images = [
    '/assets/images/rsvp_1.png',
    '/assets/images/image_2.png',
    '/assets/images/image_4.png',
  ];

  // State to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  // Auto-slide effect
  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(autoSlide); // Clear interval on unmount
  }, []);

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
            src={images[currentSlide]}
            alt="Wedding couple"
            className="w-full rounded-t-lg"
          />

        </div>

        {/* Navigation Dots and Arrows */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={prevSlide}
            className="text-xl text-gray-400 hover:text-white"
          >
            <FaLongArrowAltLeft />
          </button>
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-gray-400'
                }`}
              ></div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="text-xl text-gray-400 hover:text-white"
          >
           <FaLongArrowAltRight/>
          </button>
        </div>

        {/* RSVP Button */}
        <div className="flex justify-center mb-12">
          <button className="mt-8 px-8 py-2 bg-white text-green-900 rounded-full shadow-md font-bold">
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
