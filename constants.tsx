
import React from 'react';
import { 
  BarChart3, 
  Target, 
  Search, 
  Code, 
  MessageSquare, 
  Globe,
  Stethoscope, 
  Home as HomeIcon, 
  GraduationCap, 
  Briefcase,
  Zap,
  TrendingUp,
  FileText,
  Workflow
} from 'lucide-react';
import { NavItem, CaseStudy } from './types';

export const NAVIGATION: NavItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Company', 
    href: '/company',
    children: [
      { label: 'About Us', href: '/company' },
      { label: 'Vision & Mission', href: '/company' },
      { label: 'Team', href: '/company' }
    ]
  },
  { 
    label: 'Services', 
    href: '/services',
    children: [
      { label: 'Business Growth System', href: '/services/growth-system' },
      { label: 'Meta Ads', href: '/services/meta-ads' },
      { label: 'Google Ads', href: '/services/google-ads' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Website Development', href: '/services/websites' },
      { label: 'WhatsApp Automation', href: '/services/whatsapp' }
    ]
  },
  { 
    label: 'Industries', 
    href: '/industries',
    children: [
      { label: 'Clinics', href: '/industries' },
      { label: 'Real Estate', href: '/industries' },
      { label: 'Education', href: '/industries' },
      { label: 'Local Businesses', href: '/industries' }
    ]
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog / Insights', href: '/blog' },
  { label: 'Contact Us', href: '/contact' }
];

export const SERVICES = [
  {
    id: 'growth-system',
    title: 'Business Growth System™',
    description: 'A complete predictable enquiry machine. Includes high-speed landing pages, Meta/Google ads, lead tracking, and automated WhatsApp follow-ups.',
    icon: <BarChart3 className="w-8 h-8" />,
    features: ['Conversion-focused website', 'Paid ads strategy', 'Lead tracking', 'WhatsApp automation']
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads Management',
    description: 'Lead generation and retargeting campaigns on Facebook and Instagram to drive consistent traffic.',
    icon: <Target className="w-8 h-8" />,
    features: ['Lead Gen Campaigns', 'Retargeting Funnels', 'Creative Strategy']
  },
  {
    id: 'google-ads',
    title: 'Google Ads Management',
    description: 'Search & Local ads that target high-intent keywords to capture customers when they are ready to buy.',
    icon: <Search className="w-8 h-8" />,
    features: ['Search Ads', 'Local Services Ads', 'Keyword Research']
  },
  {
    id: 'seo',
    title: 'SEO & Local Visibility',
    description: 'Technical SEO and Google Business Profile optimization to ensure you dominate your local area organically.',
    icon: <Globe className="w-8 h-8" />,
    features: ['Technical Audit', 'Local Citation Building', 'On-page Optimization']
  },
  {
    id: 'web-dev',
    title: 'Website & Landing Pages',
    description: 'Fast, mobile-first, and conversion-focused digital homes designed to turn visitors into leads.',
    icon: <Code className="w-8 h-8" />,
    features: ['Speed Optimization', 'Mobile First', 'Sales Funnels']
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Automation',
    description: 'Auto-replies, lead follow-up sequences, and CRM integrations to nurture leads 24/7.',
    icon: <MessageSquare className="w-8 h-8" />,
    features: ['Auto Replies', 'Broadcast Systems', 'CRM Sync']
  }
];

export const INDUSTRIES = [
  { id: 'clinics', label: 'Clinics & Healthcare', icon: <Stethoscope className="w-6 h-6" />, desc: 'Filling patient calendars with predictable appointment systems.' },
  { id: 'real-estate', label: 'Real Estate', icon: <HomeIcon className="w-6 h-6" />, desc: 'High-intent lead generation for property sales and rentals.' },
  { id: 'education', label: 'Education', icon: <GraduationCap className="w-6 h-6" />, desc: 'Driving student enrollments through targeted admission campaigns.' },
  { id: 'local', label: 'Local Businesses', icon: <Briefcase className="w-6 h-6" />, desc: 'Helping local shops and services dominate their immediate vicinity.' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    client: 'Luxe Properties',
    industry: 'Real Estate',
    title: '400% ROI on Meta Ads',
    description: 'Successfully scaled a luxury real estate brand by implementing a multi-stage funnel and retargeting strategy.',
    metrics: [{ label: 'Lead Cost', value: '-65%' }, { label: 'ROI', value: '4x' }],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    client: 'MedCore Clinic',
    industry: 'Healthcare',
    title: 'Consistent Patient Enquiries',
    description: 'Built an automated patient lead engine that increased monthly appointments by 120%.',
    metrics: [{ label: 'Appointments', value: '+120%' }, { label: 'Manual Work', value: '-80%' }],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'
  }
];
