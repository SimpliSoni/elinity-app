import React from 'react';
import {
    Search,
    Bot,
    TrendingUp,
    Scale,
    CheckCircle2,
    Save,
    Sparkles,
    Brain,
    Target,
    Briefcase
} from 'lucide-react';
import GlassCard from './GlassCard';

const TraitSlider = ({ label, value }: { label: string, value: number }) => (
    <div className="mb-6 last:mb-0">
        <div className="flex justify-between items-end mb-2">
            <span className="text-white font-medium text-sm">{label}</span>
            <span className="text-[#BB3DF6] font-bold text-sm">{value}%</span>
        </div>
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative cursor-pointer group">
            <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF3A81] to-[#BB3DF6] rounded-full transition-all duration-500 group-hover:brightness-110"
                style={{ width: `${value}%` }}
            />
        </div>
    </div>
);

const RecommendationItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 hover:border-[#BB3DF6]/30 hover:bg-white/10 transition-all cursor-pointer group">
        <div className="flex items-start gap-3">
            <div className="mt-1 text-[#BB3DF6] group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
                <p className="text-[#D9D9D9]/60 text-[10px] leading-relaxed">{desc}</p>
            </div>
        </div>
    </div>
);

const AIInsights = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 pb-12">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">AI Insights & Fit Preferences</h1>
                <p className="text-[#D9D9D9]/60 text-sm">Configure your ideal candidate profile and let AI find the perfect matches</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Preferences */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Candidate Trait Preferences */}
                    <div>
                        <h2 className="text-lg font-bold text-white mb-4">Candidate Trait Preferences</h2>
                        <GlassCard className="p-8 bg-[#191934]/40">
                            <TraitSlider label="Creativity" value={75} />
                            <TraitSlider label="Analytical Thinking" value={85} />
                            <TraitSlider label="Empathy" value={60} />
                            <TraitSlider label="Growth Mindset" value={90} />
                            <TraitSlider label="Leadership" value={70} />
                            <TraitSlider label="Adaptability" value={80} />
                        </GlassCard>
                    </div>

                    {/* Priority Weighting Matrix */}
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-white font-bold">
                            <CheckCircle2 size={20} />
                            <h2>Priority Weighting Matrix</h2>
                        </div>

                        <GlassCard className="p-8 bg-[#191934]/40">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                <TraitSlider label="Values Alignment" value={30} />
                                <TraitSlider label="Technical Skills" value={40} />
                                <TraitSlider label="Mission Alignment" value={20} />
                                <TraitSlider label="Experience Level" value={10} />
                            </div>
                        </GlassCard>
                    </div>

                </div>

                {/* Right Column - Sidebar Stats & Actions */}
                <div className="lg:col-span-1 space-y-6">

                    {/* Project Candidate Pool */}
                    <GlassCard className="p-6 bg-[#191934]/60 relative overflow-hidden">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-[#BB3DF6]/20 flex items-center justify-center text-[#BB3DF6]">
                                <Bot size={20} />
                            </div>
                            <h3 className="text-white font-bold">Project Candidate Pool</h3>
                        </div>

                        <div className="text-center mb-6">
                            <div className="text-4xl font-bold text-white mb-1">1,247</div>
                            <div className="text-[#D9D9D9]/60 text-xs">Matching Candidates</div>
                        </div>

                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
                            <div className="h-full w-[73%] bg-gradient-to-r from-[#FF3A81] to-[#BB3DF6]" />
                        </div>
                        <div className="text-center text-[10px] text-[#D9D9D9]/40">73% of total database</div>
                    </GlassCard>

                    {/* AI Recommendations */}
                    <GlassCard className="p-6 bg-[#191934]/60">
                        <div className="flex items-center gap-2 mb-6 text-white font-bold">
                            <Sparkles size={18} className="text-[#BB3DF6]" />
                            <h3>AI Recommendations</h3>
                        </div>

                        <div className="space-y-3">
                            <RecommendationItem
                                icon={<TrendingUp size={16} />}
                                title="Optimize for Growth Mindset"
                                desc="Increase pool by 23% by adjusting creativity requirements"
                            />
                            <RecommendationItem
                                icon={<Brain size={16} />}
                                title="Skills vs Experience"
                                desc="Consider settings provide good quality balance"
                            />
                            <RecommendationItem
                                icon={<Scale size={16} />}
                                title="Optimal Balance"
                                desc="Current settings provide good quality-quantity balance"
                            />
                        </div>
                    </GlassCard>

                    {/* Actions */}
                    <div className="space-y-3 pt-4">
                        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#BB3DF6] to-[#2954FF] text-white font-bold shadow-lg hover:shadow-[#BB3DF6]/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                            <Search size={18} />
                            Find Candidates
                        </button>
                        <button className="w-full py-4 rounded-xl bg-[#2A2A45] hover:bg-[#323250] text-white font-bold transition-all flex items-center justify-center gap-2 border border-white/5">
                            <Save size={18} />
                            Save Profile
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AIInsights;
