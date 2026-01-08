
import React from 'react';
// Added missing Search icon to the lucide-react import list
import { Target, Eye, Workflow, CheckCircle, TrendingUp, BarChart2, ShieldCheck, Zap, Search } from 'lucide-react';

const Company: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Intro - WHO WE ARE */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-black text-brandBlue mb-10 leading-tight">
                We Build Digital Systems That <span className="text-brandOrange">Generate Business.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-8 leading-relaxed font-medium">
                VK Digi Solutions is a performance-driven digital growth company. We help businesses generate <span className="text-brandBlue font-bold underline decoration-brandOrange decoration-4 underline-offset-4">consistent enquiries and revenue</span> using structured digital systems.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed font-medium">
                We don't just run ads or build websites. We create a holistic bridge between your brand and your future customers, ensuring every touchpoint is optimized for one thing: growth.
              </p>
            </div>
            <div className="relative">
              <div className="bg-slate-50 rounded-[4rem] p-6 shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="VK Digi Solutions Team" 
                  className="rounded-[3.5rem] shadow-2xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-brandBlue font-black text-sm uppercase tracking-[0.2em] mb-4">Our Approach</h2>
            <p className="text-4xl lg:text-5xl font-black text-brandBlue mb-6">How We Drive Growth</p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">Four distinct phases of the VK Digi Growth System.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: 'Understand', desc: 'We deep dive into your business model, customer persona, and market landscape.', icon: <Search /> },
              { title: 'Build', desc: 'Setting up the digital system, from landing pages to tracking pixels and automation.', icon: <Workflow /> },
              { title: 'Launch & Track', desc: 'Go-live with high-performance ads and real-time monitoring of every lead.', icon: <Target /> },
              { title: 'Scale', desc: 'Optimize what works. Double down on winning channels and scale your revenue.', icon: <TrendingUp /> }
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 text-center relative group hover:border-brandOrange transition-all">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brandBlue group-hover:bg-brandOrange group-hover:text-white transition-all mx-auto mb-8">
                  {React.cloneElement(step.icon as React.ReactElement, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-2xl font-black text-brandBlue mb-4">{step.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-brandBlue p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden flex flex-col items-start">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Eye className="w-16 h-16 text-brandOrange mb-8" />
              <h3 className="text-4xl font-black mb-8 uppercase tracking-widest">Vision</h3>
              <p className="text-2xl text-slate-300 font-medium leading-relaxed">
                To become the most trusted performance-first digital growth partner for businesses across India.
              </p>
            </div>
            <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 shadow-inner flex flex-col items-start">
              <Target className="w-16 h-16 text-brandOrange mb-8" />
              <h3 className="text-4xl font-black text-brandBlue mb-8 uppercase tracking-widest">Mission</h3>
              <p className="text-2xl text-slate-500 font-medium leading-relaxed">
                To deliver predictable, consistent, and profitable growth for our partners using data, systems, and intelligent automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM (Optional / Placeholder) */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-4xl font-black text-brandBlue mb-16">The Team Behind Your Growth</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { name: 'Vijay Kumar', role: 'Founder & Head of Strategy', img: 'https://picsum.photos/seed/v1/400/400' },
                { name: 'Karan Singh', role: 'Performance Marketing Lead', img: 'https://picsum.photos/seed/v2/400/400' },
                { name: 'Anjali Sharma', role: 'Conversion Designer', img: 'https://picsum.photos/seed/v3/400/400' }
              ].map((member, i) => (
                <div key={i} className="group">
                  <div className="relative mb-6">
                    <div className="aspect-square rounded-[3rem] overflow-hidden bg-white shadow-xl">
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-black text-brandBlue mb-1">{member.name}</h4>
                  <p className="text-brandOrange font-bold uppercase tracking-widest text-xs">{member.role}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
