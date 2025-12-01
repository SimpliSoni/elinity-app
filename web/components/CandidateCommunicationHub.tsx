import { useState } from 'react';
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
    Calendar,
    FileText,
    ArrowRight,
    Bell
} from 'lucide-react';

const CandidateCommunicationHub = () => {
    const [activeTab, setActiveTab] = useState<'active' | 'archived' | 'all'>('active');
    const [messageInput, setMessageInput] = useState('');

    const conversations = [
        { id: 1, name: 'Sarah Johnson', role: 'Senior UX Designer', time: '2m', status: 'Active', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100', active: true },
        { id: 2, name: 'Michael Chen', role: 'Frontend Developer', time: '1h', status: 'Pending', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100', active: false },
        { id: 3, name: 'Emma Rodriguez', role: 'Product Manager', time: '3h', status: 'Interview', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100', active: false },
    ];

    return (
        <div className="w-full min-h-[calc(100vh-120px)] max-w-[1800px] mx-auto px-2 sm:px-4 md:px-6 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 h-full">
                
                {/* Left Sidebar: Conversations List */}
                <div className="lg:col-span-3 flex flex-col gap-5 h-full overflow-hidden">
                    <div className="flex justify-between items-center pt-2">
                        <h2 className="text-xl md:text-2xl font-bold text-white">Conversations</h2>
                        <button className="p-2.5 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition-all duration-200">
                            <Plus size={20} />
                        </button>
                    </div>

                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search Conversation.." 
                            className="w-full bg-[#2A2850]/40 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#BB3DF6]/40 focus:bg-[#2A2850]/60 transition-all duration-200"
                        />
                    </div>

                    <div className="flex p-1 rounded-xl bg-[#2A2850]/40 border border-white/5 backdrop-blur-sm">
                        {['Active', 'Archived', 'All'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase() as any)}
                                className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                                    activeTab === tab.toLowerCase() 
                                    ? 'bg-gradient-to-r from-[#BB3DF6] to-[#2954FF] text-white shadow-lg shadow-[#BB3DF6]/20' 
                                    : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 custom-scrollbar">
                        {conversations.map((conv) => (
                            <div
                                key={conv.id} 
                                className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 border ${
                                    conv.active 
                                    ? 'bg-[#4A47A3]/30 border-[#BB3DF6]/20 shadow-lg shadow-[#BB3DF6]/5' 
                                    : 'bg-[#2A2850]/30 border-white/5 hover:bg-[#2A2850]/50 hover:border-white/10'
                                }`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className="relative flex-shrink-0">
                                        <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-white/10">
                                            <img src={conv.avatar} alt={conv.name} className="w-full h-full object-cover" />
                                        </div>
                                        {conv.active && <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#00C2FF] border-2 border-[#0F0C29]" />}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-white font-bold text-sm truncate">{conv.name}</h3>
                                            <span className="text-white/40 text-[11px] whitespace-nowrap ml-2">{conv.time}</span>
                                        </div>
                                        <p className="text-white/50 text-xs truncate mb-2.5">{conv.role}</p>
                                        <span className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                                            conv.status === 'Active' ? 'bg-[#00C2FF]/15 text-[#00C2FF]' :
                                            conv.status === 'Pending' ? 'bg-[#BB3DF6]/15 text-[#BB3DF6]' :
                                            'bg-[#2954FF]/15 text-[#2954FF]'
                                        }`}>
                                            {conv.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-5 rounded-2xl bg-[#2A2850]/30 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-white/5">
                                <Bell className="text-white" size={18} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-white font-bold text-sm mb-1.5">Smart Reminder</h4>
                                <p className="text-white/60 text-xs leading-relaxed mb-4">Follow up with Sarah Johnson about portfolio feedback</p>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 rounded-lg bg-[#BB3DF6] text-white text-xs font-bold hover:bg-[#D946EF] hover:shadow-lg hover:shadow-[#BB3DF6]/30 transition-all duration-200">
                                        Remind Later
                                    </button>
                                    <button className="text-white/40 text-xs font-medium hover:text-white transition-colors duration-200">
                                        Dismiss
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle: Chat Area */}
                <div className="lg:col-span-6 flex flex-col h-full min-h-[500px] md:min-h-[650px] rounded-2xl bg-[#2A2850]/20 border border-white/10 overflow-hidden backdrop-blur-sm">
                    {/* Chat Header */}
                    <div className="p-4 md:p-5 border-b border-white/10 bg-[#2A2850]/40 backdrop-blur-md flex justify-between items-center gap-2">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden ring-2 ring-white/10 flex-shrink-0">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" alt="Sarah" className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="text-white font-bold text-sm md:text-base truncate">Sarah Johnson</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-white/50 text-xs truncate">Senior UX Designer</span>
                                    <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                                    <span className="text-[#00C2FF] text-xs font-medium flex-shrink-0">Online</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                            <button className="p-2.5 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200">
                                <Phone size={18} />
                            </button>
                            <button className="p-2.5 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200">
                                <Video size={18} />
                            </button>
                            <button className="p-2.5 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-all duration-200">
                                <MoreVertical size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-5 custom-scrollbar">
                        <div className="flex justify-center">
                            <span className="px-4 py-1.5 rounded-full bg-[#2A2850]/50 text-white/40 text-xs font-medium">Today</span>
                        </div>

                        {/* Message Received */}
                        <div className="flex items-start gap-3 max-w-[80%]">
                            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/10 shrink-0">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" alt="Sarah" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="p-4 rounded-2xl rounded-tl-sm bg-[#3A3663]/50 border border-white/10 text-white/90 text-sm leading-relaxed">
                                    Hi, Thank you for reaching out about Senior UX Designer position. I'm very much interested in learning more about the role and the team
                                </div>
                                <span className="text-white/30 text-[11px] mt-1.5 block">10:30 AM</span>
                            </div>
                        </div>

                        {/* Message Sent */}
                        <div className="flex items-start gap-3 max-w-[80%] ml-auto flex-row-reverse">
                            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/10 shrink-0">
                                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100" alt="Me" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="p-4 rounded-2xl rounded-tr-sm bg-[#3A3663]/40 border border-white/10 text-white/90 text-sm leading-relaxed">
                                    Great to hear from you, Sarah I'd love to schedule a call to discuss the role in detail. What's your availability like this week?
                                </div>
                                <span className="text-white/30 text-[11px] mt-1.5 block text-right">10:32 AM</span>
                            </div>
                        </div>

                        {/* Message Received with Attachment */}
                        <div className="flex items-start gap-3 max-w-[80%]">
                            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/10 shrink-0">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" alt="Sarah" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <div className="p-4 rounded-2xl rounded-tl-sm bg-[#3A3663]/50 border border-white/10 text-white/90 text-sm leading-relaxed space-y-3">
                                    <p>I'm available Tuesday or Wednesday afternoon. I've attached my updated portfolio for your review</p>
                                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#2A2850]/50 border border-white/10 hover:border-[#BB3DF6]/40 transition-all duration-200 cursor-pointer group">
                                        <div className="w-10 h-10 rounded-lg bg-[#BB3DF6]/10 flex items-center justify-center text-white/70 group-hover:text-[#BB3DF6] group-hover:bg-[#BB3DF6]/20 transition-all">
                                            <FileText size={20} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-white text-xs font-semibold truncate">Sarah_Johnson_Portfolio.pdf</h4>
                                            <p className="text-white/40 text-[11px] mt-0.5">2.4 MB</p>
                                        </div>
                                        <div className="p-2 rounded-lg bg-white/5 text-white/50 group-hover:text-white group-hover:bg-white/10 transition-all">
                                            <ArrowRight size={16} className="rotate-90" />
                                        </div>
                                    </div>
                                </div>
                                <span className="text-white/30 text-[11px] mt-1.5 block">11:15 AM</span>
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 md:p-5 bg-[#2A2850]/40 backdrop-blur-md border-t border-white/10">
                        <div className="relative">
                            <input
                                type="text"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                placeholder="Type your message..."
                                className="w-full bg-[#1A1832]/60 border border-white/10 rounded-xl pl-4 pr-32 md:pr-36 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#BB3DF6]/40 focus:bg-[#1A1832]/80 transition-all duration-200"
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                <button className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-all duration-200 hidden sm:flex">
                                    <Paperclip size={18} />
                                </button>
                                <button className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-all duration-200 hidden sm:flex">
                                    <ImageIcon size={18} />
                                </button>
                                <button className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-all duration-200">
                                    <Mic size={18} />
                                </button>
                                <button className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#BB3DF6] to-[#2954FF] text-white text-xs font-bold hover:shadow-lg hover:shadow-[#BB3DF6]/30 transition-all duration-200 flex items-center gap-2 ml-1">
                                    <Send size={16} />
                                    <span className="hidden sm:inline">Send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar: AI & Actions */}
                <div className="lg:col-span-3 flex flex-col gap-5 h-full overflow-y-auto custom-scrollbar pt-2">
                    
                    {/* AI Assistant */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#BB3DF6] to-[#2954FF] flex items-center justify-center shadow-lg shadow-[#BB3DF6]/30">
                            <Sparkles className="text-white" size={18} />
                        </div>
                        <h2 className="text-xl font-bold text-white">AI Assistant</h2>
                    </div>

                    {/* Suggested Reply */}
                    <div className="p-5 rounded-2xl bg-[#2A2850]/30 border border-[#BB3DF6]/20 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-3">
                            <Sparkles size={16} className="text-[#BB3DF6]" />
                            <span className="text-white font-bold text-sm">Suggested Reply</span>
                        </div>
                        <p className="text-white/70 text-xs leading-relaxed mb-5">
                            Perfect I'll review your portfolio and get back to you by tomorrow. Let's schedule our call for Wednesday at 2 PM- does that work for you?
                        </p>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 rounded-lg bg-[#BB3DF6] text-white text-xs font-bold hover:bg-[#D946EF] hover:shadow-lg hover:shadow-[#BB3DF6]/30 transition-all duration-200">
                                Use This
                            </button>
                            <button className="px-4 py-2 rounded-lg bg-transparent border border-white/10 text-white/60 text-xs font-medium hover:text-white hover:bg-white/5 hover:border-white/20 transition-all duration-200">
                                Edit
                            </button>
                        </div>
                    </div>

                    {/* Conversation Insights */}
                    <div className="p-5 rounded-2xl bg-[#2A2850]/30 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-[#00C2FF] shadow-lg shadow-[#00C2FF]/50" />
                            <span className="text-white font-bold text-sm">Conversation Insights</span>
                        </div>
                        <ul className="space-y-3">
                            <li className="text-white/60 text-xs flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 flex-shrink-0" />
                                <span>Candidate is highly engaged</span>
                            </li>
                            <li className="text-white/60 text-xs flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 flex-shrink-0" />
                                <span>Response time: 2 minutes average</span>
                            </li>
                            <li className="text-white/60 text-xs flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 flex-shrink-0" />
                                <span>Sentiment: Positive</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Actions */}
                    <div>
                        <h3 className="text-white font-bold text-sm mb-4">Quick Action</h3>
                        <div className="space-y-3">
                            <button className="w-full p-4 rounded-xl bg-[#2A2850]/30 border border-white/10 hover:border-[#BB3DF6]/40 hover:bg-[#2A2850]/50 transition-all duration-200 group flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition-all">
                                    <Calendar size={18} />
                                </div>
                                <span className="text-white text-sm font-medium">Schedule Interview</span>
                            </button>
                            <button className="w-full p-4 rounded-xl bg-[#2A2850]/30 border border-white/10 hover:border-[#BB3DF6]/40 hover:bg-[#2A2850]/50 transition-all duration-200 group flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition-all">
                                    <FileText size={18} />
                                </div>
                                <span className="text-white text-sm font-medium">Send Assessment</span>
                            </button>
                            <button className="w-full p-4 rounded-xl bg-[#2A2850]/30 border border-white/10 hover:border-[#BB3DF6]/40 hover:bg-[#2A2850]/50 transition-all duration-200 group flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-white/10 transition-all">
                                    <ArrowRight size={18} />
                                </div>
                                <span className="text-white text-sm font-medium">Next Stage</span>
                            </button>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div>
                        <h3 className="text-white font-bold text-sm mb-4">Recent Activity</h3>
                        <div className="space-y-3">
                            <div className="p-4 rounded-xl bg-[#2A2850]/30 border border-white/10 backdrop-blur-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-[#00C2FF] shadow-lg shadow-[#00C2FF]/50" />
                                    <span className="text-white/50 text-[11px] font-medium">Portfolio received</span>
                                </div>
                                <p className="text-white text-xs font-semibold">Sarah uploaded her portfolio</p>
                            </div>
                            <div className="p-4 rounded-xl bg-[#2A2850]/30 border border-white/10 backdrop-blur-sm">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-[#2954FF] shadow-lg shadow-[#2954FF]/50" />
                                    <span className="text-white/50 text-[11px] font-medium">Interview Scheduled</span>
                                </div>
                                <p className="text-white text-xs font-semibold">Initial screening completed</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CandidateCommunicationHub;