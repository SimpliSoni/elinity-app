import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, DimensionValue } from 'react-native';
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
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
        <View className="flex-1 bg-[#0F0C29]">
            <ScrollView
                className="flex-1 px-4"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: insets.top + 16, paddingBottom: 100 }}
            >
                {/* Header */}
                <View className="mb-6">
                    <View className="flex-row items-center gap-2 mb-2">
                        <Sliders size={20} color="#BB3DF6" />
                        <Text className="text-2xl font-bold text-white">AI Insights</Text>
                    </View>
                    <Text className="text-[#D9D9D9]/60 text-sm">
                        Configure your ideal candidate profile and let AI find the perfect matches
                    </Text>
                </View>

                {/* Project Candidate Pool */}
                <GlassCard className="p-5 mb-6 bg-[#191934]/60">
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

                {/* Candidate Trait Preferences */}
                <View className="mb-6">
                    <View className="flex-row items-center gap-2 mb-4">
                        <Target size={18} color="white" />
                        <Text className="text-white font-bold">Candidate Trait Preferences</Text>
                    </View>
                    <GlassCard className="p-6 bg-[#191934]/40">
                        <TraitSlider label="Creativity" value={traits.creativity} />
                        <TraitSlider label="Analytical Thinking" value={traits.analytical} />
                        <TraitSlider label="Empathy" value={traits.empathy} />
                        <TraitSlider label="Growth Mindset" value={traits.growth} />
                        <TraitSlider label="Leadership" value={traits.leadership} />
                        <TraitSlider label="Adaptability" value={traits.adaptability} />
                    </GlassCard>
                </View>

                {/* Priority Weighting Matrix */}
                <View className="mb-6">
                    <View className="flex-row items-center gap-2 mb-4">
                        <Scale size={18} color="white" />
                        <Text className="text-white font-bold">Priority Weighting</Text>
                    </View>
                    <GlassCard className="p-6 bg-[#191934]/40">
                        <TraitSlider label="Values Alignment" value={weights.values} />
                        <TraitSlider label="Technical Skills" value={weights.technical} />
                        <TraitSlider label="Mission Alignment" value={weights.mission} />
                        <TraitSlider label="Experience Level" value={weights.experience} />
                    </GlassCard>
                </View>

                {/* AI Recommendations */}
                <View className="mb-6">
                    <View className="flex-row items-center gap-2 mb-4">
                        <Sparkles size={18} color="#BB3DF6" />
                        <Text className="text-white font-bold">AI Recommendations</Text>
                    </View>
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

                {/* Match Quality Preview */}
                <View className="mb-6">
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

                {/* Action Buttons */}
                <View className="gap-3 mb-8">
                    <TouchableOpacity className="overflow-hidden rounded-xl">
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
                    <TouchableOpacity className="py-4 rounded-xl bg-[#2A2A45] border border-white/5 flex-row items-center justify-center gap-2">
                        <Save size={18} color="white" />
                        <Text className="text-white font-bold text-base">Save Profile</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
