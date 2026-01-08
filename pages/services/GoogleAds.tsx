import React from 'react';
import { Link } from 'react-router-dom';
import { Search, CheckCircle2, ArrowRight, TrendingUp, MousePointer2, Target, BarChart, Settings } from 'lucide-react';

const GoogleAds: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandBlue/5 text-brandBlue text-sm font-bold mb-6">
            <Search className="w-4 h-4" /> Google Ads Certified Partner
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-brandBlue mb-6">Google Ads <span className="text-brandOrange">Management</span></h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
            High-intent traffic for predictable enquiries. We capture customers exactly when they are searching for you.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-black text-brandBlue mb-8">Search & Intent Mastery</h2>
            <ul className="space-y-6">
              {[
                { text: 'Search & Display campaign management', icon: <Search className="text-brandOrange" /> },
                { text: 'Keyword & negative keyword optimization', icon: <Target className="text-brandBlue" /> },
                { text: 'Detailed conversion & ROI tracking', icon: <BarChart className="text-brandOrange" /> },
                { text: 'Landing page A/B testing', icon: <Settings className="text-green-500" /> },
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
          <div className="relative">
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-inner">
              <TrendingUp className="w-12 h-12 text-brandOrange mb-6" />
              <h3 className="text-2xl font-black text-brandBlue mb-4">Predictable ROI</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                We focus on "Quality Score" and "Landing Page Experience" to ensure you pay less per click while getting more qualified leads than your competitors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleAds;