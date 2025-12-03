import { Tabs } from 'expo-router';
import { LayoutDashboard, Users, Search, GitCompare } from 'lucide-react-native';
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
                    title: 'Recs',
                    tabBarIcon: ({ color }) => <Users size={24} color={color} />,
                }}
            />
            {/* Add more screens here as you implement them */}
        </Tabs>
    );
}
