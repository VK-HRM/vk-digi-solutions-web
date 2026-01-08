
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  MousePointer2, 
  Layout,
  MessageSquare,
  ArrowRightCircle,
  BarChart2,
  AlertTriangle,
  EyeOff,
  Zap
} from 'lucide-react';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="bg-white py-24 lg:py-40 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#F28C3810_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-40"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-black text-brandBlue mb-8 leading-[1.1]">
            We Build Digital Systems That <span className="text-brandOrange">Generate Business</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium">
            Ads, websites, automation & growth — built as one integrated system designed for performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Fixed: Link from react-router-dom must use 'to' instead of 'href' */}
            <Link
              to="/free-audit"
              className="btn-orange px-12 py-5 rounded-xl text-xl font-black shadow-2xl flex items-center gap-3 transition-transform hover:scale-105"
            >
              Get Free Growth Audit
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/contact"
              className="btn-outline-blue px-12 py-5 rounded-xl text-xl font-black"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* SYSTEM SECTION */}
      <section className="bg-slate-50 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-black text-brandBlue mb-4 tracking-tight uppercase">Our Growth System</h2>
          <p className="text-slate-500 font-medium mb-16 text-lg">The predictable path to scaling your revenue.</p>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-brandOrange/10 -translate-y-1/2 hidden lg:block rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { label: 'Traffic', icon: <Users />, sub: 'Ads & Paid Search', color: 'bg-brandBlue' },
                { label: 'Landing Page', icon: <Layout />, sub: 'Conversion High', color: 'bg-indigo-600' },
                { label: 'Leads', icon: <MousePointer2 />, sub: 'Qualified Enquiries', color: 'bg-brandOrange' },
                { label: 'WhatsApp', icon: <MessageSquare />, sub: 'Automation', color: 'bg-green-600' },
                { label: 'Sales', icon: <TrendingUp />, sub: 'Consistent ROI', color: 'bg-brandBlue' }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className={`${step.color} w-24 h-24 rounded-[2.5rem] flex items-center justify-center text-white shadow-xl mb-6 group-hover:scale-110 transition-transform duration-300 ring-8 ring-white`}>
                    {React.cloneElement(step.icon as React.ReactElement, { className: 'w-10 h-10' })}
                  </div>
                  <h4 className="font-black text-brandBlue text-xl mb-1">{step.label}</h4>
                  <p className="text-xs font-black uppercase text-slate-400 tracking-widest">{step.sub}</p>
                  {i < 4 && <ArrowRightCircle className="w-8 h-8 text-brandOrange/20 mt-6 lg:hidden" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS SNAPSHOT (Minimal) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <AlertTriangle />, title: 'No leads from ads', desc: 'Fix leaky funnels and burn no more cash.' },
              { icon: <MousePointer2 />, title: 'Poor conversions', desc: 'Landing pages that actually make people buy.' },
              { icon: <EyeOff />, title: 'No tracking', desc: 'Full CRM and data clarity on every rupee spent.' },
              { icon: <Zap />, title: 'Manual Work', desc: 'Automate follow-ups and scale your time.' }
            ].map((p, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="text-brandOrange mb-6">{React.cloneElement(p.icon as React.ReactElement, { className: 'w-10 h-10' })}</div>
                <h3 className="text-xl font-black text-brandBlue mb-3">{p.title}</h3>
                <p className="text-slate-500 font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-black text-brandBlue mb-4">Our Services</h2>
            <p className="text-xl text-slate-500 font-medium">Conversion-focused strategy and execution across all channels.</p>
          </div>
          <Link to="/services" className="text-brandOrange font-black flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
            See All Systems <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service) => (
            <div key={service.id} className="border border-slate-100 p-10 rounded-3xl text-center hover:shadow-2xl transition-all group bg-white">
              <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-brandBlue group-hover:bg-brandOrange group-hover:text-white transition-all mx-auto mb-8">
                {React.cloneElement(service.icon as React.ReactElement, { className: 'w-10 h-10' })}
              </div>
              <h3 className="font-black text-2xl text-brandBlue mb-4">{service.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto bg-brandBlue rounded-[4rem] p-16 lg:p-24 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-4xl lg:text-5xl font-black mb-8">Ready to Scale?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Get your free marketing roadmap today. No strings attached, just pure value.</p>
          {/* Fixed: Link from react-router-dom must use 'to' instead of 'href' */}
          <Link
            to="/free-audit"
            className="btn-orange px-12 py-5 rounded-full text-xl font-black shadow-xl inline-block"
          >
            Claim Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
