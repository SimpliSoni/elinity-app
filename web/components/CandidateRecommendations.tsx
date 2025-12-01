import React from 'react';
import {
    RefreshCw,
    Sparkles,
    Star,
    Clock,
    Bookmark,
    Mail,
    MapPin,
    Users,
    Zap,
    Calendar,
    CheckCircle2
} from 'lucide-react';
import GlassCard from './GlassCard';

const CandidateCard = ({
    name,
    role,
    location,
    fitScore,
    tags,
    traits,
    img
}: {
    name: string,
    role: string,
    location: string,
    fitScore: number,
    tags: string[],
    traits: string[],
    img: string
}) => (
    <GlassCard className="p-5 bg-[#191934]/60 hover:border-[#BB3DF6]/50 transition-all group">
        <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#BB3DF6] transition-colors">
                <img src={img} alt={name} className="w-full h-full object-cover" />
            </div>
            <div>
                <h3 className="text-white font-bold text-lg leading-tight">{name}</h3>
                <p className="text-[#D9D9D9]/60 text-xs mb-1">{role}</p>
                <div className="flex items-center gap-1 text-[#D9D9D9]/40 text-[10px]">
                    <MapPin size={10} />
                    {location}
                </div>
            </div>
        </div>

        <div className="mb-4">
            <div className="flex items-end gap-2 mb-1">
                <span className="text-[#BB3DF6] font-bold text-2xl">{fitScore}%</span>
                <span className="text-white text-xs font-medium pb-1">Fit score</span>
                <span className="text-[#D9D9D9]/40 text-[10px] pb-1 ml-auto">Strong match</span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81]" style={{ width: `${fitScore}%` }} />
            </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 rounded bg-[#BB3DF6]/10 border border-[#BB3DF6]/20 text-[#BB3DF6] text-[10px] font-medium">
                    {tag}
                </span>
            ))}
        </div>

        <div className="flex items-center gap-3 mb-6 text-[10px] text-[#D9D9D9]">
            {traits.map((trait, i) => (
                <div key={i} className="flex items-center gap-1">
                    <Users size={10} className="text-[#BB3DF6]" />
                    {trait}
                </div>
            ))}
        </div>

        <div className="flex items-center gap-2">
            <button className="flex-1 py-2 rounded-lg bg-[#BB3DF6] hover:bg-[#D946EF] text-white text-xs font-bold transition-colors">
                View Profile
            </button>
            <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#D9D9D9] hover:text-white transition-colors">
                <Bookmark size={16} />
            </button>
            <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#D9D9D9] hover:text-white transition-colors">
                <Mail size={16} />
            </button>
        </div>
    </GlassCard>
);

const CandidateRecommendations = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 pb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-2">Candidate Recommendations</h1>
                    <p className="text-[#D9D9D9]/60 text-sm">AI-Curated matches for your open positions</p>
                </div>
                <button className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#2A2A45] border border-white/10 text-white text-sm font-medium hover:bg-[#323250] transition-colors">
                    <RefreshCw size={16} />
                    Refresh Matches
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Tabs */}
                    <div className="flex p-1 bg-[#191934]/60 rounded-xl backdrop-blur-md border border-white/5">
                        <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#BB3DF6] to-[#2954FF] text-white text-sm font-bold shadow-lg">
                            New Matches <span className="ml-2 bg-white/20 px-1.5 py-0.5 rounded-full text-[10px]">5</span>
                        </button>
                        <button className="flex-1 py-2 rounded-lg text-[#D9D9D9]/60 text-sm font-medium hover:text-white hover:bg-white/5 transition-colors">
                            In Progress <span className="ml-2 bg-white/5 px-1.5 py-0.5 rounded-full text-[10px]">8</span>
                        </button>
                        <button className="flex-1 py-2 rounded-lg text-[#D9D9D9]/60 text-sm font-medium hover:text-white hover:bg-white/5 transition-colors">
                            Hired <span className="ml-2 bg-white/5 px-1.5 py-0.5 rounded-full text-[10px]">12</span>
                        </button>
                    </div>

                    {/* Candidates Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <CandidateCard
                            name="Sarah Chen"
                            role="Senior UX Designer"
                            location="San Francisco, CA"
                            fitScore={94}
                            tags={['React', 'Figma', 'Design Systems']}
                            traits={['Mission-Aligned', 'Remote-First']}
                            img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                        />
                        <CandidateCard
                            name="Marcus Johnson"
                            role="Full Stack Developer"
                            location="Austin, TX"
                            fitScore={85}
                            tags={['Node.js', 'Python', 'AWS']}
                            traits={['Team-Player', 'Startup experience']}
                            img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                        />
                        <CandidateCard
                            name="Elena Rodriguez"
                            role="Product Manager"
                            location="New York, NY"
                            fitScore={80}
                            tags={['Agile', 'Analytics', 'Strategy']}
                            traits={['Data-Driven', 'Growth focused']}
                            img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
                        />
                        <CandidateCard
                            name="David Kim"
                            role="DevOps Engineer"
                            location="Seattle, WA"
                            fitScore={82}
                            tags={['Docker', 'CI/CD', 'Kubernetes']}
                            traits={['Automation Expert', 'Cloud native']}
                            img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                        />
                        <CandidateCard
                            name="Lisa Wang"
                            role="Data Scientist"
                            location="Boston, MA"
                            fitScore={88}
                            tags={['Python', 'TensorFlow', 'Machine Learning']}
                            traits={['AI Enthusiast', 'Research background']}
                            img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                        />
                    </div>

                    {/* Bottom Actions */}
                    <GlassCard className="p-4 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#191934]/80 border-t border-white/10 sticky bottom-4 z-10">
                        <div className="flex flex-wrap justify-center md:justify-start gap-3 w-full md:w-auto">
                            <button className="flex-1 md:flex-none px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#BB3DF6] to-[#2954FF] text-white text-sm font-bold shadow-lg hover:shadow-[#BB3DF6]/25 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                                <Mail size={16} />
                                Contact selected
                            </button>
                            <button className="flex-1 md:flex-none px-6 py-2.5 rounded-lg bg-[#2A2A45] hover:bg-[#323250] text-white text-sm font-bold transition-all flex items-center justify-center gap-2 border border-white/5 whitespace-nowrap">
                                <Bookmark size={16} />
                                Save all
                            </button>
                            <button className="flex-1 md:flex-none px-6 py-2.5 rounded-lg bg-[#2A2A45] hover:bg-[#323250] text-white text-sm font-bold transition-all flex items-center justify-center gap-2 border border-white/5 whitespace-nowrap">
                                <Calendar size={16} />
                                Schedule Intros
                            </button>
                        </div>
                        <div className="flex items-center gap-2 text-[#D9D9D9]/40 text-[10px]">
                            <Clock size={12} />
                            Last updated 2 mins ago
                        </div>
                    </GlassCard>

                </div>

                {/* Right Column - Sidebar */}
                <div className="lg:col-span-1 space-y-6">

                    {/* AI Recommendations Header */}
                    <div className="flex items-center gap-2 text-white font-bold mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[#BB3DF6] flex items-center justify-center shadow-lg">
                            <Sparkles size={16} className="text-white" />
                        </div>
                        <h3>AI Recommendations</h3>
                    </div>

                    {/* Today's Matches */}
                    <GlassCard className="p-6 bg-[#2A2A45]/40">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-white font-bold text-sm">Today's Matches</span>
                            <span className="text-white font-bold text-lg">5</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
                            <div className="h-full w-[80%] bg-gradient-to-r from-[#FF3A81] to-[#BB3DF6]" />
                        </div>
                        <div className="text-[10px] text-[#D9D9D9]/40">4 of 5 reviewed</div>
                    </GlassCard>

                    {/* Quick Filters */}
                    <div>
                        <h4 className="text-white font-bold text-sm mb-4">Quick Filters</h4>
                        <div className="space-y-2">
                            {[
                                { icon: <Star size={14} />, label: 'Top Matches', active: true },
                                { icon: <RefreshCw size={14} />, label: 'Recent Activity', active: false },
                                { icon: <Bookmark size={14} />, label: 'Saved', active: false },
                                { icon: <Mail size={14} />, label: 'Contacted', active: false },
                            ].map((item, i) => (
                                <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${item.active ? 'bg-white/10 text-white' : 'text-[#D9D9D9]/60 hover:bg-white/5 hover:text-white'}`}>
                                    {item.icon}
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Match Criteria */}
                    <div>
                        <h4 className="text-white font-bold text-sm mb-4">Match Criteria</h4>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-4 rounded-xl bg-[#2A2A45]/40 border border-white/5">
                                <span className="text-[#D9D9D9] text-xs">Skills Match</span>
                                <span className="text-[#BB3DF6] text-xs font-bold">85%</span>
                            </div>
                            <div className="flex justify-between items-center p-4 rounded-xl bg-[#2A2A45]/40 border border-white/5">
                                <span className="text-[#D9D9D9] text-xs">Culture Fit</span>
                                <span className="text-[#FF3A81] text-xs font-bold">High</span>
                            </div>
                            <div className="flex justify-between items-center p-4 rounded-xl bg-[#2A2A45]/40 border border-white/5">
                                <span className="text-[#D9D9D9] text-xs">Experience</span>
                                <span className="text-[#BB3DF6] text-xs font-bold">3-7 years</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CandidateRecommendations;
