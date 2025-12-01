import { TrendingUp, Filter, FileText, RefreshCw, BarChart3, PieChart, Activity } from 'lucide-react';
import GlassCard from './GlassCard';

const AnalyticsMatchQuality = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-12">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Analytics & Match Quality</h1>
          <p className="text-sm text-[#D9D9D9]/60">Data intelligence hub for hiring trends and match performance</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
            <Filter size={16} />
            Filter
          </button>
          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
            <FileText size={16} />
            Export
          </button>
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81] text-white text-sm hover:shadow-lg hover:shadow-[#BB3DF6]/20 transition-all duration-300 flex items-center gap-2">
            <RefreshCw size={16} />
            Refresh Data
          </button>
        </div>
      </div>

      {/* Top Stats - 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {/* Average Match Success Rate */}
        <GlassCard className="p-6 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#BB3DF6]/20 to-[#FF3A81]/10 flex items-center justify-center border border-white/10">
              <BarChart3 className="text-[#BB3DF6]" size={20} />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-white mb-1">87.3%</div>
          <div className="text-xs text-[#D9D9D9]/60">Average Match Success Rate</div>
        </GlassCard>

        {/* Quality Score */}
        <GlassCard className="p-6 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#008CFF]/20 to-[#00C9FF]/10 flex items-center justify-center border border-white/10">
              <Activity className="text-[#008CFF]" size={20} />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-white mb-1">92.1%</div>
          <div className="text-xs text-[#D9D9D9]/60">Quality Score</div>
        </GlassCard>

        {/* Average Time-to-Hire */}
        <GlassCard className="p-6 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF3A81]/20 to-[#BB3DF6]/10 flex items-center justify-center border border-white/10">
              <TrendingUp className="text-[#FF3A81]" size={20} />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-white mb-1">8.7/10</div>
          <div className="text-xs text-[#D9D9D9]/60">Average Time-to-Hire</div>
        </GlassCard>

        {/* Performance Score */}
        <GlassCard className="p-6 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00FF94]/20 to-[#00C9FF]/10 flex items-center justify-center border border-white/10">
              <PieChart className="text-[#00FF94]" size={20} />
            </div>
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-white mb-1">94.5%</div>
          <div className="text-xs text-[#D9D9D9]/60">Performance Score</div>
        </GlassCard>
      </div>

      {/* Analytics Hub Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-white font-semibold">
            <BarChart3 size={20} />
            <h2 className="text-lg sm:text-xl">Analytics Hub</h2>
          </div>
          <select className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#BB3DF6]/50">
            <option>Match Analytics</option>
            <option>Success Ratio</option>
            <option>Quality Metrics</option>
            <option>Performance Trends</option>
            <option>Retention Data</option>
            <option>Employee Retention</option>
            <option>Performance Over Time</option>
            <option>Culture Fit</option>
            <option>Fit Index Evolution</option>
            <option>Team Compatibility</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Match Success Rate Trends - Pie Chart */}
          <GlassCard className="p-6 bg-[#191934]/40">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-white font-semibold mb-1">Match Success Rate Trends</h3>
                <p className="text-xs text-[#D9D9D9]/60">Growth in matching quality over time</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 min-h-[280px]">
              {/* Pie Chart */}
              <div className="relative w-48 h-48 flex-shrink-0">
                <div className="w-full h-full rounded-full" style={{
                  background: 'conic-gradient(#BB3DF6 0% 40%, #9F32D2 40% 75%, #7B2CBF 75% 100%)',
                  maskImage: 'radial-gradient(transparent 52%, black 53%)',
                  WebkitMaskImage: 'radial-gradient(transparent 52%, black 53%)'
                }} />
              </div>

              {/* Legend */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#BB3DF6]"></div>
                  <span className="text-sm text-[#D9D9D9]">Success Rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#9F32D2]"></div>
                  <span className="text-sm text-[#D9D9D9]">Moderate</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Retention & Performance Data - Line Chart */}
          <GlassCard className="p-6 bg-[#191934]/40">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-white font-semibold mb-1">Retention & Performance Data</h3>
                <p className="text-xs text-[#D9D9D9]/60">Employee performance over time</p>
              </div>
            </div>

            <div className="h-[280px] relative">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-full h-[1px] bg-white/5" />
                ))}
              </div>

              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#D9D9D9]/40 pr-2">
                <span>94%</span>
                <span>92%</span>
                <span>90%</span>
                <span>88%</span>
                <span>86%</span>
                <span>84%</span>
              </div>

              {/* Chart area */}
              <div className="ml-8 h-full relative">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  {/* Retention line */}
                  <polyline
                    points="0,45 10,42 20,38 30,40 40,35 50,30 60,28 70,25 80,22 90,20 100,18"
                    fill="none"
                    stroke="#BB3DF6"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                  {/* Performance line */}
                  <polyline
                    points="0,60 10,58 20,55 30,50 40,48 50,45 60,40 70,38 80,35 90,32 100,30"
                    fill="none"
                    stroke="#FF3A81"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {/* X-axis labels */}
                <div className="flex justify-between text-xs text-[#D9D9D9]/40 mt-2">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
              </div>

              {/* Legend */}
              <div className="absolute top-2 right-2 flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#BB3DF6]"></div>
                  <span className="text-xs text-[#D9D9D9]">Retention</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF3A81]"></div>
                  <span className="text-xs text-[#D9D9D9]">Performance</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Culture Fit Index Evolution */}
      <div className="mb-8">
        <GlassCard className="p-6 bg-[#191934]/40">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h3 className="text-white font-semibold mb-1">Culture Fit Index Evolution</h3>
              <p className="text-xs text-[#D9D9D9]/60">Team-fit metrics analyzed over 12 months</p>
            </div>
          </div>

          <div className="h-[200px] sm:h-[240px] relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-full h-[1px] bg-white/5" />
              ))}
            </div>

            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#D9D9D9]/40 pr-2">
              <span>10/10</span>
              <span>8/10</span>
              <span>6/10</span>
              <span>4/10</span>
              <span>2/10</span>
              <span>0/10</span>
            </div>

            {/* Chart area */}
            <div className="ml-8 sm:ml-12 h-full relative">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Gradient fill */}
                <defs>
                  <linearGradient id="cultureGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#BB3DF6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#BB3DF6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Fill area */}
                <polygon
                  points="0,100 0,30 8,28 16,32 24,30 32,28 40,26 48,24 56,22 64,20 72,18 80,16 88,15 96,14 100,14 100,100"
                  fill="url(#cultureGradient)"
                />
                {/* Line */}
                <polyline
                  points="0,30 8,28 16,32 24,30 32,28 40,26 48,24 56,22 64,20 72,18 80,16 88,15 96,14 100,14"
                  fill="none"
                  stroke="#BB3DF6"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* X-axis labels */}
              <div className="flex justify-between text-xs text-[#D9D9D9]/40 mt-2">
                <span className="hidden sm:inline">Jan</span>
                <span>Feb</span>
                <span className="hidden sm:inline">Mar</span>
                <span>Apr</span>
                <span className="hidden sm:inline">May</span>
                <span>Jun</span>
                <span className="hidden sm:inline">Jul</span>
                <span>Aug</span>
                <span className="hidden sm:inline">Sep</span>
                <span>Oct</span>
                <span className="hidden sm:inline">Nov</span>
                <span>Dec</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Bottom Section - 3 Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Performing Departments */}
        <GlassCard className="p-6 bg-[#191934]/40">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#BB3DF6]/20 to-[#FF3A81]/10 flex items-center justify-center border border-white/10">
              <BarChart3 className="text-[#BB3DF6]" size={18} />
            </div>
            <h3 className="text-white font-semibold">Top Performing Departments</h3>
          </div>

          <div className="space-y-4">
            {[
              { dept: 'Engineering', score: '95.2%' },
              { dept: 'Sales', score: '91.8%' },
              { dept: 'Design', score: '89.4%' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#BB3DF6] to-[#FF3A81] flex items-center justify-center text-white font-bold text-sm">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span className="text-sm text-[#D9D9D9]">{item.dept}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.score}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Recent Insights */}
        <GlassCard className="p-6 bg-[#191934]/40">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#008CFF]/20 to-[#00C9FF]/10 flex items-center justify-center border border-white/10">
              <TrendingUp className="text-[#008CFF]" size={18} />
            </div>
            <h3 className="text-white font-semibold">Recent Insights</h3>
          </div>

          <div className="space-y-4">
            {[
              { icon: '📈', text: 'Improvements', sub: 'Culture Fit has jumped from 6.9 to 9.6/10' },
              { icon: '📊', text: 'Trend', sub: 'Quality Score shows positive +2% uptick' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">{item.text}</div>
                    <div className="text-xs text-[#D9D9D9]/60 leading-relaxed">{item.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Quality Metrics */}
        <GlassCard className="p-6 bg-[#191934]/40">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF3A81]/20 to-[#BB3DF6]/10 flex items-center justify-center border border-white/10">
              <Activity className="text-[#FF3A81]" size={18} />
            </div>
            <h3 className="text-white font-semibold">Quality Metrics</h3>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Interview Quality', value: '8.9/10', percent: 89 },
              { label: 'Interview Quality', value: '8.0/10', percent: 80 },
              { label: 'Interview Quality', value: '7.6/10', percent: 76 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-[#D9D9D9]">{item.label}</span>
                  <span className="text-sm font-bold text-white">{item.value}</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#FF3A81] to-[#BB3DF6] rounded-full transition-all duration-500"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default AnalyticsMatchQuality;
