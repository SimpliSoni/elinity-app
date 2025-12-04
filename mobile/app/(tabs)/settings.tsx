import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import {
    Settings as SettingsIcon,
    Key,
    Shield,
    Bell,
    ChevronRight,
    User,
    Building2,
    CreditCard,
    Slack,
    Users,
    Calendar,
    MessageSquare,
    Check,
    ExternalLink,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import GlassCard from '../../components/GlassCard';

type Section = 'account' | 'integrations' | 'access-control' | 'notification';

const IntegrationCard = ({
    name,
    type,
    icon,
    status,
    description,
    lastSync,
    colors,
}: {
    name: string;
    type: string;
    icon: React.ReactNode;
    status: 'Success' | 'Ready' | 'Connected';
    description: string;
    lastSync: string;
    colors: [string, string];
}) => (
    <GlassCard className="p-5 mb-4">
        <View className="flex-row items-start gap-4 mb-4">
            <View className="w-12 h-12 rounded-xl overflow-hidden items-center justify-center">
                <LinearGradient
                    colors={colors}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                    }}
                />
                {icon}
            </View>
            <View className="flex-1">
                <View className="flex-row items-center justify-between mb-1">
                    <Text className="text-white font-bold text-base">{name}</Text>
                    <View
                        className={`px-2 py-1 rounded-full ${
                            status === 'Success'
                                ? 'bg-[#00FF94]/15'
                                : status === 'Connected'
                                ? 'bg-[#00C2FF]/15'
                                : 'bg-[#BB3DF6]/15'
                        }`}
                    >
                        <Text
                            className={`text-[10px] font-semibold ${
                                status === 'Success'
                                    ? 'text-[#00FF94]'
                                    : status === 'Connected'
                                    ? 'text-[#00C2FF]'
                                    : 'text-[#BB3DF6]'
                            }`}
                        >
                            {status}
                        </Text>
                    </View>
                </View>
                <Text className="text-[#D9D9D9]/60 text-xs">{type}</Text>
            </View>
        </View>
        <Text className="text-[#D9D9D9]/70 text-xs leading-relaxed mb-4">{description}</Text>
        <View className="flex-row items-center justify-between">
            <Text className="text-[#D9D9D9]/40 text-[10px]">Last sync: {lastSync}</Text>
            <TouchableOpacity className="flex-row items-center gap-1">
                <Text className="text-[#BB3DF6] text-xs font-medium">Configure</Text>
                <ChevronRight size={14} color="#BB3DF6" />
            </TouchableOpacity>
        </View>
    </GlassCard>
);

const NavItem = ({
    icon,
    label,
    active,
    onPress,
    subItems,
    activeSection,
}: {
    icon: React.ReactNode;
    label: string;
    active: boolean;
    onPress: () => void;
    subItems?: string[];
    activeSection: Section;
}) => (
    <View>
        <TouchableOpacity
            onPress={onPress}
            className={`flex-row items-center gap-3 px-4 py-3 rounded-xl mb-1 ${
                active ? 'overflow-hidden' : ''
            }`}
        >
            {active && (
                <LinearGradient
                    colors={['#BB3DF6', '#FF3A81']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        borderRadius: 12,
                    }}
                />
            )}
            <View className="relative z-10">{icon}</View>
            <Text
                className={`text-sm font-medium relative z-10 flex-1 ${
                    active ? 'text-white' : 'text-[#D9D9D9]/80'
                }`}
            >
                {label}
            </Text>
            {active && (
                <View className="w-2 h-2 bg-white rounded-full relative z-10" />
            )}
        </TouchableOpacity>
        {active && subItems && (
            <View className="ml-8 mb-2">
                {subItems.map((item, i) => (
                    <TouchableOpacity key={i} className="py-2">
                        <Text className="text-[#D9D9D9]/60 text-xs">{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )}
    </View>
);

const SettingRow = ({
    label,
    description,
    hasSwitch,
    enabled,
    onToggle,
}: {
    label: string;
    description?: string;
    hasSwitch?: boolean;
    enabled?: boolean;
    onToggle?: () => void;
}) => (
    <View className="flex-row items-center justify-between py-4 border-b border-white/5">
        <View className="flex-1 mr-4">
            <Text className="text-white text-sm font-medium mb-1">{label}</Text>
            {description && (
                <Text className="text-[#D9D9D9]/50 text-xs">{description}</Text>
            )}
        </View>
        {hasSwitch ? (
            <Switch
                value={enabled}
                onValueChange={onToggle}
                trackColor={{ false: 'rgba(255,255,255,0.1)', true: '#BB3DF6' }}
                thumbColor="white"
            />
        ) : (
            <ChevronRight size={18} color="rgba(255,255,255,0.4)" />
        )}
    </View>
);

export default function Settings() {
    const insets = useSafeAreaInsets();
    const [activeSection, setActiveSection] = useState<Section>('integrations');
    const [notifications, setNotifications] = useState({
        newMatches: true,
        messages: true,
        interviews: false,
        weeklyDigest: true,
    });

    const integrations = [
        {
            name: 'Slack',
            type: 'Team Messaging',
            icon: <Slack size={24} color="white" />,
            status: 'Success' as const,
            description:
                'Get notifications about new candidates and updates directly in your Slack channels',
            lastSync: '2 minutes ago',
            colors: ['#BB3DF6', '#FF3A81'] as [string, string],
        },
        {
            name: 'BambooHR',
            type: 'HR Management',
            icon: <Users size={24} color="white" />,
            status: 'Success' as const,
            description: 'Sync employee data and streamline your HR processes',
            lastSync: 'Nov 1',
            colors: ['#00FF94', '#00C9FF'] as [string, string],
        },
        {
            name: 'Greenhouse',
            type: 'Applicant Tracking',
            icon: <MessageSquare size={24} color="white" />,
            status: 'Ready' as const,
            description: 'Connect with your existing ATS to sync candidate data',
            lastSync: 'Never',
            colors: ['#008CFF', '#00C9FF'] as [string, string],
        },
        {
            name: 'Google Calendar',
            type: 'Scheduling & Alignment',
            icon: <Calendar size={24} color="white" />,
            status: 'Connected' as const,
            description: 'Sync interview schedules and availability with your calendar',
            lastSync: 'Never',
            colors: ['#FF3A81', '#BB3DF6'] as [string, string],
        },
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'account':
                return (
                    <View>
                        <Text className="text-white font-bold text-lg mb-4">Account Settings</Text>
                        <GlassCard className="p-4">
                            <TouchableOpacity className="flex-row items-center gap-3 py-3 border-b border-white/5">
                                <User size={20} color="rgba(255,255,255,0.6)" />
                                <View className="flex-1">
                                    <Text className="text-white text-sm font-medium">
                                        Personal Information
                                    </Text>
                                    <Text className="text-[#D9D9D9]/50 text-xs">
                                        Update your profile details
                                    </Text>
                                </View>
                                <ChevronRight size={18} color="rgba(255,255,255,0.4)" />
                            </TouchableOpacity>
                            <TouchableOpacity className="flex-row items-center gap-3 py-3 border-b border-white/5">
                                <Building2 size={20} color="rgba(255,255,255,0.6)" />
                                <View className="flex-1">
                                    <Text className="text-white text-sm font-medium">
                                        Company Profile
                                    </Text>
                                    <Text className="text-[#D9D9D9]/50 text-xs">
                                        Manage company information
                                    </Text>
                                </View>
                                <ChevronRight size={18} color="rgba(255,255,255,0.4)" />
                            </TouchableOpacity>
                            <TouchableOpacity className="flex-row items-center gap-3 py-3">
                                <CreditCard size={20} color="rgba(255,255,255,0.6)" />
                                <View className="flex-1">
                                    <Text className="text-white text-sm font-medium">
                                        Billing & Plans
                                    </Text>
                                    <Text className="text-[#D9D9D9]/50 text-xs">
                                        Manage subscription and payments
                                    </Text>
                                </View>
                                <ChevronRight size={18} color="rgba(255,255,255,0.4)" />
                            </TouchableOpacity>
                        </GlassCard>
                    </View>
                );
            case 'integrations':
                return (
                    <View>
                        <View className="flex-row items-center justify-between mb-4">
                            <Text className="text-white font-bold text-lg">Integrations</Text>
                            <TouchableOpacity className="px-3 py-1.5 rounded-lg bg-[#BB3DF6]/20 border border-[#BB3DF6]/30">
                                <Text className="text-[#BB3DF6] text-xs font-medium">+ Add New</Text>
                            </TouchableOpacity>
                        </View>
                        {integrations.map((integration, i) => (
                            <IntegrationCard key={i} {...integration} />
                        ))}
                    </View>
                );
            case 'access-control':
                return (
                    <View>
                        <Text className="text-white font-bold text-lg mb-4">Access Control</Text>
                        <GlassCard className="p-5 mb-4">
                            <Text className="text-white font-bold text-sm mb-4">Team Members</Text>
                            {[
                                { name: 'John Smith', role: 'Admin', email: 'john@company.com' },
                                { name: 'Sarah Lee', role: 'Recruiter', email: 'sarah@company.com' },
                                { name: 'Mike Chen', role: 'Hiring Manager', email: 'mike@company.com' },
                            ].map((member, i) => (
                                <View
                                    key={i}
                                    className="flex-row items-center justify-between py-3 border-b border-white/5 last:border-b-0"
                                >
                                    <View>
                                        <Text className="text-white text-sm font-medium">
                                            {member.name}
                                        </Text>
                                        <Text className="text-[#D9D9D9]/50 text-xs">{member.email}</Text>
                                    </View>
                                    <View className="px-2 py-1 rounded bg-[#2A2A45]">
                                        <Text className="text-[#BB3DF6] text-xs font-medium">
                                            {member.role}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </GlassCard>
                        <TouchableOpacity className="py-4 rounded-xl bg-[#2A2A45] border border-white/5 items-center">
                            <Text className="text-white font-bold text-sm">Invite Team Member</Text>
                        </TouchableOpacity>
                    </View>
                );
            case 'notification':
                return (
                    <View>
                        <Text className="text-white font-bold text-lg mb-4">Notifications</Text>
                        <GlassCard className="p-5">
                            <SettingRow
                                label="New Matches"
                                description="Get notified when new candidates match your criteria"
                                hasSwitch
                                enabled={notifications.newMatches}
                                onToggle={() =>
                                    setNotifications((n) => ({ ...n, newMatches: !n.newMatches }))
                                }
                            />
                            <SettingRow
                                label="Messages"
                                description="Receive push notifications for new messages"
                                hasSwitch
                                enabled={notifications.messages}
                                onToggle={() =>
                                    setNotifications((n) => ({ ...n, messages: !n.messages }))
                                }
                            />
                            <SettingRow
                                label="Interview Reminders"
                                description="Get reminded before scheduled interviews"
                                hasSwitch
                                enabled={notifications.interviews}
                                onToggle={() =>
                                    setNotifications((n) => ({ ...n, interviews: !n.interviews }))
                                }
                            />
                            <SettingRow
                                label="Weekly Digest"
                                description="Receive weekly summary of your hiring activity"
                                hasSwitch
                                enabled={notifications.weeklyDigest}
                                onToggle={() =>
                                    setNotifications((n) => ({ ...n, weeklyDigest: !n.weeklyDigest }))
                                }
                            />
                        </GlassCard>
                    </View>
                );
        }
    };

    return (
        <View className="flex-1 bg-[#0F0C29]">
            <ScrollView
                className="flex-1 px-4"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: insets.top + 16, paddingBottom: 100 }}
            >
                {/* Header */}
                <Text className="text-2xl font-bold text-white mb-6">Settings</Text>

                {/* Navigation Tabs */}
                <GlassCard className="p-3 mb-6">
                    <NavItem
                        icon={<SettingsIcon size={18} color={activeSection === 'account' ? 'white' : 'rgba(255,255,255,0.6)'} />}
                        label="Account"
                        active={activeSection === 'account'}
                        onPress={() => setActiveSection('account')}
                        subItems={['Account Settings', 'Company Profile', 'Billing & Plans']}
                        activeSection={activeSection}
                    />
                    <NavItem
                        icon={<Key size={18} color={activeSection === 'integrations' ? 'white' : 'rgba(255,255,255,0.6)'} />}
                        label="Integrations"
                        active={activeSection === 'integrations'}
                        onPress={() => setActiveSection('integrations')}
                        subItems={['API Management', 'Slack', 'HR Tools', 'ATS Connectors']}
                        activeSection={activeSection}
                    />
                    <NavItem
                        icon={<Shield size={18} color={activeSection === 'access-control' ? 'white' : 'rgba(255,255,255,0.6)'} />}
                        label="Access Control"
                        active={activeSection === 'access-control'}
                        onPress={() => setActiveSection('access-control')}
                        subItems={['Permissions', 'Recruiters', 'Hiring Managers']}
                        activeSection={activeSection}
                    />
                    <NavItem
                        icon={<Bell size={18} color={activeSection === 'notification' ? 'white' : 'rgba(255,255,255,0.6)'} />}
                        label="Notifications"
                        active={activeSection === 'notification'}
                        onPress={() => setActiveSection('notification')}
                        subItems={['Push Notifications', 'Email Alerts', 'Digest Settings']}
                        activeSection={activeSection}
                    />
                </GlassCard>

                {/* Content */}
                {renderContent()}
            </ScrollView>
        </View>
    );
}
