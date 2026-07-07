export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'panels' | 'inverters' | 'batteries' | 'controllers' | 'structures' | 'electrical';
  description: string;
  specifications: string[];
  idealFor: string[];
  detailIntro: string;
  detailPoints: string[];
  consultationFocus: string;
  image: string;
  badge?: string;
}

export interface Solution {
  id: string;
  title: string;
  iconName: 'Home' | 'Building2' | 'Factory' | 'Tractor';
  tagline: string;
  description: string;
  keyFeatures: string[];
  recommendedKit: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: 'TrendingDown' | 'Leaf' | 'Compass' | 'ShieldCheck';
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  badge: string;
}

export interface PostSalesService {
  id: string;
  title: string;
  description: string;
  iconName: 'Wrench' | 'Zap' | 'RefreshCw' | 'ShieldAlert' | 'Activity';
}

export interface CommercialArgument {
  id: string;
  title: string;
  description: string;
  iconName: 'Award' | 'ThumbsUp' | 'Users' | 'Clock4' | 'HeartHandshake';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Inquiry {
  name: string;
  phone: string;
  email: string;
  location: string;
  clientType: 'hogar' | 'comercio' | 'industria' | 'campo';
  monthlyBill: number;
  message: string;
}
