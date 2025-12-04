import { Tabs } from 'expo-router';
import { LayoutDashboard, Users, MessageCircle, Sparkles, Settings } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
    const insets = useSafeAreaInsets();
    
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 60 + insets.bottom,
                    paddingBottom: insets.bottom,
                    elevation: 0,
                    borderTopWidth: 1,
                    borderTopColor: 'rgba(255,255,255,0.1)',
                    backgroundColor: 'transparent',
                },
                tabBarBackground: () => (
                    <BlurView intensity={80} tint="dark" style={{ flex: 1, backgroundColor: 'rgba(15, 12, 41, 0.9)' }} />
                ),
                tabBarActiveTintColor: '#BB3DF6',
                tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.4)',
                tabBarLabelStyle: { fontSize: 10, marginBottom: 5, fontWeight: '500' },
            }}
        >
            {/* Core Tabs - Primary Navigation */}
            <Tabs.Screen
                name="dashboard"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <LayoutDashboard size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="recommendations"
                options={{
                    title: 'Matches',
                    tabBarIcon: ({ color }) => <Users size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="messages"
                options={{
                    title: 'Messages',
                    tabBarIcon: ({ color }) => <MessageCircle size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="insights"
                options={{
                    title: 'AI',
                    tabBarIcon: ({ color }) => <Sparkles size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <Settings size={24} color={color} />,
                }}
            />
            
            {/* Hidden Tabs - Accessed via navigation, not tab bar */}
            <Tabs.Screen
                name="profile"
                options={{
                    href: null, // Hide from tab bar
                }}
            />
        </Tabs>
    );
}
