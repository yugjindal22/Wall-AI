import { ProductContext, UserContext } from "@/types/agents";

export class DOMContextExtractor {
  
  static extractProductContext(): ProductContext | null {
    try {
      // This would extract real product data from Walmart's DOM
      // For demo purposes, we'll use mock data
      return {
        title: "Sample Product - Wireless Bluetooth Headphones",
        price: 79.99,
        category: "Electronics",
        description: "High-quality wireless headphones with noise cancellation",
        reviews: [
          {
            id: "1",
            rating: 5,
            comment: "Excellent sound quality and comfortable to wear!",
            helpful: 15,
            date: "2024-01-15"
          },
          {
            id: "2",
            rating: 4,
            comment: "Good battery life, but could be better.",
            helpful: 8,
            date: "2024-01-10"
          },
          {
            id: "3",
            rating: 5,
            comment: "Perfect for working from home. Noise cancellation is amazing.",
            helpful: 22,
            date: "2024-01-08"
          }
        ],
        inStock: true,
        rating: 4.5
      };
    } catch (error) {
      console.error("Error extracting product context:", error);
      return null;
    }
  }

  static extractUserContext(sessionId: string): UserContext {
    // Extract user context from localStorage and current page
    let savedContext = null;
    
    if (typeof window !== 'undefined') {
      try {
        savedContext = localStorage.getItem('wallai_user_context');
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
    }

    const defaultContext: UserContext = {
      currentPage: this.extractProductContext(),
      searchHistory: [],
      cartItems: [],
      preferences: {
        priceRange: [0, 1000],
        preferredCategories: [],
        previousPurchases: []
      },
      sessionId
    };

    if (savedContext) {
      try {
        const parsed = JSON.parse(savedContext);
        return {
          ...defaultContext,
          ...parsed,
          currentPage: this.extractProductContext(), // Always use current page
          sessionId
        };
      } catch (error) {
        console.error("Error parsing saved context:", error);
        return defaultContext;
      }
    }

    return defaultContext;
  }

  static saveUserContext(context: UserContext): void {
    if (typeof window === 'undefined') return;
    
    try {
      const toSave = {
        searchHistory: context.searchHistory,
        cartItems: context.cartItems,
        preferences: context.preferences
      };
      localStorage.setItem('wallai_user_context', JSON.stringify(toSave));
    } catch (error) {
      console.error("Error saving user context:", error);
    }
  }

  static trackUserAction(action: string, details: any): void {
    if (typeof window === 'undefined') return;
    
    try {
      const timestamp = new Date().toISOString();
      const actionLog = {
        action,
        details,
        timestamp,
        page: window.location.pathname
      };

      const existingLogs = JSON.parse(localStorage.getItem('wallai_action_log') || '[]');
      existingLogs.push(actionLog);
      
      // Keep only last 100 actions
      if (existingLogs.length > 100) {
        existingLogs.splice(0, existingLogs.length - 100);
      }

      localStorage.setItem('wallai_action_log', JSON.stringify(existingLogs));
    } catch (error) {
      console.error("Error tracking user action:", error);
    }
  }

  // Simulate real DOM extraction methods
  static getProductTitle(): string {
    // In real implementation: return document.querySelector('[data-testid="product-title"]')?.textContent || '';
    return "Sample Product - Wireless Bluetooth Headphones";
  }

  static getProductPrice(): number {
    // In real implementation: extract price from DOM
    return 79.99;
  }

  static getProductRating(): number {
    // In real implementation: extract rating from DOM
    return 4.5;
  }

  static isProductInStock(): boolean {
    // In real implementation: check stock status from DOM
    return true;
  }

  static getProductCategory(): string {
    // In real implementation: extract category from breadcrumbs or product info
    return "Electronics";
  }
}
