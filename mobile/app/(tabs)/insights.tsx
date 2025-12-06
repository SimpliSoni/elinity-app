import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, DimensionValue, useWindowDimensions } from 'react-native';
import {
    Search,
    Bot,
    TrendingUp,
    Scale,
    Save,
    Sparkles,
    Brain,
    Target,
    Sliders,
    BarChart3,
    Calendar,
    FileText,
    Users,
    ChevronRight,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import GlassCard from '../../components/GlassCard';

const TraitSlider = ({
    label,
    value,
    onChange,
}: {
    label: string;
    value: number;
    onChange?: (val: number) => void;
}) => (
    <View className="mb-6">
        <View className="flex-row justify-between items-end mb-2">
            <Text className="text-white font-medium text-sm">{label}</Text>
            <Text className="text-[#BB3DF6] font-bold text-sm">{value}%</Text>
        </View>
        <View className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <LinearGradient
                colors={['#FF3A81', '#BB3DF6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ width: `${value}%` as DimensionValue, height: '100%' }}
            />
        </View>
    </View>
);

const RecommendationItem = ({
    icon,
    title,
    desc,
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) => (
    <TouchableOpacity className="p-4 rounded-xl bg-white/5 border border-white/5 mb-3">
        <View className="flex-row items-start gap-3">
            <View className="mt-1 text-[#BB3DF6]">{icon}</View>
            <View className="flex-1">
                <Text className="text-white font-bold text-sm mb-1">{title}</Text>
                <Text className="text-[#D9D9D9]/60 text-[10px] leading-relaxed">{desc}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

export default function Insights() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    
    // Dynamic responsive check that handles rotation
    const isLandscape = width > height;
    const isTablet = width > 768 || (isLandscape && width > 600);

    // State for trait preferences
    const [traits, setTraits] = useState({
        creativity: 75,
        analytical: 85,
        empathy: 60,
        growth: 90,
        leadership: 70,
        adaptability: 80,
    });

    // State for priority weights
    const [weights, setWeights] = useState({
        values: 30,
        technical: 40,
        mission: 20,
        experience: 10,
    });

    return (
        <View style={{ flex: 1, backgroundColor: '#0F0C29' }}>
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingTop: insets.top + 16, paddingBottom: 80 + insets.bottom, paddingHorizontal: 16 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={{ marginBottom: 24 }}>
                    <View className="flex-row items-center gap-2 mb-2">
                        <Sliders size={20} color="#BB3DF6" />
                        <Text className="text-2xl font-bold text-white">AI Insights</Text>
                    </View>
                    <Text className="text-[#D9D9D9]/60 text-sm">
                        Configure your ideal candidate profile and let AI find the perfect matches
                    </Text>
                </View>

                {/* Project Candidate Pool */}
                <GlassCard style={{ marginBottom: 24 }}>
                    <View className="flex-row items-center gap-3 mb-5">
                        <View className="w-10 h-10 rounded-lg bg-[#BB3DF6]/20 items-center justify-center">
                            <Bot size={20} color="#BB3DF6" />
                        </View>
                        <Text className="text-white font-bold">Projected Candidate Pool</Text>
                    </View>

                    <View className="items-center mb-5">
                        <Text className="text-4xl font-bold text-white mb-1">1,247</Text>
                        <Text className="text-[#D9D9D9]/60 text-xs">Matching Candidates</Text>
                    </View>

                    <View className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
                        <LinearGradient
                            colors={['#FF3A81', '#BB3DF6']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ width: '73%', height: '100%' }}
                        />
                    </View>
                    <Text className="text-center text-[10px] text-[#D9D9D9]/40">
                        73% of total database
                    </Text>
                </GlassCard>

                {/* Row 1: Traits & Weights */}
                <View style={{ gap: 24, marginBottom: 24, flexDirection: isTablet ? 'row' : 'column' }}>
                    {/* Candidate Trait Preferences */}
                    <View style={isTablet ? { flex: 1 } : undefined}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                            <Target size={18} color="white" />
                            <Text className="text-white font-bold text-base">Candidate Trait Preferences</Text>
                        </View>
                        <GlassCard style={{ flex: 1 }}>
                            <TraitSlider label="Creativity" value={traits.creativity} />
                            <TraitSlider label="Analytical Thinking" value={traits.analytical} />
                            <TraitSlider label="Empathy" value={traits.empathy} />
                            <TraitSlider label="Growth Mindset" value={traits.growth} />
                            <TraitSlider label="Leadership" value={traits.leadership} />
                            <TraitSlider label="Adaptability" value={traits.adaptability} />
                        </GlassCard>
                    </View>

                    {/* Priority Weighting Matrix */}
                    <View style={isTablet ? { flex: 1 } : undefined}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                            <Scale size={18} color="white" />
                            <Text className="text-white font-bold text-base">Priority Weighting</Text>
                        </View>
                        <GlassCard style={{ flex: 1 }}>
                            <TraitSlider label="Values Alignment" value={weights.values} />
                            <TraitSlider label="Technical Skills" value={weights.technical} />
                            <TraitSlider label="Mission Alignment" value={weights.mission} />
                            <TraitSlider label="Experience Level" value={weights.experience} />
                        </GlassCard>
                    </View>
                </View>

                {/* Row 2: Recommendations & Match Quality */}
                <View style={{ gap: 24, marginBottom: 24, flexDirection: isTablet ? 'row' : 'column' }}>
                    {/* AI Recommendations */}
                    <View style={isTablet ? { flex: 1 } : undefined}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                            <Sparkles size={18} color="#BB3DF6" />
                            <Text className="text-white font-bold text-base">AI Recommendations</Text>
                        </View>
                        <View style={{ gap: 12 }}>
                            <RecommendationItem
                                icon={<TrendingUp size={16} color="#BB3DF6" />}
                                title="Optimize for Growth Mindset"
                                desc="Increase pool by 23% by adjusting creativity requirements"
                            />
                            <RecommendationItem
                                icon={<Brain size={16} color="#BB3DF6" />}
                                title="Skills vs Experience"
                                desc="Consider prioritizing skills over years of experience for better matches"
                            />
                            <RecommendationItem
                                icon={<Scale size={16} color="#BB3DF6" />}
                                title="Optimal Balance"
                                desc="Current settings provide good quality-quantity balance"
                            />
                        </View>
                    </View>

                    {/* Match Quality Preview */}
                    <View style={isTablet ? { flex: 1 } : undefined}>
                        <Text className="text-white font-bold mb-4">Match Quality Preview</Text>
                        <GlassCard className="p-5 bg-[#191934]/40">
                            <View className="flex-row justify-between mb-4">
                                <View className="items-center flex-1">
                                    <Text className="text-[#00FF94] text-2xl font-bold">847</Text>
                                    <Text className="text-[#D9D9D9]/60 text-[10px]">Excellent (90%+)</Text>
                                </View>
                                <View className="w-px bg-white/10" />
                                <View className="items-center flex-1">
                                    <Text className="text-[#BB3DF6] text-2xl font-bold">312</Text>
                                    <Text className="text-[#D9D9D9]/60 text-[10px]">Good (80-90%)</Text>
                                </View>
                                <View className="w-px bg-white/10" />
                                <View className="items-center flex-1">
                                    <Text className="text-white/60 text-2xl font-bold">88</Text>
                                    <Text className="text-[#D9D9D9]/60 text-[10px]">Fair (70-80%)</Text>
                                </View>
                            </View>

                            {/* Stacked Bar */}
                            <View className="h-2 rounded-full overflow-hidden flex-row">
                                <View className="bg-[#00FF94]" style={{ width: '68%' }} />
                                <View className="bg-[#BB3DF6]" style={{ width: '25%' }} />
                                <View className="bg-white/30" style={{ width: '7%' }} />
                            </View>
                        </GlassCard>
                    </View>
                </View>

                {/* Action Buttons */}
                <View className={`gap-3 mb-8 ${isTablet ? 'flex-row' : ''}`}>
                    <TouchableOpacity className={`overflow-hidden rounded-xl ${isTablet ? 'flex-1' : ''}`}>
                        <LinearGradient
                            colors={['#BB3DF6', '#2954FF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            className="py-4 flex-row items-center justify-center gap-2"
                        >
                            <Search size={18} color="white" />
                            <Text className="text-white font-bold text-base">Find Candidates</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity className={`py-4 rounded-xl bg-[#2A2A45] border border-white/5 flex-row items-center justify-center gap-2 ${isTablet ? 'flex-1' : ''}`}>
                        <Save size={18} color="white" />
                        <Text className="text-white font-bold text-base">Save Profile</Text>
                    </TouchableOpacity>
                </View>

                {/* Quick Links to Other Features */}
                <View className="mb-8">
                    <Text className="text-white font-bold mb-4">Quick Actions</Text>
                    <View className={`${isTablet ? 'flex-row flex-wrap' : ''} gap-3`}>
                        <TouchableOpacity 
                            onPress={() => router.push('/analytics')}
                            className={`p-4 rounded-xl bg-[#191934]/60 border border-white/5 flex-row items-center justify-between ${isTablet ? 'flex-1 min-w-[200px]' : ''}`}
                        >
                            <View className="flex-row items-center gap-3">
                                <View className="w-10 h-10 rounded-xl bg-[#BB3DF6]/20 items-center justify-center">
                                    <BarChart3 size={18} color="#BB3DF6" />
                                </View>
                                <View>
                                    <Text className="text-white font-bold text-sm">Analytics</Text>
                                    <Text className="text-[#D9D9D9]/60 text-[10px]">Match quality & trends</Text>
                                </View>
                            </View>
                            <ChevronRight size={16} color="rgba(255,255,255,0.4)" />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => router.push('/calendar')}
                            className={`p-4 rounded-xl bg-[#191934]/60 border border-white/5 flex-row items-center justify-between ${isTablet ? 'flex-1 min-w-[200px]' : ''}`}
                        >
                            <View className="flex-row items-center gap-3">
                                <View className="w-10 h-10 rounded-xl bg-[#2954FF]/20 items-center justify-center">
                                    <Calendar size={18} color="#2954FF" />
                                </View>
                                <View>
                                    <Text className="text-white font-bold text-sm">Calendar</Text>
                                    <Text className="text-[#D9D9D9]/60 text-[10px]">Schedule interviews</Text>
                                </View>
                            </View>
                            <ChevronRight size={16} color="rgba(255,255,255,0.4)" />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => router.push('/tests/builder')}
                            className={`p-4 rounded-xl bg-[#191934]/60 border border-white/5 flex-row items-center justify-between ${isTablet ? 'flex-1 min-w-[200px]' : ''}`}
                        >
                            <View className="flex-row items-center gap-3">
                                <View className="w-10 h-10 rounded-xl bg-[#FF3A81]/20 items-center justify-center">
                                    <FileText size={18} color="#FF3A81" />
                                </View>
                                <View>
                                    <Text className="text-white font-bold text-sm">Test Builder</Text>
                                    <Text className="text-[#D9D9D9]/60 text-[10px]">Create assessments</Text>
                                </View>
                            </View>
                            <ChevronRight size={16} color="rgba(255,255,255,0.4)" />
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => router.push('/compare')}
                            className={`p-4 rounded-xl bg-[#191934]/60 border border-white/5 flex-row items-center justify-between ${isTablet ? 'flex-1 min-w-[200px]' : ''}`}
                        >
                            <View className="flex-row items-center gap-3">
                                <View className="w-10 h-10 rounded-xl bg-[#00C2FF]/20 items-center justify-center">
                                    <Users size={18} color="#00C2FF" />
                                </View>
                                <View>
                                    <Text className="text-white font-bold text-sm">Compare</Text>
                                    <Text className="text-[#D9D9D9]/60 text-[10px]">Compare candidates</Text>
                                </View>
                            </View>
                            <ChevronRight size={16} color="rgba(255,255,255,0.4)" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
