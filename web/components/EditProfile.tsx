import {
    Bot,
    Sparkles,
    FileText,
    MessageSquare,
    Image as ImageIcon,
    Video,
    Target,
    Lightbulb
} from 'lucide-react';
import GlassCard from './GlassCard';

const EditProfile = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 pb-12">
            <h1 className="text-2xl font-bold text-white mb-8">Edit Culture, Values, and Mission</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Form */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Mission Statement */}
                    <GlassCard className="p-6 bg-[#191934]/40">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-white font-semibold">Mission Statement</h3>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#BB3DF6]/20 border border-[#BB3DF6]/30 text-[#BB3DF6] text-xs font-medium hover:bg-[#BB3DF6]/30 transition-colors">
                                <Bot size={14} />
                                AI Assist
                            </button>
                        </div>
                        <textarea
                            className="w-full h-32 bg-[#0F0C29]/50 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#BB3DF6]/50 focus:ring-1 focus:ring-[#BB3DF6]/20 resize-none"
                            placeholder="Define your company's core mission and what drives you forward..."
                        />
                    </GlassCard>

                    {/* Purpose & Why */}
                    <GlassCard className="p-6 bg-[#191934]/40">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-white font-semibold">Purpose & Why</h3>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#BB3DF6]/20 border border-[#BB3DF6]/30 text-[#BB3DF6] text-xs font-medium hover:bg-[#BB3DF6]/30 transition-colors">
                                <Bot size={14} />
                                AI Assist
                            </button>
                        </div>
                        <textarea
                            className="w-full h-32 bg-[#0F0C29]/50 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#BB3DF6]/50 focus:ring-1 focus:ring-[#BB3DF6]/20 resize-none"
                            placeholder="Explain the deeper purpose behind your company's existence..."
                        />
                    </GlassCard>

                    {/* Long-Term Vision */}
                    <GlassCard className="p-6 bg-[#191934]/40">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-white font-semibold">Long-Term Vision</h3>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#BB3DF6]/20 border border-[#BB3DF6]/30 text-[#BB3DF6] text-xs font-medium hover:bg-[#BB3DF6]/30 transition-colors">
                                <Bot size={14} />
                                AI Assist
                            </button>
                        </div>
                        <textarea
                            className="w-full h-32 bg-[#0F0C29]/50 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#BB3DF6]/50 focus:ring-1 focus:ring-[#BB3DF6]/20 resize-none"
                            placeholder="Describe your long-term vision and when you see the company in the future"
                        />
                    </GlassCard>

                    {/* Core Values & Traits */}
                    <div className="pt-4">
                        <div className="flex items-center gap-2 mb-4 text-white font-semibold">
                            <Target size={20} />
                            <h2>Core Values & Traits</h2>
                        </div>

                        <GlassCard className="p-8 bg-[#191934]/40">
                            <p className="text-[#D9D9D9] text-sm mb-6">Select up to 10 values that define your company culture</p>

                            <div className="flex flex-wrap gap-3 mb-8">
                                {[
                                    { label: 'Innovation', selected: false },
                                    { label: 'Empathy', selected: true },
                                    { label: 'Integrity', selected: false },
                                    { label: 'Authenticity', selected: true },
                                    { label: 'Growth', selected: false },
                                    { label: 'Collaboration', selected: false },
                                    { label: 'Trust', selected: true },
                                    { label: 'Excellence', selected: false },
                                    { label: 'Transparency', selected: false },
                                    { label: 'Resilience', selected: false },
                                    { label: 'Inclusivity', selected: false },
                                    { label: 'Creativity', selected: false },
                                ].map((val, idx) => (
                                    <button
                                        key={idx}
                                        className={`py-2 px-4 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 border ${val.selected
                                            ? 'bg-[#BB3DF6]/20 border-[#BB3DF6] text-white shadow-[0_0_15px_rgba(187,61,246,0.2)]'
                                            : 'bg-[#2A2A45]/50 border-white/5 text-[#D9D9D9] hover:bg-[#2A2A45] hover:border-white/10'
                                            }`}
                                    >
                                        {val.label}
                                    </button>
                                ))}
                            </div>

                            <div className="flex justify-between items-center text-sm">
                                <span className="text-[#D9D9D9]">3 of 10 selected</span>
                                <button className="text-[#BB3DF6] hover:text-[#D9D9D9] transition-colors font-medium">
                                    Add Custom Value
                                </button>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Media & Testimonials */}
                    <div className="pt-4">
                        <div className="flex items-center gap-2 mb-4 text-white font-semibold">
                            <ImageIcon size={20} />
                            <h2>Media & Testimonials</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Upload Photos */}
                            <GlassCard className="p-8 flex flex-col items-center justify-center text-center gap-4 bg-[#191934]/40 border border-white/10 hover:border-[#BB3DF6]/50 transition-all cursor-pointer group h-48">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#BB3DF6]/20 transition-colors">
                                    <ImageIcon className="text-white group-hover:text-[#BB3DF6]" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium text-sm mb-1">Upload Photos</h3>
                                    <p className="text-[#D9D9D9]/40 text-xs">Team photos, office space</p>
                                </div>
                            </GlassCard>

                            {/* Upload Videos */}
                            <GlassCard className="p-8 flex flex-col items-center justify-center text-center gap-4 bg-[#191934]/40 border border-white/10 hover:border-[#BB3DF6]/50 transition-all cursor-pointer group h-48">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#BB3DF6]/20 transition-colors">
                                    <Video className="text-white group-hover:text-[#BB3DF6]" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium text-sm mb-1">Upload videos</h3>
                                    <p className="text-[#D9D9D9]/40 text-xs">Culture Videos, interviews</p>
                                </div>
                            </GlassCard>

                            {/* Add Testimonials */}
                            <GlassCard className="p-8 flex flex-col items-center justify-center text-center gap-4 bg-[#191934]/40 border border-white/10 hover:border-[#BB3DF6]/50 transition-all cursor-pointer group h-48">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#BB3DF6]/20 transition-colors">
                                    <MessageSquare className="text-white group-hover:text-[#BB3DF6]" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium text-sm mb-1">Add Testimonials</h3>
                                    <p className="text-[#D9D9D9]/40 text-xs">Employee testimonials</p>
                                </div>
                            </GlassCard>
                        </div>
                    </div>

                </div>

                {/* Right Column - AI Assistant */}
                <div className="lg:col-span-1 space-y-6">
                    <GlassCard className="p-6 sticky top-8 bg-[#191934]/60">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BB3DF6] to-[#2954FF] flex items-center justify-center shadow-lg">
                                <Bot className="text-white" size={20} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold">AI Assistant</h3>
                                <p className="text-[#D9D9D9]/60 text-xs">Culture & Value guide</p>
                            </div>
                        </div>

                        {/* Quick Tip */}
                        <div className="mb-6 rounded-xl bg-gradient-to-r from-white/10 to-white/5 p-[1px]">
                            <div className="bg-[#1E1B4B]/80 rounded-xl p-4 backdrop-blur-sm">
                                <div className="flex items-center gap-2 mb-2 text-white text-xs font-bold">
                                    <Lightbulb size={14} className="text-[#FFD700]" />
                                    Quick Tip
                                </div>
                                <p className="text-[#D9D9D9] text-xs leading-relaxed">
                                    Your mission should clearly state what you do and why it matters to your audience
                                </p>
                            </div>
                        </div>

                        {/* Suggestion */}
                        <div className="mb-8 rounded-xl bg-gradient-to-r from-white/10 to-white/5 p-[1px]">
                            <div className="bg-[#1E1B4B]/80 rounded-xl p-4 backdrop-blur-sm">
                                <div className="flex items-center gap-2 mb-2 text-white text-xs font-bold">
                                    <Sparkles size={14} className="text-[#BB3DF6]" />
                                    Suggestion
                                </div>
                                <p className="text-[#D9D9D9] text-xs leading-relaxed">
                                    Consider adding values like "emotional intelligence" and "authentic connection" that align with Elinity's core purpose
                                </p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-3 mb-8">
                            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#BB3DF6] to-[#2954FF] text-white text-xs font-bold shadow-lg hover:shadow-[#BB3DF6]/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                <Sparkles size={14} />
                                Generate from documents
                            </button>
                            <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold transition-all flex items-center justify-center gap-2">
                                <FileText size={14} />
                                Upload Company Docs
                            </button>
                            <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold transition-all flex items-center justify-center gap-2">
                                <MessageSquare size={14} />
                                Chat With AI
                            </button>
                        </div>

                        {/* Completion */}
                        <div>
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-white text-xs font-bold">Completion</span>
                                <span className="text-white text-xs font-bold">60%</span>
                            </div>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full w-[60%] bg-gradient-to-r from-[#BB3DF6] to-[#00FF94]" />
                            </div>
                        </div>

                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
