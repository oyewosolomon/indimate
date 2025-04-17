"use client"

import Image from 'next/image';
import React, { useState, useCallback, useEffect } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Rsvp = () => {
  // Define the list of images for the slider
  const images = [
    '/assets/images/image_7.jpg',
    // Add more images as needed
  ];

  // State to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }, [images.length]);

  // Function to handle previous slide
  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto-slide effect
  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(autoSlide);
  }, [nextSlide]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white shadow-xl">
        {/* Newspaper-style header */}
        <div className="border-b-2 border-gray-800 pt-6 pb-2 px-8">
          <h1 className="text-4xl font-black text-center" style={{ fontFamily: 'Old English Text MT, serif' }}>The Wedding Post</h1>
          <h2 className="text-xl font-bold text-center mt-1">THE BEST DAY EVER</h2>
        </div>

        {/* Image and overlay content */}
        <div className="relative">
          <Image
            src={images[currentSlide]}
            alt="Wedding couple by a lake"
            width={800}
            height={600}
            className="w-full"
          />

          {/* Couple names overlay */}
          {/* <div className="absolute bottom-20 left-0 right-0 text-center ">
            <div className="text-white text-3xl font-script">
              Precious + Michael
            </div>
            <div className="text-white text-sm font-light tracking-widest mt-2">
              ARE GETTING MARRIED
            </div>
          </div> */}

          {/* Controls overlay positioned on the image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {/* Navigation arrows and dots */}
            {/* <div className="flex items-center justify-center space-x-6 mb-4">
              <button
                onClick={prevSlide}
                className="text-2xl text-white hover:text-gray-300 transition-colors"
                aria-label="Previous slide"
              >
                <FaLongArrowAltLeft />
              </button>
              
              <div className="flex space-x-3">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === currentSlide ? 'bg-white' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="text-2xl text-white hover:text-gray-300 transition-colors"
                aria-label="Next slide"
              >
                <FaLongArrowAltRight />
              </button>
            </div> */}

            {/* RSVP Button */}
            <div className="flex justify-center">
              <button className="bg-white text-black px-8 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                RSVP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;