import { 
  MapPin, 
  Briefcase, 
  Award,
  Heart,
  Users,
  Leaf,
  Lightbulb,
  Download,
  Mail
} from 'lucide-react';
import GlassCard from './GlassCard';

const CandidatePublicProfile = () => {
  const values = [
    {
      icon: <Users size={24} />,
      title: 'Human-Centered',
      description: 'Designing with empathy and inclusivity',
      gradient: 'from-[#BB3DF6] to-[#FF3A81]'
    },
    {
      icon: <Leaf size={24} />,
      title: 'Sustainability',
      description: 'Creating eco-conscious design solutions',
      gradient: 'from-[#00FF94] to-[#00C9FF]'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Innovation',
      description: 'Pushing boundaries with creative thinking',
      gradient: 'from-[#FF3A81] to-[#BB3DF6]'
    },
    {
      icon: <Heart size={24} />,
      title: 'Collaboration',
      description: 'Building together for better outcomes',
      gradient: 'from-[#008CFF] to-[#BB3DF6]'
    }
  ];

  const projects = [
    {
      title: 'FinTech Mobile App Redesign',
      description: 'Led complete UX overhaul increasing user engagement by 340% and reducing support tickets by 86%',
      tags: ['UX Research', 'Prototyping', '340+ Hours'],
      image: 'linear-gradient(135deg, #BB3DF6, #FF3A81)',
      caseStudyLink: true
    },
    {
      title: 'E-Commerce Platform Innovation',
      description: 'Designed AI-Powered shopping experience that increased conversion rates by 85% across all demographics',
      tags: ['AI Integration', '340+ Hours', 'UI/UX/Brand'],
      image: 'linear-gradient(135deg, #008CFF, #00C9FF)',
      caseStudyLink: true
    }
  ];

  const awards = [
    {
      icon: <Award size={24} />,
      title: 'Design Excellence Award 2024',
      description: 'Recognized by Adobe for outstanding contribution to accessible design practices in tech',
      badge: 'Adobe Design Award',
      gradient: 'from-[#BB3DF6] to-[#FF3A81]'
    },
    {
      icon: <Users size={24} />,
      title: 'Top 1% Designer on Dribble',
      description: 'Achieved top percentile with 500+ followers and 2M+ total views across portfolio',
      badge: 'Dribble Community Award',
      gradient: 'from-[#FF3A81] to-[#BB3DF6]'
    }
  ];

  const personalityTraits = [
    { label: 'Creative', score: '92%', gradient: 'from-[#BB3DF6] to-[#FF3A81]' },
    { label: 'Analytical', score: '88%', gradient: 'from-[#008CFF] to-[#00C9FF]' },
    { label: 'Collaborative', score: '95%', gradient: 'from-[#FF3A81] to-[#BB3DF6]' },
    { label: 'Adaptable', score: '87%', gradient: 'from-[#00FF94] to-[#00C9FF]' }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-12">
      {/* Header Profile Card */}
      <GlassCard className="p-6 sm:p-8 mb-8 bg-gradient-to-br from-[#191934]/80 to-[#2A2A45]/60">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Profile Image */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#BB3DF6] flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
              alt="Sarah Chen" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1 w-full">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Sarah Chen</h1>
            <p className="text-[#D9D9D9] text-base sm:text-lg mb-3">Senior UX Designer & Creative Strategist</p>
            
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[#D9D9D9]/70 text-xs sm:text-sm mb-4">
              <div className="flex items-center gap-1.5">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase size={16} />
                <span>5+ years experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award size={16} />
                <span>Stanford Design Program</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#BB3DF6]/30 transition-all duration-300 flex items-center gap-2">
                <Mail size={16} />
                Connect
              </button>
              <button className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <Download size={16} />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* My Mission Section */}
      <div className="mb-8">
        <GlassCard className="p-6 sm:p-8 bg-[#191934]/40 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#BB3DF6]/20 to-[#FF3A81]/10 mb-4 border border-white/10">
            <Heart className="text-[#BB3DF6]" size={24} />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">My Mission</h2>
          <p className="text-[#D9D9D9]/90 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
            "To create digital experiences that don't just look beautiful—they connect with people on an emotional level. I believe great design has the power to make technology more human, accessible, and meaningful in our daily lives."
          </p>
        </GlassCard>
      </div>

      {/* Values & Passion Section */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Values & Passion</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((value, index) => (
            <GlassCard key={index} className="p-6 bg-[#191934]/40 hover:bg-[#191934]/60 transition-all duration-300 text-center group">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} bg-opacity-20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-white font-bold text-base mb-2">{value.title}</h3>
              <p className="text-[#D9D9D9]/70 text-xs leading-relaxed">{value.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Featured Projects & Achievements */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Featured Projects & Achievements</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <GlassCard key={index} className="p-0 overflow-hidden bg-[#191934]/40 hover:bg-[#191934]/60 transition-all duration-300 group">
              {/* Project Image */}
              <div 
                className="h-48 sm:h-56 w-full relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                {/* Mockup overlay effect */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <div className="w-32 h-48 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-white font-bold text-base sm:text-lg mb-2">{project.title}</h3>
                <p className="text-[#D9D9D9]/70 text-xs sm:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-[#BB3DF6]/20 text-[#BB3DF6] text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* View Case Study Link */}
                {project.caseStudyLink && (
                  <button className="text-[#BB3DF6] text-sm font-medium hover:text-[#FF3A81] transition-colors inline-flex items-center gap-2 group/link">
                    View case study
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </button>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <GlassCard key={index} className="p-6 bg-[#191934]/40 hover:bg-[#191934]/60 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${award.gradient} bg-opacity-20 flex items-center justify-center flex-shrink-0 border border-white/10`}>
                  <div className="text-white">
                    {award.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-2">{award.title}</h3>
                  <p className="text-[#D9D9D9]/70 text-xs sm:text-sm leading-relaxed mb-3">
                    {award.description}
                  </p>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#BB3DF6]/20 text-[#BB3DF6] text-xs font-medium">
                    {award.badge}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Personality Snapshot */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Personality Snapshot</h2>
        <p className="text-[#D9D9D9]/60 text-sm mb-6">AI-Generated insights based on work style and achievements</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {personalityTraits.map((trait, index) => (
            <GlassCard key={index} className="p-6 bg-[#191934]/40 text-center hover:bg-[#191934]/60 transition-all duration-300">
              <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${trait.gradient} bg-clip-text text-transparent mb-2`}>
                {trait.score}
              </div>
              <div className="text-white font-medium text-sm sm:text-base">{trait.label}</div>
              <div className="text-[#D9D9D9]/60 text-xs mt-1">Strong Traits</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidatePublicProfile;
