// Force refresh
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import EditProfile from './components/EditProfile';
import AIInsights from './components/AIInsights';
import CandidateRecommendations from './components/CandidateRecommendations';
import CandidateProfile from './components/CandidateProfile';
import CandidateComparison from './components/CandidateComparison';
import CustomTestBuilder from './components/CustomTestBuilder';
import InterviewSchedulingDashboard from './components/InterviewSchedulingDashboard';
import CandidateCommunicationHub from './components/CandidateCommunicationHub';
import AnalyticsMatchQuality from './components/AnalyticsMatchQuality';
import SettingsIntegrations from './components/SettingsIntegrations';
import CandidatePublicProfile from './components/CandidatePublicProfile';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { usePageTitle } from './hooks/usePageTitle';

function AppContent() {
  usePageTitle();
  const location = useLocation();
  const isAuthPage = ['/', '/login', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#0F0C29] text-white font-sans selection:bg-[#BB3DF6] selection:text-white overflow-x-hidden mesh-bg pb-20 md:pb-0">
      {!isAuthPage && <Sidebar />}
      {!isAuthPage && <MobileNav />}

      <main className={`${!isAuthPage ? 'pl-0 md:pl-[80px]' : ''} w-full relative`}>
        {/* "AI Slop" fluid background blobs */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#BB3DF6]/10 rounded-full blur-[120px] animate-blob" />
          <div className="absolute top-[40%] left-[-20%] w-[800px] h-[800px] bg-[#008CFF]/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-20%] right-[20%] w-[600px] h-[600px] bg-[#FF3A81]/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
        </div>

        <div className={!isAuthPage ? "max-w-[1600px] mx-auto px-4 md:px-8 py-8" : ""}>
          {!isAuthPage && <TopBar />}
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recommendations" element={<CandidateRecommendations />} />
            <Route path="/compare" element={<CandidateComparison />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/profile/view" element={<CandidateProfile />} />
            <Route path="/p/me" element={<CandidatePublicProfile />} />
            <Route path="/insights" element={<AIInsights />} />
            <Route path="/tests" element={<CustomTestBuilder />} />
            <Route path="/messages" element={<CandidateCommunicationHub />} />
            <Route path="/schedule" element={<InterviewSchedulingDashboard />} />
            <Route path="/analytics" element={<AnalyticsMatchQuality />} />
            <Route path="/settings" element={<SettingsIntegrations />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;