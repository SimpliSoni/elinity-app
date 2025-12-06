import { Stack } from 'expo-router';

export default function AnalyticsLayout() {
    return (
        <Stack 
            screenOptions={{ 
                headerShown: false,
                contentStyle: { backgroundColor: '#0F0C29' },
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen name="index" />
        </Stack>
    );
}
