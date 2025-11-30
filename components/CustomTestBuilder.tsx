import {
    Plus,
    Save,
    Sparkles,
    Upload,
    Trash2,
    GripVertical,
    CheckSquare,
    Type,
    Settings,
    FileText,
    Zap,
    BarChart3
} from 'lucide-react';
import GlassCard from './GlassCard';

const CustomTestBuilder = () => {

    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pb-12">
            {/* Header */}
            <div className="flex flex-col gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-2">Custom Test Builder</h1>
                    <p className="text-[#D9D9D9]/60 text-sm">Design tailored assessments with AI assistance</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2A2A45] border border-white/10 text-white text-sm font-medium hover:bg-[#323250] transition-colors">
                        <Save size={16} />
                        Save Draft
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#BB3DF6] to-[#2954FF] text-white text-sm font-bold shadow-lg hover:shadow-[#BB3DF6]/25 transition-all">
                        <Plus size={16} />
                        New Assessment
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Left Column: Question Builder */}
                <div className="lg:col-span-2 space-y-6">
                    <GlassCard className="p-6 bg-[#191934]/60 min-h-[600px]">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                            <div className="flex items-center gap-2 text-white font-bold">
                                <FileText size={20} />
                                <h2>Question Builder</h2>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#BB3DF6] text-white text-xs font-bold hover:bg-[#D946EF] transition-colors shadow-[0_0_15px_rgba(187,61,246,0.3)]">
                                    <Sparkles size={12} />
                                    AI Assist
                                </button>
                                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2A2A45] border border-white/10 text-[#D9D9D9] text-xs font-medium hover:bg-[#323250] transition-colors">
                                    <Upload size={12} />
                                    Export Question
                                </button>
                            </div>
                        </div>

                        {/* Assessment Metadata */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label className="text-xs text-[#D9D9D9] font-medium">Assessment Title</label>
                                <input
                                    type="text"
                                    placeholder="Enter assessment name..."
                                    className="w-full bg-[#0F0C29]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#BB3DF6]/50 focus:ring-1 focus:ring-[#BB3DF6]/20 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-[#D9D9D9] font-medium">Category</label>
                                <select className="w-full bg-[#0F0C29]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#BB3DF6]/50 focus:ring-1 focus:ring-[#BB3DF6]/20 transition-all appearance-none">
                                    <option>Emotional Intelligence</option>
                                    <option>Technical Skills</option>
                                    <option>Culture Fit</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2 mb-8">
                            <label className="text-xs text-[#D9D9D9] font-medium">Description</label>
                            <textarea
                                placeholder="Describe the purpose and scope of this assessment..."
                                className="w-full h-24 bg-[#0F0C29]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#BB3DF6]/50 focus:ring-1 focus:ring-[#BB3DF6]/20 transition-all resize-none"
                            />
                        </div>

                        {/* Active Question Card */}
                        <div className="relative p-1 rounded-2xl bg-gradient-to-b from-[#BB3DF6]/20 to-transparent">
                            <div className="bg-[#1E1B4B]/80 backdrop-blur-xl rounded-xl p-6 border border-[#BB3DF6]/30">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-white font-bold text-sm">Question 1</h3>
                                    <div className="flex items-center gap-2">
                                        <button className="p-1.5 text-[#D9D9D9]/40 hover:text-white transition-colors"><GripVertical size={16} /></button>
                                        <button className="p-1.5 text-[#D9D9D9]/40 hover:text-[#FF4141] transition-colors"><Trash2 size={16} /></button>
                                    </div>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <label className="text-xs text-[#D9D9D9] font-medium">Question Text</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your question here..."
                                        className="w-full bg-[#0F0C29]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#BB3DF6]/50 focus:ring-1 focus:ring-[#BB3DF6]/20 transition-all"
                                    />
                                </div>

                                <div className="space-y-3 mb-6">
                                    <label className="text-xs text-[#D9D9D9] font-medium">Answer Options</label>
                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                        <div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center hidden sm:flex"></div>
                                        <input
                                            type="text"
                                            placeholder="Option 1"
                                            className="flex-1 bg-[#2A2A45]/50 border border-white/5 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#BB3DF6]/30"
                                        />
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                        <div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center hidden sm:flex"></div>
                                        <input
                                            type="text"
                                            placeholder="Option 2"
                                            className="flex-1 bg-[#2A2A45]/50 border border-white/5 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#BB3DF6]/30"
                                        />
                                    </div>
                                    <button className="text-[#BB3DF6] text-xs font-medium hover:text-[#D946EF] transition-colors flex items-center gap-1 mt-2">
                                        <Plus size={12} /> Add Option
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs text-[#D9D9D9] font-medium">Points</label>
                                        <input
                                            type="number"
                                            defaultValue={10}
                                            className="w-full bg-[#0F0C29]/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#BB3DF6]/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs text-[#D9D9D9] font-medium">Time Limit (seconds)</label>
                                        <input
                                            type="number"
                                            defaultValue={60}
                                            className="w-full bg-[#0F0C29]/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#BB3DF6]/50"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-4 rounded-xl border border-dashed border-white/20 text-[#D9D9D9]/60 hover:text-white hover:border-[#BB3DF6]/50 hover:bg-[#BB3DF6]/5 transition-all flex items-center justify-center gap-2 text-sm font-medium group">
                            <Plus size={18} className="group-hover:scale-110 transition-transform" />
                            Add New Question
                        </button>

                    </GlassCard>
                </div>

                {/* Right Column: Library & Tools */}
                <div className="lg:col-span-1 space-y-6">
                    
                    {/* Template Library */}
                    <GlassCard className="p-6 bg-[#191934]/60 h-auto">
                        <div className="flex items-center gap-2 mb-2 text-white font-bold">
                            <CheckSquare size={20} />
                            <h2>Template Library</h2>
                        </div>
                        <p className="text-[#D9D9D9]/60 text-xs mb-6">Choose from pre-built assessment templates</p>

                        <div className="space-y-4">
                            {/* Template 1 */}
                            <div className="group p-4 rounded-xl bg-[#2A2A45]/40 border border-white/5 hover:border-[#BB3DF6]/50 hover:bg-[#BB3DF6]/10 transition-all cursor-pointer relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#BB3DF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex items-start gap-3 relative z-10">
                                    <div className="w-8 h-8 rounded-lg bg-[#BB3DF6]/20 flex items-center justify-center text-[#BB3DF6]">
                                        <Zap size={16} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-bold">Emotional Intelligence</h4>
                                        <p className="text-[#D9D9D9]/40 text-[10px] mb-2">25 questions • 15 min</p>
                                        <div className="flex gap-1">
                                            <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#2A2A45] text-[#D9D9D9]">Self-awareness</span>
                                            <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#2A2A45] text-[#D9D9D9]">Empathy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Template 2 */}
                            <div className="group p-4 rounded-xl bg-[#2A2A45]/40 border border-white/5 hover:border-[#2954FF]/50 hover:bg-[#2954FF]/10 transition-all cursor-pointer">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#2954FF]/20 flex items-center justify-center text-[#2954FF]">
                                        <Settings size={16} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-bold">Culture Fit</h4>
                                        <p className="text-[#D9D9D9]/40 text-[10px] mb-2">20 questions • 12 min</p>
                                        <div className="flex gap-1">
                                            <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#2A2A45] text-[#D9D9D9]">Teamwork</span>
                                            <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#2A2A45] text-[#D9D9D9]">Values</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                             {/* Template 3 */}
                             <div className="group p-4 rounded-xl bg-[#2A2A45]/40 border border-white/5 hover:border-[#FF3A81]/50 hover:bg-[#FF3A81]/10 transition-all cursor-pointer">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#FF3A81]/20 flex items-center justify-center text-[#FF3A81]">
                                        <CheckSquare size={16} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-bold">Domain Skills</h4>
                                        <p className="text-[#D9D9D9]/40 text-[10px] mb-2">30 questions • 20 min</p>
                                        <div className="flex gap-1">
                                            <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#2A2A45] text-[#D9D9D9]">Problem-solving</span>
                                            <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#2A2A45] text-[#D9D9D9]">Technical</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Upload Area */}
                    <div className="p-1 rounded-[24px] bg-gradient-to-b from-white/5 to-transparent border border-white/10 border-dashed">
                         <GlassCard className="p-8 flex flex-col items-center justify-center text-center bg-[#191934]/40 hover:bg-[#191934]/60 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#BB3DF6]/20 group-hover:scale-110 transition-all mb-4">
                                <Upload className="text-white group-hover:text-[#BB3DF6]" size={20} />
                            </div>
                            <h3 className="text-white font-bold text-sm mb-1">Upload Custom Assessment</h3>
                            <p className="text-[#D9D9D9]/40 text-xs">Import from PDF, Word or Excel</p>
                        </GlassCard>
                    </div>

                </div>
            </div>

            {/* Bottom: AI Assessment Assistant */}
            <GlassCard className="p-8 bg-gradient-to-r from-[#191934]/90 to-[#0F0C29]/90 border border-[#BB3DF6]/20 relative overflow-hidden">
                
                <div className="flex items-center gap-3 mb-8 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BB3DF6] to-[#2954FF] flex items-center justify-center shadow-[0_0_20px_rgba(187,61,246,0.4)]">
                        <Sparkles className="text-white" size={20} />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg">AI Assessment Assistant</h3>
                        <p className="text-[#D9D9D9]/60 text-xs">Get intelligent suggestions for question design, scoring, and assessment optimization</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    <div className="bg-[#2A2A45]/40 p-5 rounded-xl border border-white/5 hover:border-[#BB3DF6]/50 transition-colors group cursor-pointer">
                        <div className="flex items-center gap-2 text-[#BB3DF6] font-bold text-sm mb-2">
                            <Type size={16} />
                            Generate Questions
                        </div>
                        <p className="text-[#D9D9D9]/50 text-xs group-hover:text-[#D9D9D9] transition-colors">AI-powered question suggestions based on role requirements</p>
                    </div>

                    <div className="bg-[#2A2A45]/40 p-5 rounded-xl border border-white/5 hover:border-[#BB3DF6]/50 transition-colors group cursor-pointer">
                        <div className="flex items-center gap-2 text-[#BB3DF6] font-bold text-sm mb-2">
                            <BarChart3 size={16} />
                            Auto-Score Setup
                        </div>
                        <p className="text-[#D9D9D9]/50 text-xs group-hover:text-[#D9D9D9] transition-colors">Intelligent scoring algorithms configuration</p>
                    </div>

                    <div className="bg-[#2A2A45]/40 p-5 rounded-xl border border-white/5 hover:border-[#BB3DF6]/50 transition-colors group cursor-pointer">
                        <div className="flex items-center gap-2 text-[#BB3DF6] font-bold text-sm mb-2">
                            <Zap size={16} />
                            Optimize Assessment
                        </div>
                        <p className="text-[#D9D9D9]/50 text-xs group-hover:text-[#D9D9D9] transition-colors">Performance recommendations and bias checking</p>
                    </div>
                </div>
            </GlassCard>

        </div>
    );
};

export default CustomTestBuilder;