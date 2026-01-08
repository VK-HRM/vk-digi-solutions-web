import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brandBlue text-slate-300 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brandOrange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl tracking-tighter">VK</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                VK Digi Solutions
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Performance-driven digital growth company. We build systems that turn traffic into enquiries and revenue.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brandOrange hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brandOrange hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brandOrange hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brandOrange hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Navigation</h3>
            <ul className="space-y-5 font-semibold">
              <li><Link to="/" className="hover:text-brandOrange transition-colors">Home</Link></li>
              <li><Link to="/company" className="hover:text-brandOrange transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brandOrange transition-colors">Growth Systems</Link></li>
              <li><Link to="/case-studies" className="hover:text-brandOrange transition-colors">Results</Link></li>
              <li><Link to="/contact" className="hover:text-brandOrange transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Solutions</h3>
            <ul className="space-y-5 font-semibold">
              <li><Link to="/services/meta-ads" className="hover:text-brandOrange transition-colors">Meta Ads</Link></li>
              <li><Link to="/services/google-ads" className="hover:text-brandOrange transition-colors">Google Ads</Link></li>
              <li><Link to="/services/seo" className="hover:text-brandOrange transition-colors">Local SEO</Link></li>
              <li><Link to="/services/websites" className="hover:text-brandOrange transition-colors">Landing Pages</Link></li>
              <li><Link to="/services/whatsapp" className="hover:text-brandOrange transition-colors">WA Automation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Connect</h3>
            <ul className="space-y-6 font-semibold">
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-brandOrange" />
                <span className="text-white">+91 99999 88888</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-brandOrange" />
                <span className="text-white">hello@vkdigi.in</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brandOrange" />
                <span className="text-slate-400">Digital Park, Sector 62, Noida, UP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500 font-bold">
            © 2024 VK Digi Solutions. Performance Marketing Reimagined.
          </p>
          <div className="flex space-x-8 text-sm text-slate-500 font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;