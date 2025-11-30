import { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Key, 
  Copy, 
  Edit2, 
  Trash2, 
  Plus,
  Bell,
  Settings as SettingsIcon,
  Shield,
  Users,
  Slack,
  Calendar,
  MessageSquare
} from 'lucide-react';
import GlassCard from './GlassCard';

const SettingsIntegrations = () => {
  const [activeSection, setActiveSection] = useState<'account' | 'integrations' | 'access-control' | 'notification'>('integrations');

  const integrationCards = [
    {
      name: 'Slack',
      type: 'Team Messaging',
      icon: <Slack size={24} />,
      status: 'Success',
      description: 'Get notifications about new candidates and updates directly in your Slack channels',
      lastSync: '2 minutes ago',
      action: 'Configure',
      color: 'from-[#BB3DF6] to-[#FF3A81]',
      bgColor: 'from-[#BB3DF6]/20 to-[#FF3A81]/10'
    },
    {
      name: 'BambooHR',
      type: 'HR Management',
      icon: <Users size={24} />,
      status: 'Success',
      description: 'Sync employee data and streamline your HR processes',
      lastSync: 'Nov 1ago',
      action: 'Configure',
      color: 'from-[#00FF94] to-[#00C9FF]',
      bgColor: 'from-[#00FF94]/20 to-[#00C9FF]/10'
    },
    {
      name: 'Greenhouse',
      type: 'Applicant Tracking',
      icon: <MessageSquare size={24} />,
      status: 'Ready',
      description: 'Connect with your existing ATS to sync candidate data',
      lastSync: 'Never',
      action: 'Setup',
      color: 'from-[#008CFF] to-[#00C9FF]',
      bgColor: 'from-[#008CFF]/20 to-[#00C9FF]/10'
    },
    {
      name: 'Google Calendar',
      type: 'Scheduling & Alignment',
      icon: <Calendar size={24} />,
      status: 'Connected',
      description: 'Sync interview schedules and availability with your google calendar',
      lastSync: 'Never',
      action: 'Configure',
      color: 'from-[#FF3A81] to-[#BB3DF6]',
      bgColor: 'from-[#FF3A81]/20 to-[#BB3DF6]/10'
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-12">
      <div className="flex items-center gap-4 mb-8">
        <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center text-white">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Settings & Integrations</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <GlassCard className="p-4">
            <div className="space-y-2">
              {/* Account Section */}
              <div>
                <button 
                  onClick={() => setActiveSection('account')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    activeSection === 'account' 
                      ? 'bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81] text-white' 
                      : 'text-[#D9D9D9]/80 hover:bg-white/5'
                  }`}
                >
                  <SettingsIcon size={18} />
                  <span className="text-sm font-medium">Account</span>
                  {activeSection === 'account' && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
                {activeSection === 'account' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <button className="w-full text-left px-4 py-2 text-xs text-[#D9D9D9]/60 hover:text-white transition-all">
                      Account Setting
                    </button>
                    <button className="w-full text-left px-4 py-2 text-xs text-[#D9D9D9]/60 hover:text-white transition-all">
                      Company Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 text-xs text-[#D9D9D9]/60 hover:text-white transition-all">
                      Billing & Plans
                    </button>
                  </div>
                )}
              </div>

              {/* Integrations Section */}
              <div>
                <button 
                  onClick={() => setActiveSection('integrations')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    activeSection === 'integrations' 
                      ? 'bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81] text-white' 
                      : 'text-[#D9D9D9]/80 hover:bg-white/5'
                  }`}
                >
                  <Key size={18} />
                  <span className="text-sm font-medium">Integrations</span>
                  {activeSection === 'integrations' && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
                {activeSection === 'integrations' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <button className="w-full text-left px-4 py-2 text-xs text-[#D9D9D9]/60 hover:text-white transition-all">
                      API Management
                    </button>
                    <button className="w-full text-left px-4 py-2 text-xs text-[#D9D9D9]/60 hover:text-white transition-all">
                      Slack Integration
                    </button>
                    <button className="w-full text-left px-4 py-2 text-xs text-[#D9D9D9]/60 hover:text-white transition-all">
                      HR Tools
                    </button>
                    <button className="w-full text-left px-4 py-2 text-xs text-[#D9D9D9]/60 hover:text-white transition-all">
                      ATS Connectors
                    </button>
                  </div>
                )}
              </div>

              {/* Access Control Section */}
              <div>
                <button 
                  onClick={() => setActiveSection('access-control')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    activeSection === 'access-control' 
                      ? 'bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81] text-white' 
                      : 'text-[#D9D9D9]/80 hover:bg-white/5'
                  }`}
                >
                  <Shield size={18} />
                  <span className="text-sm font-medium">Access Control</span>
                  {activeSection === 'access-control' && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
                {activeSection === 'access-control' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <button className="w-full text-left px-4 py-2 text-xs text-[#D9D9D9]/60 hover:text-white transition-all">
                      Permissions
                    </button>
                    <button className="w-full text-left px-4 py-2 text-xs text-[#D9D9D9]/60 hover:text-white transition-all">
                      Recruiters
                    </button>
                    <button className="w-full text-left px-4 py-2 text-xs text-[#D9D9D9]/60 hover:text-white transition-all">
                      Hiring Managers
                    </button>
                  </div>
                )}
              </div>

              {/* Notification Section */}
              <div>
                <button 
                  onClick={() => setActiveSection('notification')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    activeSection === 'notification' 
                      ? 'bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81] text-white' 
                      : 'text-[#D9D9D9]/80 hover:bg-white/5'
                  }`}
                >
                  <Bell size={18} />
                  <span className="text-sm font-medium">Notification</span>
                  {activeSection === 'notification' && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
                {activeSection === 'notification' && (
                  <div className="ml-4 mt-2 space-y-1">
                    <button className="w-full text-left px-4 py-2 text-xs text-[#D9D9D9]/60 hover:text-white transition-all">
                      Preferences
                    </button>
                    <button className="w-full text-left px-4 py-2 text-xs text-[#D9D9D9]/60 hover:text-white transition-all">
                      Email Settings
                    </button>
                  </div>
                )}
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3">
          {/* Success Notification Banner */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-[#00FF94]/20 to-[#00C9FF]/10 border border-[#00FF94]/30 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00FF94]/20 flex items-center justify-center">
                  <Slack size={20} className="text-[#00FF94]" />
                </div>
                <span className="text-white font-medium text-sm">Slack integration successfully configured</span>
              </div>
              <button className="text-white/60 hover:text-white transition-all">
                <Plus size={18} className="rotate-45" />
              </button>
            </div>
          </div>

          {/* API Management Section */}
          <GlassCard className="p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">API Management</h2>
                <p className="text-sm text-[#D9D9D9]/60">Connect Elinity with your favourite tools and platforms</p>
              </div>
              <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#D9D9D9]/40" size={18} />
                <input 
                  type="text" 
                  placeholder="Search"
                  className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-[#D9D9D9]/40 focus:outline-none focus:ring-2 focus:ring-[#BB3DF6]/50 transition-all"
                />
              </div>
            </div>

            {/* API Keys Section */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3">API Keys</h3>
              <p className="text-xs text-[#D9D9D9]/60 mb-4">Manage your API keys for secure integration with external services</p>

              {/* Production API Key */}
              <div className="mb-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-2">
                  <div>
                    <span className="text-sm text-white font-medium">Production API Keys</span>
                    <p className="text-xs text-[#D9D9D9]/60">For live integrations</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#00FF94]/20 text-[#00FF94] text-xs font-medium">Live</span>
                    <button className="p-2 rounded-lg hover:bg-white/5 text-[#D9D9D9]/60 hover:text-white transition-all">
                      <Copy size={16} />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-white/5 text-[#D9D9D9]/60 hover:text-white transition-all">
                      <Edit2 size={16} />
                    </button>
                  </div>
                </div>
                <div className="bg-[#191934]/60 border border-white/10 rounded-xl p-4">
                  <code className="text-[#D9D9D9]/80 text-xs font-mono break-all">eltn_pk_live_••••••••••••••••••••••••••••••••</code>
                </div>
              </div>

              {/* Test API Key */}
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-2">
                  <div>
                    <span className="text-sm text-white font-medium">Test API Key</span>
                    <p className="text-xs text-[#D9D9D9]/60">For development and testing</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#FF9500]/20 text-[#FF9500] text-xs font-medium">Test</span>
                    <button className="p-2 rounded-lg hover:bg-white/5 text-[#D9D9D9]/60 hover:text-white transition-all">
                      <Copy size={16} />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-white/5 text-[#D9D9D9]/60 hover:text-white transition-all">
                      <Edit2 size={16} />
                    </button>
                  </div>
                </div>
                <div className="bg-[#191934]/60 border border-white/10 rounded-xl p-4">
                  <code className="text-[#D9D9D9]/80 text-xs font-mono break-all">eltn_pk_test_••••••••••••••••••••••••••••••••</code>
                </div>
              </div>

              <button className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#BB3DF6]/20 transition-all duration-300 flex items-center gap-2">
                <Plus size={16} />
                Generate New Key
              </button>
            </div>
          </GlassCard>

          {/* Integration Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {integrationCards.map((integration, index) => (
              <GlassCard key={index} className="p-6 bg-[#191934]/40 hover:bg-[#191934]/60 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${integration.bgColor} flex items-center justify-center border border-white/10`}>
                    <div className={`text-transparent bg-clip-text bg-gradient-to-r ${integration.color}`}>
                      {integration.icon}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      integration.status === 'Success' 
                        ? 'bg-[#00FF94]/20 text-[#00FF94]' 
                        : integration.status === 'Connected'
                        ? 'bg-[#BB3DF6]/20 text-[#BB3DF6]'
                        : 'bg-[#D9D9D9]/20 text-[#D9D9D9]'
                    }`}>
                      {integration.status}
                    </span>
                    <div className={`w-3 h-3 rounded-full ${
                      integration.status === 'Success' || integration.status === 'Connected'
                        ? 'bg-[#00FF94]' 
                        : 'bg-[#D9D9D9]/40'
                    }`}></div>
                  </div>
                </div>

                <h3 className="text-white font-bold text-lg mb-1">{integration.name}</h3>
                <p className="text-xs text-[#D9D9D9]/60 mb-1">{integration.type}</p>
                <p className="text-sm text-[#D9D9D9]/80 mb-4 leading-relaxed">{integration.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-[#D9D9D9]/60">Last sync: {integration.lastSync}</span>
                  <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    integration.status === 'Ready'
                      ? 'bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81] text-white hover:shadow-lg hover:shadow-[#BB3DF6]/20'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  }`}>
                    {integration.action}
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Webhooks Section */}
          <GlassCard className="p-6 bg-[#191934]/40">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Webhooks</h3>
                <p className="text-sm text-[#D9D9D9]/60">Configure webhooks to receive real-time updates about events in your Elinity account</p>
              </div>
            </div>

            {/* Webhook Item */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-medium text-sm mb-1">Candidate Status Updates</h4>
                  <p className="text-xs text-[#D9D9D9]/60 break-all">https://hooks.yourwebhook.site/webhooks</p>
                  <p className="text-xs text-[#D9D9D9]/60 mt-1">Last delivery: 3 minutes ago</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#00FF94]/20 text-[#00FF94] text-xs font-medium whitespace-nowrap">Active</span>
                  <button className="p-2 rounded-lg hover:bg-white/5 text-[#D9D9D9]/60 hover:text-white transition-all">
                    <Edit2 size={16} />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-white/5 text-red-400/60 hover:text-red-400 transition-all">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#BB3DF6]/20 transition-all duration-300 flex items-center gap-2">
              <Plus size={16} />
              Add Webhook
            </button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default SettingsIntegrations;
