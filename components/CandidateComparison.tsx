
import {
    Plus,
    Bookmark,
    MoreHorizontal,
    MessageSquare,
    Download,
    Calendar,
    CheckCircle2,
    ChevronDown
} from 'lucide-react';
import GlassCard from './GlassCard';

const TraitCard = ({ score, label }: { score: string, label: string }) => (
    <div className="bg-[#2A2A45]/50 rounded-lg p-3 border border-white/5">
        <div className="text-[#BB3DF6] font-bold text-sm mb-1">{score}</div>
        <div className="text-[#D9D9D9]/60 text-[10px]">{label}</div>
    </div>
);

const ComparisonCard = ({
    name,
    role,
    img,
    fitScore,
    missionMatch,
    strengths,
    traits,
    skills
}: {
    name: string,
    role: string,
    img: string,
    fitScore: number,
    missionMatch: number,
    strengths: string[],
    traits: { score: string, label: string }[],
    skills: { label: string, score: number }[]
}) => (
    <GlassCard className="flex flex-col h-full bg-[#191934]/60 overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-b from-[#BB3DF6]/10 to-transparent">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#BB3DF6]">
                    <img src={img} alt={name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg leading-tight">{name}</h3>
                    <p className="text-[#D9D9D9]/60 text-xs">{role}</p>
                </div>
            </div>
        </div>

        <div className="px-6 pb-6 flex-1 flex flex-col gap-6">
            {/* Scores */}
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-white text-xs font-medium">Overall Fit Score</span>
                        <span className="text-[#BB3DF6] text-sm font-bold">{fitScore}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81]" style={{ width: `${fitScore}%` }} />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-white text-xs font-medium">Mission Match</span>
                        <span className="text-[#D9D9D9]/60 text-sm font-bold">{missionMatch}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#FF3A81] to-[#BB3DF6]" style={{ width: `${missionMatch}%` }} />
                    </div>
                </div>
            </div>

            {/* Top Strengths */}
            <div>
                <h4 className="text-white font-bold text-xs mb-3">Top Strengths</h4>
                <div className="space-y-2">
                    {strengths.map((strength, i) => (
                        <div key={i} className="px-3 py-2 rounded-lg bg-[#2A2A45] border border-white/5 text-[#D9D9D9] text-xs font-medium">
                            {strength}
                        </div>
                    ))}
                </div>
            </div>

            {/* Emotional Traits */}
            <div>
                <h4 className="text-white font-bold text-xs mb-3">Emotional Traits</h4>
                <div className="grid grid-cols-2 gap-2">
                    {traits.map((trait, i) => (
                        <TraitCard key={i} score={trait.score} label={trait.label} />
                    ))}
                </div>
            </div>

            {/* Skill Coverage */}
            <div>
                <h4 className="text-white font-bold text-xs mb-3">Skill Coverage</h4>
                <div className="space-y-3">
                    {skills.map((skill, i) => (
                        <div key={i} className="flex justify-between items-center text-xs">
                            <span className="text-[#E2E2E2] font-medium">{skill.label}</span>
                            <span className="text-[#D240FE] font-bold">{skill.score}%</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="mt-auto pt-6 flex gap-3">
                <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#C026D3] to-[#4F46E5] text-white text-sm font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2 group">
                    <MessageSquare size={18} className="fill-white text-white group-hover:scale-110 transition-transform" />
                    Comment
                </button>
                <button className="w-12 rounded-xl bg-[#2A2A45] hover:bg-[#323250] text-white transition-all border border-white/10 flex items-center justify-center">
                    <MoreHorizontal size={20} />
                </button>
            </div>
        </div>
    </GlassCard>
);

const CandidateComparison = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-bold text-white">Candidate Comparison & Shortlist</h1>
                    <span className="px-2 py-1 rounded bg-[#BB3DF6]/20 border border-[#BB3DF6]/30 text-[#BB3DF6] text-[10px] font-bold">
                        3 Selected
                    </span>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#2A2A45] border border-white/10 text-white text-xs font-bold hover:bg-[#323250] transition-colors">
                        <Plus size={14} />
                        Add Candidate
                    </button>
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#BB3DF6]/20 border border-[#BB3DF6]/30 text-white text-xs font-bold hover:bg-[#BB3DF6]/30 transition-colors">
                        <Bookmark size={14} />
                        Save Comparison
                    </button>
                </div>
            </div>

            {/* Sort Bar */}
            <div className="w-full p-4 rounded-xl bg-[#191934]/60 border border-white/5 mb-8 flex flex-col md:flex-row items-start md:items-center gap-4">
                <span className="text-[#D9D9D9] text-xs font-bold">Sort by:</span>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2A2A45] text-white text-xs font-medium w-full md:w-auto justify-between md:justify-start">
                    Fit Score (High to Low)
                    <ChevronDown size={12} />
                </button>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <ComparisonCard
                    name="Alex Rodriguez"
                    role="Senior Full-Stack Engineer"
                    img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    fitScore={92}
                    missionMatch={88}
                    strengths={['Leadership Excellence', 'Technical Innovation', 'Strategic Thinking']}
                    traits={[
                        { score: '8.5', label: 'Resilience' },
                        { score: '9.2', label: 'Empathy' },
                        { score: '8.8', label: 'Adaptability' },
                        { score: '9.0', label: 'Drive' },
                    ]}
                    skills={[
                        { label: 'Technical Skills', score: 95 },
                        { label: 'Communication', score: 88 },
                        { label: 'Management', score: 76 },
                    ]}
                />
                <ComparisonCard
                    name="David Kim"
                    role="Research Scientist"
                    img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    fitScore={78}
                    missionMatch={82}
                    strengths={['Analytical Thinking', 'Research Skills', 'Problem Solving']}
                    traits={[
                        { score: '7.8', label: 'Resilience' },
                        { score: '8.1', label: 'Empathy' },
                        { score: '7.5', label: 'Adaptability' },
                        { score: '8.3', label: 'Drive' },
                    ]}
                    skills={[
                        { label: 'Technical Skills', score: 82 },
                        { label: 'Communication', score: 91 },
                        { label: 'Management', score: 62 },
                    ]}
                />
                <ComparisonCard
                    name="Marcus Johnson"
                    role="Innovation Engineer"
                    img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                    fitScore={65}
                    missionMatch={71}
                    strengths={['Innovation', 'Technical Expertise', 'Independent Work']}
                    traits={[
                        { score: '9.1', label: 'Resilience' },
                        { score: '6.8', label: 'Empathy' },
                        { score: '8.9', label: 'Adaptability' },
                        { score: '9.5', label: 'Drive' },
                    ]}
                    skills={[
                        { label: 'Technical Skills', score: 97 },
                        { label: 'Communication', score: 54 },
                        { label: 'Management', score: 41 },
                    ]}
                />
            </div>

            {/* Comparison Summary Footer */}
            <GlassCard className="p-6 bg-gradient-to-r from-[#191934] to-[#2A2A45] border border-white/10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h3 className="text-white font-bold text-sm mb-1">Comparison Summary</h3>
                        <p className="text-[#D9D9D9]/60 text-xs">
                            Based on your criteria, Alex Rodriguez shows the highest overall fit with exceptional leadership and technical skills.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2A2A45] border border-white/10 text-white text-xs font-bold hover:bg-[#323250] transition-colors">
                            <Download size={14} />
                            Export Report
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2A2A45] border border-white/10 text-white text-xs font-bold hover:bg-[#323250] transition-colors">
                            <Calendar size={14} />
                            Schedule Interviews
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#BB3DF6] to-[#2954FF] text-white text-xs font-bold shadow-lg hover:shadow-[#BB3DF6]/25 transition-all">
                            <CheckCircle2 size={14} />
                            Proceed with Selection
                        </button>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
};

export default CandidateComparison;
