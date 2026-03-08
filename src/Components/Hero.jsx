import React, { useState } from 'react'
import image from '../assets/images/hero-image-2.jpg'
import image2 from '../assets/images/NBO-1.jpg'


const Hero = () => {
    const [flipped, setFlipped] = useState(false);
    const message = encodeURIComponent("Hi, I'd like to book an errand with Errands by Manuni");


  return (
    
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 gap-10 bg-gray-200">
  
  {/* Left - Text */}
  <div className="flex-1 flex flex-col items-start justify-center space-y-6">
    <p className="text-blue-800 font-semibold tracking-widest text-sm uppercase">Errands By Manuni</p>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
      Every Task. <br />
      <span className="text-blue-800">Handled.</span>
    </h1>
    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
      Professional errand runner for individual and business. We take care of the small things so you can focus on what matters.
    </p>
    <a href={`https://wa.me/254743339801?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-800 text-black font-bold px-8 py-3 rounded-md hover:bg-blue-600 hover:drop-shadow-[0_0_12px_#60A5FA] transition-transform duration-500 hover:scale-105"
    >
      Book an Errand
    </a>
  </div>

  
 {/* Right - Image */}
      <div
        className="w-full md:flex-1 h-[350px] md:h-[600px] [perspective:1000px] cursor-pointer group"
        onClick={() => {
          if (window.innerWidth < 768) setFlipped(!flipped);
        }}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] 
            ${flipped ? "[transform:rotateY(180deg)]" : ""} 
            md:group-hover:[transform:rotateY(180deg)]`}
        >
          {/* Front Image */}
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <img
              src={image}
              alt="Hero image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Back Image */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <img
              src={image2}
              alt="Hero image back"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

</section>

  )
}

export default Hero