import React from 'react';
import { INDUSTRIES } from '../constants';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brandOrange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl lg:text-7xl font-black text-brandBlue mb-6">Expertise Across <br /><span className="text-brandOrange">Verticals</span></h1>
          <p className="text-xl lg:text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
            Every industry has unique challenges. We adapt our <span className="text-brandBlue font-bold">Growth System™</span> to your specific business model for predictable results.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {INDUSTRIES.map((industry) => (
              <div key={industry.id} className="bg-white p-12 lg:p-16 rounded-[4rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-2xl hover:border-brandOrange transition-all group">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-brandBlue group-hover:bg-brandOrange group-hover:text-white transition-all mb-10 ring-8 ring-slate-50 group-hover:ring-brandOrange/10">
                  {React.cloneElement(industry.icon as React.ReactElement, { className: 'w-10 h-10' })}
                </div>
                <h3 className="text-3xl font-black text-brandBlue mb-4">{industry.label}</h3>
                <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
                  {industry.desc}
                </p>
                
                <div className="space-y-4 mb-12 w-full">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Key Focus Areas</p>
                  {[
                    'Precision Audience Targeting',
                    'Conversion Optimized Funnels',
                    'Automated Lead Nurturing'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="font-bold text-brandBlue">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-10 border-t border-slate-50 w-full flex justify-between items-center">
                   <Link 
                     to="/free-audit" 
                     className="text-brandBlue font-black flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm"
                   >
                      Request Sector Audit <ArrowRight className="w-5 h-5 text-brandOrange" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-brandBlue text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Industries Served', val: '12+' },
              { label: 'Leads Generated', val: '50k+' },
              { label: 'Avg ROI', val: '4.5x' },
              { label: 'Campaigns Run', val: '250+' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl lg:text-6xl font-black text-brandOrange mb-2">{stat.val}</p>
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;