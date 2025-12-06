import React from 'react';
import { View, ViewProps, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

interface GlassCardProps extends ViewProps {
    className?: string;
    variant?: 'default' | 'glow' | 'solid';
    noPadding?: boolean;
    children?: React.ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
    className = "", 
    children, 
    variant = "default", 
    noPadding = false, // Reverted to false by default - provides safe padding
    style, 
    ...props 
}) => {
    // Simplified version for Android to avoid rendering issues
    if (Platform.OS === 'android') {
        return (
            <View 
                style={[
                    { 
                        backgroundColor: 'rgba(30, 28, 60, 0.95)',
                        borderRadius: 24,
                        borderWidth: 1,
                        borderColor: 'rgba(255,255,255,0.1)',
                        padding: noPadding ? 0 : 16,
                    }, 
                    style
                ]} 
                {...props}
            >
                {children}
            </View>
        );
    }

    // iOS version with blur effect
    return (
        <View 
            className={`rounded-[24px] overflow-hidden ${className}`} 
            style={[{ backgroundColor: 'rgba(25, 25, 52, 0.6)' }, style]} 
            {...props}
        >
            {/* 1. Blur Layer */}
            <BlurView intensity={20} tint="dark" style={StyleSheet.absoluteFill} />

            {/* 2. Gradient Sheen Layer */}
            <LinearGradient
                colors={['rgba(255, 255, 255, 0.08)', 'rgba(255, 255, 255, 0.02)']}
                style={StyleSheet.absoluteFill}
            />

            {/* 3. Border Stroke */}
            <View 
                style={[StyleSheet.absoluteFill, { borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', borderRadius: 24 }]} 
                pointerEvents="none" 
            />

            {/* 4. Content */}
            <View style={{ position: 'relative', zIndex: 10, padding: noPadding ? 0 : 16 }}>
                {children}
            </View>
        </View>
    );
};

export default GlassCard;
