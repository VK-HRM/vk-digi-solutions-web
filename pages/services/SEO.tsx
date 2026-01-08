import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle2, ArrowRight, BarChart3, MapPin, Search, FileText, Zap } from 'lucide-react';

const SEO: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-brandBlue mb-6">SEO & <span className="text-brandOrange">Local SEO</span></h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
            Rank higher, get consistent organic leads. We optimize your digital presence for long-term dominance.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-black text-brandBlue mb-8">Organic Growth Strategy</h2>
            <ul className="space-y-6">
              {[
                { text: 'Technical SEO & site speed audit', icon: <Zap className="text-brandOrange" /> },
                { text: 'Local SEO & Google Business Profile', icon: <MapPin className="text-brandBlue" /> },
                { text: 'Content strategy & keyword research', icon: <Search className="text-brandOrange" /> },
                { text: 'On-page & Off-page optimization', icon: <FileText className="text-green-500" /> },
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
          <div className="bg-brandBlue p-10 lg:p-14 rounded-[3rem] text-white shadow-2xl">
             <BarChart3 className="w-16 h-16 text-brandOrange mb-8" />
             <h3 className="text-3xl font-black mb-4">Dominate Locally</h3>
             <p className="text-slate-300 font-medium leading-relaxed">
               For local businesses, ranking in the "Map Pack" is the difference between a busy week and a quiet one. We ensure you are the first choice in your vicinity.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO;