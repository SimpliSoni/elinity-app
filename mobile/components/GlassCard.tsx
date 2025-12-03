import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

interface GlassCardProps extends ViewProps {
    className?: string;
    variant?: 'default' | 'glow' | 'solid';
    children?: React.ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ className = "", children, variant = "default", style, ...props }) => {
    return (
        <View className={`rounded-[24px] overflow-hidden ${className}`} style={style} {...props}>
            {/* 1. Blur Layer */}
            <BlurView intensity={20} tint="dark" style={StyleSheet.absoluteFill} />

            {/* 2. Gradient Sheen Layer */}
            <LinearGradient
                colors={['rgba(255, 255, 255, 0.05)', 'rgba(255, 255, 255, 0.02)']}
                style={StyleSheet.absoluteFill}
            />

            {/* 3. Border Stroke (Simulated with absolute view or border props) */}
            <View className="absolute inset-0 border border-white/10 rounded-[24px]" pointerEvents="none" />

            {/* 4. Content */}
            <View className="p-4 relative z-10">
                {children}
            </View>
        </View>
    );
};

export default GlassCard;
