import React from 'react';
import { View, Text, Image, TouchableOpacity, useWindowDimensions, FlatList } from 'react-native';
import {
    RefreshCw,
    Bookmark,
    Mail,
    MapPin,
    Users,
    Calendar,
    Clock,
    BarChart2,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import GlassCard from '../../components/GlassCard';

const candidates = [
    {
        id: '1',
        name: "Sarah Chen",
        role: "Senior UX Designer",
        location: "San Francisco, CA",
        fitScore: 94,
        tags: ['React', 'Figma', 'Design Systems'],
        traits: ['Mission-Aligned', 'Remote-First'],
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: '2',
        name: "Marcus Johnson",
        role: "Full Stack Developer",
        location: "Austin, TX",
        fitScore: 85,
        tags: ['Node.js', 'Python', 'AWS'],
        traits: ['Team-Player', 'Startup experience'],
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
        id: '3',
        name: "Elena Rodriguez",
        role: "Product Manager",
        location: "New York, NY",
        fitScore: 80,
        tags: ['Agile', 'Analytics', 'Strategy'],
        traits: ['Data-Driven', 'Growth focused'],
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    }
];

const CandidateCard = ({
    name,
    role,
    location,
    fitScore,
    tags,
    traits,
    img,
    onViewProfile,
    isTablet
}: {
    name: string,
    role: string,
    location: string,
    fitScore: number,
    tags: string[],
    traits: string[],
    img: string,
    onViewProfile: () => void,
    isTablet: boolean
}) => (
    <GlassCard style={{ flex: isTablet ? 1 : undefined }}>
        <View className="flex-row items-start gap-4 mb-4">
            <View className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                <Image source={{ uri: img }} className="w-full h-full" />
            </View>
            <View className="flex-1">
                <Text className="text-white font-bold text-lg leading-tight">{name}</Text>
                <Text className="text-[#D9D9D9]/60 text-xs mb-1">{role}</Text>
                <View className="flex-row items-center gap-1">
                    <MapPin size={10} color="rgba(217, 217, 217, 0.4)" />
                    <Text className="text-[#D9D9D9]/40 text-[10px]">{location}</Text>
                </View>
            </View>
        </View>

        <View className="mb-4">
            <View className="flex-row items-end gap-2 mb-1">
                <Text className="text-[#BB3DF6] font-bold text-2xl">{fitScore}%</Text>
                <Text className="text-white text-xs font-medium pb-1">Fit score</Text>
                <Text className="text-[#D9D9D9]/40 text-[10px] pb-1 ml-auto">Strong match</Text>
            </View>
            <View className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <LinearGradient
                    colors={['#BB3DF6', '#FF3A81']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ width: `${fitScore}%`, height: '100%' }}
                />
            </View>
        </View>

        <View className="flex-row flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
                <View key={i} className="px-2 py-1 rounded bg-[#BB3DF6]/10 border border-[#BB3DF6]/20">
                    <Text className="text-[#BB3DF6] text-[10px] font-medium">{tag}</Text>
                </View>
            ))}
        </View>

        <View className="flex-row flex-wrap gap-3 mb-6 mt-auto">
            {traits.map((trait, i) => (
                <View key={i} className="flex-row items-center gap-1">
                    <Users size={10} color="#BB3DF6" />
                    <Text className="text-[#D9D9D9] text-[10px]">{trait}</Text>
                </View>
            ))}
        </View>

        <View className="flex-row items-center gap-2">
            <TouchableOpacity 
                onPress={onViewProfile}
                className="flex-1 py-2 rounded-lg bg-[#BB3DF6] items-center"
            >
                <Text className="text-white text-xs font-bold">View Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity className="p-2 rounded-lg bg-white/5">
                <Bookmark size={16} color="#D9D9D9" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 rounded-lg bg-white/5">
                <Mail size={16} color="#D9D9D9" />
            </TouchableOpacity>
        </View>
    </GlassCard>
);

export default function Recommendations() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    
    // Dynamic responsive check that handles rotation
    const isLandscape = width > height;
    const isTablet = width > 768 || (isLandscape && width > 600);
    
    // Calculate card width dynamically
    const horizontalPadding = 32; // 16px on each side
    const gap = 16;
    const cardWidth = isTablet ? (width - horizontalPadding - gap) / 2 : width - horizontalPadding;
    
    const renderHeader = () => (
        <View>
            {/* Header */}
            <View className="mb-8">
                <Text className="text-2xl font-bold text-white mb-2">Candidate Recommendations</Text>
                <Text className="text-[#D9D9D9]/60 text-sm mb-4">AI-Curated matches for your open positions</Text>

                <TouchableOpacity className="flex-row items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#2A2A45] border border-white/10 self-start">
                    <RefreshCw size={16} color="white" />
                    <Text className="text-white text-sm font-medium">Refresh Matches</Text>
                </TouchableOpacity>
            </View>

            {/* Stats Card (from Sidebar) */}
            <GlassCard style={{ marginBottom: 24 }}>
                <View className="flex-row justify-between items-end mb-2">
                    <Text className="text-white font-bold text-sm">Today's Matches</Text>
                    <Text className="text-white font-bold text-lg">5</Text>
                </View>
                <View className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
                    <LinearGradient
                        colors={['#FF3A81', '#BB3DF6']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ width: '80%', height: '100%' }}
                    />
                </View>
                <Text className="text-[10px] text-[#D9D9D9]/40">4 of 5 reviewed</Text>
            </GlassCard>

            {/* Tabs */}
            <View style={{ flexDirection: 'row', padding: 4, backgroundColor: 'rgba(25, 25, 52, 0.6)', borderRadius: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.05)', marginBottom: 24 }}>
                <TouchableOpacity className="flex-1 py-2 rounded-lg items-center justify-center bg-[#BB3DF6]">
                    <Text className="text-white text-sm font-bold">New Matches</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 py-2 rounded-lg items-center justify-center">
                    <Text className="text-[#D9D9D9]/60 text-sm font-medium">In Progress</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 py-2 rounded-lg items-center justify-center">
                    <Text className="text-[#D9D9D9]/60 text-sm font-medium">Hired</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderFooter = () => (
        <GlassCard className="p-4 mb-8 bg-[#191934]/80 border-t border-white/10">
            <View className="flex-row justify-between gap-2 mb-2">
                <TouchableOpacity className="flex-1 py-2.5 rounded-lg bg-[#BB3DF6] flex-row items-center justify-center gap-2">
                    <Mail size={16} color="white" />
                    <Text className="text-white text-xs font-bold">Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 py-2.5 rounded-lg bg-[#2A2A45] border border-white/5 flex-row items-center justify-center gap-2">
                    <Bookmark size={16} color="white" />
                    <Text className="text-white text-xs font-bold">Save</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-between gap-2 mb-2">
                <TouchableOpacity 
                    onPress={() => router.push('/calendar')}
                    className="flex-1 py-2.5 rounded-lg bg-[#2A2A45] border border-white/5 flex-row items-center justify-center gap-2"
                >
                    <Calendar size={16} color="white" />
                    <Text className="text-white text-xs font-bold">Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => router.push('/compare')}
                    className="flex-1 py-2.5 rounded-lg bg-[#2A2A45] border border-white/5 flex-row items-center justify-center gap-2"
                >
                    <BarChart2 size={16} color="white" />
                    <Text className="text-white text-xs font-bold">Compare</Text>
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center justify-center gap-2 mt-3">
                <Clock size={12} color="rgba(217, 217, 217, 0.4)" />
                <Text className="text-[#D9D9D9]/40 text-[10px]">Last updated 2 mins ago</Text>
            </View>
        </GlassCard>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#0F0C29' }}>
            <FlatList
                data={candidates}
                style={{ flex: 1 }}
                key={isTablet ? 'tablet' : 'phone'}
                numColumns={isTablet ? 2 : 1}
                renderItem={({ item }) => (
                    <View style={{ width: cardWidth, marginBottom: 16, marginHorizontal: isTablet ? 8 : 0 }}>
                        <CandidateCard
                            {...item}
                            onViewProfile={() => router.push(`/candidate/${item.id}`)}
                            isTablet={isTablet}
                        />
                    </View>
                )}
                keyExtractor={item => item.id}
                ListHeaderComponent={renderHeader}
                ListFooterComponent={renderFooter}
                contentContainerStyle={{ 
                    paddingTop: insets.top + 16, 
                    paddingBottom: 80 + insets.bottom,
                    paddingHorizontal: 16
                }}
                columnWrapperStyle={isTablet ? { justifyContent: 'flex-start' } : undefined}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
