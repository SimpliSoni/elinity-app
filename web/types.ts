import { ReactNode } from 'react';

export interface CardProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
  variant?: 'default' | 'glow' | 'solid';
}

export interface JobProps {
  title: string;
  role: string; // e.g. "Lead the development..."
  location: string;
  time: string;
  posted: string;
  type: 'Full-time' | 'Contract';
}

export interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface NavItem {
  icon: ReactNode;
  active?: boolean;
}