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
import { Mail, Lock, User, ArrowRight, Sparkles, Eye, EyeOff, Link2 } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Signup() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = () => {
        // Navigate to dashboard after signup
        router.replace('/(tabs)/dashboard');
    };

    return (
        <View className="flex-1 bg-[#0F0C29]">
            <Stack.Screen options={{ headerShown: false }} />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1"
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingTop: insets.top, paddingBottom: insets.bottom }}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View className="px-6 py-10">
                        {/* Header / Brand */}
                        <View className="items-center mb-8">
                            {/* Badge */}
                                <View className="flex-row items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-5">
                                    <Sparkles size={14} color="#BB3DF6" />
                                    <Text className="text-white/80 text-xs font-medium uppercase tracking-widest">
                                        Join Elinity
                                    </Text>
                                </View>

                                {/* Headline */}
                                <Text className="text-2xl font-bold text-white text-center mb-1">
                                    Create your account
                                </Text>
                                <Text className="text-base text-center text-white/70">
                                    Access AI-curated matches, insights, and collaboration tools.
                                </Text>
                        </View>

                        {/* Feature Highlights - Mobile optimized */}
                        <View className="flex-row justify-center gap-6 mb-8">
                            <View className="items-center">
                                <View className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 items-center justify-center mb-2">
                                    <User size={22} color="#BB3DF6" />
                                </View>
                                <Text className="text-white/70 text-xs text-center">Deep{'\n'}Profiling</Text>
                            </View>
                            <View className="items-center">
                                <View className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 items-center justify-center mb-2">
                                    <Link2 size={22} color="#FF3A81" />
                                </View>
                                <Text className="text-white/70 text-xs text-center">Perfect{'\n'}Alignment</Text>
                            </View>
                        </View>

                        {/* Signup Form - Glass Card */}
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
                            <View className="p-7 relative z-10">
                                {/* Form Header */}
                                <View className="mb-6">
                                    <Text className="text-2xl font-bold text-white text-center mb-1">
                                        Create Account
                                    </Text>
                                    <Text className="text-white/60 text-center text-sm">
                                        Create an account to access your dashboard and candidate insights.
                                    </Text>
                                </View>

                                {/* Name Fields - Side by Side */}
                                <View className="flex-row gap-3 mb-4">
                                    <View className="flex-1">
                                        <Text className="text-white/60 text-xs font-semibold uppercase tracking-wider ml-1 mb-2">
                                            First Name
                                        </Text>
                                        <TextInput
                                            value={firstName}
                                            onChangeText={setFirstName}
                                            placeholder="Jane"
                                            placeholderTextColor="rgba(255,255,255,0.2)"
                                            autoCapitalize="words"
                                            className="w-full bg-[#0F0C29]/60 border border-white/10 rounded-xl py-3.5 px-4 text-white text-base"
                                            style={{ fontSize: 16 }}
                                        />
                                    </View>
                                    <View className="flex-1">
                                        <Text className="text-white/60 text-xs font-semibold uppercase tracking-wider ml-1 mb-2">
                                            Last Name
                                        </Text>
                                        <TextInput
                                            value={lastName}
                                            onChangeText={setLastName}
                                            placeholder="Doe"
                                            placeholderTextColor="rgba(255,255,255,0.2)"
                                            autoCapitalize="words"
                                            className="w-full bg-[#0F0C29]/60 border border-white/10 rounded-xl py-3.5 px-4 text-white text-base"
                                            style={{ fontSize: 16 }}
                                        />
                                    </View>
                                </View>

                                {/* Email Input */}
                                <View className="mb-4">
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
                                            className="w-full bg-[#0F0C29]/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white text-base"
                                            style={{ fontSize: 16 }}
                                        />
                                    </View>
                                </View>

                                {/* Password Input */}
                                <View className="mb-6">
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
                                            placeholder="Create a strong password"
                                            placeholderTextColor="rgba(255,255,255,0.2)"
                                            autoCapitalize="none"
                                            autoComplete="password-new"
                                            className="w-full bg-[#0F0C29]/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-white text-base"
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

                                {/* Create Account Button */}
                                <TouchableOpacity
                                    onPress={handleSignup}
                                    className="overflow-hidden rounded-xl"
                                    activeOpacity={0.85}
                                >
                                    <LinearGradient
                                        colors={['#BB3DF6', '#FF3A81']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        className="py-4 flex-row items-center justify-center gap-2"
                                    >
                                        <Text className="text-white font-bold text-base">Create Account</Text>
                                        <ArrowRight size={20} color="white" />
                                    </LinearGradient>
                                </TouchableOpacity>

                                {/* Sign In Link */}
                                <View className="mt-6 flex-row justify-center">
                                    <Text className="text-white/40 text-sm">
                                        Already have an account?{' '}
                                    </Text>
                                    <Link href="/login" asChild>
                                        <TouchableOpacity>
                                            <Text className="text-[#BB3DF6] font-medium text-sm underline">
                                                Sign in
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
