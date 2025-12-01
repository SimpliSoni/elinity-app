import {
    Mail,
    Bookmark,
    Share2,
    MapPin,
    Briefcase,
    DollarSign,
    Sparkles,
    User,
    Clock,
    Target,
    Brain,
    Zap,
    MessageSquare,
    Layout,
    Award
} from 'lucide-react';
import GlassCard from './GlassCard';

const SkillBar = ({ label, level, color = "bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81]" }: { label: string, level: string, color?: string }) => {
    const getWidth = (l: string) => {
        switch (l) {
            case 'Expert': return '95%';
            case 'Advanced': return '80%';
            case 'Excellent': return '90%';
            case 'High': return '85%';
            case 'Medium': return '60%';
            default: return '70%';
        }
    };

    return (
        <div className="mb-4 last:mb-0">
            <div className="flex justify-between items-end mb-1">
                <span className="text-white text-xs font-medium">{label}</span>
                <span className="text-[#BB3DF6] text-[10px] font-bold">{level}</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${color}`} style={{ width: getWidth(level) }} />
            </div>
        </div>
    );
};

const HistoryItem = ({ role, company, date, desc, tags }: { role: string, company: string, date: string, desc: string, tags: string[] }) => (
    <GlassCard className="p-6 bg-[#191934]/40 mb-4 border border-white/5 hover:border-[#BB3DF6]/30 transition-colors">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h4 className="text-white font-bold text-sm">{role}</h4>
                <div className="text-[#BB3DF6] text-xs font-medium">{company}</div>
            </div>
            <span className="text-[#D9D9D9]/40 text-[10px]">{date}</span>
        </div>
        <p className="text-[#D9D9D9]/60 text-xs leading-relaxed mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 rounded bg-[#2A2A45] border border-white/5 text-[#D9D9D9] text-[10px]">
                    {tag}
                </span>
            ))}
        </div>
    </GlassCard>
);

const StatBox = ({ label, value }: { label: string, value: string }) => (
    <div className="bg-[#2A2A45]/50 rounded-xl p-3 text-center border border-white/5">
        <div className="text-[#BB3DF6] font-bold text-lg mb-1">{value}</div>
        <div className="text-[#D9D9D9]/60 text-[10px]">{label}</div>
    </div>
);

const CandidateProfile = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 pb-12">
            <div className="mb-6">
                <h1 className="text-xl font-bold text-white mb-4">Candidate Deep Profile</h1>

                {/* AI Summary */}
                <GlassCard className="p-4 bg-gradient-to-r from-[#191934]/80 to-[#2A2A45]/80 border border-[#BB3DF6]/30 flex items-start gap-4">
                    <div className="mt-1">
                        <Sparkles size={20} className="text-[#BB3DF6]" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-sm mb-1">AI Summary</h3>
                        <p className="text-[#D9D9D9] text-xs leading-relaxed">
                            "This candidate thrives in collaborative, high-autonomy teams focused on purpose and growth, with exceptional technical leadership skills and a passion for mentoring emerging talent."
                        </p>
                    </div>
                </GlassCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Main Profile */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Header Card */}
                    <GlassCard className="p-6 bg-[#191934]/60">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
                            <div className="flex items-center gap-4 flex-shrink-0">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#BB3DF6] flex-shrink-0">
                                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                                </div>
                                <div className="min-w-0">
                                    <h2 className="text-xl font-bold text-white truncate">Alex Rodriguez</h2>
                                    <p className="text-[#D9D9D9] text-xs mb-2">Senior Full-Stack Engineer</p>
                                    <div className="flex flex-col gap-1 text-[#D9D9D9]/60 text-[10px]">
                                        <div className="flex items-center gap-1"><MapPin size={12} /> San Francisco, CA</div>
                                        <div className="flex items-center gap-1"><Briefcase size={12} /> 8 years experience</div>
                                        <div className="flex items-center gap-1"><DollarSign size={12} /> $150k-$180k</div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center sm:text-right flex-shrink-0">
                                <div className="text-[#BB3DF6] font-bold text-3xl">92%</div>
                                <div className="text-[#D9D9D9]/60 text-[10px]">Match Score</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <StatBox label="Technical Fit" value="92%" />
                            <StatBox label="Cultural Fit" value="89%" />
                            <StatBox label="Experience Match" value="96%" />
                            <StatBox label="Mission Aligned" value="91%" />
                        </div>
                    </GlassCard>

                    {/* Professional Summary */}
                    <div>
                        <h3 className="text-white font-bold text-sm mb-3">Professional Summary</h3>
                        <GlassCard className="p-6 bg-[#191934]/40">
                            <p className="text-[#D9D9D9]/80 text-xs leading-relaxed">
                                Seasoned full-stack engineer with 8+ years of experience building scalable web applications. Proven track record of leading technical initiatives, mentoring junior developers, and driving innovation in fast-paced startup environments. Passionate about clean code, user experience, and building products that make a meaningful impact.
                            </p>
                        </GlassCard>
                    </div>

                    {/* Career History */}
                    <div>
                        <h3 className="text-white font-bold text-sm mb-3">Career History</h3>
                        <div className="space-y-4">
                            <HistoryItem
                                role="Senior Full-Stack Engineer"
                                company="TechFlow Inc."
                                date="2021-Present"
                                desc="Leading frontend architecture and mentoring a team of 5 developers."
                                tags={['React', 'Node.js', 'AWS', 'Team Leadership']}
                            />
                            <HistoryItem
                                role="Full-Stack Developer"
                                company="Joova AI"
                                date="2018-2021"
                                desc="Built MVP from ground up, scaling from 0 to 10k users. Implemented real-time features."
                                tags={['Vue.js', 'Python', 'PostgreSQL']}
                            />
                            <HistoryItem
                                role="Software Developer"
                                company="Digital Solutions Corp"
                                date="2017-2018"
                                desc="Developed client-facing web applications and internal tools. Gained expertise in full stack."
                                tags={['Java', 'MySQL', 'JavaScript']}
                            />
                        </div>
                    </div>

                    {/* Skills & Expertise */}
                    <div>
                        <h3 className="text-white font-bold text-sm mb-3">Skills & Expertise</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <GlassCard className="p-6 bg-[#191934]/40">
                                <h4 className="text-white font-bold text-xs mb-4">Technical Skills</h4>
                                <SkillBar label="Javascript / Typescript" level="Expert" />
                                <SkillBar label="React / Next.js" level="Expert" />
                                <SkillBar label="Node.js / Express" level="Advanced" />
                                <SkillBar label="AWS/Cloud Architecture" level="Advanced" />
                            </GlassCard>
                            <GlassCard className="p-6 bg-[#191934]/40">
                                <h4 className="text-white font-bold text-xs mb-4">Soft Skills</h4>
                                <SkillBar label="Team Leadership" level="Excellent" color="bg-gradient-to-r from-[#2954FF] to-[#BB3DF6]" />
                                <SkillBar label="Communication" level="Excellent" color="bg-gradient-to-r from-[#2954FF] to-[#BB3DF6]" />
                                <SkillBar label="Problem Solving" level="Excellent" color="bg-gradient-to-r from-[#2954FF] to-[#BB3DF6]" />
                                <SkillBar label="Mentoring" level="Expert" color="bg-gradient-to-r from-[#2954FF] to-[#BB3DF6]" />
                            </GlassCard>
                        </div>
                    </div>

                    {/* Personality Traits */}
                    <div>
                        <h3 className="text-white font-bold text-sm mb-3">Personality Traits</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <GlassCard className="p-6 bg-[#191934]/40">
                                <h4 className="text-white font-bold text-xs mb-4">Emotional Intelligence Score</h4>
                                <div className="text-center mb-4">
                                    <span className="text-3xl font-bold text-white">8.7</span>
                                    <span className="text-[#D9D9D9]/60 text-sm"> / 10</span>
                                    <div className="text-[#BB3DF6] text-[10px]">Exceptional EQ</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] text-[#D9D9D9]">
                                        <span>Self-Awareness</span>
                                        <span className="text-white">9.2</span>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-[#D9D9D9]">
                                        <span>Social Skills</span>
                                        <span className="text-white">8.8</span>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-[#D9D9D9]">
                                        <span>Empathy</span>
                                        <span className="text-white">9.5</span>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-[#D9D9D9]">
                                        <span>Self-Regulation</span>
                                        <span className="text-white">8.1</span>
                                    </div>
                                </div>
                            </GlassCard>
                            <GlassCard className="p-6 bg-[#191934]/40">
                                <h4 className="text-white font-bold text-xs mb-4">Core Traits</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#D9D9D9] text-xs">Collaborative</span>
                                        <span className="text-[#BB3DF6] text-[10px] font-bold">High</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#D9D9D9] text-xs">Analytical</span>
                                        <span className="text-[#BB3DF6] text-[10px] font-bold">High</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#D9D9D9] text-xs">Adaptable</span>
                                        <span className="text-[#BB3DF6] text-[10px] font-bold">High</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#D9D9D9] text-xs">Detail-Oriented</span>
                                        <span className="text-[#D9D9D9]/60 text-[10px] font-bold">Medium</span>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </div>

                    {/* Mission Fit Summary */}
                    <div>
                        <h3 className="text-white font-bold text-sm mb-3">Mission Fit Summary</h3>
                        <GlassCard className="p-6 bg-[#191934]/40">
                            <div className="text-center mb-6">
                                <div className="text-3xl font-bold text-[#BB3DF6]">91%</div>
                                <div className="text-[#D9D9D9]/60 text-[10px]">Mission Alignment Score</div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-[#2A2A45]/50 p-4 rounded-xl border border-white/5">
                                    <div className="w-8 h-8 rounded-lg bg-[#FF3A81]/20 flex items-center justify-center text-[#FF3A81] mb-2">
                                        <Target size={16} />
                                    </div>
                                    <div className="text-white font-bold text-xs mb-1">Value Alignment</div>
                                    <p className="text-[#D9D9D9]/40 text-[10px] leading-tight">Strong alignment with innovation, growth, and social impact</p>
                                </div>
                                <div className="bg-[#2A2A45]/50 p-4 rounded-xl border border-white/5">
                                    <div className="w-8 h-8 rounded-lg bg-[#BB3DF6]/20 flex items-center justify-center text-[#BB3DF6] mb-2">
                                        <Zap size={16} />
                                    </div>
                                    <div className="text-white font-bold text-xs mb-1">Purpose Driven</div>
                                    <p className="text-[#D9D9D9]/40 text-[10px] leading-tight">Motivated by meaningful work and positive impact</p>
                                </div>
                                <div className="bg-[#2A2A45]/50 p-4 rounded-xl border border-white/5">
                                    <div className="w-8 h-8 rounded-lg bg-[#2954FF]/20 flex items-center justify-center text-[#2954FF] mb-2">
                                        <Award size={16} />
                                    </div>
                                    <div className="text-white font-bold text-xs mb-1">Growth Mindset</div>
                                    <p className="text-[#D9D9D9]/40 text-[10px] leading-tight">Committed to continuous learning and development</p>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Work Style & Cultural Notes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Work Style */}
                        <div>
                            <h3 className="text-white font-bold text-sm mb-3">Work Style Indicator</h3>
                            <GlassCard className="p-6 bg-[#191934]/40 h-full">
                                <div className="mb-6">
                                    <h4 className="text-white font-bold text-xs mb-3">Preferred Environment</h4>
                                    <SkillBar label="Autonomy Level" level="High" />
                                    <SkillBar label="Team Collaboration" level="High" />
                                    <SkillBar label="Structure Preference" level="Medium" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xs mb-3">Communication Style</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2 text-[10px] text-[#D9D9D9]">
                                            <MessageSquare size={12} className="text-[#BB3DF6] mt-0.5" />
                                            Direct and transparent communicator
                                        </li>
                                        <li className="flex items-start gap-2 text-[10px] text-[#D9D9D9]">
                                            <MessageSquare size={12} className="text-[#BB3DF6] mt-0.5" />
                                            Enjoys cross-functional collaboration
                                        </li>
                                        <li className="flex items-start gap-2 text-[10px] text-[#D9D9D9]">
                                            <MessageSquare size={12} className="text-[#BB3DF6] mt-0.5" />
                                            Values feedback and iteration
                                        </li>
                                    </ul>
                                </div>
                            </GlassCard>
                        </div>

                        {/* Cultural Notes */}
                        <div>
                            <h3 className="text-white font-bold text-sm mb-3">Cultural Notes</h3>
                            <GlassCard className="p-6 bg-[#191934]/40 h-full">
                                <div className="mb-6">
                                    <h4 className="text-white font-bold text-xs mb-3">Cultural Strengths</h4>
                                    <div className="space-y-2">
                                        <div className="bg-[#2A2A45] p-2 rounded border border-white/5">
                                            <div className="text-white text-[10px] font-bold">Inclusive Leadership</div>
                                            <div className="text-[#D9D9D9]/40 text-[8px]">Actively promotes diversity and inclusion</div>
                                        </div>
                                        <div className="bg-[#2A2A45] p-2 rounded border border-white/5">
                                            <div className="text-white text-[10px] font-bold">Innovation Mindset</div>
                                            <div className="text-[#D9D9D9]/40 text-[8px]">Encourages experimentation and creative solutions</div>
                                        </div>
                                        <div className="bg-[#2A2A45] p-2 rounded border border-white/5">
                                            <div className="text-white text-[10px] font-bold">Work-Life Balance</div>
                                            <div className="text-[#D9D9D9]/40 text-[8px]">Values sustainable work practices</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xs mb-3">Team Fit Indicators</h4>
                                    <div className="space-y-2">
                                        <div className="bg-[#2A2A45] p-2 rounded border border-white/5">
                                            <div className="text-white text-[10px] font-bold">Best Team Size</div>
                                            <div className="text-[#D9D9D9]/40 text-[8px]">5-10 people (small to medium teams)</div>
                                        </div>
                                        <div className="bg-[#2A2A45] p-2 rounded border border-white/5">
                                            <div className="text-white text-[10px] font-bold">Ideal Manager Style</div>
                                            <div className="text-[#D9D9D9]/40 text-[8px]">Collaborative, supportive, goal-oriented</div>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </div>

                </div>

                {/* Right Column - Sidebar */}
                <div className="lg:col-span-1 space-y-6">

                    {/* Quick Actions */}
                    <GlassCard className="p-6 bg-[#191934]/60">
                        <div className="flex items-center gap-2 mb-4 text-white font-bold text-sm">
                            <Layout size={16} />
                            <h3>Quick Actions</h3>
                        </div>
                        <div className="space-y-3">
                            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#BB3DF6] to-[#2954FF] text-white text-xs font-bold shadow-lg hover:shadow-[#BB3DF6]/25 transition-all flex items-center justify-center gap-2">
                                <Mail size={14} />
                                Send Message
                            </button>
                            <button className="w-full py-3 rounded-xl bg-[#2A2A45] hover:bg-[#323250] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 border border-white/5">
                                <Bookmark size={14} />
                                Save Candidate
                            </button>
                            <button className="w-full py-3 rounded-xl bg-[#2A2A45] hover:bg-[#323250] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 border border-white/5">
                                <Share2 size={14} />
                                Share Profile
                            </button>
                        </div>
                    </GlassCard>

                    {/* Profile Sections Nav */}
                    <GlassCard className="p-6 bg-[#191934]/60">
                        <h3 className="text-white font-bold text-sm mb-4">Profile Sections</h3>
                        <div className="space-y-1">
                            {[
                                { icon: <User size={14} />, label: 'Overview', active: true },
                                { icon: <Clock size={14} />, label: 'Career History', active: false },
                                { icon: <Brain size={14} />, label: 'Skills & Expertise', active: false },
                                { icon: <Sparkles size={14} />, label: 'Personality Traits', active: false },
                                { icon: <Target size={14} />, label: 'Mission Fit', active: false },
                                { icon: <Briefcase size={14} />, label: 'Work Style', active: false },
                                { icon: <MessageSquare size={14} />, label: 'Cultural Notes', active: false },
                            ].map((item, i) => (
                                <button key={i} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${item.active ? 'bg-[#BB3DF6]/20 text-white border border-[#BB3DF6]/30' : 'text-[#D9D9D9]/60 hover:bg-white/5 hover:text-white'}`}>
                                    {item.icon}
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Overall Match Score */}
                    <GlassCard className="p-6 bg-gradient-to-br from-[#BB3DF6]/20 to-[#2954FF]/20 border border-[#BB3DF6]/30 text-center">
                        <h3 className="text-white font-bold text-sm mb-2">Overall Match Score</h3>
                        <div className="text-4xl font-bold text-white mb-1">92%</div>
                        <div className="text-[#D9D9D9]/60 text-xs">Excellent Fit</div>
                    </GlassCard>

                </div>
            </div>
        </div>
    );
};

export default CandidateProfile;
