import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Stack, useRouter, Link } from 'expo-router';
import { Mail, Lock, ArrowRight, Sparkles, Eye, EyeOff, Check } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import Svg, { G, Path, Circle } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Login() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSignIn = () => {
        // Navigate to dashboard after login
        router.replace('/(tabs)/dashboard');
    };

    return (
        <View className="flex-1 bg-[#0F0C29]">
            <Stack.Screen options={{ headerShown: false, statusBarTranslucent: true }} />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingTop: insets.top, paddingBottom: insets.bottom }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View className="px-6 py-12">
                        {/* Header / Brand */}
                        <View className="items-center mb-10">
                            {/* Badge */}
                            <View className="flex-row items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-5">
                                <Sparkles size={14} color="#BB3DF6" />
                                <Text className="text-white/80 text-xs font-medium uppercase tracking-widest">
                                    The Alignment Platform
                                </Text>
                            </View>

                            {/* Logo */}
                            <Text className="text-5xl font-bold text-white text-center mb-3">
                                Elinity
                            </Text>

                            {/* Tagline with gradient effect (simulated) */}
                            <Text className="text-lg text-center text-[#BB3DF6] font-light tracking-wide">
                                Purpose. Mission. Vocation.
                            </Text>
                        </View>

                        {/* Login Form - Glass Card */}
                        <View className="rounded-[28px] overflow-hidden">
                            {/* Blur Background */}
                            <BlurView intensity={25} tint="dark" style={StyleSheet.absoluteFill} />

                            {/* Gradient Overlay */}
                            <LinearGradient
                                colors={['rgba(25, 25, 52, 0.6)', 'rgba(25, 25, 52, 0.4)']}
                                style={StyleSheet.absoluteFill}
                            />

                            {/* Border */}
                            <View
                                className="absolute inset-0 border border-white/10 rounded-[28px]"
                                pointerEvents="none"
                            />

                            {/* Form Content */}
                            <View className="p-8 relative z-10">
                                {/* Form Header */}
                                <View className="mb-8">
                                    <Text className="text-3xl font-bold text-white text-center mb-2">
                                        Welcome Back
                                    </Text>
                                    <Text className="text-white/50 text-center text-sm">
                                        Sign in to access your dashboard
                                    </Text>
                                </View>

                                {/* Email Input */}
                                <View className="mb-5">
                                    <Text className="text-white/60 text-xs font-semibold uppercase tracking-wider ml-1 mb-2">
                                        Email
                                    </Text>
                                    <View className="relative">
                                        <View className="absolute left-4 top-0 bottom-0 justify-center z-10">
                                            <Mail size={20} color="rgba(255,255,255,0.4)" />
                                        </View>
                                        <TextInput
                                            value={email}
                                            onChangeText={setEmail}
                                            placeholder="you@example.com"
                                            placeholderTextColor="rgba(255,255,255,0.2)"
                                            keyboardType="email-address"
                                            autoCapitalize="none"
                                            autoComplete="email"
                                            className="w-full bg-[#0F0C29]/60 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white text-base"
                                            style={{ fontSize: 16 }}
                                        />
                                    </View>
                                </View>

                                {/* Password Input */}
                                <View className="mb-5">
                                    <Text className="text-white/60 text-xs font-semibold uppercase tracking-wider ml-1 mb-2">
                                        Password
                                    </Text>
                                    <View className="relative">
                                        <View className="absolute left-4 top-0 bottom-0 justify-center z-10">
                                            <Lock size={20} color="rgba(255,255,255,0.4)" />
                                        </View>
                                        <TextInput
                                            value={password}
                                            onChangeText={setPassword}
                                            secureTextEntry={!showPassword}
                                            placeholder="••••••••"
                                            placeholderTextColor="rgba(255,255,255,0.2)"
                                            autoCapitalize="none"
                                            autoComplete="password"
                                            className="w-full bg-[#0F0C29]/60 border border-white/10 rounded-xl py-4 pl-12 pr-12 text-white text-base"
                                            style={{ fontSize: 16 }}
                                        />
                                        <TouchableOpacity
                                            onPress={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-0 bottom-0 justify-center"
                                        >
                                            {showPassword ? (
                                                <EyeOff size={20} color="rgba(255,255,255,0.4)" />
                                            ) : (
                                                <Eye size={20} color="rgba(255,255,255,0.4)" />
                                            )}
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {/* Remember Me & Forgot Password */}
                                <View className="flex-row items-center justify-between mb-6">
                                    <TouchableOpacity
                                        onPress={() => setRememberMe(!rememberMe)}
                                        className="flex-row items-center gap-2"
                                    >
                                        <View
                                            className={`w-5 h-5 rounded border ${
                                                rememberMe
                                                    ? 'bg-[#BB3DF6] border-[#BB3DF6]'
                                                    : 'border-white/20 bg-transparent'
                                            } items-center justify-center`}
                                        >
                                            {rememberMe && <Check size={12} color="white" strokeWidth={3} />}
                                        </View>
                                        <Text className="text-white/60 text-sm">Remember me</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                        <Text className="text-[#BB3DF6] text-sm font-medium">
                                            Forgot password?
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Sign In Button */}
                                <TouchableOpacity
                                    onPress={handleSignIn}
                                    className="overflow-hidden rounded-xl"
                                    activeOpacity={0.85}
                                >
                                    <LinearGradient
                                        colors={['#BB3DF6', '#FF3A81']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        className="py-4 flex-row items-center justify-center gap-2"
                                    >
                                        <Text className="text-white font-bold text-base">Sign In</Text>
                                        <ArrowRight size={20} color="white" />
                                    </LinearGradient>
                                </TouchableOpacity>

                                {/* Divider */}
                                <View className="my-7 flex-row items-center">
                                    <View className="flex-1 h-px bg-white/10" />
                                    <View className="px-4 py-1 bg-[#191934]/80 rounded-full">
                                        <Text className="text-white/40 text-xs">Or continue with</Text>
                                    </View>
                                    <View className="flex-1 h-px bg-white/10" />
                                </View>

                                {/* Social Login Buttons */}
                                <View className="flex-row gap-4">
                                    {/* Google */}
                                    <TouchableOpacity
                                        className="flex-1 flex-row items-center justify-center gap-2 py-3.5 rounded-xl bg-white/5 border border-white/10"
                                        activeOpacity={0.7}
                                    >
                                        <GoogleIcon />
                                        <Text className="text-white/80 text-sm font-medium">Google</Text>
                                    </TouchableOpacity>

                                    {/* Facebook */}
                                    <TouchableOpacity
                                        className="flex-1 flex-row items-center justify-center gap-2 py-3.5 rounded-xl bg-white/5 border border-white/10"
                                        activeOpacity={0.7}
                                    >
                                        <FacebookIcon />
                                        <Text className="text-white/80 text-sm font-medium">Facebook</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Sign Up Link */}
                                <View className="mt-8 flex-row justify-center">
                                    <Text className="text-white/40 text-sm">
                                        Don't have an account?{' '}
                                    </Text>
                                    <Link href="/signup" asChild>
                                        <TouchableOpacity>
                                            <Text className="text-[#BB3DF6] font-medium text-sm underline">
                                                Create an account
                                            </Text>
                                        </TouchableOpacity>
                                    </Link>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

// SVG Icons as React Native components
const GoogleIcon = () => (
    <Svg width={18} height={18} viewBox="0 0 48 48">
        <G>
            <Path d="M44.5 20H24v8.5h11.9C34.8 32.6 30.1 36 24 36c-7 0-12.7-5.7-12.7-12.7S17 10.6 24 10.6c3.3 0 6.1 1.2 8.3 3.2l5.7-5.7C34.6 4.6 29.7 2.2 24 2.2 12.3 2.2 3 11.5 3 23.2S12.3 44.2 24 44.2c11.8 0 21.5-8.6 21.5-21.2 0-1.4-.2-2.6-.9-3.8z" fill="#EA4335" />
            <Path d="M6.3 14.5l6.6 4.8C15.4 15 19.4 12.5 24 12.5c3.3 0 6 1.2 8.2 3.1l5.7-5.7C34.6 4.6 29.7 2.2 24 2.2 16.2 2.2 9.4 6.6 6.3 14.5z" fill="#FBBC05" opacity={0.0} />
        </G>
    </Svg>
);

const FacebookIcon = () => (
    <Svg width={18} height={18} viewBox="0 0 24 24">
        <Circle cx="12" cy="12" r="12" fill="#1877F2" />
        <Path d="M15.3 8.2h-1.2c-.3 0-.8.2-.8.8v1h2l-.3 2h-1.7v5h-2.1v-5h-1.3v-2h1.3v-1.3c0-1.3.8-2.1 2-2.1.6 0 1.1.1 1.3.1v1.5z" fill="#fff" />
    </Svg>
);
