import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    useWindowDimensions,
    DimensionValue,
    Animated,
} from 'react-native';
import {
    ArrowLeft,
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
    Award,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import GlassCard from '../../components/GlassCard';

// ─────────────────────────────────────────────────────────────────────────────
// MOCK DATA - In production, fetch this based on `id`
// ─────────────────────────────────────────────────────────────────────────────
const candidateData: Record<string, {
    name: string;
    role: string;
    location: string;
    experience: string;
    salary: string;
    matchScore: number;
    img: string;
    summary: string;
    aiSummary: string;
    stats: { label: string; value: string }[];
    technicalSkills: { label: string; level: string }[];
    softSkills: { label: string; level: string }[];
    history: { role: string; company: string; date: string; desc: string; tags: string[] }[];
    eqScore: { total: number; selfAwareness: number; socialSkills: number; empathy: number; selfRegulation: number };
    traits: { name: string; level: string }[];
    missionFit: { score: number; items: { icon: string; title: string; desc: string }[] };
    workStyle: { autonomy: string; collaboration: string; structure: string };
    communication: string[];
    culturalStrengths: { title: string; desc: string }[];
    teamFit: { title: string; desc: string }[];
}> = {
    '1': {
        name: 'Sarah Chen',
        role: 'Senior UX Designer',
        location: 'San Francisco, CA',
        experience: '8 years',
        salary: '$150k-$180k',
        matchScore: 94,
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
        summary: 'Seasoned UX designer with 8+ years of experience building user-centered products. Proven track record of leading design initiatives, mentoring junior designers, and driving innovation in fast-paced startup environments.',
        aiSummary: 'This candidate thrives in collaborative, high-autonomy teams focused on purpose and growth, with exceptional design leadership skills and a passion for mentoring emerging talent.',
        stats: [
            { label: 'Technical Fit', value: '94%' },
            { label: 'Cultural Fit', value: '91%' },
            { label: 'Experience Match', value: '96%' },
            { label: 'Mission Aligned', value: '93%' },
        ],
        technicalSkills: [
            { label: 'Figma / Sketch', level: 'Expert' },
            { label: 'Design Systems', level: 'Expert' },
            { label: 'React Prototyping', level: 'Advanced' },
            { label: 'User Research', level: 'Advanced' },
        ],
        softSkills: [
            { label: 'Team Leadership', level: 'Excellent' },
            { label: 'Communication', level: 'Excellent' },
            { label: 'Problem Solving', level: 'Excellent' },
            { label: 'Mentoring', level: 'Expert' },
        ],
        history: [
            { role: 'Senior UX Designer', company: 'TechFlow Inc.', date: '2021-Present', desc: 'Leading design system and mentoring a team of 5 designers.', tags: ['Figma', 'Design Systems', 'Leadership'] },
            { role: 'UX Designer', company: 'Joova AI', date: '2018-2021', desc: 'Built MVP from ground up, scaling from 0 to 10k users.', tags: ['Sketch', 'User Research', 'Prototyping'] },
            { role: 'Junior Designer', company: 'Digital Solutions', date: '2017-2018', desc: 'Developed client-facing web applications and internal tools.', tags: ['UI Design', 'Wireframing'] },
        ],
        eqScore: { total: 8.7, selfAwareness: 9.2, socialSkills: 8.8, empathy: 9.5, selfRegulation: 8.1 },
        traits: [
            { name: 'Collaborative', level: 'High' },
            { name: 'Analytical', level: 'High' },
            { name: 'Adaptable', level: 'High' },
            { name: 'Detail-Oriented', level: 'Medium' },
        ],
        missionFit: {
            score: 93,
            items: [
                { icon: 'target', title: 'Value Alignment', desc: 'Strong alignment with innovation, growth, and social impact' },
                { icon: 'zap', title: 'Purpose Driven', desc: 'Motivated by meaningful work and positive impact' },
                { icon: 'award', title: 'Growth Mindset', desc: 'Committed to continuous learning and development' },
            ],
        },
        workStyle: { autonomy: 'High', collaboration: 'High', structure: 'Medium' },
        communication: ['Direct and transparent communicator', 'Enjoys cross-functional collaboration', 'Values feedback and iteration'],
        culturalStrengths: [
            { title: 'Inclusive Leadership', desc: 'Actively promotes diversity and inclusion' },
            { title: 'Innovation Mindset', desc: 'Encourages experimentation and creative solutions' },
            { title: 'Work-Life Balance', desc: 'Values sustainable work practices' },
        ],
        teamFit: [
            { title: 'Best Team Size', desc: '5-10 people (small to medium teams)' },
            { title: 'Ideal Manager Style', desc: 'Collaborative, supportive, goal-oriented' },
        ],
    },
    '2': {
        name: 'Marcus Johnson',
        role: 'Full Stack Developer',
        location: 'Austin, TX',
        experience: '6 years',
        salary: '$130k-$160k',
        matchScore: 85,
        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
        summary: 'Versatile full-stack developer with expertise in modern web technologies. Strong background in building scalable applications and leading technical initiatives.',
        aiSummary: 'A highly adaptable developer who excels in fast-paced environments with a strong focus on clean code and team collaboration.',
        stats: [
            { label: 'Technical Fit', value: '88%' },
            { label: 'Cultural Fit', value: '82%' },
            { label: 'Experience Match', value: '85%' },
            { label: 'Mission Aligned', value: '84%' },
        ],
        technicalSkills: [
            { label: 'Node.js / Express', level: 'Expert' },
            { label: 'Python / Django', level: 'Advanced' },
            { label: 'AWS / Cloud', level: 'Advanced' },
            { label: 'React / Next.js', level: 'Expert' },
        ],
        softSkills: [
            { label: 'Problem Solving', level: 'Excellent' },
            { label: 'Communication', level: 'Advanced' },
            { label: 'Adaptability', level: 'Excellent' },
            { label: 'Team Collaboration', level: 'Advanced' },
        ],
        history: [
            { role: 'Senior Developer', company: 'StartupXYZ', date: '2020-Present', desc: 'Leading backend architecture and API development.', tags: ['Node.js', 'AWS', 'Architecture'] },
            { role: 'Full Stack Developer', company: 'TechCorp', date: '2018-2020', desc: 'Built and maintained multiple client applications.', tags: ['React', 'Python', 'PostgreSQL'] },
        ],
        eqScore: { total: 7.9, selfAwareness: 8.0, socialSkills: 7.5, empathy: 8.2, selfRegulation: 7.8 },
        traits: [
            { name: 'Analytical', level: 'High' },
            { name: 'Independent', level: 'High' },
            { name: 'Detail-Oriented', level: 'High' },
            { name: 'Collaborative', level: 'Medium' },
        ],
        missionFit: {
            score: 84,
            items: [
                { icon: 'target', title: 'Value Alignment', desc: 'Good alignment with technical excellence and innovation' },
                { icon: 'zap', title: 'Purpose Driven', desc: 'Values impactful technical work' },
                { icon: 'award', title: 'Growth Mindset', desc: 'Always learning new technologies' },
            ],
        },
        workStyle: { autonomy: 'High', collaboration: 'Medium', structure: 'Low' },
        communication: ['Prefers async communication', 'Clear technical documentation', 'Direct feedback style'],
        culturalStrengths: [
            { title: 'Technical Excellence', desc: 'Champions code quality and best practices' },
            { title: 'Continuous Learning', desc: 'Always exploring new technologies' },
        ],
        teamFit: [
            { title: 'Best Team Size', desc: '3-6 people (small focused teams)' },
            { title: 'Ideal Manager Style', desc: 'Hands-off, results-oriented' },
        ],
    },
    '3': {
        name: 'Elena Rodriguez',
        role: 'Product Manager',
        location: 'New York, NY',
        experience: '7 years',
        salary: '$140k-$170k',
        matchScore: 80,
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
        summary: 'Strategic product manager with experience in B2B and B2C products. Expert in data-driven decision making and cross-functional team leadership.',
        aiSummary: 'A data-driven product leader who excels at bridging business and technical teams with strong strategic vision.',
        stats: [
            { label: 'Technical Fit', value: '78%' },
            { label: 'Cultural Fit', value: '85%' },
            { label: 'Experience Match', value: '82%' },
            { label: 'Mission Aligned', value: '80%' },
        ],
        technicalSkills: [
            { label: 'Product Strategy', level: 'Expert' },
            { label: 'Data Analytics', level: 'Advanced' },
            { label: 'Agile / Scrum', level: 'Expert' },
            { label: 'SQL / Metrics', level: 'Advanced' },
        ],
        softSkills: [
            { label: 'Leadership', level: 'Excellent' },
            { label: 'Communication', level: 'Expert' },
            { label: 'Strategic Thinking', level: 'Excellent' },
            { label: 'Stakeholder Management', level: 'Excellent' },
        ],
        history: [
            { role: 'Senior PM', company: 'BigTech Inc', date: '2020-Present', desc: 'Leading product roadmap for enterprise platform.', tags: ['Strategy', 'B2B', 'Enterprise'] },
            { role: 'Product Manager', company: 'GrowthStartup', date: '2017-2020', desc: 'Launched 3 products from 0 to 1.', tags: ['Launch', 'Analytics', 'Growth'] },
        ],
        eqScore: { total: 8.5, selfAwareness: 8.8, socialSkills: 9.0, empathy: 8.2, selfRegulation: 8.0 },
        traits: [
            { name: 'Strategic', level: 'High' },
            { name: 'Communicative', level: 'High' },
            { name: 'Data-Driven', level: 'High' },
            { name: 'Empathetic', level: 'Medium' },
        ],
        missionFit: {
            score: 80,
            items: [
                { icon: 'target', title: 'Value Alignment', desc: 'Aligned with customer-centric product development' },
                { icon: 'zap', title: 'Purpose Driven', desc: 'Passionate about building impactful products' },
                { icon: 'award', title: 'Growth Mindset', desc: 'Embraces feedback and iteration' },
            ],
        },
        workStyle: { autonomy: 'Medium', collaboration: 'High', structure: 'Medium' },
        communication: ['Excellent verbal and written communication', 'Cross-functional collaboration expert', 'Transparent and inclusive'],
        culturalStrengths: [
            { title: 'Customer Focus', desc: 'Deep understanding of user needs' },
            { title: 'Strategic Vision', desc: 'Connects product to business outcomes' },
        ],
        teamFit: [
            { title: 'Best Team Size', desc: '8-15 people (cross-functional teams)' },
            { title: 'Ideal Manager Style', desc: 'Strategic, empowering, collaborative' },
        ],
    },
};

// ─────────────────────────────────────────────────────────────────────────────
// SKILL BAR COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const SkillBar = ({ label, level, variant = 'primary' }: { label: string; level: string; variant?: 'primary' | 'secondary' }) => {
    const getWidth = (l: string): DimensionValue => {
        switch (l) {
            case 'Expert': return '95%';
            case 'Advanced': return '80%';
            case 'Excellent': return '90%';
            case 'High': return '85%';
            case 'Medium': return '60%';
            default: return '70%';
        }
    };

    const colors: [string, string] = variant === 'primary'
        ? ['#BB3DF6', '#FF3A81']
        : ['#2954FF', '#BB3DF6'];

    return (
        <View className="mb-4">
            <View className="flex-row justify-between items-end mb-1">
                <Text className="text-white text-sm font-medium">{label}</Text>
                <Text className="text-[#BB3DF6] text-xs font-bold">{level}</Text>
            </View>
            <View className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <LinearGradient
                    colors={colors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ width: getWidth(level), height: '100%' }}
                />
            </View>
        </View>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// HISTORY ITEM COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const HistoryItem = ({ role, company, date, desc, tags }: { role: string; company: string; date: string; desc: string; tags: string[] }) => (
    <GlassCard className="bg-[#191934]/40">
        <View className="p-5">
            <View className="flex-row justify-between items-start mb-2">
                <View className="flex-1 mr-3">
                    <Text className="text-white font-bold text-base">{role}</Text>
                    <Text className="text-[#BB3DF6] text-sm font-medium">{company}</Text>
                </View>
                <Text className="text-[#D9D9D9]/40 text-xs">{date}</Text>
            </View>
            <Text className="text-[#D9D9D9]/60 text-sm leading-relaxed mb-3">{desc}</Text>
            <View className="flex-row flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <View key={i} className="px-2 py-1 rounded bg-[#2A2A45] border border-white/5">
                        <Text className="text-[#D9D9D9] text-xs">{tag}</Text>
                    </View>
                ))}
            </View>
        </View>
    </GlassCard>
);

// ─────────────────────────────────────────────────────────────────────────────
// STAT BOX COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const StatBox = ({ label, value }: { label: string; value: string }) => (
    <View className="bg-[#2A2A45]/50 rounded-xl p-2 items-center border border-white/5 flex-1 min-w-[80px]">
        <Text className="text-[#BB3DF6] font-bold text-lg mb-1">{value}</Text>
        <Text className="text-[#D9D9D9]/60 text-[10px] text-center" numberOfLines={2}>{label}</Text>
    </View>
);

// ─────────────────────────────────────────────────────────────────────────────
// MISSION FIT ITEM
// ─────────────────────────────────────────────────────────────────────────────
const MissionFitItem = ({ icon, title, desc }: { icon: string; title: string; desc: string }) => {
    const getIcon = () => {
        switch (icon) {
            case 'target': return <Target size={16} color="#FF3A81" />;
            case 'zap': return <Zap size={16} color="#BB3DF6" />;
            case 'award': return <Award size={16} color="#2954FF" />;
            default: return <Target size={16} color="#FF3A81" />;
        }
    };

    const getBgColor = () => {
        switch (icon) {
            case 'target': return 'bg-[#FF3A81]/20';
            case 'zap': return 'bg-[#BB3DF6]/20';
            case 'award': return 'bg-[#2954FF]/20';
            default: return 'bg-[#FF3A81]/20';
        }
    };

    return (
        <View className="bg-[#2A2A45]/50 p-4 rounded-xl border border-white/5 flex-1">
            <View className={`w-8 h-8 rounded-lg ${getBgColor()} items-center justify-center mb-2`}>
                {getIcon()}
            </View>
            <Text className="text-white font-bold text-sm mb-1">{title}</Text>
            <Text className="text-[#D9D9D9]/60 text-xs leading-tight">{desc}</Text>
        </View>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function CandidateProfile() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();
    const { width, height } = useWindowDimensions();
    
    // Dynamic responsive check that handles rotation
    const isLandscape = width > height;
    const isTablet = width > 768 || (isLandscape && width > 600);
    const isLargeTablet = width > 1024;

    // Get candidate data (fallback to candidate 1)
    const candidate = candidateData[id || '1'] || candidateData['1'];

    const scrollY = new Animated.Value(0);

    return (
        <View style={{ flex: 1, backgroundColor: '#0F0C29' }}>
            {/* Fixed Header with Back Button */}
            <View
                style={{ paddingTop: insets.top }}
                className="absolute top-0 left-0 right-0 z-50 bg-[#0F0C29]/90"
            >
                <View className="flex-row items-center justify-between px-4 py-3">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="w-10 h-10 rounded-full bg-white/10 items-center justify-center"
                    >
                        <ArrowLeft size={20} color="white" />
                    </TouchableOpacity>
                    <Text className="text-white font-bold text-lg">Candidate Profile</Text>
                    <TouchableOpacity className="w-10 h-10 rounded-full bg-white/10 items-center justify-center">
                        <Share2 size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: insets.top + 60,
                    paddingBottom: 120,
                    paddingHorizontal: isTablet ? 24 : 16,
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >
                {/* AI Summary Banner */}
                <GlassCard noPadding className="mb-5 bg-gradient-to-r border border-[#BB3DF6]/30">
                    <LinearGradient
                        colors={['rgba(25, 25, 52, 0.8)', 'rgba(42, 42, 69, 0.8)']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        className="absolute inset-0 rounded-[24px]"
                    />
                    <View className="flex-row items-start gap-3 relative z-10 p-5">
                        <View className="mt-1">
                            <Sparkles size={20} color="#BB3DF6" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-white font-bold text-base mb-1">AI Summary</Text>
                            <Text className="text-[#D9D9D9] text-sm leading-relaxed">
                                "{candidate.aiSummary}"
                            </Text>
                        </View>
                    </View>
                </GlassCard>

                {/* Two-column layout for tablets */}
                <View className={isLargeTablet ? 'flex-row gap-6' : ''}>
                    {/* Main Content Column */}
                    <View style={isLargeTablet ? { flex: 2 } : undefined}>
                        {/* Profile Header Card */}
                        <GlassCard noPadding className="bg-[#191934]/60 mb-5">
                            <View className="p-5">
                            <View className={`${isTablet ? 'flex-row items-center' : ''} gap-4 mb-6`}>
                                <View className={`${isTablet ? 'flex-row items-center flex-1' : ''} gap-4`}>
                                    <View className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#BB3DF6] self-center">
                                        <Image
                                            source={{ uri: candidate.img }}
                                            className="w-full h-full"
                                            resizeMode="cover"
                                        />
                                    </View>
                                    <View className={`${isTablet ? '' : 'items-center'}`}>
                                        <Text className="text-xl font-bold text-white">{candidate.name}</Text>
                                        <Text className="text-[#D9D9D9] text-sm mb-2">{candidate.role}</Text>
                                        <View className="gap-1">
                                            <View className="flex-row items-center gap-1">
                                                <MapPin size={14} color="rgba(217, 217, 217, 0.4)" />
                                                <Text className="text-[#D9D9D9]/60 text-xs">{candidate.location}</Text>
                                            </View>
                                            <View className="flex-row items-center gap-1">
                                                <Briefcase size={14} color="rgba(217, 217, 217, 0.4)" />
                                                <Text className="text-[#D9D9D9]/60 text-xs">{candidate.experience} experience</Text>
                                            </View>
                                            <View className="flex-row items-center gap-1">
                                                <DollarSign size={14} color="rgba(217, 217, 217, 0.4)" />
                                                <Text className="text-[#D9D9D9]/60 text-xs">{candidate.salary}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View className={`${isTablet ? '' : 'items-center mt-4'}`}>
                                    <Text className="text-[#BB3DF6] font-bold text-3xl">{candidate.matchScore}%</Text>
                                    <Text className="text-[#D9D9D9]/60 text-xs">Match Score</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                                {candidate.stats.map((stat, i) => (
                                    <StatBox key={i} label={stat.label} value={stat.value} />
                                ))}
                            </View>
                            </View>
                        </GlassCard>

                        {/* Professional Summary */}
                        <View style={{ marginBottom: 20 }}>
                            <Text className="text-white font-bold text-lg mb-3">Professional Summary</Text>
                            <GlassCard noPadding>
                                <View className="p-5">
                                    <Text className="text-[#D9D9D9]/80 text-base leading-relaxed">
                                        {candidate.summary}
                                    </Text>
                                </View>
                            </GlassCard>
                        </View>

                        {/* Career History */}
                        <View style={{ marginBottom: 20 }}>
                            <Text className="text-white font-bold text-base mb-3">Career History</Text>
                            <View style={{ gap: 16 }}>
                                {candidate.history.map((item, i) => (
                                    <HistoryItem key={i} {...item} />
                                ))}
                            </View>
                        </View>

                        {/* Skills - 2 columns on tablet */}
                        <View style={{ marginBottom: 20 }}>
                            <Text className="text-white font-bold text-lg mb-3">Skills & Expertise</Text>
                            <View style={{ flexDirection: isTablet ? 'row' : 'column', gap: 16 }}>
                                <View style={isTablet ? { flex: 1 } : undefined}>
                                    <GlassCard noPadding>
                                        <View className="p-5">
                                            <Text className="text-white font-bold text-base mb-4">Technical Skills</Text>
                                            {candidate.technicalSkills.map((skill, i) => (
                                                <SkillBar key={i} label={skill.label} level={skill.level} />
                                            ))}
                                        </View>
                                    </GlassCard>
                                </View>
                                <View style={isTablet ? { flex: 1 } : undefined}>
                                    <GlassCard noPadding>
                                        <View className="p-5">
                                            <Text className="text-white font-bold text-base mb-4">Soft Skills</Text>
                                            {candidate.softSkills.map((skill, i) => (
                                                <SkillBar key={i} label={skill.label} level={skill.level} variant="secondary" />
                                            ))}
                                        </View>
                                    </GlassCard>
                                </View>
                            </View>
                        </View>

                        {/* Personality Traits - 2 columns on tablet */}
                        <View style={{ marginBottom: 20 }}>
                            <Text className="text-white font-bold text-lg mb-3">Personality Traits</Text>
                            <View style={{ flexDirection: isTablet ? 'row' : 'column', gap: 16 }}>
                                <View style={isTablet ? { flex: 1 } : undefined}>
                                    <GlassCard noPadding>
                                        <View className="p-5">
                                            <Text className="text-white font-bold text-base mb-4">Emotional Intelligence Score</Text>
                                            <View className="items-center mb-4">
                                                <Text className="text-3xl font-bold text-white">
                                                    {candidate.eqScore.total}
                                                    <Text className="text-[#D9D9D9]/60 text-sm"> / 10</Text>
                                                </Text>
                                                <Text className="text-[#BB3DF6] text-xs">Exceptional EQ</Text>
                                            </View>
                                            <View className="gap-3">
                                                <View className="flex-row justify-between">
                                                    <Text className="text-xs text-[#D9D9D9]">Self-Awareness</Text>
                                                    <Text className="text-white text-xs">{candidate.eqScore.selfAwareness}</Text>
                                                </View>
                                                <View className="flex-row justify-between">
                                                    <Text className="text-xs text-[#D9D9D9]">Social Skills</Text>
                                                    <Text className="text-white text-xs">{candidate.eqScore.socialSkills}</Text>
                                                </View>
                                                <View className="flex-row justify-between">
                                                    <Text className="text-xs text-[#D9D9D9]">Empathy</Text>
                                                    <Text className="text-white text-xs">{candidate.eqScore.empathy}</Text>
                                                </View>
                                                <View className="flex-row justify-between">
                                                    <Text className="text-xs text-[#D9D9D9]">Self-Regulation</Text>
                                                    <Text className="text-white text-xs">{candidate.eqScore.selfRegulation}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </GlassCard>
                                </View>
                                <View style={isTablet ? { flex: 1 } : undefined}>
                                    <GlassCard noPadding className="bg-[#191934]/40">
                                        <View className="p-5">
                                            <Text className="text-white font-bold text-sm mb-4">Core Traits</Text>
                                            <View className="gap-3">
                                                {candidate.traits.map((trait, i) => (
                                                    <View key={i} className="flex-row justify-between items-center">
                                                        <Text className="text-[#D9D9D9] text-sm">{trait.name}</Text>
                                                        <Text className={`text-xs font-bold ${trait.level === 'High' ? 'text-[#BB3DF6]' : 'text-[#D9D9D9]/60'}`}>
                                                            {trait.level}
                                                        </Text>
                                                    </View>
                                                ))}
                                            </View>
                                        </View>
                                    </GlassCard>
                                </View>
                            </View>
                        </View>

                        {/* Mission Fit Summary */}
                        <View className="mb-5">
                            <Text className="text-white font-bold text-base mb-3">Mission Fit Summary</Text>
                            <GlassCard noPadding className="bg-[#191934]/40">
                                <View className="p-5">
                                    <View className="items-center mb-6">
                                        <Text className="text-3xl font-bold text-[#BB3DF6]">{candidate.missionFit.score}%</Text>
                                        <Text className="text-[#D9D9D9]/60 text-xs">Mission Alignment Score</Text>
                                    </View>
                                    <View className={`${isTablet ? 'flex-row gap-4' : 'gap-4'}`}>
                                        {candidate.missionFit.items.map((item, i) => (
                                            <MissionFitItem key={i} {...item} />
                                        ))}
                                    </View>
                                </View>
                            </GlassCard>
                        </View>

                        {/* Work Style & Cultural Notes - 2 columns on tablet */}
                        <View className="mb-5">
                            <View className={`${isTablet ? 'flex-row gap-4' : 'gap-4'}`}>
                                {/* Work Style */}
                                <View style={isTablet ? { flex: 1 } : undefined}>
                                    <Text className="text-white font-bold text-base mb-3">Work Style Indicator</Text>
                                    <GlassCard noPadding className="bg-[#191934]/40">
                                        <View className="p-5">
                                            <Text className="text-white font-bold text-sm mb-3">Preferred Environment</Text>
                                            <SkillBar label="Autonomy Level" level={candidate.workStyle.autonomy} />
                                            <SkillBar label="Team Collaboration" level={candidate.workStyle.collaboration} />
                                            <SkillBar label="Structure Preference" level={candidate.workStyle.structure} />

                                            <Text className="text-white font-bold text-sm mb-3 mt-4">Communication Style</Text>
                                            {candidate.communication.map((item, i) => (
                                                <View key={i} className="flex-row items-start gap-2 mb-2">
                                                    <MessageSquare size={14} color="#BB3DF6" style={{ marginTop: 2 }} />
                                                    <Text className="text-xs text-[#D9D9D9] flex-1">{item}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </GlassCard>
                                </View>

                                {/* Cultural Notes */}
                                <View style={isTablet ? { flex: 1 } : undefined}>
                                    <Text className="text-white font-bold text-base mb-3">Cultural Notes</Text>
                                    <GlassCard noPadding className="bg-[#191934]/40">
                                        <View className="p-5">
                                            <Text className="text-white font-bold text-sm mb-3">Cultural Strengths</Text>
                                            {candidate.culturalStrengths.map((item, i) => (
                                                <View key={i} className="bg-[#2A2A45] p-3 rounded border border-white/5 mb-2">
                                                    <Text className="text-white text-xs font-bold">{item.title}</Text>
                                                    <Text className="text-[#D9D9D9]/60 text-xs">{item.desc}</Text>
                                                </View>
                                            ))}

                                            <Text className="text-white font-bold text-sm mb-3 mt-4">Team Fit Indicators</Text>
                                            {candidate.teamFit.map((item, i) => (
                                                <View key={i} className="bg-[#2A2A45] p-3 rounded border border-white/5 mb-2">
                                                    <Text className="text-white text-xs font-bold">{item.title}</Text>
                                                    <Text className="text-[#D9D9D9]/60 text-xs">{item.desc}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </GlassCard>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Sidebar for Large Tablets */}
                    {isLargeTablet && (
                        <View style={{ flex: 1 }}>
                            {/* Quick Actions */}
                            <GlassCard noPadding className="bg-[#191934]/60 mb-5">
                                <View className="p-5">
                                    <View className="flex-row items-center gap-2 mb-4">
                                        <User size={16} color="white" />
                                        <Text className="text-white font-bold text-base">Quick Actions</Text>
                                    </View>
                                    <TouchableOpacity className="w-full py-3 rounded-xl bg-gradient-to-r items-center justify-center flex-row gap-2 mb-3">
                                        <LinearGradient
                                            colors={['#BB3DF6', '#2954FF']}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 0 }}
                                            className="absolute inset-0 rounded-xl"
                                        />
                                        <Mail size={14} color="white" />
                                        <Text className="text-white text-sm font-bold relative z-10">Send Message</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="w-full py-3 rounded-xl bg-[#2A2A45] border border-white/5 items-center justify-center flex-row gap-2 mb-3">
                                        <Bookmark size={14} color="white" />
                                        <Text className="text-white text-sm font-bold">Save Candidate</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="w-full py-3 rounded-xl bg-[#2A2A45] border border-white/5 items-center justify-center flex-row gap-2">
                                        <Share2 size={14} color="white" />
                                        <Text className="text-white text-sm font-bold">Share Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </GlassCard>

                            {/* Overall Match Score */}
                            <GlassCard className="border border-[#BB3DF6]/30 items-center">
                                <LinearGradient
                                    colors={['rgba(187, 61, 246, 0.2)', 'rgba(41, 84, 255, 0.2)']}
                                    className="absolute inset-0 rounded-[24px]"
                                />
                                <View className="p-5 items-center">
                                    <Text className="text-white font-bold text-base mb-2 relative z-10">Overall Match Score</Text>
                                    <Text className="text-4xl font-bold text-white mb-1 relative z-10">{candidate.matchScore}%</Text>
                                    <Text className="text-[#D9D9D9]/60 text-sm relative z-10">
                                        {candidate.matchScore >= 90 ? 'Excellent Fit' : candidate.matchScore >= 80 ? 'Great Fit' : 'Good Fit'}
                                    </Text>
                                </View>
                            </GlassCard>
                        </View>
                    )}
                </View>
            </ScrollView>

            {/* Sticky Footer Actions */}
            <View
                style={{ paddingBottom: insets.bottom + 16 }}
                className="absolute bottom-0 left-0 right-0 px-4 pt-4 bg-[#0F0C29]/95 border-t border-white/10"
            >
                <View className="flex-row gap-3">
                    <TouchableOpacity className="flex-1 py-3.5 rounded-xl items-center justify-center flex-row gap-2 overflow-hidden">
                        <LinearGradient
                            colors={['#BB3DF6', '#2954FF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            className="absolute inset-0"
                        />
                        <Mail size={18} color="white" />
                        <Text className="text-white text-sm font-bold relative z-10">Contact</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 py-3.5 rounded-xl bg-[#2A2A45] border border-white/10 items-center justify-center flex-row gap-2">
                        <Bookmark size={18} color="white" />
                        <Text className="text-white text-sm font-bold">Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
