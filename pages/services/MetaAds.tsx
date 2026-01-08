import React from 'react';
import { Link } from 'react-router-dom';
import { Target, CheckCircle2, ArrowRight, Instagram, Facebook, Zap, PieChart, Users, MessageSquare } from 'lucide-react';

const MetaAds: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brandBlue/5 text-brandBlue text-sm font-bold mb-6">
            <Facebook className="w-4 h-4" /> <Instagram className="w-4 h-4" /> Meta Ads Experts
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-brandBlue mb-6">Meta Ads <span className="text-brandOrange">Management</span></h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
            We run data-driven Facebook & Instagram campaigns focused on leads and ROI, not just clicks.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-black text-brandBlue mb-8">Conversion-First Social Ads</h2>
            <ul className="space-y-6">
              {[
                { text: 'Lead generation & retargeting', icon: <Target className="text-brandOrange" /> },
                { text: 'Audience & creative testing', icon: <Users className="text-brandBlue" /> },
                { text: 'Conversion tracking & API setup', icon: <PieChart className="text-brandOrange" /> },
                { text: 'Weekly optimization & reporting', icon: <CheckCircle2 className="text-green-500" /> },
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
          <div className="bg-brandBlue p-10 lg:p-14 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-black mb-6 italic">"Our Meta campaign generated 84 qualified leads in the first 20 days. The quality of enquiries is unmatched."</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center font-black">MC</div>
              <div>
                <p className="font-bold">Medical Director</p>
                <p className="text-sm text-slate-400">HealthEase Clinic</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetaAds;