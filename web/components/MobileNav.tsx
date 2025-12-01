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

const MobileNav = () => {
    const navItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/recommendations', icon: Users, label: 'Recs' },
        { path: '/compare', icon: GitCompare, label: 'Compare' },
        { path: '/profile/edit', icon: Maximize, label: 'Edit' },
        { path: '/profile/view', icon: User, label: 'Profile' },
        { path: '/insights', icon: Search, label: 'Insights' },
        { path: '/tests', icon: FileText, label: 'Tests' },
        { path: '/messages', icon: MessageSquareText, label: 'Messages' },
        { path: '/schedule', icon: Calendar, label: 'Schedule' },
        { path: '/analytics', icon: Activity, label: 'Analytics' },
        { path: '/p/me', icon: Globe, label: 'Public' },
        { path: '/settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#191934]/90 backdrop-blur-xl border-t border-white/10 px-4 py-3 md:hidden">
            <div className="flex justify-between items-center overflow-x-auto no-scrollbar gap-4">
                {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/'}
                            className={({ isActive }) => `flex flex-col items-center gap-1 min-w-[60px] transition-all duration-300 ${isActive ? 'text-[#BB3DF6]' : 'text-[#D9D9D9]/40 hover:text-[#D9D9D9]'
                                }`}
                        >
                            {({ isActive }) => (
                                <>
                                    <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? 'bg-[#BB3DF6]/20 shadow-[0_0_15px_rgba(187,61,246,0.3)]' : 'bg-transparent'
                                        }`}>
                                        <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                    </div>
                                    <span className="text-[10px] font-medium">{item.label}</span>
                                </>
                            )}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default MobileNav;
