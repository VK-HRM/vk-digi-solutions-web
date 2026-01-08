
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, CheckCircle2, ArrowRight, Workflow, Zap, ShieldCheck } from 'lucide-react';

const GrowthSystem: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      <section className="py-24 bg-brandBlue text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">Business <span className="text-brandOrange">Growth System™</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">The all-in-one engine that powers your business scale. No fragmented services, just one goal: Revenue.</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black text-brandBlue mb-8">What is the Growth System?</h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
              It is our proprietary framework that connects your ads, your website, and your sales pipeline into a single automated engine. It ensures zero lead leakage and maximum ROAS.
            </p>
            <div className="space-y-6">
              {[
                'Strategic Ads Management (Meta + Google)',
                'Conversion-Focused Funnel Build',
                'Advanced CRM Tracking Setup',
                'WhatsApp Follow-up Automation',
                'Bi-weekly Strategic Consulting'
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brandOrange" />
                  <span className="text-lg font-bold text-brandBlue">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100">
               <div className="flex flex-col gap-8">
                  <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm">
                    <Zap className="w-12 h-12 text-brandOrange" />
                    <div>
                      <h4 className="font-black text-brandBlue">Performance First</h4>
                      <p className="text-sm text-slate-400">We optimize for profit, not just traffic.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm">
                    <Workflow className="w-12 h-12 text-brandBlue" />
                    <div>
                      <h4 className="font-black text-brandBlue">Seamless Automation</h4>
                      <p className="text-sm text-slate-400">Lead to CRM to WA instantly.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm">
                    <ShieldCheck className="w-12 h-12 text-green-500" />
                    <div>
                      <h4 className="font-black text-brandBlue">Transparent Reporting</h4>
                      <p className="text-sm text-slate-400">Know where every rupee goes.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <Link to="/free-audit" className="btn-orange px-12 py-6 rounded-full text-2xl font-black shadow-2xl inline-flex items-center gap-4 hover:scale-105 transition-transform">
            Start Your Growth Engine <ArrowRight className="w-8 h-8" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GrowthSystem;
