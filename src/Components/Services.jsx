import React, { useState } from 'react'

const Services = () => {
  const [hovered, setHovered] = useState(null);

  const services = [
    {
      id: 0,
      icon: "🛒",
      title: "Personal Errands",
      description: "From personal assistance to gift shopping, we handle your tasks quickly and reliably so you can focus on your day.",
      items: ["Personal Shopping", "Order Follow-ups", "Private / Home Catering", "Gift Shopping", "Cleaning Services"],
    },
    {
      id: 1,
      icon: "💼",
      title: "Business Errands",
      description: "Keep your business running smoothly. We handle office supply runs, document deliveries, and vendor coordination.",
      items: ["Document Delivery", "Office Supplies", "Bank Runs", "Vendor Pickups", "Event Organization"],
    },
    {
      id: 2,
      icon: "📊",
      title: "EconData Advisory",
      description: "we provide expert economic and financial analysis, and strategic insights to help businesses make informed decisions.",
      items: ["Economic & Financial Analysis", "Policy and Economic Research", "Comprehensive Business Plan", "Business Data Analysis", "Project Evaluation"],
    },
  ];

  return (
    <section id="Services" className="w-full py-20 px-8 md:px-16 bg-gray-200">

      {/* Header */}
      <div className="text-center mb-12">
       
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-tight">
          Our <span className="text-blue-600">Services</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            onMouseEnter={() => setHovered(service.id)}
            onMouseLeave={() => setHovered(null)}
            className={`
              flex-1 flex flex-col gap-5 p-8 rounded-2xl border cursor-pointer
              transition-all duration-500 ease-in-out
              ${hovered === null
                ? "bg-white border-gray-200"                          // nothing hovered
                : hovered === service.id
                ? "bg-white border-black scale-105 shadow-[0_0_30px_rgba(238,191,4,0.25)]"  // this one hovered
                : "bg-gray-300 border-gray-200 opacity-60"            // others dimmed
              }
            `}
          >
            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-500
                ${hovered === service.id ? "bg-white" : "bg-gray-100"}`}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3
              className={`text-xl font-extrabold transition-colors duration-500
                ${hovered === service.id ? "text-blue-600" : "text-black"}`}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              className={`text-md leading-relaxed transition-colors duration-500
                ${hovered === service.id ? "text-black" : "text-gray-800"}`}
            >
              {service.description}
            </p>

            {/* Divider */}
            <div className={`w-full h-[1px] transition-colors duration-500
              ${hovered === service.id ? "bg-white/10" : "bg-gray-100"}`}
            />

            {/* Items */}
            <ul className="flex flex-col gap-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className={`flex items-center gap-2 text-md font-medium transition-colors duration-500
                    ${hovered === service.id ? "text-black" : "text-gray-600"}`}
                >
                  <span className="text-blue-600 text-lg">✦</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA button */}
            
            <a href="#Contact"
              className={`mt-auto inline-flex items-center gap-2 font-bold text-sm transition-all duration-500
                ${hovered === service.id ? "text-blue-600" : "text-gray-400"}`}
            >
              Book Now
            </a>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Services