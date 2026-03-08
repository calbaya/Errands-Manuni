import React, { useState } from 'react'
import { FaWhatsapp, FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  const [showPolicy, setShowPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showCookies, setShowCookies] = useState(false);

  const currentYear = new Date().getFullYear();

  const Modal = ({ title, date, sections, onClose }) => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#1a1814] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-200"
        >
          ×
        </button>
        <h2 className="text-2xl font-extrabold text-white mb-2">{title}</h2>
        <p className="text-gray-500 text-xs mb-6">Last updated: March 2026</p>
        {sections.map(({ title, body }) => (
          <div key={title} className="mb-6">
            <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const privacySections = [
    { title: "1. Information We Collect", body: "We collect information you provide directly to us, including your name, email address, phone number, and errand details when you submit a booking request or contact us through our website or WhatsApp." },
    { title: "2. How We Use Your Information", body: "We use the information we collect to process and fulfill your errand requests, communicate with you about your bookings, send you service updates and confirmations, and improve our services." },
    { title: "3. Information Sharing", body: "We do not sell, trade, or share your personal information with third parties except as necessary to complete your errand. All runners are bound by confidentiality agreements." },
    { title: "4. Data Security", body: "We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. All communications are handled securely and your data is stored on protected systems." },
    { title: "5. Data Retention", body: "We retain your personal information only for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us." },
    { title: "6. Your Rights", body: "You have the right to access, correct, or delete your personal information at any time. You may also opt out of any marketing communications by contacting us directly via email or WhatsApp." },
    { title: "7. Cookies", body: "Our website may use basic cookies to improve your browsing experience. These cookies do not collect personally identifiable information and can be disabled through your browser settings." },
    { title: "8. Contact Us", body: "If you have any questions about this Privacy Policy, please contact us at noreenmanuni@gmail.com or via WhatsApp at +254 743 339 801." },
  ];

  const termsSections = [
    { title: "1. Acceptance of Terms", body: "By accessing or using the Errands by Manuni service, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service." },
    { title: "2. Our Services", body: "Errands by Manuni provides errand running services including personal errands, business errands and EconData Advisory primarily within Nairobi. We reserve the right to refuse any errand request at our discretion." },
    { title: "3. Booking & Payment", body: "All bookings must be confirmed before an errand runner is dispatched. Payment is due upon completion of the errand unless a prior agreement has been made for business accounts. We accept M-Pesa and cash." },
    { title: "4. Cancellations", body: "You may cancel an errand request before a runner has been dispatched at no charge. Cancellations after dispatch may incur a partial fee to cover runner travel costs." },
    { title: "5. Liability", body: "Errands by Manuni takes reasonable care in handling your errands. However, we are not liable for delays caused by third parties, traffic, or circumstances beyond our control. Claims for lost or damaged items must be reported within 24 hours." },
    { title: "6. Client Responsibilities", body: "Clients are responsible for providing accurate errand details, locations, and instructions. Errands by Manuni is not responsible for errors resulting from incorrect information provided by the client." },
    { title: "7. Prohibited Errands", body: "We do not handle errands involving illegal items, substances, or activities. Any attempt to use our service for unlawful purposes will result in immediate termination and may be reported to authorities." },
    { title: "8. Changes to Terms", body: "We reserve the right to update these Terms of Service at any time. Continued use of our service after changes are posted constitutes acceptance of the new terms." },
  ];

  const cookieSections = [
    { title: "1. What Are Cookies", body: "Cookies are small text files stored on your device when you visit our website. They help us provide a better browsing experience by remembering your preferences and how you use our site." },
    { title: "2. Types of Cookies We Use", body: "We use essential cookies that are necessary for the website to function, performance cookies that help us understand how visitors interact with our site, and preference cookies that remember your settings." },
    { title: "3. Essential Cookies", body: "These cookies are required for the website to operate correctly. They enable basic functions like page navigation and access to secure areas. The website cannot function properly without these cookies." },
    { title: "4. Performance Cookies", body: "These cookies collect anonymous information about how visitors use our website, such as which pages are visited most often. This data helps us improve the website experience for all users." },
    { title: "5. Third-Party Cookies", body: "We may use third-party services such as Google Analytics that set their own cookies to help us analyse website traffic. These cookies are governed by the respective third-party privacy policies." },
    { title: "6. Managing Cookies", body: "You can control and delete cookies through your browser settings. Most browsers allow you to block or delete cookies in their settings menu." },
    { title: "7. Cookie Consent", body: "By continuing to use our website, you consent to the use of cookies as described in this policy. You may withdraw your consent at any time by adjusting your browser settings." },
    { title: "8. Contact Us", body: "If you have any questions about our use of cookies, please contact us at noreenmanuni@gmail.com or via WhatsApp at +254 743 339 801." },
  ];

  const links = {
    Services: ["Personal Errands", "Business Errands", "EconData Advisory"],
    Company: ["About Us", "Services", "Testimonials & FAQs", "Contact Us"],
    Contact: [
      { label: "📍 Nairobi, Kenya" },
      { label: "📞 +254 743 339 801" },
      { label: "✉️ noreenmanuni@gmail.com" },
      { label: "🕐 Mon–Sat, 8am–6pm" },
    ],
  };

  return (
    <>
      {/* Modals */}
      {showPolicy  && <Modal title="Privacy Policy"   date="January 2025" sections={privacySections}  onClose={() => setShowPolicy(false)}  />}
      {showTerms   && <Modal title="Terms of Service" date="January 2025" sections={termsSections}    onClose={() => setShowTerms(false)}   />}
      {showCookies && <Modal title="Cookie Policy"    date="January 2025" sections={cookieSections}   onClose={() => setShowCookies(false)} />}

      {/* ── Footer ── */}
      <footer className="w-full bg-[#0f0e0c] border-t border-white/10">

        {/* Main Footer */}
        <div className="max-w-6xl mx-auto px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-extrabold text-2xl">
              Errands<span className="text-blue-600">.</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Professional errand runner for individuals and businesses across Nairobi. Fast, reliable, and discreet.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaWhatsapp />, href: "https://wa.me/254743339801", color: "#25D366" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/manuni_services", color: "#E1306C" },
                { icon: <FaXTwitter />, href: "https://twitter.com/noreen_manuni", color: "#ffffff" },
              ].map(({ icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
                  style={{ color }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Services</h4>
            <ul className="flex flex-col gap-3">
              {links.Services.map(item => (
                <li key={item}>
                  <a href="#Services" className="text-gray-500 text-sm hover:text-white cursor-pointer transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Company</h4>
            <ul className="flex flex-col gap-3">
              {links.Company.map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-500 text-sm hover:text-white cursor-pointer transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Contact</h4>
            <ul className="flex flex-col gap-3">
              {links.Contact.map(({ label }) => (
                <li key={label} className="text-gray-500 text-sm">{label}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 px-8 md:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {currentYear} Errands by Manuni. All Rights Reserved.
          </p>
          <p className="text-gray-200 text-xs">
            Developed by Baya +254 740 481 871
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowPolicy(true)}
              className="text-gray-600 text-xs hover:text-white cursor-pointer transition-colors duration-300"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setShowTerms(true)}
              className="text-gray-600 text-xs hover:text-white cursor-pointer transition-colors duration-300"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setShowCookies(true)}
              className="text-gray-600 text-xs hover:text-white cursor-pointer transition-colors duration-300"
            >
              Cookie Policy
            </button>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer