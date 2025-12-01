import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Target, Users, Sparkles } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GlassCard from '../../components/GlassCard';

const Dashboard = () => {
    return (
        // Main Background
        <View className="flex-1 bg-[#0F0C29]">
            {/* Background Blobs (Absolute Positioned) */}
            <View className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-[#BB3DF6] opacity-20 blur-3xl" />
            <View className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#008CFF] opacity-20 blur-3xl" />

            <ScrollView className="flex-1 px-4 py-8">

                {/* Header Section */}
                <View className="mb-12 items-center">
                    <View className="flex-row items-center gap-2 px-4 py-2 rounded-full border border-[#BB3DF6]/30 bg-[#BB3DF6]/10 mb-6">
                        <View className="w-2 h-2 rounded-full bg-[#BB3DF6]" />
                        <Text className="text-sm font-medium text-white/90">Elinity — Purpose Alignment</Text>
                    </View>

                    <Text className="text-3xl font-bold text-white text-center mb-4 leading-tight">
                        The Purpose, Company, and People{'\n'}
                        <Text className="text-[#BB3DF6]">Alignment Platform</Text>
                    </Text>
                </View>

                {/* Stats Row - Converted from Grid to Column for Mobile */}
                <View className="gap-6 mb-8">
                    {/* Stat Card 1 */}
                    <GlassCard>
                        <View className="flex-row justify-between items-start mb-4">
                            <Text className="text-white font-semibold">Purpose Alignment</Text>
                            <Target size={20} color="rgba(255,255,255,0.6)" />
                        </View>
                        <Text className="text-4xl font-bold text-white mb-2">87%</Text>

                        {/* Progress Bar */}
                        <View className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <LinearGradient
                                colors={['#BB3DF6', '#FF3A81']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{ width: '87%', height: '100%' }}
                            />
                        </View>
                    </GlassCard>

                    {/* Stat Card 2 */}
                    <GlassCard>
                        <View className="flex-row justify-between items-start mb-4">
                            <Text className="text-white font-semibold">Team Health</Text>
                            <Users size={20} color="rgba(255,255,255,0.6)" />
                        </View>
                        <Text className="text-4xl font-bold text-white mb-2">92%</Text>

                        <View className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <LinearGradient
                                colors={['#FF3A81', '#BB3DF6']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{ width: '92%', height: '100%' }}
                            />
                        </View>
                    </GlassCard>
                </View>

            </ScrollView>
        </View>
    );
};

export default Dashboard;
