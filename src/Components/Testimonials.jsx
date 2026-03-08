import React, { useState, useEffect } from 'react'

const Testimonials = () => {

  const faqs = [
    {
      id: 0,
      question: "How do I book an errand?",
      answer: "Booking is simple! Just click the 'Book an Errand' button or 'Chat on WhatsApp', with the details of what you need done, your location, and preferred time. We'll confirm within 30 minutes."
    },
    {
      id: 1,
      question: "What areas do you serve?",
      answer: "We primarily serve Nairobi and surrounding areas. For specialized requests or advisory services, arrangements can be made depending on client needs."
    },
    {
      id: 2,
      question: "How much does it cost?",
      answer: "Pricing depends on the nature, urgency, and scope of the task or advisory project. A clear quotation is provided before work begins"
    },
    {
      id: 3,
      question: "Are your services confidential?",
      answer: "Yes. We handle all client information, errands, and advisory projects with strict confidentiality and professionalism."
    },
    {
      id: 4,
      question: "Who can benefit from EconData Services?",
      answer: "Our advisory services are ideal for businesses and individuals seeking expert insights on economic and financial matters. Whether you're planning a project, evaluating risks, or seeking strategic guidance, we provide tailored support."
    },
    {
      id: 5,
      question: "Do you handle Airbnb Restocking?",
      answer: "Yes, we offer Airbnb restocking services to ensure your property is consistently supplied with groceries, toiletries, and essential items for guest readiness."
    },
  ];

  const testimonials = [
    {
      id: 0,
      name: "Sophia Macharia",
      role: "Homeowner",
      text: "Manuni Errands Services saved me so much time. My shopping and deliveries were handled professionally and exactly as requested.",
      rating: 5,
    },
    {
      id: 1,
      name: "James Alonzo.",
      role: "Entrepreneur",
      text: "Reliable, efficient, and very responsive. I highly recommend Manuni for anyone with a busy schedule.",
      rating: 4,
    },
    {
      id: 2,
      name: "Amina Kadzo.",
      role: "Busy Mom",
      company: "Nairobi",
      text: "As a working mom, having someone I trust to run errands for me is priceless. They picked up my groceries, sorted the pharmacy, and even got my dry cleaning. Amazing!",
      rating: 5,
    },
    {
      id: 3,
      name: "Brian Omwami.",
      role: "Business Owner",
      text: "The feasibility study prepared by EconData Advisory was clear, detailed, and extremely helpful for our business planning.",
      rating: 5,
    },
    {
      id: 4,
      name: "Grace Lusweti.",
      role: "Freelancer",
      company: "Nairobi",
      text: "I needed urgent documents delivered across town during a meeting. They picked up and delivered within the hour. Absolutely reliable service!",
      rating: 4,
    },
    {
      id: 5,
      name: "David Nduku.",
      role: "Investor",
      text: "Professional analysis and well-structured reporting. The insights helped us make confident investment decisions.",
      rating: 5,
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);
  const [current, setCurrent] = useState(0);

  // Auto slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="Testimonials" className="w-full py-20 px-8 md:px-16 bg-white">

      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-blue-800 font-bold tracking-widest text-lg uppercase mb-3">
          Why Choose Us
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
          FAQs & <span className="text-blue-800">Testimonials</span>
        </h2>
      </div>

      {/* Main Grid */}
      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">

        {/* ── Left: FAQs ── */}
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="text-xl font-extrabold text-black mb-2">Frequently Asked Questions</h3>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`border rounded-xl overflow-hidden transition-all duration-300
                ${openFaq === faq.id ? "border-blue-800 shadow-[0_0_16px_rgba(238,191,4,0.15)]" : "border-gray-200"}`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-200 transition-colors duration-200"
              >
                <span className={`font-semibold text-sm transition-colors duration-300
                  ${openFaq === faq.id ? "text-blue-800" : "text-black"}`}>
                  {faq.question}
                </span>
                <span className={`text-xl font-bold transition-all duration-300 flex-shrink-0 ml-4
                  ${openFaq === faq.id ? "text-blue-800 rotate-45" : "text-gray-400 rotate-0"}`}>
                  +
                </span>
              </button>

              {/* Answer */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden
                ${openFaq === faq.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Right: Testimonials Slider ── */}
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="text-xl font-extrabold text-blue-800 mb-2">What Our Clients Say</h3>

          {/* Slide */}
          <div className="relative bg-blue-800 rounded-2xl p-8 min-h-[280px] flex flex-col justify-between overflow-hidden">

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <span key={i} className="text-[#EEBF04] text-lg">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-100 text-base leading-relaxed italic flex-1">
              "{testimonials[current].text}"
            </p>

            {/* Author */}
         <div className="flex items-center gap-4 mt-6">
              <div>
                <p className="text-black font-bold text-sm">{testimonials[current].name}</p>
                <p className="text-gray-200 text-xs">{testimonials[current].role} · {testimonials[current].company}</p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300
                  ${current === i
                    ? "bg-[#EEBF04] w-6 h-2"
                    : "bg-gray-300 w-2 h-2 hover:bg-gray-400"}`}
              />
            ))}
          </div>

          {/* Manual Controls */}
          <div className="flex gap-3">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#EEBF04] hover:text-[#EEBF04] transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#EEBF04] hover:text-[#EEBF04] transition-all duration-300"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials