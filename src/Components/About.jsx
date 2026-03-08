import React, { useEffect, useRef, useState } from 'react'


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const message = encodeURIComponent("Hi, I'd like to book an errand with Errands by Manuni");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // opens when 20% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "100+", label: "Errands Completed" },
    { number: "87%", label: "Client Satisfaction" },
    { number: "2hr", label: "Avg. Turnaround" },
    { number: "24/7", label: "Available" },
  ];

  return (
    <section
      id="About"
      ref={sectionRef}
      className={`relative w-full min-h-[600px] flex items-center bg-blue-900 transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
    >

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 md:px-16 py-20 flex flex-col items-center text-center gap-12">

        {/* Label */}
        <p className="text-white font-bold tracking-widest text-md uppercase">
          Who We Are
        </p>

        {/* Mission Statement */}
        <div className="flex flex-col items-center gap-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            <span className='underline decoration-gray-100'>We Run </span> So You <span className="text-black">Don't Have To</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Errands by Manuni was born out of a simple idea, <span className="text-white font-bold">your time is valuable.</span>
            Whether you're a busy professional, a growing business, or just someone with
            a packed schedule, we handle your errands with speed, reliability, and care.
            From supply runs to document deliveries, we've got you covered across Nairobi.
          </p>
          
           <a href="#Contact"
            className="bg-gray-200 text-black font-bold px-8 py-3 rounded-md hover:bg-blue-600 hover:drop-shadow-[0_0_12px_#60A5FA] transition-all duration-300 hover:scale-105"
          >
            Work With Us
          </a>
        </div>

        


        <a  href={`https://wa.me/254743339801?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white font-bold px-4 py-3 rounded-md hover:bg-[#20ba58] hover:drop-shadow-[0_0_12px_#25D366] transition-all duration-300 hover:scale-105"
            >
            Chat on WhatsApp
            </a>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10" />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {stats.map(({ number, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 group">
              <span className="text-4xl md:text-5xl font-extrabold text-gray-200 drop-shadow-[0_0_12px_#60A5FA] group-hover:scale-110 transition-transform duration-300">
                {number}
              </span>
              <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About