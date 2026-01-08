import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h1 className="text-5xl lg:text-6xl font-black text-brandBlue mb-10 leading-tight">
              Let's build your <span className="text-brandOrange">Growth System.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-16 font-medium leading-relaxed">
              Ready to stop guessing and start scaling? Reach out and we'll show you exactly how our systems can generate consistent enquiries for your business.
            </p>
            
            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-brandBlue group-hover:bg-brandOrange group-hover:text-white transition-all flex-shrink-0 shadow-sm">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Call Experts</p>
                  <p className="text-2xl font-black text-brandBlue">+91 99999 88888</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-brandBlue group-hover:bg-brandOrange group-hover:text-white transition-all flex-shrink-0 shadow-sm">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Email Us</p>
                  <p className="text-2xl font-black text-brandBlue">hello@vkdigi.in</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center text-brandBlue group-hover:bg-brandOrange group-hover:text-white transition-all flex-shrink-0 shadow-sm">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">WhatsApp</p>
                  <p className="text-2xl font-black text-brandBlue">Chat with Strategist</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 lg:p-16 rounded-[4rem] border border-slate-100 shadow-sm relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-brandOrange/5 rounded-full blur-3xl"></div>
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="input-field font-semibold" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Email</label>
                  <input type="email" className="input-field font-semibold" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Business Website</label>
                <input type="text" className="input-field font-semibold" placeholder="www.yourbusiness.com" />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Message</label>
                <textarea className="input-field h-40 font-semibold resize-none" placeholder="Tell us about your growth goals..."></textarea>
              </div>
              <button className="w-full btn-orange py-6 rounded-2xl text-xl font-black flex items-center justify-center gap-3">
                Send Message
                <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;