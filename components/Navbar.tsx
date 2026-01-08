
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAVIGATION } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-brandBlue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl tracking-tighter">VK</span>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-brandBlue">
                VK Digi<span className="text-brandOrange"> Solutions</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAVIGATION.map((item) => (
              <div 
                key={item.label} 
                className="relative group h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 text-sm font-black transition-colors ${
                    location.pathname === item.href ? 'text-brandOrange' : 'text-brandBlue hover:text-brandOrange'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-2xl rounded-2xl py-4 mt-0 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-1 gap-1 px-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="px-4 py-3 text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-brandBlue rounded-xl transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/free-audit"
              className="btn-orange px-8 py-3.5 rounded-full text-sm font-black shadow-lg"
            >
              Get Free Growth Audit
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brandBlue p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 h-screen overflow-y-auto animate-in slide-in-from-top duration-300">
          <div className="px-6 pt-6 pb-20 space-y-6">
            {NAVIGATION.map((item) => (
              <div key={item.label} className="space-y-4">
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-black text-brandBlue"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-slate-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-bold text-slate-400 hover:text-brandBlue"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/free-audit"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center btn-orange px-3 py-5 rounded-2xl text-xl font-black mt-10"
            >
              Claim Free Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
