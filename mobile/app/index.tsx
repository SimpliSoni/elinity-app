import { Redirect } from 'expo-router';

export default function Index() {
    // In a real app, check auth state here
    const isAuthenticated = false;
    
    if (isAuthenticated) {
        return <Redirect href="/(tabs)/dashboard" />;
    }
    
    return <Redirect href="/login" />;
}
