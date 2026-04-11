import { useState } from 'react';
import { api } from '../api';
import Toast from '../components/Toast';

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    phone: '',
    course: '',
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const courses = [
    'Class 1st to 5th (All Subjects)',
    'Class 6th to 8th (All Subjects)',
    'Class 9th to 10th (All Subjects)',
    'Class 11th Commerce + Maths',
    'Class 12th Commerce + Maths',
    'BBA (1st, 2nd, 3rd Year)',
    'B.Com (1st, 2nd, 3rd Year)',
    'M.Com (1st, 2nd Year)',
    'Spoken English Course',
    'Computer Classes',
    'Summer Intensive Program',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Student name is required';
    if (!formData.class.trim()) return 'Class is required';
    if (!formData.phone.match(/^[0-9]{10}$/)) return 'Valid 10-digit phone number is required';
    if (!formData.course) return 'Please select a course';
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
      await api.submitAdmission(formData);
      setSubmitted(true);
      setToast({ message: 'Application submitted! We will call you within 24 hours.', type: 'success' });
      setFormData({ name: '', class: '', phone: '', course: '' });
    } catch (err) {
      setToast({ message: 'Failed to submit form. Please try again.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { step: '01', title: 'Fill the Form', desc: 'Complete the admission form below with your details.' },
    { step: '02', title: 'Get a Call', desc: 'Our team will contact you within 24 hours to confirm.' },
    { step: '03', title: 'Free Demo Class', desc: 'Attend a free demo class to experience our teaching style.' },
    { step: '04', title: 'Join & Excel', desc: 'Formally enroll and begin your journey to academic success!' },
  ];

  return (
    <div className="flex-1">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      {/* Hero */}
      <section className="gradient-bg relative overflow-hidden py-20">
        <div className="pattern-dots absolute inset-0" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/15 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="badge bg-white/15 text-white border border-white/20 mb-4">
              🎓 Admissions Open
            </span>
            <h1
              className="text-4xl md:text-5xl font-black text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Secure Your Seat <br />
              <span className="text-yellow-300">2025 – 26</span>
            </h1>
            <p className="text-indigo-100 text-lg leading-relaxed">
              Fill the form below to apply. Seats are limited — enroll early and get a{' '}
              <span className="text-yellow-300 font-bold">FREE Demo Class!</span>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none">
            <path d="M0 50L1440 50L1440 0C1200 35 720 50 360 30C180 20 60 5 0 0L0 50Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-14 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-1/2 w-full h-px bg-primary-200 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-black mx-auto mb-3 shadow-glow">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Benefits */}
      <section className="py-10 pb-20 bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-5 gap-10 items-start">

            {/* Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-3xl shadow-card p-8 md:p-10">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900 text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Student Admission Form
                    </h2>
                    <p className="text-gray-400 text-xs">All fields marked * are required</p>
                  </div>
                </div>

                {submitted ? (
                  <div className="text-center py-10">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
                    <p className="text-gray-500 text-sm mb-6">
                      Thank you! Our team will call you within <strong>24 hours</strong> to confirm your enrollment.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-primary"
                    >
                      Submit Another Form
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">Student's Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Enter student's full name"
                        />
                      </div>
                      <div>
                        <label className="form-label">Parent's Phone Number *</label>
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
                    </div>

                    <div>
                      <label className="form-label">Current Class / Grade *</label>
                      <input
                        type="text"
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g., Class 10th, B.Com 1st Year"
                      />
                    </div>

                    <div>
                      <label className="form-label">Select Course *</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Choose a course...</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course}>{course}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-accent w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2 pt-2 text-center justify-center">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <p className="text-gray-400 text-xs">Your information is 100% safe and will not be shared.</p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right – Benefits */}
            <div className="md:col-span-2 space-y-5">
              {/* Offer Box */}
              <div
                className="rounded-3xl p-6 text-white shadow-lg"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #f97316)' }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">🎁</span>
                  <div>
                    <h3 className="font-black text-lg text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Early Bird Offer
                    </h3>
                    <p className="text-amber-100 text-sm">Limited seats available!</p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm">
                  {[
                    'Free Demo Class',
                    'Free Study Materials',
                    'Flexible Batch Timings',
                    'Affordable Fee Structure',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white font-semibold">
                      <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center text-xs flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Call */}
              <div className="bg-white rounded-3xl shadow-card p-6">
                <h3 className="font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Our counsellors are happy to guide you to the right course.
                </p>
                <a
                  href="tel:9977111210"
                  className="flex items-center gap-3 bg-primary-50 hover:bg-primary-100 rounded-2xl p-4 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Call us directly</p>
                    <p className="font-bold text-primary-700 text-base">99771 - 11210</p>
                  </div>
                </a>
              </div>

              {/* Testimonial snippet */}
              <div className="bg-white rounded-3xl shadow-card p-6 border-l-4 border-primary-500">
                <p className="text-gray-600 text-sm italic leading-relaxed mb-4">
                  "Joining Devi Ahilya Coaching was the best decision of my academic life. My board results improved by 30%!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center text-white font-bold text-sm">
                    S
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">Sumit Jain</p>
                    <p className="text-gray-400 text-xs">Class 12th Student, 2024</p>
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

export default Admission;