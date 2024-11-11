import React from 'react'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <div className="max-w-4xl bg-white text-black mx-auto px-6 py-16 text-center">
      <h1 className="font-serif text-3xl md:text-4xl mb-8 tracking-wide">
        Intimate weddings by Fave
      </h1>
      
      <div className="mb-8">
        <div className="relative w-64 h-80 mx-auto">
          <Image
            src="/assets/images/woman.png"
            alt="Wedding Photographer"
            className="rounded-lg object-cover w-full h-full"
            width={100}
            height={100}
          />
        </div>
      </div>

      <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8 text-center">
        I&apos;ve always been enchanted by destination weddings, but I have realised they can 
        feel out of reach unless you actually travel to the country. I wanted to break away 
        from the typical Lagos wedding scene and offer something different. I wanted 
        couples to experience their special day in new and magical ways, like a fairy tale 
        come to life. That&apos;s why I started intimate weddings by Fave
      </p>

      <button className="bg-[#0A341F] text-white px-6 py-2 rounded-3xl hover:bg-green-800 transition-colors">
        Contact us
      </button>
    </div>
  )
}

export default ContactUs