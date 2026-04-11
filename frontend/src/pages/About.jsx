import { Link } from 'react-router-dom';

const About = () => {
  const milestones = [
    { year: '2014', title: 'Founded', desc: 'Started with a vision to provide affordable quality education' },
    { year: '2017', title: 'Expanded', desc: 'Added graduation-level courses and computer classes' },
    { year: '2020', title: 'Online Mode', desc: 'Successfully shifted to online classes during pandemic' },
    { year: '2024', title: '5000+ Alumni', desc: 'Celebrating a decade of student success stories' },
  ];

  const team = [
    { name: 'Sr. Teacher – Mathematics', exp: '12+ Years Experience', icon: '👨‍🏫' },
    { name: 'Sr. Teacher – Science', exp: '10+ Years Experience', icon: '👩‍🔬' },
    { name: 'Sr. Teacher – Commerce', exp: '15+ Years Experience', icon: '👨‍💼' },
    { name: 'English & Communication', exp: '8+ Years Experience', icon: '👩‍🏫' },
  ];

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="gradient-bg relative overflow-hidden py-20">
        <div className="pattern-dots absolute inset-0" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="badge bg-white/15 text-white border border-white/20 mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Story, <span className="text-cyan-300">Our Mission</span>
            </h1>
            <p className="text-indigo-100 text-lg leading-relaxed">
              A decade of dedication to quality education, and thousands of success stories — learn more about Devi Ahilya Coaching Classes.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none">
            <path d="M0 50L1440 50L1440 0C1200 35 720 50 360 30C180 20 60 5 0 0L0 50Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* Story + Mission */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge-primary mb-4">Our Story</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Building Futures Since 2014
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Established with a vision to provide quality education to every student regardless of background, Devi Ahilya Coaching Classes has been a beacon of academic excellence in Indore. Our journey began with a simple mission: to make quality education accessible and affordable.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Located at 42/2, North Harsiddhi, Indore, we have transformed the lives of thousands of students through our unique teaching methodology, dedicated faculty, and student-first approach.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                We believe every student has the potential to succeed — our role is to nurture that potential with the right guidance, resources, and unwavering support.
              </p>
            </div>
            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-7 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Our Mission</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      To empower students with knowledge, skills and confidence to excel in their academic pursuits — and carry that success throughout their lives.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-7 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Our Vision</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      To become the most trusted coaching institute in Madhya Pradesh, known for excellence in education and consistent student success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="badge-primary mb-3">Journey</span>
            <h2 className="section-title">Our Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary-100 hidden md:block -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className={`flex flex-col md:flex-row gap-6 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl shadow-card p-6 inline-block">
                      <p className="text-primary-600 font-bold text-sm mb-1">{m.year}</p>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{m.title}</h3>
                      <p className="text-gray-500 text-sm">{m.desc}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary-600 border-4 border-primary-100 flex items-center justify-center z-10 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="badge-primary mb-3">Faculty</span>
            <h2 className="section-title">Why Parents Trust Us</h2>
            <p className="section-subtitle">Our experienced and passionate faculty are the backbone of student success</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {team.map((t, i) => (
              <div key={i} className="card p-7 text-center">
                <div className="text-5xl mb-4">{t.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{t.name}</h3>
                <p className="text-primary-600 text-xs font-medium">{t.exp}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Proven Track Record', desc: 'Consistent top results with students achieving top ranks in board exams and competitive tests.' },
              { icon: '👥', title: 'Small Batch Size', desc: 'Personal attention guaranteed with limited students per batch — no student gets left behind.' },
              { icon: '📊', title: 'Regular Progress Updates', desc: 'Monthly parent-teacher meetings and detailed progress reports to keep families informed.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-card text-center hover:shadow-card-hover transition-all hover:-translate-y-1">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Join Our Growing Family
          </h2>
          <p className="text-indigo-200 mb-8">Be a part of 5000+ successful students</p>
          <Link to="/admission" className="btn-accent">
            Apply Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;