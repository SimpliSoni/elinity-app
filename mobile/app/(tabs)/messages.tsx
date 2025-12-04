import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Image,
    FlatList,
    Keyboard,
} from 'react-native';
import {
    Search,
    Plus,
    Phone,
    Video,
    MoreVertical,
    Paperclip,
    Image as ImageIcon,
    Mic,
    Send,
    Sparkles,
    Bell,
    ChevronLeft,
    FileText,
    ArrowRight,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import GlassCard from '../../components/GlassCard';

type Conversation = {
    id: number;
    name: string;
    role: string;
    time: string;
    status: 'Active' | 'Pending' | 'Interview';
    avatar: string;
    lastMessage?: string;
};

type Message = {
    id: number;
    text: string;
    time: string;
    sender: 'me' | 'them';
    attachment?: { name: string; size: string };
};

const conversations: Conversation[] = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Senior UX Designer',
        time: '2m',
        status: 'Active',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100',
        lastMessage: "I'm available Tuesday or Wednesday...",
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Frontend Developer',
        time: '1h',
        status: 'Pending',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100',
        lastMessage: 'Looking forward to connecting!',
    },
    {
        id: 3,
        name: 'Emma Rodriguez',
        role: 'Product Manager',
        time: '3h',
        status: 'Interview',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100',
        lastMessage: 'Thank you for the opportunity.',
    },
];

const messages: Message[] = [
    {
        id: 1,
        text: "Hi, Thank you for reaching out about the Senior UX Designer position. I'm very interested in learning more about the role and the team.",
        time: '10:30 AM',
        sender: 'them',
    },
    {
        id: 2,
        text: "Great to hear from you, Sarah! I'd love to schedule a call to discuss the role in detail. What's your availability like this week?",
        time: '10:32 AM',
        sender: 'me',
    },
    {
        id: 3,
        text: "I'm available Tuesday or Wednesday afternoon. I've attached my updated portfolio for your review.",
        time: '11:15 AM',
        sender: 'them',
        attachment: { name: 'Sarah_Johnson_Portfolio.pdf', size: '2.4 MB' },
    },
];

// Conversation List View
const ConversationList = ({
    onSelectConversation,
    activeTab,
    setActiveTab,
}: {
    onSelectConversation: (conv: Conversation) => void;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View className="flex-1 bg-[#0F0C29]">
            <View className="px-4 pt-4" style={{ paddingTop: insets.top + 16 }}>
                {/* Header */}
                <View className="flex-row justify-between items-center mb-5">
                    <Text className="text-2xl font-bold text-white">Messages</Text>
                    <TouchableOpacity className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                        <Plus size={20} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Search */}
                <View className="relative mb-4">
                    <View className="absolute left-4 top-0 bottom-0 justify-center z-10">
                        <Search size={18} color="rgba(255,255,255,0.3)" />
                    </View>
                    <TextInput
                        placeholder="Search conversations..."
                        placeholderTextColor="rgba(255,255,255,0.3)"
                        className="w-full bg-[#2A2850]/40 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white"
                    />
                </View>

                {/* Tabs */}
                <View className="flex-row p-1 rounded-xl bg-[#2A2850]/40 border border-white/5 mb-4">
                    {['Active', 'Archived', 'All'].map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            onPress={() => setActiveTab(tab.toLowerCase())}
                            className={`flex-1 py-2.5 rounded-lg items-center ${
                                activeTab === tab.toLowerCase() ? 'overflow-hidden' : ''
                            }`}
                        >
                            {activeTab === tab.toLowerCase() ? (
                                <LinearGradient
                                    colors={['#BB3DF6', '#2954FF']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    className="absolute inset-0 rounded-lg"
                                    style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
                                />
                            ) : null}
                            <Text
                                className={`text-xs font-semibold ${
                                    activeTab === tab.toLowerCase() ? 'text-white' : 'text-white/50'
                                }`}
                            >
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Conversation List */}
            <FlatList
                data={conversations}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => onSelectConversation(item)}
                        className={`p-4 rounded-2xl mb-2.5 border ${
                            item.status === 'Active'
                                ? 'bg-[#4A47A3]/30 border-[#BB3DF6]/20'
                                : 'bg-[#2A2850]/30 border-white/5'
                        }`}
                    >
                        <View className="flex-row items-start gap-3">
                            <View className="relative">
                                <View className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/10">
                                    <Image
                                        source={{ uri: item.avatar }}
                                        className="w-full h-full"
                                    />
                                </View>
                                {item.status === 'Active' && (
                                    <View className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#00C2FF] border-2 border-[#0F0C29]" />
                                )}
                            </View>
                            <View className="flex-1 min-w-0">
                                <View className="flex-row justify-between items-start mb-1">
                                    <Text className="text-white font-bold text-sm" numberOfLines={1}>
                                        {item.name}
                                    </Text>
                                    <Text className="text-white/40 text-[11px] ml-2">{item.time}</Text>
                                </View>
                                <Text className="text-white/50 text-xs mb-2" numberOfLines={1}>
                                    {item.role}
                                </Text>
                                <Text className="text-white/40 text-[11px] mb-2" numberOfLines={1}>
                                    {item.lastMessage}
                                </Text>
                                <View
                                    className={`self-start px-2.5 py-1 rounded-md ${
                                        item.status === 'Active'
                                            ? 'bg-[#00C2FF]/15'
                                            : item.status === 'Pending'
                                            ? 'bg-[#BB3DF6]/15'
                                            : 'bg-[#2954FF]/15'
                                    }`}
                                >
                                    <Text
                                        className={`text-[11px] font-semibold ${
                                            item.status === 'Active'
                                                ? 'text-[#00C2FF]'
                                                : item.status === 'Pending'
                                                ? 'text-[#BB3DF6]'
                                                : 'text-[#2954FF]'
                                        }`}
                                    >
                                        {item.status}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                ListFooterComponent={() => (
                    <GlassCard className="p-5 mt-4">
                        <View className="flex-row items-start gap-3">
                            <View className="p-2 rounded-lg bg-white/5">
                                <Bell size={18} color="white" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-white font-bold text-sm mb-1.5">
                                    Smart Reminder
                                </Text>
                                <Text className="text-white/60 text-xs leading-relaxed mb-4">
                                    Follow up with Sarah Johnson about portfolio feedback
                                </Text>
                                <View className="flex-row gap-3">
                                    <TouchableOpacity className="px-4 py-2 rounded-lg bg-[#BB3DF6]">
                                        <Text className="text-white text-xs font-bold">Remind Later</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text className="text-white/40 text-xs font-medium py-2">
                                            Dismiss
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </GlassCard>
                )}
            />
        </View>
    );
};

// Chat View
const ChatView = ({
    conversation,
    onBack,
}: {
    conversation: Conversation;
    onBack: () => void;
}) => {
    const insets = useSafeAreaInsets();
    const [messageInput, setMessageInput] = useState('');
    const scrollViewRef = useRef<ScrollView>(null);
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const showSub = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
        const hideSub = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
        return () => {
            showSub.remove();
            hideSub.remove();
        };
    }, []);

    const handleSend = () => {
        if (messageInput.trim()) {
            // Handle send message
            setMessageInput('');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-[#0F0C29]"
            keyboardVerticalOffset={0}
        >
            {/* Chat Header */}
            <View
                className="px-4 py-3 border-b border-white/10 bg-[#2A2850]/40"
                style={{ paddingTop: insets.top + 8 }}
            >
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-3 flex-1">
                        <TouchableOpacity onPress={onBack} className="p-2 -ml-2">
                            <ChevronLeft size={24} color="white" />
                        </TouchableOpacity>
                        <View className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/10">
                            <Image source={{ uri: conversation.avatar }} className="w-full h-full" />
                        </View>
                        <View className="flex-1 min-w-0">
                            <Text className="text-white font-bold text-base" numberOfLines={1}>
                                {conversation.name}
                            </Text>
                            <View className="flex-row items-center gap-2">
                                <Text className="text-white/50 text-xs" numberOfLines={1}>
                                    {conversation.role}
                                </Text>
                                <View className="w-1 h-1 rounded-full bg-white/30" />
                                <Text className="text-[#00C2FF] text-xs font-medium">Online</Text>
                            </View>
                        </View>
                    </View>
                    <View className="flex-row items-center gap-1">
                        <TouchableOpacity className="p-2.5 rounded-lg">
                            <Phone size={18} color="rgba(255,255,255,0.6)" />
                        </TouchableOpacity>
                        <TouchableOpacity className="p-2.5 rounded-lg">
                            <Video size={18} color="rgba(255,255,255,0.6)" />
                        </TouchableOpacity>
                        <TouchableOpacity className="p-2.5 rounded-lg">
                            <MoreVertical size={18} color="rgba(255,255,255,0.6)" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Messages */}
            <ScrollView
                ref={scrollViewRef}
                className="flex-1 px-4"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 20 }}
                onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
            >
                {/* Date Separator */}
                <View className="items-center mb-5">
                    <View className="px-4 py-1.5 rounded-full bg-[#2A2850]/50">
                        <Text className="text-white/40 text-xs font-medium">Today</Text>
                    </View>
                </View>

                {messages.map((msg) => (
                    <View
                        key={msg.id}
                        className={`flex-row items-start gap-3 mb-5 max-w-[85%] ${
                            msg.sender === 'me' ? 'self-end flex-row-reverse' : 'self-start'
                        }`}
                    >
                        <View className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/10">
                            <Image
                                source={{
                                    uri:
                                        msg.sender === 'me'
                                            ? 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100'
                                            : conversation.avatar,
                                }}
                                className="w-full h-full"
                            />
                        </View>
                        <View className="flex-1">
                            <View
                                className={`p-4 rounded-2xl border border-white/10 ${
                                    msg.sender === 'me'
                                        ? 'rounded-tr-sm bg-[#3A3663]/40'
                                        : 'rounded-tl-sm bg-[#3A3663]/50'
                                }`}
                            >
                                <Text className="text-white/90 text-sm leading-relaxed">{msg.text}</Text>

                                {msg.attachment && (
                                    <TouchableOpacity className="flex-row items-center gap-3 p-3.5 rounded-xl bg-[#2A2850]/50 border border-white/10 mt-3">
                                        <View className="w-10 h-10 rounded-lg bg-[#BB3DF6]/10 items-center justify-center">
                                            <FileText size={20} color="#BB3DF6" />
                                        </View>
                                        <View className="flex-1 min-w-0">
                                            <Text className="text-white text-xs font-semibold" numberOfLines={1}>
                                                {msg.attachment.name}
                                            </Text>
                                            <Text className="text-white/40 text-[11px] mt-0.5">
                                                {msg.attachment.size}
                                            </Text>
                                        </View>
                                        <View className="p-2 rounded-lg bg-white/5">
                                            <ArrowRight size={16} color="rgba(255,255,255,0.5)" style={{ transform: [{ rotate: '90deg' }] }} />
                                        </View>
                                    </TouchableOpacity>
                                )}
                            </View>
                            <Text
                                className={`text-white/30 text-[11px] mt-1.5 ${
                                    msg.sender === 'me' ? 'text-right' : ''
                                }`}
                            >
                                {msg.time}
                            </Text>
                        </View>
                    </View>
                ))}

                {/* AI Suggested Reply */}
                <GlassCard className="p-4 mt-4 border border-[#BB3DF6]/20">
                    <View className="flex-row items-center gap-2 mb-3">
                        <Sparkles size={16} color="#BB3DF6" />
                        <Text className="text-white font-bold text-sm">Suggested Reply</Text>
                    </View>
                    <Text className="text-white/70 text-xs leading-relaxed mb-4">
                        Perfect! I'll review your portfolio and get back to you by tomorrow. Let's
                        schedule our call for Wednesday at 2 PM - does that work for you?
                    </Text>
                    <View className="flex-row gap-3">
                        <TouchableOpacity className="px-4 py-2 rounded-lg bg-[#BB3DF6]">
                            <Text className="text-white text-xs font-bold">Use This</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="px-4 py-2 rounded-lg border border-white/10">
                            <Text className="text-white/60 text-xs font-medium">Edit</Text>
                        </TouchableOpacity>
                    </View>
                </GlassCard>
            </ScrollView>

            {/* Input Area */}
            <View
                className="px-4 py-3 bg-[#2A2850]/40 border-t border-white/10"
                style={{ paddingBottom: keyboardVisible ? 8 : insets.bottom + 8 }}
            >
                <View className="flex-row items-center gap-2">
                    <TouchableOpacity className="p-2">
                        <Paperclip size={20} color="rgba(255,255,255,0.4)" />
                    </TouchableOpacity>
                    <View className="flex-1 relative">
                        <TextInput
                            value={messageInput}
                            onChangeText={setMessageInput}
                            placeholder="Type your message..."
                            placeholderTextColor="rgba(255,255,255,0.3)"
                            className="w-full bg-[#1A1832]/60 border border-white/10 rounded-xl py-3 px-4 text-sm text-white pr-12"
                            multiline
                            maxLength={1000}
                        />
                        <TouchableOpacity className="absolute right-3 top-0 bottom-0 justify-center">
                            <Mic size={18} color="rgba(255,255,255,0.4)" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={handleSend}
                        className="overflow-hidden rounded-xl"
                    >
                        <LinearGradient
                            colors={['#BB3DF6', '#2954FF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            className="p-3"
                        >
                            <Send size={18} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default function Messages() {
    const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
    const [activeTab, setActiveTab] = useState('active');

    if (selectedConversation) {
        return (
            <ChatView
                conversation={selectedConversation}
                onBack={() => setSelectedConversation(null)}
            />
        );
    }

    return (
        <ConversationList
            onSelectConversation={setSelectedConversation}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />
    );
}
