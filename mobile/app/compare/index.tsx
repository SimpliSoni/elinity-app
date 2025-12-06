import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    useWindowDimensions,
    StyleSheet,
} from 'react-native';
import {
    ArrowLeft,
    Plus,
    Bookmark,
    MoreHorizontal,
    MessageSquare,
    Download,
    Calendar,
    CheckCircle2,
    ChevronDown,
    X,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import GlassCard from '../../components/GlassCard';

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface Candidate {
    id: string;
    name: string;
    role: string;
    img: string;
    fitScore: number;
    missionMatch: number;
    strengths: string[];
    traits: { score: string; label: string }[];
    skills: { label: string; score: number }[];
}

// ─────────────────────────────────────────────────────────────────────────────
// MOCK DATA
// ─────────────────────────────────────────────────────────────────────────────
const candidatesData: Candidate[] = [
    {
        id: '1',
        name: 'Sarah Chen',
        role: 'Senior UX Designer',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
        fitScore: 94,
        missionMatch: 91,
        strengths: ['Design Excellence', 'Team Leadership', 'User Advocacy'],
        traits: [
            { score: '8.9', label: 'Resilience' },
            { score: '9.4', label: 'Empathy' },
            { score: '9.0', label: 'Adaptability' },
            { score: '9.2', label: 'Drive' },
        ],
        skills: [
            { label: 'Design Skills', score: 96 },
            { label: 'Communication', score: 91 },
            { label: 'Leadership', score: 84 },
        ],
    },
    {
        id: '2',
        name: 'Marcus Johnson',
        role: 'Full Stack Developer',
        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
        fitScore: 85,
        missionMatch: 84,
        strengths: ['Technical Excellence', 'Problem Solving', 'Clean Code'],
        traits: [
            { score: '8.5', label: 'Resilience' },
            { score: '7.8', label: 'Empathy' },
            { score: '8.8', label: 'Adaptability' },
            { score: '9.0', label: 'Drive' },
        ],
        skills: [
            { label: 'Technical Skills', score: 92 },
            { label: 'Communication', score: 78 },
            { label: 'Leadership', score: 65 },
        ],
    },
    {
        id: '3',
        name: 'Elena Rodriguez',
        role: 'Product Manager',
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
        fitScore: 80,
        missionMatch: 82,
        strengths: ['Strategic Vision', 'Stakeholder Mgmt', 'Data Analysis'],
        traits: [
            { score: '8.2', label: 'Resilience' },
            { score: '8.8', label: 'Empathy' },
            { score: '8.1', label: 'Adaptability' },
            { score: '8.5', label: 'Drive' },
        ],
        skills: [
            { label: 'Strategy', score: 88 },
            { label: 'Communication', score: 92 },
            { label: 'Leadership', score: 79 },
        ],
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// TRAIT CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const TraitCard = ({ score, label }: { score: string; label: string }) => (
    <View className="bg-[#2A2A45]/50 rounded-lg p-3 border border-white/5 flex-1">
        <Text className="text-[#BB3DF6] font-bold text-base mb-1">{score}</Text>
        <Text className="text-[#D9D9D9]/60 text-xs">{label}</Text>
    </View>
);

// ─────────────────────────────────────────────────────────────────────────────
// COMPARISON CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const ComparisonCard = ({
    candidate,
    onRemove,
    onViewProfile,
    isTablet,
}: {
    candidate: Candidate;
    onRemove: () => void;
    onViewProfile: () => void;
    isTablet: boolean;
}) => (
    <GlassCard>
        {/* Header */}
        <View className="p-5 relative">
            <LinearGradient
                colors={['rgba(187, 61, 246, 0.1)', 'transparent']}
                style={StyleSheet.absoluteFill}
            />
            <TouchableOpacity
                onPress={onRemove}
                className="absolute top-3 right-3 z-10 w-6 h-6 rounded-full bg-white/10 items-center justify-center"
            >
                <X size={12} color="rgba(255,255,255,0.6)" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onViewProfile} className="flex-row items-center gap-3">
                <View className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#BB3DF6]">
                    <Image source={{ uri: candidate.img }} className="w-full h-full" />
                </View>
                <View className="flex-1">
                    <Text className="text-white font-bold text-lg leading-tight">{candidate.name}</Text>
                    <Text className="text-[#D9D9D9]/60 text-sm">{candidate.role}</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View className="px-5 pb-5 gap-5">
            {/* Scores */}
            <View className="gap-4">
                <View>
                    <View className="flex-row justify-between items-end mb-2">
                        <Text className="text-white text-sm font-medium">Overall Fit Score</Text>
                        <Text className="text-[#BB3DF6] text-base font-bold">{candidate.fitScore}%</Text>
                    </View>
                    <View className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <LinearGradient
                            colors={['#BB3DF6', '#FF3A81']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ width: `${candidate.fitScore}%`, height: '100%' }}
                        />
                    </View>
                </View>
                <View>
                    <View className="flex-row justify-between items-end mb-2">
                        <Text className="text-white text-sm font-medium">Mission Match</Text>
                        <Text className="text-[#D9D9D9]/60 text-base font-bold">{candidate.missionMatch}%</Text>
                    </View>
                    <View className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <LinearGradient
                            colors={['#FF3A81', '#BB3DF6']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ width: `${candidate.missionMatch}%`, height: '100%' }}
                        />
                    </View>
                </View>
            </View>

            {/* Top Strengths */}
            <View>
                <Text className="text-white font-bold text-sm mb-3">Top Strengths</Text>
                <View className="gap-2">
                    {candidate.strengths.map((strength, i) => (
                        <View key={i} className="px-3 py-2 rounded-lg bg-[#2A2A45] border border-white/5">
                            <Text className="text-[#D9D9D9] text-sm font-medium">{strength}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Emotional Traits */}
            <View>
                <Text className="text-white font-bold text-sm mb-3">Emotional Traits</Text>
                <View className="flex-row flex-wrap gap-2">
                    {candidate.traits.map((trait, i) => (
                        <View key={i} style={{ width: '48%' }}>
                            <TraitCard score={trait.score} label={trait.label} />
                        </View>
                    ))}
                </View>
            </View>

            {/* Skill Coverage */}
            <View>
                <Text className="text-white font-bold text-sm mb-3">Skill Coverage</Text>
                <View className="gap-3">
                    {candidate.skills.map((skill, i) => (
                        <View key={i} className="flex-row justify-between items-center">
                            <Text className="text-[#E2E2E2] text-sm font-medium">{skill.label}</Text>
                            <Text className="text-[#D240FE] font-bold text-sm">{skill.score}%</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Actions */}
            <View className="flex-row gap-3 mt-2">
                <TouchableOpacity
                    onPress={onViewProfile}
                    style={{ flex: 1, paddingVertical: 12, borderRadius: 12, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 8, overflow: 'hidden' }}
                >
                    <LinearGradient
                        colors={['#C026D3', '#4F46E5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={StyleSheet.absoluteFill}
                    />
                    <MessageSquare size={16} color="white" fill="white" />
                    <Text className="text-white text-sm font-bold relative z-10">View Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-12 rounded-xl bg-[#2A2A45] border border-white/10 items-center justify-center">
                    <MoreHorizontal size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    </GlassCard>
);

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function CandidateComparison() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    
    // Dynamic responsive breakpoints based on both width and orientation
    const isLandscape = width > height;
    const isTablet = width > 768 || (isLandscape && width > 600);
    const isLargeTablet = width > 1024;
    
    // Calculate card widths dynamically
    const horizontalPadding = 32; // 16px on each side
    const gap = 16;
    const getCardWidth = () => {
        if (isLargeTablet) {
            return (width - horizontalPadding - gap * 2) / 3;
        } else if (isTablet) {
            return (width - horizontalPadding - gap) / 2;
        }
        return width - horizontalPadding;
    };
    const cardWidth = getCardWidth();

    const [selectedCandidates, setSelectedCandidates] = useState<Candidate[]>(candidatesData);
    const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
    const [footerCollapsed, setFooterCollapsed] = useState(false);

    const removeCandidate = (id: string) => {
        setSelectedCandidates(prev => prev.filter(c => c.id !== id));
    };

    const viewCandidateProfile = (id: string) => {
        router.push(`/candidate/${id}`);
    };

    // Calculate best candidate
    const bestCandidate = selectedCandidates.reduce(
        (best, current) => (current.fitScore > best.fitScore ? current : best),
        selectedCandidates[0]
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#0F0C29' }}>
            {/* Header */}
            <View
                style={{ paddingTop: insets.top }}
                className="bg-[#0F0C29] border-b border-white/5"
            >
                <View className="flex-row items-center justify-between px-4 py-4">
                    <View className="flex-row items-center gap-3">
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="w-10 h-10 rounded-full bg-white/10 items-center justify-center"
                        >
                            <ArrowLeft size={20} color="white" />
                        </TouchableOpacity>
                        <View>
                            <Text className="text-white font-bold text-lg">Candidate Comparison</Text>
                            <View className="flex-row items-center gap-2">
                                <View className="px-2 py-0.5 rounded bg-[#BB3DF6]/20 border border-[#BB3DF6]/30">
                                    <Text className="text-[#BB3DF6] text-xs font-bold">
                                        {selectedCandidates.length} Selected
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Action Buttons */}
                <View className="flex-row gap-3 px-4 pb-4">
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2A2A45] border border-white/10">
                        <Plus size={14} color="white" />
                        <Text className="text-white text-xs font-bold">Add Candidate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#BB3DF6]/20 border border-[#BB3DF6]/30">
                        <Bookmark size={14} color="white" />
                        <Text className="text-white text-xs font-bold">Save Comparison</Text>
                    </TouchableOpacity>
                </View>

                {/* Sort Bar */}
                <View className="px-4 pb-4">
                    <View className="flex-row items-center gap-4 p-3 rounded-xl bg-[#191934]/60 border border-white/5">
                        <Text className="text-[#D9D9D9] text-xs font-bold">Sort by:</Text>
                        <TouchableOpacity
                            onPress={() => setSortDropdownOpen(!sortDropdownOpen)}
                            className="flex-row items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2A2A45]"
                        >
                            <Text className="text-white text-xs font-medium">Fit Score (High to Low)</Text>
                            <ChevronDown size={12} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingTop: 16,
                    paddingBottom: 160,
                }}
            >
                {/* Comparison Cards Grid */}
                {isTablet ? (
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16 }}>
                        {selectedCandidates
                            .sort((a, b) => b.fitScore - a.fitScore)
                            .map(candidate => (
                                <View
                                    key={candidate.id}
                                    style={{ width: cardWidth }}
                                >
                                    <ComparisonCard
                                        candidate={candidate}
                                        onRemove={() => removeCandidate(candidate.id)}
                                        onViewProfile={() => viewCandidateProfile(candidate.id)}
                                        isTablet={isTablet}
                                    />
                                </View>
                            ))}
                    </View>
                ) : (
                    <View style={{ gap: 20, paddingBottom: 20 }}>
                        {selectedCandidates
                            .sort((a, b) => b.fitScore - a.fitScore)
                            .map(candidate => (
                                <View key={candidate.id} style={{ marginBottom: 20 }}>
                                    <ComparisonCard
                                        candidate={candidate}
                                        onRemove={() => removeCandidate(candidate.id)}
                                        onViewProfile={() => viewCandidateProfile(candidate.id)}
                                        isTablet={isTablet}
                                    />
                                </View>
                            ))}
                    </View>
                )}
            </ScrollView>

            {/* Comparison Summary Footer - Collapsible */}
            <View
                style={{ 
                    paddingBottom: insets.bottom + 8,
                }}
                className="absolute bottom-0 left-0 right-0 px-4 bg-[#0F0C29]/98 border-t border-white/10"
            >
                {/* Toggle Button - Always visible */}
                <TouchableOpacity 
                    onPress={() => setFooterCollapsed(!footerCollapsed)}
                    className="items-center py-3 flex-row justify-center gap-2"
                    activeOpacity={0.7}
                >
                    <View className="flex-row items-center gap-2">
                        <Text className="text-white/60 text-xs font-medium">
                            {footerCollapsed ? 'Show Summary' : 'Hide Summary'}
                        </Text>
                        <ChevronDown 
                            size={16} 
                            color="rgba(255,255,255,0.6)" 
                            style={{ transform: [{ rotate: footerCollapsed ? '0deg' : '180deg' }] }}
                        />
                    </View>
                </TouchableOpacity>

                {!footerCollapsed && (
                    <View style={{ paddingBottom: 8 }}>
                        <GlassCard noPadding style={{ marginBottom: 12 }}>
                            <LinearGradient
                                colors={['rgba(25, 25, 52, 1)', 'rgba(42, 42, 69, 1)']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={[StyleSheet.absoluteFill, { borderRadius: 24 }]}
                            />
                            <View className="relative z-10 p-4">
                                <Text className="text-white font-bold text-base mb-1">Comparison Summary</Text>
                                <Text className="text-[#D9D9D9]/60 text-sm">
                                    Based on your criteria, {bestCandidate?.name || 'the top candidate'} shows the highest overall fit.
                                </Text>
                            </View>
                        </GlassCard>

                        <View style={{ gap: 10 }}>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <TouchableOpacity style={[styles.footerButton, { flex: 1 }]}>
                                    <Download size={16} color="white" />
                                    <Text className="text-white text-sm font-bold">Export</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.footerButton, { flex: 1 }]}>
                                    <Calendar size={16} color="white" />
                                    <Text className="text-white text-sm font-bold">Schedule</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.footerButtonPrimary}>
                                <LinearGradient
                                    colors={['#BB3DF6', '#2954FF']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={StyleSheet.absoluteFill}
                                />
                                <CheckCircle2 size={16} color="white" />
                                <Text className="text-white text-sm font-bold relative z-10">Proceed</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 12,
        backgroundColor: '#2A2A45',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    footerButtonPrimary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderRadius: 12,
        overflow: 'hidden',
    },
});
