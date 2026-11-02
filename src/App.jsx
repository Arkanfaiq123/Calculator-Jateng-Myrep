import React from 'react';
import Navbar from './components/common/Navbar';
import KalkulatorView from './components/kalkulator/KalkulatorView';

export default function App() {
  return (
    <div className="bg-[#f8f5fa] text-slate-800 flex flex-col min-h-screen font-sans selection:bg-[#6f2c91] selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-6xl mx-auto p-4 sm:p-6 mt-1">
        <KalkulatorView />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 mt-8 w-full">
        <div className="max-w-2xl mx-auto px-4 space-y-1">
          <p className="font-bold text-slate-700">&copy; {new Date().getFullYear()} MyRepublic Jawa Tengah &bull; Sistem Sales AE</p>
          <p className="text-[11px] text-slate-400">Dioptimalkan untuk smartphone & desktop &bull; Ditenagai oleh React 18</p>
        </div>
      </footer>
    </div>
  );
}
