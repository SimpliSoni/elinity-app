import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';
import {
    ArrowLeft,
    Plus,
    Save,
    Sparkles,
    Upload,
    Trash2,
    GripVertical,
    CheckSquare,
    Type,
    Settings,
    FileText,
    Zap,
    BarChart3,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import GlassCard from '../../components/GlassCard';

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface Template {
    id: string;
    icon: React.ReactNode;
    title: string;
    questions: string;
    duration: string;
    tags: string[];
    color: string;
}

interface Question {
    id: string;
    text: string;
    options: string[];
    points: number;
    timeLimit: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// MOCK DATA
// ─────────────────────────────────────────────────────────────────────────────
const templates: Template[] = [
    {
        id: '1',
        icon: <Zap size={16} color="#BB3DF6" />,
        title: 'Emotional Intelligence',
        questions: '25 questions',
        duration: '15 min',
        tags: ['Self-awareness', 'Empathy'],
        color: '#BB3DF6',
    },
    {
        id: '2',
        icon: <Settings size={16} color="#2954FF" />,
        title: 'Culture Fit',
        questions: '20 questions',
        duration: '12 min',
        tags: ['Teamwork', 'Values'],
        color: '#2954FF',
    },
    {
        id: '3',
        icon: <CheckSquare size={16} color="#FF3A81" />,
        title: 'Domain Skills',
        questions: '30 questions',
        duration: '20 min',
        tags: ['Problem-solving', 'Technical'],
        color: '#FF3A81',
    },
];

const aiFeatures = [
    {
        icon: <Type size={16} color="#BB3DF6" />,
        title: 'Generate Questions',
        desc: 'AI-powered question suggestions based on role requirements',
    },
    {
        icon: <BarChart3 size={16} color="#BB3DF6" />,
        title: 'Auto-Score Setup',
        desc: 'Intelligent scoring algorithms configuration',
    },
    {
        icon: <Zap size={16} color="#BB3DF6" />,
        title: 'Optimize Assessment',
        desc: 'Performance recommendations and bias checking',
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const TemplateCard = ({ template, isTablet }: { template: Template; isTablet: boolean }) => (
    <TouchableOpacity className="p-4 rounded-xl bg-[#2A2A45]/40 border border-white/5 mb-3">
        <View className="flex-row items-start gap-3">
            <View
                className="w-8 h-8 rounded-lg items-center justify-center"
                style={{ backgroundColor: `${template.color}20` }}
            >
                {template.icon}
            </View>
            <View className="flex-1">
                <Text className="text-white text-base font-bold">{template.title}</Text>
                <Text className="text-[#D9D9D9]/60 text-xs mb-2">
                    {template.questions} • {template.duration}
                </Text>
                <View className="flex-row flex-wrap gap-1">
                    {template.tags.map((tag, i) => (
                        <View key={i} className="px-2 py-1 rounded bg-[#2A2A45]">
                            <Text className="text-xs text-[#D9D9D9]">{tag}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

// ─────────────────────────────────────────────────────────────────────────────
// QUESTION CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const QuestionCard = ({
    question,
    onUpdate,
    onDelete,
    onAddOption,
    isTablet,
}: {
    question: Question;
    onUpdate: (field: string, value: any) => void;
    onDelete: () => void;
    onAddOption: () => void;
    isTablet: boolean;
}) => (
    <View style={{ position: 'relative', padding: 1, borderRadius: 16, marginBottom: 16 }}>
        <View className="bg-[#1E1B4B]/80 rounded-xl p-5 border border-[#BB3DF6]/30">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-white font-bold text-base">Question {question.id}</Text>
                <View className="flex-row items-center gap-2">
                    <TouchableOpacity className="p-1.5">
                        <GripVertical size={16} color="rgba(217, 217, 217, 0.4)" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onDelete} className="p-1.5">
                        <Trash2 size={16} color="#FF4141" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Question Text */}
            <View className="mb-4">
                <Text className="text-sm text-[#D9D9D9] font-medium mb-2">Question Text</Text>
                <TextInput
                    value={question.text}
                    onChangeText={(text) => onUpdate('text', text)}
                    placeholder="Enter your question here..."
                    placeholderTextColor="rgba(255,255,255,0.2)"
                    className="w-full bg-[#0F0C29]/50 border border-white/10 rounded-xl px-4 py-3 text-base text-white"
                />
            </View>

            {/* Answer Options */}
            <View className="mb-4">
                <Text className="text-sm text-[#D9D9D9] font-medium mb-2">Answer Options</Text>
                <View className="gap-3">
                    {question.options.map((option, i) => (
                        <View key={i} className="flex-row items-center gap-3">
                            <View className="w-4 h-4 rounded border border-white/20" />
                            <TextInput
                                value={option}
                                onChangeText={(text) => {
                                    const newOptions = [...question.options];
                                    newOptions[i] = text;
                                    onUpdate('options', newOptions);
                                }}
                                placeholder={`Option ${i + 1}`}
                                placeholderTextColor="rgba(255,255,255,0.2)"
                                className="flex-1 bg-[#2A2A45]/50 border border-white/5 rounded-lg px-3 py-2.5 text-sm text-white"
                            />
                        </View>
                    ))}
                </View>
                <TouchableOpacity onPress={onAddOption} className="flex-row items-center gap-1 mt-3">
                    <Plus size={14} color="#BB3DF6" />
                    <Text className="text-[#BB3DF6] text-sm font-medium">Add Option</Text>
                </TouchableOpacity>
            </View>

            {/* Points and Time */}
            <View style={{ flexDirection: 'row', gap: 16 }}>
                <View style={{ flex: 1 }} className="mb-0">
                    <Text className="text-sm text-[#D9D9D9] font-medium mb-2">Points</Text>
                    <TextInput
                        value={String(question.points)}
                        onChangeText={(text) => onUpdate('points', parseInt(text) || 0)}
                        keyboardType="numeric"
                        className="w-full bg-[#0F0C29]/50 border border-white/10 rounded-xl px-4 py-3 text-base text-white"
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text className="text-sm text-[#D9D9D9] font-medium mb-2">Time Limit (seconds)</Text>
                    <TextInput
                        value={String(question.timeLimit)}
                        onChangeText={(text) => onUpdate('timeLimit', parseInt(text) || 0)}
                        keyboardType="numeric"
                        className="w-full bg-[#0F0C29]/50 border border-white/10 rounded-xl px-4 py-3 text-base text-white"
                    />
                </View>
            </View>
        </View>
    </View>
);

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function TestBuilder() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    
    // Dynamic responsive check that handles rotation
    const isLandscape = width > height;
    const isTablet = width > 768 || (isLandscape && width > 600);
    const isLargeTablet = width > 1024;

    const [assessmentTitle, setAssessmentTitle] = useState('');
    const [category, setCategory] = useState('Emotional Intelligence');
    const [description, setDescription] = useState('');
    const [questions, setQuestions] = useState<Question[]>([
        { id: '1', text: '', options: ['', ''], points: 10, timeLimit: 60 },
    ]);

    const addQuestion = () => {
        setQuestions([
            ...questions,
            { id: String(questions.length + 1), text: '', options: ['', ''], points: 10, timeLimit: 60 },
        ]);
    };

    const updateQuestion = (id: string, field: string, value: any) => {
        setQuestions(
            questions.map((q) => (q.id === id ? { ...q, [field]: value } : q))
        );
    };

    const deleteQuestion = (id: string) => {
        if (questions.length > 1) {
            setQuestions(questions.filter((q) => q.id !== id));
        }
    };

    const addOption = (id: string) => {
        setQuestions(
            questions.map((q) =>
                q.id === id ? { ...q, options: [...q.options, ''] } : q
            )
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#0F0C29' }}>
            {/* Header */}
            <View style={{ paddingTop: insets.top }} className="bg-[#0F0C29] border-b border-white/5">
                <View className="flex-row items-center justify-between px-4 py-4">
                    <View className="flex-row items-center gap-3">
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="w-10 h-10 rounded-full bg-white/10 items-center justify-center"
                        >
                            <ArrowLeft size={20} color="white" />
                        </TouchableOpacity>
                        <View>
                            <Text className="text-xl font-bold text-white">Test Builder</Text>
                            <Text className="text-[#D9D9D9]/60 text-xs">Design tailored assessments</Text>
                        </View>
                    </View>
                </View>

                {/* Action Buttons */}
                <View className="flex-row gap-3 px-4 pb-4">
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2A2A45] border border-white/10">
                        <Save size={14} color="white" />
                        <Text className="text-white text-xs font-bold">Save Draft</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center gap-2 px-4 py-2.5 rounded-xl overflow-hidden">
                        <LinearGradient
                            colors={['#BB3DF6', '#2954FF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            className="absolute inset-0"
                        />
                        <Plus size={14} color="white" />
                        <Text className="text-white text-xs font-bold relative z-10">New Assessment</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingTop: 16,
                    paddingBottom: 40 + insets.bottom,
                }}
            >
                {/* Main Content - Two Column Layout for Tablets */}
                <View className={isLargeTablet ? 'flex-row gap-6' : ''}>
                    {/* Left Column - Question Builder */}
                    <View style={isLargeTablet ? { flex: 2 } : undefined}>
                        <GlassCard noPadding className="bg-[#191934]/60 mb-5">
                            <View className="p-5">
                                {/* Section Header */}
                                <View className="flex-row items-center justify-between mb-5">
                                    <View className="flex-row items-center gap-2">
                                        <FileText size={20} color="white" />
                                        <Text className="text-white font-bold text-lg">Question Builder</Text>
                                    </View>
                                    <View className="flex-row gap-2">
                                        <TouchableOpacity className="flex-row items-center gap-2 px-3 py-1.5 rounded-lg bg-[#BB3DF6]">
                                            <Sparkles size={14} color="white" />
                                            <Text className="text-white text-sm font-bold">AI Assist</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity className="flex-row items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2A2A45] border border-white/10">
                                            <Upload size={14} color="rgba(217, 217, 217, 0.6)" />
                                            <Text className="text-[#D9D9D9] text-sm font-medium">Export</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {/* Assessment Metadata */}
                                <View className={`${isTablet ? 'flex-row' : ''} gap-4 mb-4`}>
                                    <View style={isTablet ? { flex: 1 } : undefined} className="mb-3">
                                        <Text className="text-sm text-[#D9D9D9] font-medium mb-2">Assessment Title</Text>
                                        <TextInput
                                            value={assessmentTitle}
                                            onChangeText={setAssessmentTitle}
                                            placeholder="Enter assessment name..."
                                            placeholderTextColor="rgba(255,255,255,0.2)"
                                            className="w-full bg-[#0F0C29]/50 border border-white/10 rounded-xl px-4 py-3 text-base text-white"
                                        />
                                    </View>
                                    <View style={isTablet ? { flex: 1 } : undefined}>
                                        <Text className="text-sm text-[#D9D9D9] font-medium mb-2">Category</Text>
                                        <TouchableOpacity className="w-full bg-[#0F0C29]/50 border border-white/10 rounded-xl px-4 py-3 flex-row justify-between items-center">
                                            <Text className="text-white text-base">{category}</Text>
                                            <Text className="text-[#D9D9D9]/40">▼</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {/* Description */}
                                <View className="mb-6">
                                    <Text className="text-sm text-[#D9D9D9] font-medium mb-2">Description</Text>
                                    <TextInput
                                        value={description}
                                        onChangeText={setDescription}
                                        placeholder="Describe the purpose and scope of this assessment..."
                                        placeholderTextColor="rgba(255,255,255,0.2)"
                                        multiline
                                        numberOfLines={3}
                                        textAlignVertical="top"
                                        className="w-full h-24 bg-[#0F0C29]/50 border border-white/10 rounded-xl px-4 py-3 text-base text-white"
                                    />
                                </View>

                            {/* Questions */}
                            {questions.map((question) => (
                                <QuestionCard
                                    key={question.id}
                                    question={question}
                                    onUpdate={(field, value) => updateQuestion(question.id, field, value)}
                                    onDelete={() => deleteQuestion(question.id)}
                                    onAddOption={() => addOption(question.id)}
                                    isTablet={isTablet}
                                />
                            ))}

                                {/* Add Question Button */}
                                <TouchableOpacity
                                    onPress={addQuestion}
                                    className="w-full py-4 rounded-xl border border-dashed border-white/20 items-center justify-center flex-row gap-2"
                                >
                                    <Plus size={18} color="rgba(217, 217, 217, 0.6)" />
                                    <Text className="text-[#D9D9D9]/60 text-base font-medium">Add New Question</Text>
                                </TouchableOpacity>
                            </View>
                        </GlassCard>
                    </View>

                    {/* Right Column - Templates & Tools */}
                    <View style={isLargeTablet ? { flex: 1 } : undefined}>
                        {/* Template Library */}
                        <GlassCard noPadding className="bg-[#191934]/60 mb-5">
                            <View className="p-5">
                                <View className="flex-row items-center gap-2 mb-2">
                                    <CheckSquare size={20} color="white" />
                                    <Text className="text-white font-bold text-lg">Template Library</Text>
                                </View>
                                <Text className="text-[#D9D9D9]/60 text-sm mb-4">
                                    Choose from pre-built assessment templates
                                </Text>

                                {templates.map((template) => (
                                    <TemplateCard key={template.id} template={template} isTablet={isTablet} />
                                ))}
                            </View>
                        </GlassCard>

                        {/* Upload Area */}
                        <GlassCard noPadding className="bg-[#191934]/40 border border-dashed border-white/10 mb-5">
                            <View className="p-6 items-center">
                                <View className="w-12 h-12 rounded-full bg-white/5 items-center justify-center mb-4">
                                    <Upload size={20} color="white" />
                                </View>
                                <Text className="text-white font-bold text-base mb-1">Upload Custom Assessment</Text>
                                <Text className="text-[#D9D9D9]/60 text-sm text-center">
                                    Import from PDF, Word or Excel
                                </Text>
                            </View>
                        </GlassCard>
                    </View>
                </View>

                {/* AI Assessment Assistant */}
                <GlassCard noPadding className="border border-[#BB3DF6]/20 relative overflow-hidden">
                    <LinearGradient
                        colors={['rgba(25, 25, 52, 0.9)', 'rgba(15, 12, 41, 0.9)']}
                        className="absolute inset-0 rounded-[24px]"
                    />
                    <View className="p-5">
                        <View className="flex-row items-center gap-3 mb-6 relative z-10">
                            <View className="w-10 h-10 rounded-xl items-center justify-center overflow-hidden">
                                <LinearGradient
                                    colors={['#BB3DF6', '#2954FF']}
                                    className="absolute inset-0"
                                />
                                <Sparkles size={20} color="white" />
                            </View>
                            <View>
                                <Text className="text-white font-bold text-lg">AI Assessment Assistant</Text>
                                <Text className="text-[#D9D9D9]/60 text-sm">
                                    Get intelligent suggestions for question design
                                </Text>
                            </View>
                        </View>

                        <View className={`${isTablet ? 'flex-row' : ''} gap-3 relative z-10`}>
                            {aiFeatures.map((feature, i) => (
                                <TouchableOpacity
                                    key={i}
                                    className="p-4 rounded-xl bg-[#2A2A45]/40 border border-white/5 flex-1"
                                >
                                    <View className="flex-row items-center gap-2 mb-2">
                                        {feature.icon}
                                        <Text className="text-[#BB3DF6] font-bold text-base">{feature.title}</Text>
                                    </View>
                                    <Text className="text-[#D9D9D9]/60 text-sm">{feature.desc}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </GlassCard>
            </ScrollView>
        </View>
    );
}
