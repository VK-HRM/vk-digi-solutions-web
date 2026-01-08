import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

export default function ServicesPage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* HERO */}
      <section className="bg-white py-24 lg:py-32 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-brandBlue mb-6 leading-tight">
            Our <span className="text-brandOrange">Services</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            We don't sell isolated services. We build high-performance <span className="text-brandBlue font-bold">Business Growth Systems</span>.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              link={`/services/${service.id}`}
              desc={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        {/* FOOTER CTA */}
        <div className="mt-20 text-center">
          <div className="bg-brandBlue p-12 lg:p-16 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
             <h2 className="text-3xl lg:text-4xl font-black mb-6">Need a custom roadmap?</h2>
             <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">Our growth experts are ready to audit your current digital footprint and build a strategy that scales.</p>
             <Link
               to="/free-audit"
               className="btn-orange px-10 py-5 rounded-full text-lg font-black shadow-xl inline-flex items-center gap-3"
             >
               Claim Free Growth Audit <ArrowRight className="w-5 h-5" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, link, desc, icon }: any) {
  return (
    <Link 
      to={link} 
      className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-brandOrange hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brandBlue group-hover:bg-brandOrange group-hover:text-white transition-all duration-300 mb-8">
        {icon}
      </div>
      <h2 className="text-2xl font-black text-brandBlue mb-4 group-hover:text-brandOrange transition-colors">
        {title}
      </h2>
      <p className="text-base text-slate-500 font-medium mb-10 leading-relaxed flex-grow line-clamp-3">
        {desc}
      </p>
      <div className="flex items-center gap-2 text-brandBlue font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
        View Details <ArrowRight className="w-4 h-4 text-brandOrange" />
      </div>
    </Link>
  );
}