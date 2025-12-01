import { Tabs } from 'expo-router';
import { LayoutDashboard, Users } from 'lucide-react-native';
import { View } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#191934',
                    borderTopColor: 'rgba(255,255,255,0.1)',
                    height: 80,
                    paddingBottom: 20,
                },
                tabBarActiveTintColor: '#BB3DF6',
                tabBarInactiveTintColor: 'rgba(217, 217, 217, 0.4)',
            }}
        >
            <Tabs.Screen
                name="dashboard"
                options={{
                    title: 'Dashboard',
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
        </Tabs>
    );
}
