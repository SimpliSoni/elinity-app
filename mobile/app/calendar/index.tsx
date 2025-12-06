import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';
import {
    ArrowLeft,
    Calendar,
    Users,
    Clock,
    CheckCircle,
    MoreHorizontal,
    Video,
    Edit2,
    ChevronDown,
    Sparkles,
    RefreshCw,
    UserPlus,
    CalendarCheck,
    FileText,
    Award,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import GlassCard from '../../components/GlassCard';

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface Interview {
    id: string;
    name: string;
    role: string;
    time: string;
    platform: string;
    date: string;
    day: string;
    img: string;
}

interface Stage {
    name: string;
    count: string;
    status: string;
    color: string;
    icon: React.ReactNode;
}

// ─────────────────────────────────────────────────────────────────────────────
// MOCK DATA
// ─────────────────────────────────────────────────────────────────────────────
const stats = [
    { icon: <Calendar size={20} color="white" />, label: 'Scheduled Today', value: '24', color: '#BB3DF6' },
    { icon: <Users size={20} color="white" />, label: 'Active Candidates', value: '156', color: '#2954FF' },
    { icon: <Clock size={20} color="white" />, label: 'Avg Interview Time', value: '45min', color: '#FF3A81' },
    { icon: <CheckCircle size={20} color="white" />, label: 'Success Rate', value: '89%', color: '#00C2FF' },
];

const nextInterview = {
    name: 'Sarah Johnson',
    role: 'Senior UX Designer',
    time: '2:30 PM',
    duration: '60 min',
    stage: 'Interview Stage',
    countdown: '1h 45m',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100',
};

const upcomingInterviews: Interview[] = [
    {
        id: '1',
        name: 'Michael Chen',
        role: 'Frontend Developer',
        time: '4:00 PM - 4:45 PM',
        platform: 'Google Meet',
        date: 'November 15',
        day: 'Thursday',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100',
    },
    {
        id: '2',
        name: 'Emma Rodriguez',
        role: 'Product Manager',
        time: '5:30 PM - 6:30 PM',
        platform: 'Zoom',
        date: 'November 15',
        day: 'Thursday',
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100',
    },
    {
        id: '3',
        name: 'David Kim',
        role: 'Backend Engineer',
        time: '10:00 AM - 11:00 AM',
        platform: 'Google Meet',
        date: 'November 16',
        day: 'Friday',
        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100',
    },
];

const stages: Stage[] = [
    { name: 'Intro', count: '12 candidates', status: 'Active', icon: <Users size={14} color="white" />, color: '#2954FF' },
    { name: 'Interview', count: '8 candidates', status: 'In Progress', icon: <Video size={14} color="white" />, color: '#BB3DF6' },
    { name: 'Assignment', count: '5 candidates', status: 'Review', icon: <FileText size={14} color="white" />, color: '#FF3A81' },
    { name: 'Decision', count: '2 candidates', status: 'Final', icon: <Award size={14} color="white" />, color: '#00C2FF' },
];

const aiStats = [
    { label: 'Scheduled', value: '47', borderColor: 'border-[#BB3DF6]/30' },
    { label: 'Conflicts Resolved', value: '12', borderColor: 'border-[#2954FF]/30' },
    { label: 'Success Rate', value: '98%', borderColor: 'border-[#00C2FF]/30' },
];

// ─────────────────────────────────────────────────────────────────────────────
// STAT CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const StatCard = ({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) => (
    <GlassCard noPadding className="bg-[#191934]/60 flex-1 min-w-[140px] relative overflow-hidden">
        <View className="p-4">
            <View
                className="w-10 h-10 rounded-xl items-center justify-center mb-3"
                style={{ backgroundColor: `${color}20` }}
            >
                {icon}
            </View>
            <Text className="text-2xl font-bold text-white">{value}</Text>
            <Text className="text-[#D9D9D9]/60 text-sm">{label}</Text>
        </View>
        {/* Decorative blur */}
        <View
            className="absolute -top-5 -right-5 w-16 h-16 rounded-full opacity-30"
            style={{ backgroundColor: color }}
        />
    </GlassCard>
);

// ─────────────────────────────────────────────────────────────────────────────
// INTERVIEW ITEM COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const InterviewItem = ({ interview, isTablet }: { interview: Interview; isTablet: boolean }) => (
    <View className="p-4 rounded-xl bg-[#2A2A45]/20 border border-white/5">
        <View className={`${isTablet ? 'flex-row items-center justify-between' : ''} gap-3`}>
            <View className="flex-row items-center gap-4">
                {/* Date */}
                <View className="items-center min-w-[50px]">
                    <Text className="text-[#D9D9D9]/60 text-xs">{interview.date.split(' ')[0]}</Text>
                    <Text className="text-white font-bold text-lg leading-tight">{interview.date.split(' ')[1]}</Text>
                    <Text className="text-[#D9D9D9]/40 text-xs">{interview.day}</Text>
                </View>
                {/* Divider */}
                <View className="w-px h-10 bg-white/10" />
                {/* Candidate Info */}
                <View className="flex-row items-center gap-3 flex-1">
                    <View className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                        <Image source={{ uri: interview.img }} className="w-full h-full" />
                    </View>
                    <View className="flex-1">
                        <Text className="text-white font-bold text-base">{interview.name}</Text>
                        <Text className="text-[#D9D9D9]/60 text-sm">{interview.role}</Text>
                        <View className="flex-row items-center gap-2 mt-0.5">
                            <Text className="text-[#D9D9D9]/60 text-xs">{interview.time}</Text>
                            <Text className="text-[#D9D9D9]/60 text-xs">•</Text>
                            <Text className="text-[#D9D9D9]/60 text-xs">{interview.platform}</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* Actions */}
            <View className={`flex-row gap-2 ${isTablet ? '' : 'mt-3 justify-end'}`}>
                <TouchableOpacity className="p-2 rounded-lg bg-white/5">
                    <Edit2 size={14} color="rgba(217, 217, 217, 0.4)" />
                </TouchableOpacity>
                <TouchableOpacity className="p-2 rounded-lg bg-white/5">
                    <ChevronDown size={14} color="rgba(217, 217, 217, 0.4)" />
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function InterviewScheduling() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    
    // Dynamic responsive check that handles rotation
    const isLandscape = width > height;
    const isTablet = width > 768 || (isLandscape && width > 600);
    const isLargeTablet = width > 1024;

    const [googleCalendarEnabled, setGoogleCalendarEnabled] = useState(true);
    const [outlookEnabled, setOutlookEnabled] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: '#0F0C29' }}>
            {/* Header */}
            <View style={{ paddingTop: insets.top }} className="bg-[#0F0C29]">
                <View className="flex-row items-center gap-3 px-4 py-4">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="w-10 h-10 rounded-full bg-white/10 items-center justify-center"
                    >
                        <ArrowLeft size={20} color="white" />
                    </TouchableOpacity>
                    <Text className="text-xl font-bold text-white">Interview Scheduling</Text>
                </View>
            </View>

            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 40 + insets.bottom,
                }}
            >
                {/* Stats Row */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingVertical: 8, gap: 12 }}
                    className="mb-5"
                >
                    {stats.map((stat, i) => (
                        <StatCard key={i} {...stat} />
                    ))}
                </ScrollView>

                {/* Main Content - Two Column Layout for Tablets */}
                <View className={isLargeTablet ? 'flex-row gap-6' : ''}>
                    {/* Left Column */}
                    <View style={isLargeTablet ? { flex: 2 } : undefined}>
                        {/* Upcoming Interviews */}
                        <GlassCard noPadding className="bg-[#191934]/60 mb-5">
                            <View className="p-5">
                                <View className="flex-row justify-between items-center mb-6">
                                    <Text className="text-lg font-bold text-white">Upcoming Interviews</Text>
                                    <TouchableOpacity className="p-2">
                                        <MoreHorizontal size={20} color="rgba(217, 217, 217, 0.4)" />
                                    </TouchableOpacity>
                                </View>

                                {/* Next Interview Card */}
                                <View className="p-5 rounded-2xl bg-gradient-to-r border border-white/10 mb-6 relative overflow-hidden">
                                    <LinearGradient
                                        colors={['rgba(187, 61, 246, 0.2)', 'rgba(41, 84, 255, 0.2)', 'rgba(25, 25, 52, 0.4)']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        className="absolute inset-0 rounded-2xl"
                                    />
                                    {/* Left accent bar */}
                                    <View className="absolute top-0 left-0 w-1 h-full overflow-hidden rounded-l-2xl">
                                        <LinearGradient
                                            colors={['#BB3DF6', '#2954FF']}
                                            className="w-full h-full"
                                        />
                                    </View>

                                    <View className={`${isTablet ? 'flex-row items-center justify-between' : ''} gap-4 relative z-10`}>
                                        <View className={`${isTablet ? 'flex-row items-center flex-1' : ''} gap-4`}>
                                            {/* Countdown */}
                                            <View className={`${isTablet ? 'pr-4 border-r border-white/10' : 'pb-3 border-b border-white/10 mb-3'}`}>
                                                <Text className="text-[#D9D9D9]/60 text-sm mb-1">Next Interview In</Text>
                                                <Text className="text-xl font-bold text-white">{nextInterview.countdown}</Text>
                                            </View>
                                            {/* Candidate Info */}
                                            <View className="flex-row items-center gap-3">
                                                <View className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                                                    <Image source={{ uri: nextInterview.img }} className="w-full h-full" />
                                                </View>
                                                <View>
                                                    <Text className="text-white font-bold text-base">{nextInterview.name}</Text>
                                                    <Text className="text-[#D9D9D9]/60 text-sm">{nextInterview.role}</Text>
                                                    <View className="flex-row items-center gap-2 mt-1">
                                                        <Text className="text-[#D9D9D9]/60 text-xs">{nextInterview.time}</Text>
                                                        <Text className="text-[#D9D9D9]/60 text-xs">•</Text>
                                                        <Text className="text-[#D9D9D9]/60 text-xs">{nextInterview.duration}</Text>
                                                        <Text className="text-[#D9D9D9]/60 text-xs">•</Text>
                                                        <Text className="text-[#D9D9D9]/60 text-xs">{nextInterview.stage}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                    {/* Join Button */}
                                    <TouchableOpacity className={`${isTablet ? '' : 'mt-4'} py-2.5 px-5 rounded-xl flex-row items-center justify-center gap-2 overflow-hidden`}>
                                        <LinearGradient
                                            colors={['#BB3DF6', '#2954FF']}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 0 }}
                                            className="absolute inset-0"
                                        />
                                        <Video size={16} color="white" />
                                        <Text className="text-white text-sm font-bold relative z-10">Join Meeting</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Other Interviews List */}
                            <View style={{ gap: 12 }}>
                                {upcomingInterviews.map(interview => (
                                    <InterviewItem key={interview.id} interview={interview} isTablet={isTablet} />
                                ))}
                            </View>
                            </View>
                        </GlassCard>

                        {/* AI Auto-Scheduler */}
                        <GlassCard noPadding className="border border-[#BB3DF6]/20 mb-5 relative overflow-hidden">
                            <LinearGradient
                                colors={['rgba(25, 25, 52, 0.9)', 'rgba(15, 12, 41, 0.9)']}
                                className="absolute inset-0 rounded-[24px]"
                            />
                            <View className="p-5">
                                <View className="flex-row justify-between items-start mb-5 relative z-10">
                                    <View className="flex-row items-center gap-3">
                                        <View className="w-10 h-10 rounded-xl items-center justify-center overflow-hidden">
                                            <LinearGradient
                                                colors={['#BB3DF6', '#2954FF']}
                                                className="absolute inset-0"
                                            />
                                            <Sparkles size={20} color="white" />
                                        </View>
                                        <View>
                                            <Text className="text-white font-bold text-lg">AI Auto-Scheduler</Text>
                                            <Text className="text-[#D9D9D9]/60 text-sm">Intelligent Interview Scheduling</Text>
                                        </View>
                                    </View>
                                    <View className="flex-row items-center gap-2 px-2 py-1 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/20">
                                        <View className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
                                        <Text className="text-[#00C2FF] text-xs font-bold uppercase">Active</Text>
                                    </View>
                                </View>

                                <View className={`${isTablet ? 'flex-row' : ''} gap-3 relative z-10`}>
                                    {aiStats.map((stat, i) => (
                                        <View
                                            key={i}
                                            className={`p-4 rounded-xl bg-[#2A2A45]/40 border ${stat.borderColor} ${isTablet ? 'flex-1' : ''}`}
                                        >
                                            <Text className="text-white font-bold text-lg mb-1">{stat.value}</Text>
                                            <Text className="text-[#D9D9D9]/60 text-sm">{stat.label}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </GlassCard>
                    </View>

                    {/* Right Column - Sidebar (Tablet Only) */}
                    <View style={isLargeTablet ? { flex: 1 } : undefined}>
                        {/* Quick Actions */}
                        <GlassCard noPadding className="bg-[#191934]/60 mb-5">
                            <View className="p-5">
                                <Text className="text-white font-bold text-base mb-4">Quick Actions</Text>
                                <View className="gap-3">
                                    <TouchableOpacity className="w-full py-3 rounded-xl items-center justify-center flex-row gap-2 overflow-hidden">
                                        <LinearGradient
                                            colors={['#BB3DF6', '#2954FF']}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 0 }}
                                            className="absolute inset-0"
                                        />
                                        <CalendarCheck size={16} color="white" />
                                        <Text className="text-white text-sm font-bold relative z-10">Schedule Interview</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="w-full py-3 rounded-xl bg-[#2A2A45] border border-white/10 items-center justify-center flex-row gap-2">
                                        <RefreshCw size={16} color="white" />
                                        <Text className="text-white text-sm font-medium">Sync Calendar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className="w-full py-3 rounded-xl bg-[#2A2A45] border border-white/10 items-center justify-center flex-row gap-2">
                                        <UserPlus size={16} color="white" />
                                        <Text className="text-white text-sm font-medium">Add Candidate</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </GlassCard>

                        {/* Interview Stages */}
                        <GlassCard noPadding className="bg-[#191934]/60 mb-5">
                            <View className="p-5">
                                <Text className="text-white font-bold text-base mb-4">Interview Stages</Text>
                                <View className="gap-4">
                                    {stages.map((stage, i) => (
                                        <TouchableOpacity key={i} className="flex-row items-center justify-between">
                                            <View className="flex-row items-center gap-3">
                                                <View
                                                    className="w-8 h-8 rounded-lg items-center justify-center"
                                                    style={{ backgroundColor: `${stage.color}20` }}
                                                >
                                                    {stage.icon}
                                                </View>
                                                <View>
                                                    <Text className="text-white text-sm font-bold">{stage.name}</Text>
                                                    <Text className="text-[#D9D9D9]/60 text-xs">{stage.count}</Text>
                                                </View>
                                            </View>
                                            <View className="px-2 py-1 rounded-md bg-[#2A2A45] border border-white/5">
                                                <Text className="text-xs text-[#D9D9D9]">{stage.status}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </GlassCard>

                        {/* Calendar Sync */}
                        <GlassCard noPadding className="bg-[#191934]/60">
                            <View className="p-5">
                                <Text className="text-white font-bold text-base mb-4">Calendar Sync</Text>
                                <View className="gap-3">
                                    {/* Google Calendar */}
                                    <View className="p-3 rounded-xl bg-[#2A2A45]/40 border border-white/5 flex-row items-center justify-between">
                                        <View className="flex-row items-center gap-3">
                                            <View className="w-6 h-6 rounded bg-white items-center justify-center">
                                                <Text className="text-black font-bold text-xs">G</Text>
                                            </View>
                                            <Text className="text-white text-sm font-medium">Google Calendar</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setGoogleCalendarEnabled(!googleCalendarEnabled)}
                                            className={`w-10 h-5 rounded-full ${googleCalendarEnabled ? 'bg-[#BB3DF6]' : 'bg-[#2A2A45] border border-white/20'} justify-center`}
                                        >
                                            <View
                                                className={`w-4 h-4 rounded-full ${googleCalendarEnabled ? 'bg-white ml-5' : 'bg-[#D9D9D9]/40 ml-0.5'}`}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    {/* Outlook */}
                                    <View className="p-3 rounded-xl bg-[#2A2A45]/40 border border-white/5 flex-row items-center justify-between">
                                        <View className="flex-row items-center gap-3">
                                            <View className="w-6 h-6 rounded bg-[#0078D4] items-center justify-center">
                                                <Text className="text-white font-bold text-xs">O</Text>
                                            </View>
                                            <Text className="text-white text-sm font-medium">Outlook</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setOutlookEnabled(!outlookEnabled)}
                                            className={`w-10 h-5 rounded-full ${outlookEnabled ? 'bg-[#BB3DF6]' : 'bg-[#2A2A45] border border-white/20'} justify-center`}
                                        >
                                            <View
                                                className={`w-4 h-4 rounded-full ${outlookEnabled ? 'bg-white ml-5' : 'bg-[#D9D9D9]/40 ml-0.5'}`}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </GlassCard>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
