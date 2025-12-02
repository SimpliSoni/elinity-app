import React from 'react';
import { ScrollView, View, Text, DimensionValue } from 'react-native';
import { Target, Users, Sparkles, Compass, MessageCircleHeart, Layers, AlertCircle, Zap } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle, G } from 'react-native-svg';
import GlassCard from '../../components/GlassCard';

// 🎨 Custom SVG Donut Chart
const DonutChart = () => {
    const size = 160;
    const strokeWidth = 20;
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
        <View className="items-center justify-center h-[200px] relative">
            <Svg width={size} height={size}>
                <G rotation="-90" origin={`${center}, ${center}`}>
                    {/* Segment 1: Purple (35%) */}
                    <Circle cx={center} cy={center} r={radius} stroke="#BB3DF6" strokeWidth={strokeWidth} strokeDasharray={`${circumference * 0.35} ${circumference}`} />
                    {/* Segment 2: Dark Purple (30%) */}
                    <Circle cx={center} cy={center} r={radius} stroke="#9F32D2" strokeWidth={strokeWidth} strokeDasharray={`${circumference * 0.30} ${circumference}`} strokeDashoffset={-circumference * 0.35} />
                    {/* Segment 3: Blue-ish (35%) */}
                    <Circle cx={center} cy={center} r={radius} stroke="#7B2CBF" strokeWidth={strokeWidth} strokeDasharray={`${circumference * 0.35} ${circumference}`} strokeDashoffset={-circumference * 0.65} />
                </G>
            </Svg>
            {/* Inner Label */}
            <View className="absolute inset-0 items-center justify-center">
                <Text className="text-white font-bold text-lg">Balance</Text>
            </View>
        </View>
    );
};

const Dashboard = () => {
    return (
        <View className="flex-1 bg-[#0F0C29]">
            {/* 🌌 Background Blobs */}
            <View className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-[#BB3DF6] opacity-20 blur-3xl" />
            <View className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#008CFF] opacity-20 blur-3xl" />

            <ScrollView className="flex-1 px-4 py-8" showsVerticalScrollIndicator={false}>

                {/* --- HERO SECTION --- */}
                <View className="mb-8 items-center mt-8">
                    <View className="flex-row items-center gap-2 px-4 py-2 rounded-full border border-[#BB3DF6]/30 bg-[#BB3DF6]/10 mb-6">
                        <View className="w-2 h-2 rounded-full bg-[#BB3DF6]" />
                        <Text className="text-sm font-medium text-white/90">Elinity — Purpose Alignment</Text>
                    </View>
                    <Text className="text-3xl font-bold text-white text-center mb-4 leading-tight">
                        The Purpose, Company, and People{'\n'}
                        <Text className="text-[#BB3DF6]">Alignment Platform</Text>
                    </Text>
                    <Text className="text-base text-[#D9D9D9]/80 mb-3 text-center leading-relaxed">
                        Where skills become commodities and <Text className="text-white font-semibold">purpose becomes the differentiator</Text>
                    </Text>
                    <Text className="text-xs text-[#D9D9D9]/60 text-center max-w-[300px]">
                        Matching people and organizations by mission, values, and personal calling.
                    </Text>
                </View>

                <View className="flex-row items-center gap-2 mb-6">
                    <View className="w-1 h-6 rounded-full overflow-hidden">
                        <LinearGradient colors={['#BB3DF6', '#FF3A81']} style={{ flex: 1 }} />
                    </View>
                    <Text className="text-xl font-semibold text-white">Company Deep Profile</Text>
                </View>

                {/* --- TOP STATS ROW --- */}
                <View className="gap-6 mb-8">
                    {/* Purpose Alignment */}
                    <GlassCard>
                        <View className="flex-row justify-between items-start mb-4">
                            <Text className="text-white font-semibold">Purpose Alignment</Text>
                            <Target size={20} color="rgba(255,255,255,0.6)" />
                        </View>
                        <Text className="text-4xl font-bold text-white mb-2">87%</Text>
                        <Text className="text-sm text-[#D9D9D9]/60 mb-6">Strong alignment</Text>
                        <View className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <LinearGradient colors={['#BB3DF6', '#FF3A81']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: '87%', height: '100%' }} />
                        </View>
                    </GlassCard>

                    {/* Team Health */}
                    <GlassCard>
                        <View className="flex-row justify-between items-start mb-4">
                            <Text className="text-white font-semibold">Team Health</Text>
                            <Users size={20} color="rgba(255,255,255,0.6)" />
                        </View>
                        <Text className="text-4xl font-bold text-white mb-2">92%</Text>
                        <Text className="text-sm text-[#D9D9D9]/60 mb-6">Excellent Cohesion</Text>
                        <View className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <LinearGradient colors={['#FF3A81', '#BB3DF6']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: '92%', height: '100%' }} />
                        </View>
                    </GlassCard>

                    {/* Mission Match */}
                    <View className="relative overflow-hidden rounded-2xl">
                        <LinearGradient
                            colors={['rgba(25, 25, 52, 0.6)', 'rgba(41, 84, 255, 0.2)']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            className="absolute inset-0"
                        />
                        <GlassCard className="bg-transparent">
                            <View className="flex-row justify-between items-start mb-4">
                                <Text className="text-white font-semibold">Mission Match</Text>
                                <Sparkles size={20} color="rgba(255,255,255,0.6)" />
                            </View>
                            <Text className="text-4xl font-bold text-white mb-2">94%</Text>
                            <Text className="text-sm text-[#D9D9D9]/60 mb-6">Calling Resonance</Text>
                            <Text className="text-xs text-[#00FF94] font-medium">Deep purpose alignment</Text>
                        </GlassCard>
                    </View>
                </View>

                {/* --- AI DEEP PROFILING --- */}
                <View className="mb-8">
                    <View className="flex-row items-center gap-2 mb-4">
                        <Compass size={20} color="white" />
                        <Text className="text-white font-semibold text-lg">AI Deep Profiling</Text>
                    </View>

                    <View className="gap-6">
                        {/* Communication Tone */}
                        <GlassCard>
                            <View className="flex-row justify-between items-start mb-4">
                                <Text className="text-[#D9D9D9] font-medium">Communication Tone</Text>
                                <MessageCircleHeart size={18} color="rgba(255,255,255,0.4)" />
                            </View>
                            <Text className="text-xl font-bold text-white mb-2">Collaborative & Empathetic</Text>
                            <Text className="text-xs text-[#D9D9D9]/60 mb-6">Team demonstrates high emotional intelligence</Text>

                            <View className="gap-4">
                                {[
                                    { label: 'Empathy', val: '90%' },
                                    { label: 'Clarity', val: '85%' },
                                    { label: 'Positivity', val: '88%' }
                                ].map((item, i) => (
                                    <View key={i} className="flex-row items-center gap-4">
                                        <Text className="w-16 text-[#D9D9D9] text-xs">{item.label}</Text>
                                        <View className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                                            <View className="h-full bg-[#BB3DF6]" style={{ width: item.val as DimensionValue }} />
                                        </View>
                                        <Text className="text-[#D9D9D9]/60 text-xs">{item.val}</Text>
                                    </View>
                                ))}
                            </View>
                        </GlassCard>

                        {/* Leadership Patterns */}
                        <GlassCard>
                            <View className="flex-row justify-between items-start mb-4">
                                <Text className="text-[#D9D9D9] font-medium">Leadership</Text>
                                <Users size={18} color="rgba(255,255,255,0.4)" />
                            </View>
                            <Text className="text-xl font-bold text-white mb-2">Transformational</Text>
                            <Text className="text-xs text-[#D9D9D9]/60 mb-6">Leaders inspire through vision and connection</Text>
                            <View className="flex-row flex-wrap gap-2">
                                {['Visionary (73%)', 'Coaching (68%)', 'Democratic (81%)', 'Pacesetting (59%)'].map((tag, i) => (
                                    <View key={i} className="bg-[#2A2A45] px-3 py-2 rounded-lg border border-white/5 grow items-center">
                                        <Text className="text-xs font-bold text-white">{tag}</Text>
                                    </View>
                                ))}
                            </View>
                        </GlassCard>

                        {/* Cultural Energy */}
                        <GlassCard>
                            <View className="flex-row justify-between items-start mb-4">
                                <Text className="text-[#D9D9D9] font-medium">Cultural Energy</Text>
                                <Zap size={18} color="rgba(255,255,255,0.4)" />
                            </View>
                            <Text className="text-xl font-bold text-white mb-2">Creative Builder</Text>
                            <Text className="text-xs text-[#D9D9D9]/60 mb-6">Innovation-driven with strong execution focus</Text>

                            <View className="gap-3">
                                {[
                                    "High creativity & innovation",
                                    "Results-oriented execution",
                                    "Collaborative problem-solving"
                                ].map((item, i) => (
                                    <View key={i} className="flex-row items-center gap-3">
                                        <View className="w-4 h-4 rounded-full border border-white/20 items-center justify-center">
                                            <View className="w-2 h-1 border-l border-b border-white rotate-[-45deg] translate-y-[-1px]" />
                                        </View>
                                        <Text className="text-xs text-[#D9D9D9]">{item}</Text>
                                    </View>
                                ))}
                            </View>
                        </GlassCard>
                    </View>
                </View>

                {/* --- TEAM PERSONALITY & VALUE DISTRIBUTION --- */}
                <View className="mb-8">
                    <View className="flex-row items-center gap-2 mb-4">
                        <Users size={20} color="white" />
                        <Text className="text-white font-semibold text-lg">Team Distribution</Text>
                    </View>

                    <View className="gap-6">
                        {/* Donut Chart */}
                        <GlassCard className="items-center">
                            <View className="w-full flex-row justify-between items-start mb-4">
                                <Text className="text-white font-semibold">Personality Distribution</Text>
                            </View>
                            <DonutChart />
                            <View className="flex-row flex-wrap justify-center gap-4 mt-4">
                                <View className="flex-row items-center gap-1"><View className="w-3 h-3 bg-[#BB3DF6] rounded-full" /><Text className="text-xs text-white/60">Strategic</Text></View>
                                <View className="flex-row items-center gap-1"><View className="w-3 h-3 bg-[#9F32D2] rounded-full" /><Text className="text-xs text-white/60">Analytical</Text></View>
                                <View className="flex-row items-center gap-1"><View className="w-3 h-3 bg-[#7B2CBF] rounded-full" /><Text className="text-xs text-white/60">Creative</Text></View>
                            </View>
                        </GlassCard>

                        {/* Bar Chart */}
                        <GlassCard>
                            <Text className="text-white font-semibold mb-8">Value Distribution</Text>
                            <View className="h-40 flex-row items-end justify-between px-2 relative">
                                {/* Grid Lines */}
                                <View className="absolute inset-0 justify-between pointer-events-none">
                                    <View className="w-full h-[1px] bg-white/5" />
                                    <View className="w-full h-[1px] bg-white/5" />
                                    <View className="w-full h-[1px] bg-white/5" />
                                    <View className="w-full h-[1px] bg-white/5" />
                                    <View className="w-full h-[1px] bg-white/5" />
                                </View>

                                {[
                                    { label: 'Inno', h: '80%' },
                                    { label: 'Collab', h: '70%' },
                                    { label: 'Integ', h: '90%' },
                                    { label: 'Grow', h: '75%' },
                                    { label: 'Impact', h: '85%' },
                                ].map((bar, i) => (
                                    <View key={i} className="items-center gap-2 flex-1 z-10">
                                        <View className="w-full max-w-[30px] rounded-t-sm overflow-hidden" style={{ height: bar.h as DimensionValue }}>
                                            <LinearGradient colors={['#2954FF', '#BB3DF6']} style={{ flex: 1 }} />
                                        </View>
                                        <Text className="text-[10px] text-white/60">{bar.label}</Text>
                                    </View>
                                ))}
                            </View>
                        </GlassCard>
                    </View>
                </View>

                {/* --- AI INSIGHTS & NOTES --- */}
                <View className="mb-8">
                    <View className="flex-row items-center gap-2 mb-4">
                        <Layers size={20} color="white" />
                        <Text className="text-white font-semibold text-lg">AI Insights & Notes</Text>
                    </View>

                    <View className="gap-6">
                        {/* Strength */}
                        <GlassCard>
                            <View className="flex-row justify-between items-start mb-4">
                                <Text className="text-white font-bold text-lg">Strength</Text>
                                <Layers size={18} color="rgba(255,255,255,0.4)" />
                            </View>
                            <View className="gap-3">
                                <Text className="text-xs text-[#D9D9D9] leading-relaxed">Exceptional emotional intelligence across all levels</Text>
                                <View className="h-[1px] bg-white/5" />
                                <Text className="text-xs text-[#D9D9D9] leading-relaxed">Strong innovation culture with practical execution</Text>
                                <View className="h-[1px] bg-white/5" />
                                <Text className="text-xs text-[#D9D9D9] leading-relaxed">High psychological safety enabling open communication</Text>
                                <View className="h-[1px] bg-white/5" />
                                <Text className="text-xs text-[#D9D9D9] leading-relaxed">Diverse perspectives creating robust solutions</Text>
                            </View>
                        </GlassCard>

                        {/* Culture Challenges */}
                        <GlassCard>
                            <View className="flex-row justify-between items-start mb-4">
                                <Text className="text-white font-bold text-lg">Culture Challenges</Text>
                                <AlertCircle size={18} color="rgba(255,255,255,0.4)" />
                            </View>
                            <View className="gap-3">
                                <Text className="text-xs text-[#D9D9D9] leading-relaxed">Potential for analysis paralysis in decision making</Text>
                                <View className="h-[1px] bg-white/5" />
                                <Text className="text-xs text-[#D9D9D9] leading-relaxed">Need for clearer role boundaries in collaborative projects</Text>
                                <View className="h-[1px] bg-white/5" />
                                <Text className="text-xs text-[#D9D9D9] leading-relaxed">Balancing innovation with operational efficiency</Text>
                                <View className="h-[1px] bg-white/5" />
                                <Text className="text-xs text-[#D9D9D9] leading-relaxed">Managing high achiever stress levels</Text>
                            </View>
                        </GlassCard>

                        {/* Energy Profile */}
                        <GlassCard>
                            <View className="flex-row justify-between items-start mb-4">
                                <Text className="text-white font-bold text-lg">Energy Profile</Text>
                                <Zap size={18} color="rgba(255,255,255,0.4)" />
                            </View>
                            <View className="gap-4">
                                {[
                                    { label: 'Innovation Energy', val: 'High', color: 'text-[#BB3DF6]' },
                                    { label: 'Collaboration', val: 'Very High', color: 'text-[#FF3A81]' },
                                    { label: 'Execution', val: 'High', color: 'text-[#BB3DF6]' },
                                    { label: 'Adaptability', val: 'High', color: 'text-[#BB3DF6]' },
                                ].map((item, i) => (
                                    <View key={i} className="flex-row justify-between items-center">
                                        <Text className="text-[#D9D9D9] text-xs">{item.label}</Text>
                                        <Text className={`font-bold text-xs ${item.color}`}>{item.val}</Text>
                                    </View>
                                ))}
                            </View>
                        </GlassCard>
                    </View>
                </View>

                {/* --- EMPLOYEE INSIGHTS DASHBOARD --- */}
                <View className="mb-8">
                    <View className="flex-row items-center gap-2 mb-4">
                        <Users size={20} color="white" />
                        <Text className="text-white font-semibold text-lg">Employee Insights</Text>
                    </View>

                    <View className="flex-row flex-wrap gap-4">
                        {[
                            { val: '94%', label: 'Satisfaction Score', color: 'text-[#BB3DF6]' },
                            { val: '87%', label: 'Would Recommend', color: 'text-[#BB3DF6]' },
                            { val: '91%', label: 'Feel Valued', color: 'text-[#BB3DF6]' },
                            { val: '83%', label: 'Growth Opportunities', color: 'text-[#BB3DF6]' },
                        ].map((stat, i) => (
                            <View key={i} className="w-[47%]">
                                <GlassCard className="items-center justify-center py-6 px-2">
                                    <Text className={`text-xl font-bold ${stat.color} mb-1`}>{stat.val}</Text>
                                    <Text className="text-xs text-[#D9D9D9] text-center">{stat.label}</Text>
                                </GlassCard>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Extra padding for tab bar */}
                <View className="h-24" />
            </ScrollView>
        </View>
    );
};

export default Dashboard;
