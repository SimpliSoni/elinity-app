import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="w-full h-20 flex items-center justify-between mb-8">
      {/* Search Bar */}
      <div className="relative w-[480px] group">
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-purple-400 transition-colors" size={20} />
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full bg-[#1E1B4B]/50 border border-white/5 rounded-2xl py-3.5 pl-14 pr-6 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-[#1E1B4B] focus:ring-1 focus:ring-purple-500/20 transition-all shadow-lg"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <button className="w-12 h-12 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
          <Bell size={22} />
        </button>
        <button className="w-12 h-12 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-white/5">
          <Settings size={22} />
        </button>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 ring-4 ring-transparent hover:ring-purple-500/20 transition-all cursor-pointer shadow-xl">
           <img 
             src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" 
             alt="User Profile" 
             className="w-full h-full object-cover"
           />
        </div>
      </div>
    </div>
  );
};

export default TopBar;