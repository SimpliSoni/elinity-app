import '../global.css';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <View style={{ flex: 1, backgroundColor: '#0F0C29' }}>
                <StatusBar style="light" />
                <Stack 
                    screenOptions={{ 
                        headerShown: false, 
                        contentStyle: { backgroundColor: '#0F0C29' },
                        animation: 'slide_from_right',
                    }}
                >
                    <Stack.Screen name="index" />
                    <Stack.Screen name="login" />
                    <Stack.Screen name="signup" />
                    <Stack.Screen name="(tabs)" />
                    <Stack.Screen name="candidate" />
                    <Stack.Screen name="compare" />
                    <Stack.Screen name="calendar" />
                    <Stack.Screen name="tests" />
                    <Stack.Screen name="analytics" />
                </Stack>
            </View>
        </SafeAreaProvider>
    );
}
