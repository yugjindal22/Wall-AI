export interface ProductContext {
  title: string;
  price: number;
  category: string;
  description: string;
  reviews: Review[];
  inStock: boolean;
  rating: number;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  helpful: number;
  date: string;
}

export interface UserContext {
  currentPage: ProductContext | null;
  searchHistory: string[];
  cartItems: ProductContext[];
  preferences: UserPreferences;
  sessionId: string;
}

export interface UserPreferences {
  priceRange: [number, number];
  preferredCategories: string[];
  previousPurchases: string[];
}

export interface AgentMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  agentType?: string;
}

export interface AgentState {
  messages: AgentMessage[];
  userContext: UserContext;
  currentTask: string;
  confidence: number;
}
