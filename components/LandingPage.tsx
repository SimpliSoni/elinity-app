import { Logo } from './Icons';
import GlassCard from './GlassCard';
import {
    Brain,
    Heart,
    ShieldCheck,
    Lightbulb,
    Sparkles,
    Users,
    MapPin,
    Clock,
    PenTool,
    Lock,
    TrendingUp,
    Compass,
    Target,
    Zap
} from 'lucide-react';

// Reusable Badge with glow using the specific palette
const TechBadge = ({ icon, label, colorClass, glowClass }: { icon: React.ReactNode, label: string, colorClass: string, glowClass: string }) => (
    <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#191934]/60 border border-white/10 ${colorClass} text-sm font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.2)] relative overflow-hidden group cursor-pointer hover:scale-105 transition-transform`}>
        <div className={`absolute inset-0 ${glowClass} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
        {icon}
        <span className="tracking-wide">{label}</span>
    </div>
);

const LandingPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="mb-32 relative">
                <div className="w-full rounded-[48px] p-[1px] bg-gradient-to-b from-white/20 via-[#BB3DF6]/30 to-transparent shadow-[0_0_60px_-15px_rgba(187,61,246,0.3)]">
                    <div className="bg-[#191934]/80 rounded-[47px] p-16 flex flex-col items-center relative overflow-hidden backdrop-blur-xl">

                        {/* Internal Hero Glows */}
                        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#BB3DF6]/10 to-transparent pointer-events-none" />
                        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#008CFF]/10 rounded-full blur-[100px]" />

                        <div className="relative z-10 flex flex-col items-center text-center mb-20 max-w-5xl mx-auto">
                            <div className="mb-8 transform hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_30px_rgba(187,61,246,0.5)]">
                                <Logo className="w-24 h-24" />
                            </div>
                            <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-xl">
                                Elinity
                            </h1>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#BB3DF6]/20 to-[#008CFF]/20 border border-[#BB3DF6]/30 mb-6">
                                <Compass size={16} className="text-[#BB3DF6]" />
                                <span className="text-sm font-medium text-white/90">Purpose · Mission · Calling</span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4 leading-tight">
                                The Purpose, Company, and People
                                <br />
                                <span className="text-gradient-main font-bold">Alignment Platform</span>
                            </h2>
                            <p className="text-[#D9D9D9]/80 text-lg mb-3 max-w-3xl leading-relaxed">
                                Built for a post-AGI world where skills become commodities — and <span className="text-white font-semibold">purpose becomes the differentiator</span>
                            </p>
                            <p className="text-[#D9D9D9]/60 text-base mb-10 max-w-2xl">
                                Matching people and organizations by mission, values, leadership energy, and personal calling
                            </p>

                            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-3 md:gap-5 w-full md:w-auto px-8 md:px-0">
                                <TechBadge
                                    icon={<Target size={18} className="text-[#BB3DF6]" />}
                                    label="Purpose Alignment"
                                    colorClass="text-white"
                                    glowClass="bg-[#BB3DF6]"
                                />
                                <TechBadge
                                    icon={<Heart size={18} className="text-[#FF3A81]" />}
                                    label="Mission Matching"
                                    colorClass="text-white"
                                    glowClass="bg-[#FF3A81]"
                                />
                                <TechBadge
                                    icon={<Zap size={18} className="text-[#008CFF]" />}
                                    label="Cultural Resonance"
                                    colorClass="text-white"
                                    glowClass="bg-[#008CFF]"
                                />
                                <TechBadge
                                    icon={<Brain size={18} className="text-[#BB3DF6]" />}
                                    label="AI-Powered Insights"
                                    colorClass="text-white"
                                    glowClass="bg-[#BB3DF6]"
                                />
                            </div>
                        </div>

                        {/* Hero Images Row - Exact Layout from Figma */}
                        <div className="relative w-full hidden md:flex justify-center items-end gap-6 z-10 h-[350px] pb-4">
                            {/* Image 1 - Abstract Tech/AI */}
                            <div className="w-[180px] h-[220px] rounded-2xl overflow-hidden border border-white/10 shadow-lg transform hover:-translate-y-2 transition-all duration-500">
                                <div className="absolute inset-0 bg-[#BB3DF6]/20 mix-blend-overlay z-10" />
                                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="AI Network" />
                            </div>
                            {/* Image 2 - Human Connection (Subtle) */}
                            <div className="w-[200px] h-[280px] rounded-2xl overflow-hidden border border-white/20 shadow-xl transform hover:-translate-y-2 transition-all duration-500">
                                <div className="absolute inset-0 bg-[#008CFF]/20 mix-blend-overlay z-10" />
                                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" alt="Friends" />
                            </div>
                            {/* Center Image 3 - Main Connection (Diverse Group/Warmth) */}
                            <div className="w-[400px] h-[320px] rounded-[32px] overflow-hidden border-2 border-[#FF3A81]/30 shadow-[0_0_40px_rgba(255,58,129,0.25)] z-20 transform hover:scale-105 transition-all duration-500">
                                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Diverse Team Connection" />
                                {/* Sunset overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#BB3DF6]/40 via-transparent to-transparent" />
                            </div>
                            {/* Image 4 - Innovation/Spark */}
                            <div className="w-[200px] h-[280px] rounded-2xl overflow-hidden border border-white/20 shadow-xl transform hover:-translate-y-2 transition-all duration-500">
                                <div className="absolute inset-0 bg-[#008CFF]/20 mix-blend-overlay z-10" />
                                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-90" alt="Digital World" />
                            </div>
                            {/* Image 5 - Empathy/Touch */}
                            <div className="w-[180px] h-[220px] rounded-2xl overflow-hidden border border-white/10 shadow-lg transform hover:-translate-y-2 transition-all duration-500">
                                <div className="absolute inset-0 bg-[#BB3DF6]/20 mix-blend-overlay z-10" />
                                <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Teamwork" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why We Exist */}
            <section className="mb-32 text-center px-4 relative">
                <h2 className="text-4xl font-bold mb-12 text-white drop-shadow-lg">Why We Exist</h2>
                <div className="relative max-w-6xl mx-auto">
                    <div className="p-[1px] rounded-[32px] bg-gradient-to-r from-white/5 via-[#BB3DF6]/30 to-white/5">
                        <GlassCard className="px-8 py-10 md:px-20 md:pt-16 md:pb-10 bg-[#191934]/60 rounded-[31px] relative overflow-hidden group backdrop-blur-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#BB3DF6]/5 to-[#008CFF]/5" />

                            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                                <p className="text-[#D9D9D9] text-2xl leading-relaxed font-light">
                                    In a world where connections often feel superficial, we believe every person deserves relationships that <span className="text-white font-semibold drop-shadow-[0_0_10px_rgba(187,61,246,0.5)]">truly understand</span> and nurture their authentic self
                                </p>
                                <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#BB3DF6] to-transparent mx-auto" />
                                <p className="text-[#D9D9D9] text-2xl leading-relaxed font-light">
                                    We exist to bridge the gap between who you are meant to connect with, using <span className="text-white font-semibold drop-shadow-[0_0_10px_rgba(0,140,255,0.5)]">Emotional Intelligence</span> and deep compatibility to create lasting, meaningful relationships that help you thrive
                                </p>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Our Core Values */}
            <section className="mb-32 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">Our Core Values</h2>
                    <p className="text-[#D9D9D9] text-xl">The principles that guide everything we do</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <Lock className="text-white" size={24} />, title: "Authenticity", desc: "We believe in genuine connections built on true understanding not superficial attraction", bg: "bg-[#BB3DF6]" },
                        { icon: <Brain className="text-white" size={24} />, title: "Intelligence", desc: "We leverage emotional and Artificial Intelligence to create meaningful matches", bg: "bg-[#008CFF]" },
                        { icon: <TrendingUp className="text-white" size={24} />, title: "Growth", desc: "We foster personal development and help you become your best self in relationships", bg: "bg-[#BB3DF6]" },
                        { icon: <ShieldCheck className="text-white" size={24} />, title: "Trust", desc: "We prioritize privacy, safety, and building a secure environment for vulnerable connections", bg: "bg-[#BB3DF6]" },
                        { icon: <Heart className="text-white" size={24} />, title: "Empathy", desc: "We understand that every person's journey to connection is unique and deserves compassion", bg: "bg-[#FF3A81]" },
                        { icon: <Lightbulb className="text-white" size={24} />, title: "Innovation", desc: "We continuously evolve our approach to relationship building through cutting-edge technology", bg: "bg-[#008CFF]" },
                    ].map((item, idx) => (
                        <div key={idx} className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-[#BB3DF6]/40 hover:to-[#008CFF]/40 transition-all duration-500">
                            <GlassCard className="p-8 flex flex-col items-center text-center h-full bg-[#191934]/50 group-hover:bg-[#191934]/80 transition-colors">
                                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-all duration-300 border border-white/20`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white tracking-wide">{item.title}</h3>
                                <p className="text-[#D9D9D9]/80 text-sm leading-relaxed font-light">{item.desc}</p>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </section>

            {/* Meet Our Team */}
            <section className="mb-32 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-[#D9D9D9] text-xl">The passionate mind behind Elinity</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {[
                        { name: "XYZ", role: "CEO & Co-Founder", desc: "Former relationship therapist turned tech entrepreneur, passionate about authentic connections", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
                        { name: "XYZ", role: "Head Developer", desc: "Turning ideas into smooth, functional products and making sure every line of code actually makes sense", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" },
                        { name: "XYZ", role: "Head Researcher", desc: "Behavioural scientist studying compatibility patterns and relationship success factors", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" },
                    ].map((member, idx) => (
                        <GlassCard key={idx} className="p-6 flex flex-row items-start gap-5 hover:bg-white/5 transition-colors group border border-white/10 hover:border-[#008CFF]/30 bg-[#191934]/60">
                            <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-[#008CFF] transition-all shadow-lg relative">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg text-white mb-1">{member.name}</h3>
                                <p className="text-[#BB3DF6] text-xs font-bold uppercase tracking-wider mb-3">{member.role}</p>
                                <p className="text-xs text-[#D9D9D9] leading-relaxed font-light">{member.desc}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* Life At Elinity - Checkerboard Layout */}
            <section className="mb-32 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Life At Elinity</h2>
                    <p className="text-[#D9D9D9] text-xl">Where Innovation meets human connection</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Quote 1 */}
                    <div className="relative group h-full">
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-[#BB3DF6] to-[#002E65] rounded-2xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
                        <GlassCard className="p-10 flex flex-col justify-center rounded-2xl relative overflow-hidden h-full bg-[#191934]">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#BB3DF6]/10 to-transparent pointer-events-none" />
                            <p className="text-xl text-white italic mb-6 relative z-10 font-light leading-relaxed">
                                “Working at Elinity feels like being part of something truly meaningful. We're not just building an app: we're helping people find their person”
                            </p>
                            <p className="text-[#BB3DF6] font-semibold relative z-10 text-sm">
                                -XYZ, Developer
                            </p>
                        </GlassCard>
                    </div>

                    {/* Images 1 */}
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="h-full min-h-[240px] rounded-2xl overflow-hidden border border-white/10 relative group">
                            <img src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" alt="Life 1" />
                        </div>
                        <div className="h-full min-h-[240px] rounded-2xl overflow-hidden border border-white/10 relative group">
                            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" alt="Life 2" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Images 2 */}
                    <div className="grid grid-cols-2 gap-4 h-full lg:order-1 order-2">
                        <div className="h-full min-h-[240px] rounded-2xl overflow-hidden border border-white/10 relative group">
                            <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" alt="Life 3" />
                        </div>
                        <div className="h-full min-h-[240px] rounded-2xl overflow-hidden border border-white/10 relative group">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" alt="Life 4" />
                        </div>
                    </div>

                    {/* Quote 2 */}
                    <div className="relative group lg:order-2 order-1 h-full">
                        <div className="absolute -inset-[1px] bg-gradient-to-r from-[#FF3A81] to-[#002E65] rounded-2xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
                        <GlassCard className="p-10 flex flex-col justify-center rounded-2xl relative overflow-hidden h-full bg-[#191934]">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF3A81]/10 to-transparent pointer-events-none" />
                            <p className="text-xl text-white italic mb-6 relative z-10 font-light leading-relaxed">
                                “The culture here is incredibly supportive. We celebrate both professional wins and personal milestones as a family “
                            </p>
                            <p className="text-[#FF3A81] font-semibold relative z-10 text-sm">
                                -XYZ, Designer
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="mb-32 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
                    <p className="text-[#D9D9D9] text-xl">Join us in revolutionizing human connections</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { title: "Senior AI Engineer", role: "Lead the development of our Emotional Intelligence algorithms and matching systems", color: "from-[#191934] to-[#2954FF]" },
                        { title: "Product Designer", role: "Design intuitive interfaces that facilitate meaningful human connections", color: "from-[#191934] to-[#2954FF]" },
                        { title: "Data Analyst", role: "Analyse relationships patterns and optimize our compatibility algorithms", color: "from-[#191934] to-[#2954FF]" },
                        { title: "Community Manager", role: "Foster our community and ensure positive user experience", color: "from-[#191934] to-[#2954FF]" }
                    ].map((job, idx) => (
                        <div key={idx} className="rounded-2xl p-[1px] bg-gradient-to-r from-white/10 to-white/5 hover:from-[#BB3DF6] hover:to-[#008CFF] transition-all duration-500">
                            <GlassCard className="p-0 flex flex-col cursor-pointer group overflow-hidden h-full bg-[#191934]">
                                {/* Header with pill */}
                                <div className="p-6 flex justify-between items-start border-b border-white/5 bg-[#191934]">
                                    <h3 className="text-xl font-bold text-white tracking-tight">{job.title}</h3>
                                    <span className="bg-[#BB3DF6]/20 text-[#BB3DF6] text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-bold border border-[#BB3DF6]/30">
                                        Full-time
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-[#D9D9D9] text-sm mb-6 leading-relaxed flex-grow font-light">{job.role}</p>
                                    <div className="flex items-center gap-6 text-xs text-[#D9D9D9]/60 font-medium">
                                        <div className="flex items-center gap-2"><MapPin size={14} /> Remote</div>
                                        <div className="flex items-center gap-2"><Clock size={14} /> Posted 3 days ago</div>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </section>

            {/* Cultural Fit */}
            <section className="px-4 pb-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Cultural Fit</h2>
                    <p className="text-[#D9D9D9] text-xl">The traits we value most in our team members</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <PenTool size={20} />, title: "Creativity", desc: "Innovative thinking and fresh perspectives" },
                        { icon: <Users size={20} />, title: "Collaboration", desc: "Working together towards common goals" },
                        { icon: <Lightbulb size={20} />, title: "Curiosity", desc: "Always learning and questioning" },
                        { icon: <Heart size={20} />, title: "Empathy", desc: "Understanding and caring for others" },
                    ].map((item, idx) => (
                        <GlassCard key={idx} className="p-8 flex flex-col items-center text-center h-full justify-center border border-white/10 hover:border-[#BB3DF6]/50 transition-colors duration-300 hover:bg-[#191934] group bg-[#191934]/60">
                            <div className="w-12 h-12 rounded-xl bg-[#BB3DF6] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <div className="text-white">{item.icon}</div>
                            </div>
                            <h3 className="font-bold mb-2 text-lg text-white">{item.title}</h3>
                            <p className="text-xs text-[#D9D9D9] leading-relaxed font-light">{item.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </section>
        </>
    );
};

export default LandingPage;
