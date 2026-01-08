import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Loader2, 
  CheckCircle2, 
  Send, 
  Download, 
  CheckCircle, 
  MessageSquare, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { generateMarketingAudit } from '../services/geminiService';

const FreeAudit: React.FC = () => {
  useEffect(() => {
    document.title = "Free Audit | VK Digi Solutions";
  }, []);

  const [formData, setFormData] = useState({
    contactName: '',
    companyName: '',
    phone: '',
    email: '',
    website: '',
    budget: '',
    challenge: ''
  });
  const [loading, setLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Generate Audit with AI (Gemini)
      const audit = await generateMarketingAudit(
        formData.companyName,
        'Digital Strategy',
        `Biggest Challenge: ${formData.challenge}. Monthly Budget: ${formData.budget}.`
      );
      setAuditResult(audit || "Thank you! Our growth experts will contact you shortly.");

      // 2. Integration Simulation (Matching the user's provided API snippet)
      const leadData = {
        type: "LEAD",
        source: "WEBSITE",
        contactName: formData.contactName,
        companyName: formData.companyName,
        phone: formData.phone,
        email: formData.email,
        website: formData.website,
        budgetRange: formData.budget,
        challenge: formData.challenge
      };

      console.info("Step 1: Sending lead to CRM...", leadData);
      // Simulating: await fetch(process.env.CRM_API_URL + "/api/entities", ...)

      console.info("Step 2: Triggering WhatsApp Auto Reply...", {
        phone: formData.phone,
        message: "Hi 👋 Thanks for contacting VK Digi Solutions..."
      });
      // Simulating: await fetch(process.env.CRM_API_URL + "/api/whatsapp/send", ...)

      // 3. Track GA Event (Requested Integration)
      // @ts-ignore
      if (typeof window.gtag === 'function') {
        // @ts-ignore
        window.gtag("event", "lead_submit", {
          source: "website_free_audit"
        });
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {!submitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brandBlue/5 text-brandBlue text-sm font-black mb-8 border border-brandBlue/10">
                <Sparkles className="w-5 h-5 text-brandOrange" />
                Performance Strategy Tool
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-brandBlue leading-tight mb-8">
                Get Your <span className="text-brandOrange">Growth Blueprint</span>
              </h1>
              <p className="text-xl text-slate-500 mb-10 font-medium leading-relaxed">
                Unlock a personalized performance roadmap. We'll identify your conversion bottlenecks and map out a predictable ROI path.
              </p>
              <div className="space-y-6">
                {[
                  { text: 'Automated CRM lead logging', icon: <ShieldCheck className="text-green-500" /> },
                  { text: 'Instant WhatsApp confirmation', icon: <MessageSquare className="text-brandBlue" /> },
                  { text: 'AI-generated channel strategy', icon: <Zap className="text-brandOrange" /> },
                  { text: 'Predictable ROI projections', icon: <CheckCircle2 className="text-green-500" /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-brandBlue font-bold text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 lg:p-14 rounded-[3.5rem] shadow-2xl border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Full Name</label>
                    <input
                      required
                      type="text"
                      className="input"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Business Name</label>
                    <input
                      required
                      type="text"
                      className="input"
                      placeholder="e.g. RS Clinics"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="input"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Work Email</label>
                    <input
                      required
                      type="email"
                      className="input"
                      placeholder="rahul@rsclinics.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Website URL</label>
                  <input
                    type="url"
                    className="input"
                    placeholder="https://www.rsclinics.com"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Monthly Ad Budget</label>
                    <select
                      required
                      className="input bg-white"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    >
                      <option value="">Select Range</option>
                      <option>Below ₹50,000</option>
                      <option>₹50k - ₹2L</option>
                      <option>₹2L - ₹5L</option>
                      <option>₹5L+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 mb-2 uppercase tracking-widest">Core Challenge</label>
                    <select
                      required
                      className="input bg-white"
                      value={formData.challenge}
                      onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                    >
                      <option value="">Select Challenge</option>
                      <option>Low Quality Leads</option>
                      <option>High Customer Acquisition Cost</option>
                      <option>Poor Conversion Rates</option>
                      <option>Scaling Ad Spend Profitably</option>
                    </select>
                  </div>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full btn-orange py-5 rounded-2xl text-xl font-black flex items-center justify-center gap-3 disabled:opacity-50 shadow-2xl transition-all"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-7 h-7 animate-spin" />
                      Building Your Roadmap...
                    </>
                  ) : (
                    <>
                      Generate Free Audit
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center animate-in zoom-in-95 duration-500">
            <div className="bg-white rounded-[4rem] shadow-2xl p-12 lg:p-20 border border-slate-100">
              <div className="w-24 h-24 bg-green-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-brandBlue mb-6">Strategy Generated!</h2>
              <p className="text-2xl text-slate-500 mb-12 font-medium leading-relaxed">
                Check your WhatsApp for confirmation. Our senior strategist will call you shortly.
              </p>
              
              <div className="bg-slate-50 rounded-[2.5rem] p-10 lg:p-14 text-left mb-16 border border-slate-100 shadow-inner">
                <h3 className="text-brandBlue font-black text-2xl mb-8 border-b border-brandBlue/10 pb-6 flex items-center gap-3">
                   <Sparkles className="text-brandOrange" /> Your Growth Blueprint
                </h3>
                <div className="prose prose-brand max-w-none">
                  <div className="whitespace-pre-wrap text-slate-700 leading-relaxed font-semibold text-lg italic">
                    {auditResult}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/" className="btn-outline-blue px-12 py-5 rounded-full font-black text-lg">
                  Return to Home
                </Link>
                <button 
                  onClick={() => window.print()}
                  className="btn-orange px-12 py-5 rounded-full font-black text-lg flex items-center gap-3 justify-center"
                >
                  <Download className="w-5 h-5" /> Download PDF Blueprint
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FreeAudit;