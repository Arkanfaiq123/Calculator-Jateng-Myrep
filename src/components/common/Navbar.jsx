import React from 'react';
import { Calculator } from 'lucide-react';

export default function Navbar({ activeTab, onTabChange }) {
  return (
    <nav className="bg-[#6f2c91] sticky top-0 z-30 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-3">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="bg-white px-2.5 py-1.5 rounded-xl shadow-sm flex items-center justify-center">
            <img
              src="https://i.ibb.co.com/LDTC07KK/image-removebg-preview-1.png"
              alt="MyRepublic Logo"
              className="h-7 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/MyRepublic_logo.png';
              }}
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-extrabold text-white tracking-wide">MyRepublic Hub</span>
              <span className="hidden sm:inline-block px-2 py-0.5 bg-purple-900/60 text-purple-200 text-[10px] font-bold rounded-full uppercase">
                Jawa Tengah
              </span>
            </div>
            <p className="text-[11px] text-purple-200 font-medium">Sistem Kalkulator Insentif</p>
          </div>
        </div>

        {/* Tab / Active Module */}
        <div className="flex items-center gap-2 bg-black/15 px-3.5 py-2 rounded-xl border border-white/15 text-white font-bold text-xs sm:text-sm shadow-inner">
          <Calculator className="w-4 h-4 text-purple-200 shrink-0" />
          <span>Kalkulator Insentif</span>
        </div>
      </div>
    </nav>
  );
}
