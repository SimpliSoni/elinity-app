import React from 'react';
import {
    Calendar,
    Users,
    Clock,
    CheckCircle,
    MoreHorizontal,
    Video,
    Edit2,
    ChevronDown,
    Sparkles,
    Plus,
    RefreshCw,
    UserPlus,
    CalendarCheck,
    Briefcase,
    FileText,
    CheckSquare,
    Award
} from 'lucide-react';
import GlassCard from './GlassCard';

const InterviewSchedulingDashboard = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pb-12">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">Interview Scheduling Dashboard</h1>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                    { icon: <Calendar size={20} />, label: 'Scheduled Today', value: '24', color: 'bg-[#BB3DF6]' },
                    { icon: <Users size={20} />, label: 'Active Candidates', value: '156', color: 'bg-[#2954FF]' },
                    { icon: <Clock size={20} />, label: 'Average Interview Time', value: '3hours', color: 'bg-[#FF3A81]' },
                    { icon: <CheckCircle size={20} />, label: 'Success Rate', value: '89%', color: 'bg-[#00C2FF]' },
                ].map((stat, index) => (
                    <GlassCard key={index} className="p-5 bg-[#191934]/60 flex flex-col justify-between h-32 relative overflow-hidden group hover:bg-[#191934]/80 transition-colors">
                        <div className={`w-10 h-10 rounded-xl ${stat.color}/20 flex items-center justify-center text-white mb-3`}>
                            {stat.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                            <p className="text-[#D9D9D9]/60 text-xs">{stat.label}</p>
                        </div>
                        <div className={`absolute top-0 right-0 w-24 h-24 ${stat.color}/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150`} />
                    </GlassCard>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Upcoming Interviews */}
                    <GlassCard className="p-6 bg-[#191934]/60 min-h-[500px]">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-white">Upcoming Interviews</h2>
                            <button className="text-[#D9D9D9]/40 hover:text-white transition-colors">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>

                        {/* Next Interview Card */}
                        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#BB3DF6]/20 via-[#2954FF]/20 to-[#191934]/40 border border-white/10 mb-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#BB3DF6] to-[#2954FF]" />
                            
                            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 relative z-10">
                                <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                                    <div className="text-center sm:pr-4 sm:border-r border-white/10 w-full sm:w-auto pb-4 sm:pb-0 border-b sm:border-b-0">
                                        <p className="text-[#D9D9D9]/60 text-xs mb-1">Next Interview In</p>
                                        <p className="text-xl font-bold text-white">1h 45m</p>
                                    </div>
                                    <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                                        <div className="w-12 h-12 rounded-full bg-[#D9D9D9] overflow-hidden border-2 border-white/20 flex-shrink-0">
                                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" alt="Candidate" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-sm">Sarah Johnson</h3>
                                            <p className="text-[#D9D9D9]/60 text-xs">Senior UX Designer</p>
                                            <div className="flex flex-wrap items-center gap-2 mt-1 text-[10px] text-[#D9D9D9]/40">
                                                <span>2:30 PM</span>
                                                <span>•</span>
                                                <span>60 min</span>
                                                <span>•</span>
                                                <span>Interview Stage</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <button className="w-full lg:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#BB3DF6] to-[#2954FF] text-white text-sm font-bold shadow-lg hover:shadow-[#BB3DF6]/25 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                                    <Video size={16} />
                                    Join Meeting
                                </button>
                            </div>
                        </div>

                        {/* Other Interviews List */}
                        <div className="space-y-4">
                            {[
                                { name: 'Michael Chen', role: 'Frontend Developer', time: '4:00 PM - 4:45 PM', platform: 'Google Meet', date: 'November 15', day: 'Thursday', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100' },
                                { name: 'Emma Rodriguez', role: 'Product Manager', time: '5:30 PM - 6:30 PM', platform: 'Zoom', date: 'November 15', day: 'Thursday', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100' }
                            ].map((interview, idx) => (
                                <div key={idx} className="p-4 rounded-xl bg-[#2A2A45]/20 border border-white/5 hover:bg-[#2A2A45]/40 transition-colors flex flex-col sm:flex-row justify-between items-center gap-4">
                                    <div className="flex items-center gap-4 w-full sm:w-auto">
                                        <div className="text-center min-w-[60px]">
                                            <p className="text-[#D9D9D9]/60 text-[10px]">{interview.date}</p>
                                            <p className="text-white font-bold text-lg leading-tight">{interview.date.split(' ')[1]}</p>
                                            <p className="text-[#D9D9D9]/40 text-[10px]">{interview.day}</p>
                                        </div>
                                        <div className="w-px h-10 bg-white/10 mx-2 hidden sm:block" />
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#D9D9D9] overflow-hidden border border-white/10">
                                                <img src={interview.img} alt={interview.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm">{interview.name}</h4>
                                                <p className="text-[#D9D9D9]/60 text-xs">{interview.role}</p>
                                                <div className="flex items-center gap-2 mt-0.5 text-[10px] text-[#D9D9D9]/40">
                                                    <span>{interview.time}</span>
                                                    <span>•</span>
                                                    <span>{interview.platform}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 w-full sm:w-auto justify-end">
                                        <button className="p-2 rounded-lg hover:bg-white/5 text-[#D9D9D9]/40 hover:text-white transition-colors">
                                            <Edit2 size={14} />
                                        </button>
                                        <button className="p-2 rounded-lg hover:bg-white/5 text-[#D9D9D9]/40 hover:text-white transition-colors">
                                            <ChevronDown size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    {/* AI Auto-Scheduler */}
                    <GlassCard className="p-6 bg-gradient-to-r from-[#191934]/90 to-[#0F0C29]/90 border border-[#BB3DF6]/20 relative overflow-hidden">
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BB3DF6] to-[#2954FF] flex items-center justify-center shadow-[0_0_20px_rgba(187,61,246,0.4)]">
                                    <Sparkles className="text-white" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">AI Auto-Scheduler</h3>
                                    <p className="text-[#D9D9D9]/60 text-xs">Intelligent Interview Scheduling</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/20">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] animate-pulse" />
                                <span className="text-[#00C2FF] text-[10px] font-bold uppercase">Active</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
                            {[
                                { label: 'Scheduled', value: '47', color: 'border-[#BB3DF6]/30' },
                                { label: 'Conflicts Resolved', value: '12', color: 'border-[#2954FF]/30' },
                                { label: 'Success Rate', value: '98%', color: 'border-[#00C2FF]/30' }
                            ].map((stat, idx) => (
                                <div key={idx} className={`p-4 rounded-xl bg-[#2A2A45]/40 border ${stat.color} hover:bg-[#2A2A45]/60 transition-colors`}>
                                    <h4 className="text-white font-bold text-lg mb-1">{stat.value}</h4>
                                    <p className="text-[#D9D9D9]/50 text-xs">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Quick Actions */}
                    <GlassCard className="p-6 bg-[#191934]/60">
                        <h3 className="text-white font-bold text-sm mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#BB3DF6] to-[#2954FF] text-white text-xs font-bold shadow-lg hover:shadow-[#BB3DF6]/25 transition-all flex items-center justify-center gap-2">
                                <CalendarCheck size={16} />
                                Schedule Interview
                            </button>
                            <button className="w-full py-3 rounded-xl bg-[#2A2A45] border border-white/10 text-white text-xs font-medium hover:bg-[#323250] transition-colors flex items-center justify-center gap-2">
                                <RefreshCw size={16} />
                                Sync Calendar
                            </button>
                            <button className="w-full py-3 rounded-xl bg-[#2A2A45] border border-white/10 text-white text-xs font-medium hover:bg-[#323250] transition-colors flex items-center justify-center gap-2">
                                <UserPlus size={16} />
                                Add Candidate
                            </button>
                        </div>
                    </GlassCard>

                    {/* Interview Stages */}
                    <GlassCard className="p-6 bg-[#191934]/60">
                        <h3 className="text-white font-bold text-sm mb-4">Interview Stages</h3>
                        <div className="space-y-4">
                            {[
                                { name: 'Intro', count: '12 candidates', status: 'Active', icon: <Users size={14} />, color: 'bg-[#2954FF]' },
                                { name: 'Interview', count: '8 candidates', status: 'In Progress', icon: <Video size={14} />, color: 'bg-[#BB3DF6]' },
                                { name: 'Assignment', count: '5 candidates', status: 'Review', icon: <FileText size={14} />, color: 'bg-[#FF3A81]' },
                                { name: 'Decision', count: '2 candidates', status: 'Final', icon: <Award size={14} />, color: 'bg-[#00C2FF]' }
                            ].map((stage, idx) => (
                                <div key={idx} className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg ${stage.color}/20 flex items-center justify-center text-white`}>
                                            {stage.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white text-xs font-bold group-hover:text-[#BB3DF6] transition-colors">{stage.name}</h4>
                                            <p className="text-[#D9D9D9]/40 text-[10px]">{stage.count}</p>
                                        </div>
                                    </div>
                                    <span className="px-2 py-1 rounded-md bg-[#2A2A45] text-[10px] text-[#D9D9D9] border border-white/5">{stage.status}</span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Calendar Sync */}
                    <GlassCard className="p-6 bg-[#191934]/60">
                        <h3 className="text-white font-bold text-sm mb-4">Calendar Sync</h3>
                        <div className="space-y-3">
                            <div className="p-3 rounded-xl bg-[#2A2A45]/40 border border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
                                        <span className="text-black font-bold text-xs">G</span>
                                    </div>
                                    <span className="text-white text-xs font-medium">Google Calendar</span>
                                </div>
                                <div className="w-8 h-4 rounded-full bg-[#BB3DF6] relative cursor-pointer">
                                    <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-white shadow-sm" />
                                </div>
                            </div>
                            <div className="p-3 rounded-xl bg-[#2A2A45]/40 border border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-[#0078D4] flex items-center justify-center">
                                        <span className="text-white font-bold text-xs">O</span>
                                    </div>
                                    <span className="text-white text-xs font-medium">Outlook</span>
                                </div>
                                <div className="w-8 h-4 rounded-full bg-[#2A2A45] border border-white/20 relative cursor-pointer">
                                    <div className="absolute left-0.5 top-0.5 w-3 h-3 rounded-full bg-[#D9D9D9]/40" />
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default InterviewSchedulingDashboard;