import { Tabs } from 'expo-router';
import { LayoutDashboard, Users, MessageCircle, Sparkles, Settings } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { View, useWindowDimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
    const insets = useSafeAreaInsets();
    const { width, height } = useWindowDimensions();
    
    // Dynamic responsive check that handles rotation
    const isLandscape = width > height;
    const isTablet = width > 768 || (isLandscape && width > 600);

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: isTablet ? {
                    position: 'absolute',
                    bottom: 24,
                    left: (width - 400) / 2,
                    width: 400,
                    height: 64,
                    borderRadius: 32,
                    borderWidth: 1,
                    borderColor: 'rgba(255,255,255,0.1)',
                    backgroundColor: '#1A1832',
                    elevation: 0,
                    paddingBottom: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                } : {
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
                    isTablet ? null : (
                        <BlurView intensity={80} tint="dark" style={{ flex: 1, backgroundColor: 'rgba(15, 12, 41, 0.9)' }} />
                    )
                ),
                tabBarActiveTintColor: '#BB3DF6',
                tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.4)',
                tabBarLabelStyle: {
                    fontSize: 10,
                    marginBottom: isTablet ? 0 : 5,
                    fontWeight: '500',
                    display: isTablet ? 'none' : 'flex'
                },
                tabBarItemStyle: isTablet ? {
                    height: 64,
                    paddingVertical: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                } : undefined,
                tabBarIconStyle: isTablet ? {
                    marginBottom: 0,
                } : undefined
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
