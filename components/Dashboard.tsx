import {
  Target,
  Users,
  Compass,
  Zap,
  Layers,
  Sparkles,
  MessageCircleHeart,
  AlertCircle
} from 'lucide-react';
import GlassCard from './GlassCard';

const Dashboard = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 pb-12">
      {/* Hero Section */}
      <div className="mb-12 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#BB3DF6]/20 to-[#FF3A81]/20 border border-[#BB3DF6]/30 mb-6">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81] animate-pulse" />
          <span className="text-sm font-medium text-white/90">Elinity — Purpose Alignment Platform</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          The Purpose, Company, and People 
          <span className="text-gradient-main"> Alignment Platform</span>
        </h1>
        
        <p className="text-lg text-[#D9D9D9]/80 mb-3 leading-relaxed">
          Where skills become commodities and <span className="text-white font-semibold">purpose becomes the differentiator</span>
        </p>
        
        <p className="text-sm text-[#D9D9D9]/60 max-w-2xl mx-auto">
          Matching people and organizations by mission, values, leadership energy, cultural tone, and personal calling — built for a post-AGI world
        </p>
      </div>

      <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
        <div className="w-1 h-6 bg-gradient-to-b from-[#BB3DF6] to-[#FF3A81] rounded-full" />
        Company Deep Profile
      </h2>

      {/* Top Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Culture Score */}
        <GlassCard className="p-6 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-white font-semibold">Purpose Alignment</h3>
            <Target className="text-white/60" size={20} />
          </div>
          <div className="text-4xl font-bold text-white mb-2">87%</div>
          <div className="text-sm text-[#D9D9D9]/60 mb-6">Strong alignment</div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81] w-[87%]" />
          </div>
        </GlassCard>

        {/* Team Health */}
        <GlassCard className="p-6 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-white font-semibold">Team health</h3>
            <Users className="text-white/60" size={20} />
          </div>
          <div className="text-4xl font-bold text-white mb-2">92%</div>
          <div className="text-sm text-[#D9D9D9]/60 mb-6">Excellent Cohesion</div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#FF3A81] to-[#BB3DF6] w-[92%]" />
          </div>
        </GlassCard>

        {/* Purpose Fit */}
        <GlassCard className="p-6 relative overflow-hidden group bg-gradient-to-br from-[#191934]/60 to-[#2954FF]/20">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-white font-semibold">Mission Match</h3>
            <Sparkles className="text-white/60" size={20} />
          </div>
          <div className="text-4xl font-bold text-white mb-2">94%</div>
          <div className="text-sm text-[#D9D9D9]/60 mb-6">Calling Resonance</div>
          <div className="text-xs text-[#00FF94] font-medium">Deep purpose alignment</div>
        </GlassCard>
      </div>

      {/* AI Deep Profiling */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4 text-white font-semibold">
          <Compass size={20} />
          <h2>AI Deep Profiling</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Communication Tone */}
          <GlassCard className="p-6 lg:col-span-1 bg-[#191934]/40">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[#D9D9D9] font-medium">Communication Tone</h3>
              <MessageCircleHeart size={18} className="text-white/40" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Collaborative & Empathetic</h4>
            <p className="text-xs text-[#D9D9D9]/60 mb-8 leading-relaxed">
              Team demonstrates high emotional intelligence in communication
            </p>

            <div className="space-y-4">
              {[
                { label: 'Empathy', val: 90, color: 'bg-[#BB3DF6]' },
                { label: 'Clarity', val: 85, color: 'bg-[#BB3DF6]' },
                { label: 'Positivity', val: 88, color: 'bg-[#BB3DF6]' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-xs">
                  <span className="w-20 text-[#D9D9D9]">{item.label}</span>
                  <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }} />
                  </div>
                  <span className="text-[#D9D9D9]/60">{item.val}%</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Leadership Patterns */}
          <GlassCard className="p-6 lg:col-span-1 bg-[#191934]/60 relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[#D9D9D9] font-medium">Leadership</h3>
              <Users size={18} className="text-white/40" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Transformational</h4>
            <p className="text-xs text-[#D9D9D9]/60 mb-6 leading-relaxed">
              Leaders inspire through vision and personal connection
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#2A2A45] rounded-lg p-3 text-center border border-white/5">
                <div className="text-xs font-bold text-white mb-1">73% Visionary</div>
              </div>
              <div className="bg-[#2A2A45] rounded-lg p-3 text-center border border-white/5">
                <div className="text-xs font-bold text-white mb-1">68% Coaching</div>
              </div>
              <div className="bg-[#2A2A45] rounded-lg p-3 text-center border border-white/5">
                <div className="text-xs font-bold text-white mb-1">81% Democratic</div>
              </div>
              <div className="bg-[#2A2A45] rounded-lg p-3 text-center border border-white/5">
                <div className="text-xs font-bold text-white mb-1">59% Pacesetting</div>
              </div>
            </div>
          </GlassCard>

          {/* Cultural */}
          <GlassCard className="p-6 lg:col-span-1 bg-[#191934]/40">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[#D9D9D9] font-medium">Cultural Energy</h3>
              <Zap size={18} className="text-white/40" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Creative Builder</h4>
            <p className="text-xs text-[#D9D9D9]/60 mb-6 leading-relaxed">
              Innovation-driven with strong execution focus
            </p>

            <div className="space-y-3">
              {[
                "High creativity & innovation",
                "Results-oriented execution",
                "Collaborative problem-solving"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs text-[#D9D9D9]">
                  <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-2 h-1 border-l border-b border-white rotate-[-45deg] translate-y-[-1px]" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Team Personality & Value Distribution */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4 text-white font-semibold">
          <Users size={20} />
          <h2>Team Personality & Value Distribution</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personality Distribution - Donut Chart */}
          <GlassCard className="p-6 flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-full flex justify-between items-start mb-4">
              <h3 className="text-white font-semibold">Personality Distribution</h3>
            </div>

            <div className="relative w-48 h-48">
              {/* CSS Conic Gradient Donut */}
              <div className="w-full h-full rounded-full" style={{
                background: 'conic-gradient(#BB3DF6 0% 35%, #9F32D2 35% 65%, #7B2CBF 65% 100%)',
                maskImage: 'radial-gradient(transparent 55%, black 56%)',
                WebkitMaskImage: 'radial-gradient(transparent 55%, black 56%)'
              }} />

              {/* Labels positioned absolutely - approximate positions */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <span className="absolute top-[10%] left-[10%] text-xs text-[#D9D9D9]">Strategic</span>
                <span className="absolute top-[20%] right-[-10%] text-xs text-[#D9D9D9]">Analytical</span>
                <span className="absolute bottom-[10%] right-[0%] text-xs text-[#D9D9D9]">Creative</span>
                <span className="absolute bottom-[20%] left-[-10%] text-xs text-[#D9D9D9]">Collaborative</span>
              </div>
            </div>
          </GlassCard>

          {/* Value Distribution - Bar Chart */}
          <GlassCard className="p-6 min-h-[300px]">
            <h3 className="text-white font-semibold mb-8">Value Distribution</h3>

            <div className="h-48 flex items-end justify-between gap-4 px-4 relative">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div className="w-full h-[1px] bg-white/5" />
                <div className="w-full h-[1px] bg-white/5" />
                <div className="w-full h-[1px] bg-white/5" />
                <div className="w-full h-[1px] bg-white/5" />
                <div className="w-full h-[1px] bg-white/5" />
              </div>

              {/* Bars */}
              {[
                { label: 'Innovation', h: '80%' },
                { label: 'Collaborative', h: '70%' },
                { label: 'Integrity', h: '90%' },
                { label: 'Growth', h: '75%' },
                { label: 'Impact', h: '85%' },
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center gap-2 w-full z-10">
                  <div className="w-full bg-gradient-to-t from-[#2954FF] to-[#BB3DF6] rounded-t-lg opacity-80 hover:opacity-100 transition-opacity" style={{ height: bar.h }} />
                  <span className="text-[10px] text-[#D9D9D9]/60">{bar.label}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* AI Insights & Notes */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4 text-white font-semibold">
          <Layers size={20} />
          <h2>AI Insights & Notes</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Strength */}
          <GlassCard className="p-6 bg-[#191934]/40">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-white font-bold text-lg">Strength</h3>
              <Layers size={18} className="text-white/40" />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-[#D9D9D9] leading-relaxed">Exceptional emotional intelligence across all levels</p>
              <div className="h-[1px] bg-white/5" />
              <p className="text-xs text-[#D9D9D9] leading-relaxed">Strong innovation culture with practical execution</p>
              <div className="h-[1px] bg-white/5" />
              <p className="text-xs text-[#D9D9D9] leading-relaxed">High psychological safety enabling open communication</p>
              <div className="h-[1px] bg-white/5" />
              <p className="text-xs text-[#D9D9D9] leading-relaxed">Diverse perspectives creating robust solutions</p>
            </div>
          </GlassCard>

          {/* Culture Challenges */}
          <GlassCard className="p-6 bg-[#191934]/40">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-white font-bold text-lg">Culture Challenges</h3>
              <AlertCircle size={18} className="text-white/40" />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-[#D9D9D9] leading-relaxed">Potential for analysis paralysis in decision making</p>
              <div className="h-[1px] bg-white/5" />
              <p className="text-xs text-[#D9D9D9] leading-relaxed">Need for clearer role boundaries in collaborative projects</p>
              <div className="h-[1px] bg-white/5" />
              <p className="text-xs text-[#D9D9D9] leading-relaxed">Balancing innovation with operational efficiency</p>
              <div className="h-[1px] bg-white/5" />
              <p className="text-xs text-[#D9D9D9] leading-relaxed">Managing high achiever stress levels</p>
            </div>
          </GlassCard>

          {/* Energy Profile */}
          <GlassCard className="p-6 bg-[#191934]/40">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-white font-bold text-lg">Energy Profile</h3>
              <Zap size={18} className="text-white/40" />
            </div>
            <div className="space-y-4">
              {[
                { label: 'Innovation Energy', val: 'High', color: 'text-[#BB3DF6]' },
                { label: 'Collaboration', val: 'Very High', color: 'text-[#FF3A81]' },
                { label: 'Execution', val: 'High', color: 'text-[#BB3DF6]' },
                { label: 'Adaptability', val: 'High', color: 'text-[#BB3DF6]' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <span className="text-[#D9D9D9]">{item.label}</span>
                  <span className={`font-bold ${item.color}`}>{item.val}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Employee Insights Dashboard */}
      <div>
        <div className="flex items-center gap-2 mb-4 text-white font-semibold">
          <Users size={20} />
          <h2>Employee Insights Dashboard</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { val: '94%', label: 'Satisfaction Score', color: 'text-[#BB3DF6]' },
            { val: '87%', label: 'Would Recommend', color: 'text-[#BB3DF6]' },
            { val: '91%', label: 'Feel Valued', color: 'text-[#BB3DF6]' },
            { val: '83%', label: 'Growth Opportunities', color: 'text-[#BB3DF6]' },
          ].map((stat, i) => (
            <GlassCard key={i} className="p-6 flex items-center justify-center bg-[#191934]/30">
              <div className="text-center">
                <span className={`text-xl font-bold ${stat.color} mr-2`}>{stat.val}</span>
                <span className="text-sm text-[#D9D9D9]">{stat.label}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
