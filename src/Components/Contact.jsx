import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", service: "", date: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactDetails = [
    { icon: "📍", label: "Location", value: "Nairobi, Kenya" },
    { icon: "📞", label: "Phone", value: "+254 743 339 801" },
    { icon: "✉️", label: "Email", value: "noreenmanuni@gmail.com" },
    { icon: "🕐", label: "Working Hours", value: "Mon – Sat, 8am – 6pm" },
  ];

  return (
    <section id="Contact" className="w-full py-20 px-8 md:px-16 bg-[#0f0e0c]">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-gray-100 font-bold tracking-widest text-md uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Book an <span className="text-blue-800">Errand</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">

        {/* Left - Contact Details */}
        <div className="flex flex-col gap-5 md:w-1/3">

          {/* Contact Info Cards */}
          {contactDetails.map(({ icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:border-blue-800 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-200 hover:bg-black border border-blue-800 flex items-center justify-center text-xl flex-shrink-0">
                {icon}
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold">{label}</p>
                <p className="text-white font-semibold text-sm mt-1">{value}</p>
              </div>
            </div>
          ))}

          {/* WhatsApp Button */}
          
          <a  href={`https://wa.me/254743339801?text=${encodeURIComponent("Hi, I'd like to book an errand with Errands by Manuni")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold px-6 py-4 rounded-xl hover:bg-[#20ba58] hover:drop-shadow-[0_0_16px_#25D366] transition-all duration-300 hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.86L.057 23.903a.75.75 0 00.94.94l6.044-1.475A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.964-1.362l-.356-.211-3.688.9.916-3.688-.23-.373A9.75 9.75 0 1112 21.75z"/>
            </svg>
            Chat on WhatsApp
          </a>

        </div>

        {/* Right - Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-5"
        >
          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Full Name</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none focus:border-blue-800 transition-all duration-300"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Email Address</label>
              <input
                type="email"
                required
                placeholder="client@gmail.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none focus:border-blue-800 transition-all duration-300"
              />
            </div>
          </div>

          {/* Phone & Service */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Phone Number</label>
              <input
                type="tel"
                required
                placeholder="+254 743 339 801"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none focus:border-blue-800 transition-all duration-300"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Service Type</label>
              <select
                required
                value={form.service}
                onChange={e => setForm({ ...form, service: e.target.value })}
                className="bg-[#1a1814] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-800 transition-all duration-300 cursor-pointer"
              >
                <option value="" disabled>Select a service...</option>
                <option>Personal Errands</option>
                <option>Business Errands</option>
                <option>EconData Advisory</option>
                <option>Catering</option>
                <option>Shopping & Pickup</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Preferred Date</label>
            <input
              type="date"
              required
              value={form.date}
              onChange={e => setForm({ ...form, date: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-blue-800 transition-all duration-300 cursor-pointer"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Message / Errand Details</label>
            <textarea
              required
              rows={5}
              placeholder="Describe your errand or EconData service location, timing, any special instructions"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 outline-none focus:border-blue-800 transition-all duration-300 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-black font-extrabold py-4 rounded-xl hover:bg-blue-600 hover:drop-shadow-[0_0_12px_#60A5FA] transition-all duration-300 hover:scale-105 text-sm tracking-[5px]"
          >
            SEND
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium px-5 py-4 rounded-xl">
              ✅ Request sent! We'll get back to you within one hour.
            </div>
          )}

        </form>
      </div>
    </section>
  )
}

export default Contact