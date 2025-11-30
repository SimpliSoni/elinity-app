import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  LayoutDashboard,
  Maximize,
  Search,
  Users,
  User,
  GitCompare,
  FileText,
  Calendar,
  MessageSquareText,
  Activity,
  Globe,
  Settings
} from 'lucide-react';
import { Logo } from './Icons';

const Sidebar = () => {
  const navItems = [
    { icon: <Home size={22} strokeWidth={2.2} />, path: '/', id: 'home' },
    { icon: <LayoutDashboard size={22} strokeWidth={2.2} />, path: '/dashboard', id: 'dashboard' },
    { icon: <Users size={22} strokeWidth={2.2} />, path: '/recommendations', id: 'candidates' },
    { icon: <GitCompare size={22} strokeWidth={2.2} />, path: '/compare', id: 'comparison' },
    { icon: <Maximize size={22} strokeWidth={2.2} />, path: '/profile/edit', id: 'edit' },
    { icon: <User size={22} strokeWidth={2.2} />, path: '/profile/view', id: 'profile' },
    { icon: <Search size={22} strokeWidth={2.2} />, path: '/insights', id: 'insights' },
    { icon: <FileText size={22} strokeWidth={2.2} />, path: '/tests', id: 'test-builder' },
    { icon: <MessageSquareText size={22} strokeWidth={2.2} />, path: '/messages', id: 'communication' },
    { icon: <Calendar size={22} strokeWidth={2.2} />, path: '/schedule', id: 'interview-scheduling' },
    { icon: <Activity size={22} strokeWidth={2.2} />, path: '/analytics', id: 'analytics' },
    { icon: <Globe size={22} strokeWidth={2.2} />, path: '/p/me', id: 'public-profile' },
  ];

  const buttonsRef = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    // Scroll active item into view
  }, []);

  return (
    <aside className="hidden md:flex fixed inset-y-0 left-0 w-[80px] bg-[#191934]/90 backdrop-blur-xl border-r border-white/5 flex-col items-center py-8 z-50 shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
      <NavLink to="/" className="mb-12 hover:scale-110 transition-transform duration-300 cursor-pointer">
        <Logo className="w-10 h-10" />
      </NavLink>

      <div className="flex-1 flex flex-col gap-6 w-full items-center overflow-y-auto overflow-x-hidden min-h-0" style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#BB3DF6 transparent'
      }}>
        {navItems.map((item, idx) => {
          return (
            <NavLink
              key={idx}
              to={item.path}
              ref={(el) => { buttonsRef.current[item.id] = el; }}
              end={item.path === '/'}
              className={({ isActive }) => `w-12 h-12 flex-shrink-0 rounded-2xl flex items-center justify-center transition-all duration-300 relative group
                ${isActive
                  ? 'bg-gradient-to-tr from-[#BB3DF6] to-[#FF3A81] text-white shadow-[0_0_20px_rgba(187,61,246,0.4)] scale-105'
                  : 'text-[#D9D9D9]/60 hover:text-white hover:bg-white/5'
                }`}
            >
              {({ isActive }) => (
                <>
                  {item.icon}
                  {isActive && <div className="absolute -right-1 top-1 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />}
                </>
              )}
            </NavLink>
          );
        })}
      </div>

      <style>{`
        .flex-1::-webkit-scrollbar {
          width: 6px;
        }
        .flex-1::-webkit-scrollbar-track {
          background: transparent;
        }
        .flex-1::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #BB3DF6, #FF3A81);
          border-radius: 3px;
        }
        .flex-1::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #BB3DF6, #FF3A81);
          opacity: 0.8;
        }
      `}</style>

      <div className="flex flex-col gap-3 w-full items-center mb-6 flex-shrink-0 mt-12">
        <NavLink
          to="/settings"
          className={({ isActive }) => `w-12 h-12 flex-shrink-0 rounded-2xl flex items-center justify-center transition-all duration-300 relative group
            ${isActive
              ? 'bg-gradient-to-tr from-[#BB3DF6] to-[#FF3A81] text-white shadow-[0_0_20px_rgba(187,61,246,0.4)] scale-105'
              : 'text-[#D9D9D9]/60 hover:text-white hover:bg-white/5'
            }`}
        >
          {({ isActive }) => (
            <>
              <Settings size={20} />
              {isActive && <div className="absolute -right-1 top-1 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />}
            </>
          )}
        </NavLink>
      </div>

      <button className="mt-4 w-12 h-12 rounded-2xl flex items-center justify-center text-red-400/70 hover:text-[#FF4141] hover:bg-[#FF4141]/10 transition-all duration-300">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </button>
    </aside>
  );
};

export default Sidebar;