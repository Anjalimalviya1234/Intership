import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

// Animated counter
const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const Home = () => {
  const features = [
    {
      title: 'Core Subjects Focus',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: 'Maths, English, Science — deep focus on every core subject',
      color: 'from-violet-500 to-purple-600',
    },
    {
      title: 'Experienced Teachers',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      description: 'Learn from highly qualified faculty with 10+ years of teaching',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Weekly Assessments',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      description: 'Regular weekly tests to track progress and boost confidence',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Study Materials',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Detailed exam notes and comprehensive study materials included',
      color: 'from-orange-500 to-amber-600',
    },
    {
      title: 'Extra Support',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: 'Personalized attention and extra classes for weaker students',
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Summer Programs',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      description: 'Intensive summer classes for rapid academic improvement',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Spoken English',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      description: 'Spoken English + Computer classes for complete skill development',
      color: 'from-indigo-500 to-blue-600',
    },
  ];

  const courses = [
    {
      level: 'Class 1st – 10th',
      icon: '🏫',
      subjects: 'All Subjects',
      duration: 'Full Year',
      badge: 'Most Popular',
      badgeColor: 'bg-emerald-100 text-emerald-700',
    },
    {
      level: 'Class 11th – 12th',
      icon: '📘',
      subjects: 'Commerce + Maths',
      duration: 'Full Year',
      badge: 'Board Focused',
      badgeColor: 'bg-blue-100 text-blue-700',
    },
    {
      level: 'Graduation',
      icon: '🎓',
      subjects: 'BBA, B.Com, M.Com',
      duration: 'Semester Wise',
      badge: 'Higher Education',
      badgeColor: 'bg-violet-100 text-violet-700',
    },
  ];

  const stats = [
    { label: 'Years of Excellence', value: 10, suffix: '+' },
    { label: 'Students Trained', value: 5000, suffix: '+' },
    { label: 'Success Rate', value: 98, suffix: '%' },
    { label: 'Expert Teachers', value: 15, suffix: '+' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      class: 'Class 10th Student',
      text: 'The teachers are extremely dedicated and helped me score 95% in board exams. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Rahul Verma',
      class: 'B.Com 2nd Year',
      text: 'Best coaching for commerce students in Indore. Study material is very well prepared.',
      rating: 5,
    },
    {
      name: 'Anita Patel',
      class: 'Parent',
      text: 'Very affordable fees with excellent quality teaching. My son improved drastically in just 3 months.',
      rating: 5,
    },
  ];

  return (
    <div className="flex-1">

      {/* ── HERO SECTION ── */}
      <section className="relative gradient-bg overflow-hidden">
        <div className="pattern-dots absolute inset-0" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

        <div className="container-custom relative z-10 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Admissions Open — 2025–26
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-tight mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Devi Ahilya <br />
                <span className="text-gradient bg-gradient-to-r from-cyan-300 to-yellow-300">
                  Coaching Classes
                </span>
              </h1>
              <p className="text-lg md:text-xl text-indigo-100 mb-3 leading-relaxed">
                Quality Education for a Brighter Future
              </p>
              <p className="flex items-center gap-2 text-indigo-200/80 text-sm mb-8">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                42/2, North Harsiddhi, Indore (M.P.)
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/admission" className="btn-accent">
                  Apply Now — Free Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link to="/courses" className="btn-secondary">
                  View Courses
                </Link>
              </div>
            </div>

            {/* Right: Why Choose Us card */}
            <div className="hidden md:block animate-fade-in-up delay-200">
              <div className="glass p-8 shadow-2xl">
                <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                  <span className="text-yellow-300">⭐</span> Why Choose Us?
                </h3>
                <ul className="space-y-4">
                  {[
                    { icon: '🏆', label: '10+ Years of Excellence', sub: 'Trusted by thousands of families' },
                    { icon: '👨‍🎓', label: '5000+ Students Trained', sub: 'Proven track record of success' },
                    { icon: '✅', label: '98% Results Guarantee', sub: 'Consistent top performance' },
                    { icon: '💰', label: 'Affordable Fee Structure', sub: 'Quality education at best price' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-lg flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{item.label}</p>
                        <p className="text-indigo-200/70 text-xs mt-0.5">{item.sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-white/20 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['🧑', '👩', '👦', '👧'].map((emoji, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm border-2 border-white/30">
                        {emoji}
                      </div>
                    ))}
                  </div>
                  <p className="text-indigo-100 text-sm">
                    <span className="font-bold text-white">500+</span> happy students this year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 0C1200 40 720 60 360 40C180 30 60 10 0 0L0 60Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-10 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-black text-primary-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES SECTION ── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="badge-primary mb-3">Our Programs</span>
            <h2 className="section-title">Courses We Offer</h2>
            <p className="section-subtitle">
              From school-level to graduation — comprehensive programs designed for every learner
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="card group p-0">
                <div className="h-2 bg-gradient-to-r from-primary-600 to-accent rounded-t-2xl" />
                <div className="p-7">
                  <div className="text-5xl mb-4">{course.icon}</div>
                  <div className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${course.badgeColor}`}>
                    {course.badge}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.level}</h3>
                  <p className="text-gray-500 text-sm mb-1">
                    <span className="font-semibold text-gray-700">Subjects:</span> {course.subjects}
                  </p>
                  <p className="text-gray-500 text-sm mb-5">
                    <span className="font-semibold text-gray-700">Duration:</span> {course.duration}
                  </p>
                  <Link
                    to="/courses"
                    className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="badge-primary mb-3">Our Strengths</span>
            <h2 className="section-title">Why Students Choose Us</h2>
            <p className="section-subtitle">
              What makes us the most trusted coaching institute in Indore
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-snug">{feature.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="badge-primary mb-3">Testimonials</span>
            <h2 className="section-title">What Our Students Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-7">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.class}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="gradient-bg-warm py-20 relative overflow-hidden">
        <div className="pattern-dots absolute inset-0" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Excel in Your Academics?
          </h2>
          <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
            Enroll today and get your first demo class absolutely <span className="font-bold text-white">FREE!</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admission" className="btn-accent text-base px-8 py-4">
              Get Admission Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a href="tel:9977111210" className="btn-secondary text-base px-8 py-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: 99771-11210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;