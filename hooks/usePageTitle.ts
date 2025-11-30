import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/dashboard': 'Dashboard',
  '/recommendations': 'Daily Recs',
  '/compare': 'Compare',
  '/profile/edit': 'Edit Profile',
  '/profile/view': 'View Profile',
  '/p/me': 'Public Profile',
  '/insights': 'Insights',
  '/tests': 'Tests',
  '/messages': 'Messages',
  '/schedule': 'Schedule',
  '/analytics': 'Analytics',
  '/settings': 'Settings',
  '/login': 'Login',
  '/signup': 'Sign Up',
};

export const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname];
    if (title) {
      document.title = title === 'Home' ? 'Elinity' : `${title} | Elinity`;
    } else {
      document.title = 'Elinity';
    }
  }, [location.pathname]);
};
