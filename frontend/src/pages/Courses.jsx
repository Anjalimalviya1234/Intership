import { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'School Level', 'Higher Secondary', 'Graduation', 'Special Programs'];

  const courses = [
    {
      category: 'School Level',
      items: [
        {
          name: 'Class 1st to 5th',
          subjects: 'All Subjects',
          duration: 'Full Year',
          icon: '🏫',
          color: 'from-emerald-500 to-teal-600',
          badge: 'Foundation',
        },
        {
          name: 'Class 6th to 8th',
          subjects: 'Mathematics, Science, English',
          duration: 'Full Year',
          icon: '📗',
          color: 'from-blue-500 to-indigo-600',
          badge: 'Intermediate',
        },
        {
          name: 'Class 9th to 10th',
          subjects: 'All Subjects with Board Preparation',
          duration: 'Full Year',
          icon: '📘',
          color: 'from-violet-500 to-purple-600',
          badge: 'Board Focused',
        },
      ],
    },
    {
      category: 'Higher Secondary',
      items: [
        {
          name: 'Class 11th Commerce',
          subjects: 'Accountancy, Economics, Business Studies, Maths',
          duration: 'Full Year',
          icon: '📊',
          color: 'from-orange-500 to-amber-600',
          badge: 'Commerce',
        },
        {
          name: 'Class 12th Commerce',
          subjects: 'Accountancy, Economics, Business Studies, Maths',
          duration: 'Full Year',
          icon: '🎯',
          color: 'from-pink-500 to-rose-600',
          badge: 'Board Exam',
        },
      ],
    },
    {
      category: 'Graduation',
      items: [
        {
          name: 'B.Com (1st, 2nd, 3rd Year)',
          subjects: 'All Commerce Subjects',
          duration: 'Semester Wise',
          icon: '🎓',
          color: 'from-cyan-500 to-blue-600',
          badge: 'Degree Level',
        },
        {
          name: 'BBA (1st, 2nd, 3rd Year)',
          subjects: 'Management Studies',
          duration: 'Semester Wise',
          icon: '💼',
          color: 'from-indigo-500 to-violet-600',
          badge: 'Management',
        },
        {
          name: 'M.Com (1st, 2nd Year)',
          subjects: 'Advanced Commerce',
          duration: 'Year Wise',
          icon: '🏛️',
          color: 'from-purple-500 to-pink-600',
          badge: 'Post Graduate',
        },
      ],
    },
    {
      category: 'Special Programs',
      items: [
        {
          name: 'Spoken English',
          subjects: 'Communication Skills, Grammar, Vocabulary',
          duration: '3 Months',
          icon: '🗣️',
          color: 'from-green-500 to-emerald-600',
          badge: 'Skill Dev',
        },
        {
          name: 'Computer Classes',
          subjects: 'Basic to Advanced Computer Skills',
          duration: '3–6 Months',
          icon: '💻',
          color: 'from-slate-500 to-gray-600',
          badge: 'Tech Skills',
        },
        {
          name: 'Summer Intensive',
          subjects: 'Intensive Revision & New Topics',
          duration: 'Summer Vacation',
          icon: '☀️',
          color: 'from-yellow-500 to-orange-500',
          badge: 'Seasonal',
        },
      ],
    },
  ];

  const filteredCourses =
    activeCategory === 'All'
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="gradient-bg relative overflow-hidden py-20">
        <div className="pattern-dots absolute inset-0" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="badge bg-white/15 text-white border border-white/20 mb-4">Curriculum</span>
            <h1
              className="text-4xl md:text-5xl font-black text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Our <span className="text-cyan-300">Courses</span>
            </h1>
            <p className="text-indigo-100 text-lg leading-relaxed">
              Comprehensive programs from Class 1st to Graduation — designed for every learner's journey.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none">
            <path d="M0 50L1440 50L1440 0C1200 35 720 50 360 30C180 20 60 5 0 0L0 50Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-slate-50 pt-12">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-glow'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="bg-slate-50 pb-20">
        <div className="container-custom space-y-14">
          {filteredCourses.map((category, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-7">
                <h2
                  className="text-xl font-bold text-gray-900"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {category.category}
                </h2>
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400 font-medium">
                  {category.items.length} courses
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((course, index) => (
                  <div key={index} className="card group overflow-hidden">
                    {/* Top gradient bar */}
                    <div className={`bg-gradient-to-r ${course.color} p-5 flex items-center justify-between`}>
                      <div>
                        <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                          {course.badge}
                        </span>
                        <h3 className="text-white font-bold text-lg mt-1 leading-tight">
                          {course.name}
                        </h3>
                      </div>
                      <div className="text-4xl opacity-80">{course.icon}</div>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <div className="space-y-3 mb-5">
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          <div>
                            <p className="text-xs text-gray-400 font-medium">Subjects</p>
                            <p className="text-gray-700 text-sm font-medium">{course.subjects}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="text-xs text-gray-400 font-medium">Duration</p>
                            <p className="text-gray-700 text-sm font-medium">{course.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <p className="text-xs text-gray-400 font-medium">Fee</p>
                            <p className="text-primary-600 text-sm font-semibold">Contact for Details</p>
                          </div>
                        </div>
                      </div>

                      <Link
                        to="/admission"
                        className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-primary-600 border border-gray-200 hover:border-primary-600 text-gray-700 hover:text-white py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group"
                      >
                        Enroll Now
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="gradient-bg-warm py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-black text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Not Sure Which Course to Pick?
          </h2>
          <p className="text-indigo-200 mb-8">Call us for a free counselling session with our experts.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:9977111210" className="btn-accent">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 99771-11210
            </a>
            <Link to="/contact" className="btn-secondary">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;