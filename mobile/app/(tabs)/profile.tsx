import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, DimensionValue } from 'react-native';
import {
    Mail,
    Bookmark,
    Share2,
    MapPin,
    Briefcase,
    DollarSign,
    Sparkles,
    ChevronLeft,
    MessageSquare,
    Calendar,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import GlassCard from '../../components/GlassCard';

const SkillBar = ({
    label,
    level,
    color = ['#BB3DF6', '#FF3A81'],
}: {
    label: string;
    level: string;
    color?: string[];
}) => {
    const getWidth = (l: string): DimensionValue => {
        switch (l) {
            case 'Expert':
                return '95%';
            case 'Advanced':
                return '80%';
            case 'Excellent':
                return '90%';
            case 'High':
                return '85%';
            case 'Medium':
                return '60%';
            default:
                return '70%';
        }
    };

    return (
        <View className="mb-4 last:mb-0">
            <View className="flex-row justify-between items-end mb-1">
                <Text className="text-white text-xs font-medium">{label}</Text>
                <Text className="text-[#BB3DF6] text-[10px] font-bold">{level}</Text>
            </View>
            <View className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <LinearGradient
                    colors={color as [string, string]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ width: getWidth(level), height: '100%' }}
                />
            </View>
        </View>
    );
};

const HistoryItem = ({
    role,
    company,
    date,
    desc,
    tags,
}: {
    role: string;
    company: string;
    date: string;
    desc: string;
    tags: string[];
}) => (
    <GlassCard className="p-5 mb-4 border border-white/5">
        <View className="flex-row justify-between items-start mb-2">
            <View className="flex-1 mr-3">
                <Text className="text-white font-bold text-sm">{role}</Text>
                <Text className="text-[#BB3DF6] text-xs font-medium">{company}</Text>
            </View>
            <Text className="text-[#D9D9D9]/40 text-[10px]">{date}</Text>
        </View>
        <Text className="text-[#D9D9D9]/60 text-xs leading-relaxed mb-4">{desc}</Text>
        <View className="flex-row flex-wrap gap-2">
            {tags.map((tag, i) => (
                <View key={i} className="px-2 py-1 rounded bg-[#2A2A45] border border-white/5">
                    <Text className="text-[#D9D9D9] text-[10px]">{tag}</Text>
                </View>
            ))}
        </View>
    </GlassCard>
);

const StatBox = ({ label, value }: { label: string; value: string }) => (
    <View className="bg-[#2A2A45]/50 rounded-xl p-3 flex-1 items-center border border-white/5">
        <Text className="text-[#BB3DF6] font-bold text-lg mb-1">{value}</Text>
        <Text className="text-[#D9D9D9]/60 text-[10px] text-center">{label}</Text>
    </View>
);

export default function CandidateProfile() {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    return (
        <View className="flex-1 bg-[#0F0C29]">
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                {/* Header */}
                <View
                    className="px-4 py-3 flex-row items-center justify-between"
                    style={{ paddingTop: insets.top + 8 }}
                >
                    <TouchableOpacity onPress={() => router.back()} className="p-2 -ml-2">
                        <ChevronLeft size={24} color="white" />
                    </TouchableOpacity>
                    <Text className="text-lg font-bold text-white">Candidate Profile</Text>
                    <View className="flex-row gap-2">
                        <TouchableOpacity className="p-2">
                            <Bookmark size={20} color="rgba(255,255,255,0.6)" />
                        </TouchableOpacity>
                        <TouchableOpacity className="p-2">
                            <Share2 size={20} color="rgba(255,255,255,0.6)" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="px-4">
                    {/* AI Summary */}
                    <GlassCard className="p-4 mb-6 border border-[#BB3DF6]/30">
                        <LinearGradient
                            colors={['rgba(25, 25, 52, 0.8)', 'rgba(42, 42, 69, 0.8)']}
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                borderRadius: 24,
                            }}
                        />
                        <View className="flex-row items-start gap-3 relative z-10">
                            <Sparkles size={20} color="#BB3DF6" />
                            <View className="flex-1">
                                <Text className="text-white font-bold text-sm mb-1">AI Summary</Text>
                                <Text className="text-[#D9D9D9] text-xs leading-relaxed">
                                    "This candidate thrives in collaborative, high-autonomy teams
                                    focused on purpose and growth, with exceptional technical
                                    leadership skills and a passion for mentoring emerging talent."
                                </Text>
                            </View>
                        </View>
                    </GlassCard>

                    {/* Profile Header Card */}
                    <GlassCard className="p-5 mb-6 bg-[#191934]/60">
                        <View className="flex-row items-start gap-4 mb-5">
                            <View className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#BB3DF6]">
                                <Image
                                    source={{
                                        uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
                                    }}
                                    className="w-full h-full"
                                />
                            </View>
                            <View className="flex-1">
                                <Text className="text-xl font-bold text-white">Alex Rodriguez</Text>
                                <Text className="text-[#D9D9D9] text-xs mb-2">
                                    Senior Full-Stack Engineer
                                </Text>
                                <View className="gap-1">
                                    <View className="flex-row items-center gap-1">
                                        <MapPin size={12} color="rgba(217,217,217,0.6)" />
                                        <Text className="text-[#D9D9D9]/60 text-[10px]">
                                            San Francisco, CA
                                        </Text>
                                    </View>
                                    <View className="flex-row items-center gap-1">
                                        <Briefcase size={12} color="rgba(217,217,217,0.6)" />
                                        <Text className="text-[#D9D9D9]/60 text-[10px]">
                                            8 years experience
                                        </Text>
                                    </View>
                                    <View className="flex-row items-center gap-1">
                                        <DollarSign size={12} color="rgba(217,217,217,0.6)" />
                                        <Text className="text-[#D9D9D9]/60 text-[10px]">
                                            $150k-$180k
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View className="items-center">
                                <Text className="text-[#BB3DF6] font-bold text-3xl">92%</Text>
                                <Text className="text-[#D9D9D9]/60 text-[10px]">Match</Text>
                            </View>
                        </View>

                        {/* Stats Grid */}
                        <View className="flex-row gap-2">
                            <StatBox label="Technical" value="92%" />
                            <StatBox label="Cultural" value="89%" />
                            <StatBox label="Experience" value="96%" />
                            <StatBox label="Mission" value="91%" />
                        </View>
                    </GlassCard>

                    {/* Professional Summary */}
                    <View className="mb-6">
                        <Text className="text-white font-bold text-sm mb-3">Professional Summary</Text>
                        <GlassCard className="p-5 bg-[#191934]/40">
                            <Text className="text-[#D9D9D9]/80 text-xs leading-relaxed">
                                Seasoned full-stack engineer with 8+ years of experience building
                                scalable web applications. Proven track record of leading technical
                                initiatives, mentoring junior developers, and driving innovation in
                                fast-paced startup environments. Passionate about clean code, user
                                experience, and building products that make a meaningful impact.
                            </Text>
                        </GlassCard>
                    </View>

                    {/* Career History */}
                    <View className="mb-6">
                        <Text className="text-white font-bold text-sm mb-3">Career History</Text>
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
                            desc="Developed client-facing web applications and internal tools."
                            tags={['Java', 'MySQL', 'JavaScript']}
                        />
                    </View>

                    {/* Skills & Expertise */}
                    <View className="mb-6">
                        <Text className="text-white font-bold text-sm mb-3">Skills & Expertise</Text>
                        <View className="gap-4">
                            <GlassCard className="p-5 bg-[#191934]/40">
                                <Text className="text-white font-bold text-xs mb-4">
                                    Technical Skills
                                </Text>
                                <SkillBar label="JavaScript / TypeScript" level="Expert" />
                                <SkillBar label="React / Next.js" level="Expert" />
                                <SkillBar label="Node.js / Express" level="Advanced" />
                                <SkillBar label="AWS / Cloud Architecture" level="Advanced" />
                            </GlassCard>
                            <GlassCard className="p-5 bg-[#191934]/40">
                                <Text className="text-white font-bold text-xs mb-4">Soft Skills</Text>
                                <SkillBar
                                    label="Team Leadership"
                                    level="Excellent"
                                    color={['#2954FF', '#BB3DF6']}
                                />
                                <SkillBar
                                    label="Communication"
                                    level="Excellent"
                                    color={['#2954FF', '#BB3DF6']}
                                />
                                <SkillBar
                                    label="Problem Solving"
                                    level="Excellent"
                                    color={['#2954FF', '#BB3DF6']}
                                />
                                <SkillBar
                                    label="Mentoring"
                                    level="Expert"
                                    color={['#2954FF', '#BB3DF6']}
                                />
                            </GlassCard>
                        </View>
                    </View>

                    {/* Personality Traits */}
                    <View className="mb-6">
                        <Text className="text-white font-bold text-sm mb-3">Personality Traits</Text>
                        <GlassCard className="p-5 bg-[#191934]/40">
                            <Text className="text-white font-bold text-xs mb-4">
                                Emotional Intelligence Score
                            </Text>
                            <View className="items-center mb-4">
                                <View className="flex-row items-end">
                                    <Text className="text-3xl font-bold text-white">8.7</Text>
                                    <Text className="text-[#D9D9D9]/60 text-sm mb-1"> / 10</Text>
                                </View>
                                <Text className="text-[#BB3DF6] text-[10px]">Exceptional EQ</Text>
                            </View>
                            <View className="gap-3">
                                <View className="flex-row justify-between items-center">
                                    <Text className="text-[#D9D9D9] text-[10px]">Self-Awareness</Text>
                                    <Text className="text-white text-[10px] font-bold">9.2</Text>
                                </View>
                                <View className="flex-row justify-between items-center">
                                    <Text className="text-[#D9D9D9] text-[10px]">Empathy</Text>
                                    <Text className="text-white text-[10px] font-bold">8.5</Text>
                                </View>
                                <View className="flex-row justify-between items-center">
                                    <Text className="text-[#D9D9D9] text-[10px]">Social Skills</Text>
                                    <Text className="text-white text-[10px] font-bold">8.4</Text>
                                </View>
                            </View>
                        </GlassCard>
                    </View>

                    {/* Work Style */}
                    <View className="mb-6">
                        <Text className="text-white font-bold text-sm mb-3">Work Style Preferences</Text>
                        <GlassCard className="p-5 bg-[#191934]/40">
                            <View className="flex-row flex-wrap gap-2">
                                {[
                                    'Remote-First',
                                    'Async Communication',
                                    'Collaborative',
                                    'Autonomous',
                                    'Result-Oriented',
                                    'Mentorship-Focused',
                                ].map((style, i) => (
                                    <View
                                        key={i}
                                        className="px-3 py-2 rounded-lg bg-[#BB3DF6]/10 border border-[#BB3DF6]/20"
                                    >
                                        <Text className="text-[#BB3DF6] text-xs font-medium">
                                            {style}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </GlassCard>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Actions */}
            <View
                className="px-4 py-3 bg-[#0F0C29] border-t border-white/10"
                style={{ paddingBottom: insets.bottom + 8 }}
            >
                <View className="flex-row gap-3">
                    <TouchableOpacity className="flex-1 overflow-hidden rounded-xl">
                        <LinearGradient
                            colors={['#BB3DF6', '#FF3A81']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            className="py-4 flex-row items-center justify-center gap-2"
                        >
                            <MessageSquare size={18} color="white" />
                            <Text className="text-white font-bold text-sm">Message</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 py-4 rounded-xl bg-[#2A2A45] border border-white/5 flex-row items-center justify-center gap-2">
                        <Calendar size={18} color="white" />
                        <Text className="text-white font-bold text-sm">Schedule</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
