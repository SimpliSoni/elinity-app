import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    useWindowDimensions,
    DimensionValue,
} from 'react-native';
import {
    ArrowLeft,
    TrendingUp,
    Filter,
    FileText,
    RefreshCw,
    BarChart3,
    PieChart,
    Activity,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle, G, Polyline, Defs, LinearGradient as SvgGradient, Stop, Polygon } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import GlassCard from '../../components/GlassCard';

// ─────────────────────────────────────────────────────────────────────────────
// MOCK DATA
// ─────────────────────────────────────────────────────────────────────────────
const topStats = [
    { icon: <BarChart3 size={20} color="#BB3DF6" />, value: '87.3%', label: 'Average Match Success Rate', color: '#BB3DF6' },
    { icon: <Activity size={20} color="#008CFF" />, value: '92.1%', label: 'Quality Score', color: '#008CFF' },
    { icon: <TrendingUp size={20} color="#FF3A81" />, value: '8.7/10', label: 'Average Time-to-Hire', color: '#FF3A81' },
    { icon: <PieChart size={20} color="#00FF94" />, value: '94.5%', label: 'Performance Score', color: '#00FF94' },
];

const departments = [
    { dept: 'Engineering', score: '95.2%' },
    { dept: 'Sales', score: '91.8%' },
    { dept: 'Design', score: '89.4%' },
];

const insights = [
    { icon: '📈', text: 'Improvements', sub: 'Culture Fit has jumped from 6.9 to 9.6/10' },
    { icon: '📊', text: 'Trend', sub: 'Quality Score shows positive +2% uptick' },
];

const qualityMetrics = [
    { label: 'Interview Quality', value: '8.9/10', percent: 89 },
    { label: 'Candidate Quality', value: '8.0/10', percent: 80 },
    { label: 'Process Efficiency', value: '7.6/10', percent: 76 },
];

// ─────────────────────────────────────────────────────────────────────────────
// PIE CHART COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const DonutChart = ({ size = 150 }: { size?: number }) => {
    const strokeWidth = 20;
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
        <View className="items-center justify-center relative" style={{ width: size, height: size }}>
            <Svg width={size} height={size}>
                <G rotation="-90" origin={`${center}, ${center}`}>
                    {/* Segment 1: Purple (40%) */}
                    <Circle
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke="#BB3DF6"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={`${circumference * 0.4} ${circumference}`}
                    />
                    {/* Segment 2: Dark Purple (35%) */}
                    <Circle
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke="#9F32D2"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={`${circumference * 0.35} ${circumference}`}
                        strokeDashoffset={-circumference * 0.4}
                    />
                    {/* Segment 3: Blue-ish (25%) */}
                    <Circle
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke="#7B2CBF"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={`${circumference * 0.25} ${circumference}`}
                        strokeDashoffset={-circumference * 0.75}
                    />
                </G>
            </Svg>
        </View>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// LINE CHART COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const LineChart = ({ height = 200 }: { height?: number }) => {
    return (
        <View style={{ height }} className="relative">
            {/* Grid lines */}
            <View className="absolute inset-0 flex-col justify-between">
                {[...Array(5)].map((_, i) => (
                    <View key={i} className="w-full h-[1px] bg-white/5" />
                ))}
            </View>

            {/* Chart area */}
            <View className="flex-1 ml-8">
                <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <Defs>
                        <SvgGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <Stop offset="0%" stopColor="#BB3DF6" stopOpacity={0.3} />
                            <Stop offset="100%" stopColor="#BB3DF6" stopOpacity={0} />
                        </SvgGradient>
                    </Defs>
                    {/* Fill area */}
                    <Polygon
                        points="0,100 0,45 10,42 20,38 30,40 40,35 50,30 60,28 70,25 80,22 90,20 100,18 100,100"
                        fill="url(#areaGradient)"
                    />
                    {/* Retention line */}
                    <Polyline
                        points="0,45 10,42 20,38 30,40 40,35 50,30 60,28 70,25 80,22 90,20 100,18"
                        fill="none"
                        stroke="#BB3DF6"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                    />
                    {/* Performance line */}
                    <Polyline
                        points="0,60 10,58 20,55 30,50 40,48 50,45 60,40 70,38 80,35 90,32 100,30"
                        fill="none"
                        stroke="#FF3A81"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                    />
                </Svg>
            </View>

            {/* Y-axis labels */}
            <View className="absolute left-0 top-0 h-full flex-col justify-between">
                {['94%', '92%', '90%', '88%', '86%'].map((label, i) => (
                    <Text key={i} className="text-[#D9D9D9]/40 text-[8px]">{label}</Text>
                ))}
            </View>

            {/* Legend */}
            <View className="absolute top-2 right-2 flex-row gap-3">
                <View className="flex-row items-center gap-1">
                    <View className="w-2 h-2 rounded-full bg-[#BB3DF6]" />
                    <Text className="text-[#D9D9D9] text-[8px]">Retention</Text>
                </View>
                <View className="flex-row items-center gap-1">
                    <View className="w-2 h-2 rounded-full bg-[#FF3A81]" />
                    <Text className="text-[#D9D9D9] text-[8px]">Performance</Text>
                </View>
            </View>
        </View>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// STAT CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const StatCard = ({ icon, value, label, color }: { icon: React.ReactNode; value: string; label: string; color: string }) => (
    <GlassCard className="p-5 relative overflow-hidden flex-1 min-w-[160px]">
        <View
            className="w-12 h-12 rounded-2xl items-center justify-center mb-4 border border-white/10"
            style={{ backgroundColor: `${color}20` }}
        >
            {icon}
        </View>
        <Text className="text-2xl font-bold text-white mb-1">{value}</Text>
        <Text className="text-xs text-[#D9D9D9]/60">{label}</Text>
    </GlassCard>
);

// ─────────────────────────────────────────────────────────────────────────────
// PROGRESS BAR COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const ProgressBar = ({ label, value, percent }: { label: string; value: string; percent: number }) => (
    <View className="mb-4">
        <View className="flex-row justify-between items-center mb-2">
            <Text className="text-sm text-[#D9D9D9]">{label}</Text>
            <Text className="text-sm font-bold text-white">{value}</Text>
        </View>
        <View className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <LinearGradient
                colors={['#FF3A81', '#BB3DF6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ width: `${percent}%` as DimensionValue, height: '100%', borderRadius: 9999 }}
            />
        </View>
    </View>
);

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function AnalyticsMatchQuality() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    
    // Dynamic responsive check that handles rotation
    const isLandscape = width > height;
    const isTablet = width > 768 || (isLandscape && width > 600);
    const isLargeTablet = width > 1024;

    const [selectedMetric, setSelectedMetric] = useState('Match Analytics');

    return (
        <View style={{ flex: 1, backgroundColor: '#0F0C29' }}>
            {/* Header */}
            <View style={{ paddingTop: insets.top }} className="bg-[#0F0C29] border-b border-white/5">
                <View className="flex-row items-center justify-between px-4 py-4">
                    <View className="flex-row items-center gap-3">
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="w-10 h-10 rounded-full bg-white/10 items-center justify-center"
                        >
                            <ArrowLeft size={20} color="white" />
                        </TouchableOpacity>
                        <View>
                            <Text className="text-xl font-bold text-white">Analytics & Match Quality</Text>
                            <Text className="text-[#D9D9D9]/60 text-xs">Data intelligence hub</Text>
                        </View>
                    </View>
                </View>

                {/* Action Buttons */}
                <View className="flex-row gap-3 px-4 pb-4">
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                        <Filter size={14} color="white" />
                        <Text className="text-white text-xs">Filter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                        <FileText size={14} color="white" />
                        <Text className="text-white text-xs">Export</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 px-3 py-2 rounded-xl overflow-hidden">
                        <LinearGradient
                            colors={['#BB3DF6', '#FF3A81']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            className="absolute inset-0"
                        />
                        <RefreshCw size={14} color="white" />
                        <Text className="text-white text-xs font-bold relative z-10">Refresh</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingTop: 16,
                    paddingBottom: 40 + insets.bottom,
                }}
            >
                {/* Top Stats - Horizontal Scroll on Mobile */}
                <ScrollView
                    horizontal={!isTablet}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={isTablet ? { flexDirection: 'row', gap: 16, marginBottom: 24 } : { gap: 12, paddingRight: 16 }}
                    className="mb-6"
                >
                    {topStats.map((stat, i) => (
                        <StatCard key={i} {...stat} />
                    ))}
                </ScrollView>

                {/* Analytics Hub Section */}
                <View className="mb-6">
                    <View className="flex-row items-center justify-between mb-4">
                        <View className="flex-row items-center gap-2">
                            <BarChart3 size={20} color="white" />
                            <Text className="text-white font-semibold text-lg">Analytics Hub</Text>
                        </View>
                        <TouchableOpacity className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                            <Text className="text-white text-xs">{selectedMetric}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Charts Grid */}
                    <View className={`${isTablet ? 'flex-row' : ''} gap-4`}>
                        {/* Pie Chart Card */}
                        <GlassCard className="p-5 bg-[#191934]/40 flex-1 mb-4">
                            <Text className="text-white font-semibold mb-1">Match Success Rate Trends</Text>
                            <Text className="text-xs text-[#D9D9D9]/60 mb-4">Growth in matching quality over time</Text>

                            <View className="flex-row items-center justify-center gap-6 py-4">
                                <DonutChart size={140} />
                                <View className="gap-4">
                                    <View className="flex-row items-center gap-3">
                                        <View className="w-4 h-4 rounded-full bg-[#BB3DF6]" />
                                        <Text className="text-sm text-[#D9D9D9]">Success Rate</Text>
                                    </View>
                                    <View className="flex-row items-center gap-3">
                                        <View className="w-4 h-4 rounded-full bg-[#9F32D2]" />
                                        <Text className="text-sm text-[#D9D9D9]">Moderate</Text>
                                    </View>
                                    <View className="flex-row items-center gap-3">
                                        <View className="w-4 h-4 rounded-full bg-[#7B2CBF]" />
                                        <Text className="text-sm text-[#D9D9D9]">Low</Text>
                                    </View>
                                </View>
                            </View>
                        </GlassCard>

                        {/* Line Chart Card */}
                        <GlassCard className="p-5 bg-[#191934]/40 flex-1 mb-4">
                            <Text className="text-white font-semibold mb-1">Retention & Performance Data</Text>
                            <Text className="text-xs text-[#D9D9D9]/60 mb-4">Employee performance over time</Text>
                            <LineChart height={180} />
                            {/* X-axis labels */}
                            <View className="flex-row justify-between mt-2 ml-8">
                                {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((month, i) => (
                                    <Text key={i} className="text-[#D9D9D9]/40 text-[8px]">{month}</Text>
                                ))}
                            </View>
                        </GlassCard>
                    </View>
                </View>

                {/* Culture Fit Index */}
                <GlassCard className="p-5 bg-[#191934]/40 mb-6">
                    <Text className="text-white font-semibold mb-1">Culture Fit Index Evolution</Text>
                    <Text className="text-xs text-[#D9D9D9]/60 mb-4">Team-fit metrics analyzed over 12 months</Text>
                    <LineChart height={160} />
                    <View className="flex-row justify-between mt-2 ml-8">
                        {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((month, i) => (
                            <Text key={i} className="text-[#D9D9D9]/40 text-[8px]">{month}</Text>
                        ))}
                    </View>
                </GlassCard>

                {/* Bottom Section - 3 Cards */}
                <View className={`${isLargeTablet ? 'flex-row' : ''} gap-4`}>
                    {/* Top Performing Departments */}
                    <GlassCard className="p-5 bg-[#191934]/40 flex-1 mb-4">
                        <View className="flex-row items-center gap-2 mb-4">
                            <View className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BB3DF6]/20 to-[#FF3A81]/10 items-center justify-center border border-white/10">
                                <BarChart3 size={18} color="#BB3DF6" />
                            </View>
                            <Text className="text-white font-semibold">Top Departments</Text>
                        </View>

                        <View className="gap-3">
                            {departments.map((item, i) => (
                                <View key={i} className="flex-row items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                    <View className="flex-row items-center gap-3">
                                        <View className="w-8 h-8 rounded-lg items-center justify-center overflow-hidden">
                                            <LinearGradient
                                                colors={['#BB3DF6', '#FF3A81']}
                                                className="absolute inset-0"
                                            />
                                            <Text className="text-white font-bold text-sm relative z-10">
                                                {String.fromCharCode(65 + i)}
                                            </Text>
                                        </View>
                                        <Text className="text-sm text-[#D9D9D9]">{item.dept}</Text>
                                    </View>
                                    <Text className="text-sm font-bold text-white">{item.score}</Text>
                                </View>
                            ))}
                        </View>
                    </GlassCard>

                    {/* Recent Insights */}
                    <GlassCard className="p-5 bg-[#191934]/40 flex-1 mb-4">
                        <View className="flex-row items-center gap-2 mb-4">
                            <View className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#008CFF]/20 to-[#00C9FF]/10 items-center justify-center border border-white/10">
                                <TrendingUp size={18} color="#008CFF" />
                            </View>
                            <Text className="text-white font-semibold">Recent Insights</Text>
                        </View>

                        <View className="gap-3">
                            {insights.map((item, i) => (
                                <View key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                                    <View className="flex-row items-start gap-3">
                                        <Text className="text-2xl">{item.icon}</Text>
                                        <View className="flex-1">
                                            <Text className="text-sm font-semibold text-white mb-1">{item.text}</Text>
                                            <Text className="text-xs text-[#D9D9D9]/60 leading-relaxed">{item.sub}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </GlassCard>

                    {/* Quality Metrics */}
                    <GlassCard className="p-5 bg-[#191934]/40 flex-1 mb-4">
                        <View className="flex-row items-center gap-2 mb-4">
                            <View className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF3A81]/20 to-[#BB3DF6]/10 items-center justify-center border border-white/10">
                                <Activity size={18} color="#FF3A81" />
                            </View>
                            <Text className="text-white font-semibold">Quality Metrics</Text>
                        </View>

                        {qualityMetrics.map((item, i) => (
                            <ProgressBar key={i} {...item} />
                        ))}
                    </GlassCard>
                </View>
            </ScrollView>
        </View>
    );
}
