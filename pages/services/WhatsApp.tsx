
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, CheckCircle2, ArrowRight, Bot, Bell, Clock } from 'lucide-react';

const WhatsApp: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-brandBlue mb-6"><span className="text-brandOrange">WhatsApp</span> Marketing Automation</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">Close deals while you sleep. Automated follow-ups, chatbots, and CRM integration.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                <Bot className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-brandBlue mb-2">Automated Chatbots</h3>
                <p className="text-slate-500 font-medium">Qualify leads 24/7 without lifting a finger. Send pricing, portfolios, or book appointments instantly.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <Bell className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-brandBlue mb-2">Lead Re-engagement</h3>
                <p className="text-slate-500 font-medium">90% open rates on WhatsApp. Broadcast updates and offers to your database effectively.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 flex-shrink-0">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-brandBlue mb-2">Instant Follow-up</h3>
                <p className="text-slate-500 font-medium">Research shows that following up within 5 minutes increases conversion by 9x. We automate that.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 p-12 rounded-[4rem] text-white shadow-2xl">
            <h2 className="text-3xl font-black mb-6">WhatsApp ROI</h2>
            <div className="space-y-4 text-slate-400">
              <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 98% Open Rate</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 45% Click-through Rate</p>
              <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 3x Conversion Lift</p>
            </div>
            <Link to="/free-audit" className="mt-10 inline-block w-full text-center btn-orange py-5 rounded-2xl font-black text-lg">
              Automate My Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsApp;
