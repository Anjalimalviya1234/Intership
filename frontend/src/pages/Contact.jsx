import { useState } from 'react';
import { api } from '../api';
import Toast from '../components/Toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.phone.match(/^[0-9]{10}$/)) return 'Valid 10-digit phone number is required';
    if (!formData.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setToast({ message: error, type: 'error' });
      return;
    }
    setLoading(true);
    try {
      await api.submitContact(formData);
      setToast({ message: 'Message sent successfully! We will contact you soon.', type: 'success' });
      setFormData({ name: '', phone: '', message: '' });
    } catch (err) {
      setToast({ message: 'Failed to send message. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Our Address',
      value: '42/2, North Harsiddhi, Indore (M.P.) — 452001',
      color: 'bg-violet-100 text-violet-600',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone Numbers',
      value: '99771-11210  |  62632-44910',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Class Timings',
      value: 'Mon – Sat: 6 AM–8 AM & 4 PM–7 PM',
      color: 'bg-emerald-100 text-emerald-600',
    },
  ];

  return (
    <div className="flex-1">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Hero */}
      <section className="gradient-bg relative overflow-hidden py-20">
        <div className="pattern-dots absolute inset-0" />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="badge bg-white/15 text-white border border-white/20 mb-4">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact <span className="text-cyan-300">Us</span>
            </h1>
            <p className="text-indigo-100 text-lg">
              Have a question? We'd love to hear from you. Send us a message or call directly.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none">
            <path d="M0 50L1440 50L1440 0C1200 35 720 50 360 30C180 20 60 5 0 0L0 50Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-slate-50 py-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-5">
            {contactInfo.map((info, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-card flex items-start gap-4">
                <div className={`w-11 h-11 rounded-xl ${info.color} flex items-center justify-center flex-shrink-0`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{info.label}</p>
                  <p className="text-gray-800 text-sm font-medium">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Form */}
            <div className="bg-white rounded-3xl shadow-card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Send a Message
              </h2>
              <p className="text-gray-500 text-sm mb-7">We typically reply within a few hours.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="10-digit mobile number"
                    maxLength={10}
                  />
                </div>
                <div>
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="form-input resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-sm py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              {/* Quick Call */}
              <div className="bg-gradient-to-br from-primary-700 to-primary-500 rounded-3xl p-7 text-white shadow-glow">
                <h3 className="font-bold text-xl mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Prefer to Call?
                </h3>
                <p className="text-indigo-100 text-sm mb-5">
                  Speak directly with our admission team for instant answers.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:9977111210"
                    className="flex items-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-xl p-4 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs">Primary Number</p>
                      <p className="text-white font-bold">99771 - 11210</p>
                    </div>
                  </a>
                  <a
                    href="tel:6263244910"
                    className="flex items-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-xl p-4 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/70 text-xs">Alternate Number</p>
                      <p className="text-white font-bold">62632 - 44910</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919977111210?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20coaching%20classes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-500 hover:bg-green-600 rounded-3xl p-6 text-white shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 text-2xl">
                  💬
                </div>
                <div>
                  <p className="text-white/80 text-xs font-medium mb-0.5">Chat instantly on</p>
                  <p className="font-bold text-lg">WhatsApp</p>
                </div>
                <svg className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              {/* Map Embed */}
              <div className="bg-white rounded-3xl shadow-card overflow-hidden">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="font-bold text-gray-900 text-sm">Find Us on Map</h3>
                  <p className="text-gray-400 text-xs mt-0.5">42/2, North Harsiddhi, Indore</p>
                </div>
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📍</div>
                    <p className="text-gray-500 text-sm">North Harsiddhi, Indore</p>
                    <a
                      href="https://maps.google.com/?q=North+Harsiddhi+Indore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 text-xs font-semibold hover:underline mt-1 inline-block"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;