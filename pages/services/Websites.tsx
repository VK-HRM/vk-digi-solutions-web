import React from 'react';
import { Link } from 'react-router-dom';
import { Code, CheckCircle2, ArrowRight, Smartphone, Rocket, Target, Layout, ShieldCheck } from 'lucide-react';

const Websites: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-brandBlue mb-6">Websites & <span className="text-brandOrange">Landing Pages</span></h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
            Fast, SEO-ready, conversion-focused digital homes built to turn visitors into leads.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-black text-brandBlue mb-8">Conversion-First Development</h2>
            <ul className="space-y-6">
              {[
                { text: 'High-speed loading (Sub-2s)', icon: <Rocket className="text-brandOrange" /> },
                { text: 'Mobile-first responsive design', icon: <Smartphone className="text-brandBlue" /> },
                { text: 'Landing pages for specific ad funnels', icon: <Layout className="text-brandOrange" /> },
                { text: 'SEO-ready structure & schema markup', icon: <ShieldCheck className="text-green-500" /> },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">{item.icon}</div>
                  <span className="text-lg font-bold text-slate-700">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <Link to="/free-audit" className="btn-orange px-10 py-5 rounded-full text-lg font-black shadow-xl inline-flex items-center gap-3">
                Get Free Growth Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-inner flex flex-col items-center text-center">
             <Target className="w-20 h-20 text-brandOrange mb-8" />
             <h3 className="text-2xl font-black text-brandBlue mb-4">Built for Results</h3>
             <p className="text-slate-500 font-medium leading-relaxed">
               Most agencies build "pretty" websites. We build sales funnels. Every button, every image, and every line of copy is tested to drive the visitor to take action.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Websites;