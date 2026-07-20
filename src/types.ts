export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'kits' | 'solar' | 'storage' | 'electrical' | 'water' | 'mobility';
  description: string;
  specifications: string[];
  idealFor: string[];
  detailIntro: string;
  detailPoints: string[];
  consultationFocus: string;
  image: string;
  images?: string[];
  badge?: string;
  detailSections?: ProductDetailSection[];
}

/**
 * A sellable item. The educational guide intentionally uses `Product` without
 * a price; only this type is allowed into the commercial catalogue.
 */
export interface CatalogProduct extends Product {
  price: number;
  currency?: 'ARS' | 'USD';
  priceNote?: string;
  availability?: string;
}

export interface ProductDetailSection {
  title: string;
  body?: string[];
  items?: string[];
  subsections?: {
    title: string;
    body: string;
  }[];
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
