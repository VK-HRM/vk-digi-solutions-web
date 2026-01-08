import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CASE_STUDIES } from '../constants';
import { ArrowRight, Trophy, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const data = [
  { name: 'Month 1', leads: 40 },
  { name: 'Month 2', leads: 70 },
  { name: 'Month 3', leads: 120 },
  { name: 'Month 4', leads: 280 },
  { name: 'Month 5', leads: 420 },
];

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <section className="py-24 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandBlue/5 text-brandBlue text-sm font-bold mb-6">
            <Trophy className="w-4 h-4 text-brandOrange" /> Data-Backed Results
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-brandBlue mb-6">Proven <span className="text-brandOrange">Results</span>, <br />No Vanity Metrics.</h1>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            We measure success by revenue and qualified enquiries. See how we've helped our partners achieve explosive growth.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-32">
          {CASE_STUDIES.map((study, idx) => (
            <div key={study.id} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brandOrange/10 rounded-full blur-3xl"></div>
                <div className="bg-white p-6 rounded-[3.5rem] shadow-2xl border border-slate-100 relative z-10">
                  <div className="overflow-hidden rounded-[2.5rem] mb-10 aspect-video">
                    <img src={study.image} alt={study.client} className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[250px] w-full">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-4">Lead Velocity Growth</p>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                        <YAxis hide />
                        <Tooltip 
                          contentStyle={{borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                          cursor={{fill: '#f8fafc'}}
                        />
                        <Bar dataKey="leads" fill="#2E3A8C" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brandBlue text-white text-xs font-black uppercase tracking-[0.2em] mb-8">
                  {study.industry}
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-brandBlue mb-8 leading-tight">{study.title}</h2>
                <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                  {study.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-start">
                      <p className="text-4xl font-black text-brandOrange mb-1">{metric.value}</p>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-outline-blue px-10 py-5 rounded-full font-black text-lg inline-flex items-center gap-3 hover:gap-5 transition-all">
                  Get Similar Results <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;