
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: string;
}
