import { AgentState, ProductContext, UserContext } from "@/types/agents";

// Simplified agent system that mimics LangGraph functionality
export class WallAIAgentSystem {
  private apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || '';
  }

  async processMessage(message: string, userContext: UserContext): Promise<AgentState> {
    const initialState: AgentState = {
      messages: [
        {
          role: "user",
          content: message,
          timestamp: new Date()
        }
      ],
      userContext,
      currentTask: "",
      confidence: 0
    };

    try {
      // Determine which agent should handle this
      const agentType = this.routeToAgent(message);
      let response = "";

      switch (agentType) {
        case "review":
          response = await this.handleReviewAgent(userContext);
          break;
        case "price":
          response = await this.handlePriceAgent(userContext);
          break;
        case "inventory":
          response = await this.handleInventoryAgent(userContext);
          break;
        case "comparison":
          response = await this.handleComparisonAgent(message, userContext);
          break;
        default:
          response = await this.handleConversationAgent(message, userContext);
      }

      return {
        ...initialState,
        messages: [
          ...initialState.messages,
          {
            role: "assistant",
            content: response,
            timestamp: new Date(),
            agentType
          }
        ],
        confidence: 0.85
      };
    } catch (error) {
      console.error("Agent system error:", error);
      return {
        ...initialState,
        messages: [
          ...initialState.messages,
          {
            role: "assistant",
            content: "I'm sorry, I'm having trouble processing your request right now. Please try again.",
            timestamp: new Date(),
            agentType: "error"
          }
        ]
      };
    }
  }

  private routeToAgent(message: string): string {
    const content = message.toLowerCase();

    if (content.includes("review") || content.includes("opinion") || content.includes("feedback")) {
      return "review";
    }
    if (content.includes("price") || content.includes("cost") || content.includes("deal") || content.includes("cheaper")) {
      return "price";
    }
    if (content.includes("stock") || content.includes("available") || content.includes("delivery")) {
      return "inventory";
    }
    if (content.includes("compare") || content.includes("vs") || content.includes("alternative")) {
      return "comparison";
    }
    
    return "conversation";
  }

  private async handleReviewAgent(userContext: UserContext): Promise<string> {
    const reviews = userContext.currentPage?.reviews || [];
    
    if (reviews.length === 0) {
      return "📝 **Review Summary**: No reviews available for this product yet.";
    }

    const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    const positiveReviews = reviews.filter(r => r.rating >= 4).length;
    const negativeReviews = reviews.filter(r => r.rating <= 2).length;

    // Analyze common themes (simplified)
    const commonWords = this.extractCommonThemes(reviews);
    
    return `📝 **Review Summary**:
• Average Rating: ${avgRating.toFixed(1)}/5 (${reviews.length} reviews)
• ${positiveReviews} positive, ${negativeReviews} negative reviews
• Common themes: ${commonWords.join(", ")}
• Overall sentiment: ${avgRating >= 4 ? "Very Positive" : avgRating >= 3 ? "Mostly Positive" : "Mixed"}`;
  }

  private async handlePriceAgent(userContext: UserContext): Promise<string> {
    const currentPrice = userContext.currentPage?.price || 0;
    const category = userContext.currentPage?.category || "";
    
    // Simulate price analysis
    const priceAnalysis = this.analyzePriceValue(currentPrice, category);
    
    return `💰 **Price Analysis**:
• Current Price: $${currentPrice.toFixed(2)}
• Value Assessment: ${priceAnalysis.assessment}
• Price Trend: ${priceAnalysis.trend}
• Recommendation: ${priceAnalysis.recommendation}`;
  }

  private async handleInventoryAgent(userContext: UserContext): Promise<string> {
    const inStock = userContext.currentPage?.inStock || false;
    const title = userContext.currentPage?.title || "this product";
    
    return `📦 **Inventory Status**:
• Availability: ${inStock ? "✅ In Stock" : "❌ Out of Stock"}
• Delivery: ${inStock ? "Ready to ship within 2-3 business days" : "We'll notify you when available"}
• Store Pickup: ${inStock ? "Available at nearby stores" : "Not available"}
${!inStock ? "• Alternative: I can help you find similar products that are in stock!" : ""}`;
  }

  private async handleComparisonAgent(message: string, userContext: UserContext): Promise<string> {
    const currentProduct = userContext.currentPage?.title || "this product";
    
    return `🔍 **Product Comparison**:
I'd be happy to help you compare ${currentProduct} with similar products!

Here's what I can compare:
• Features and specifications
• Prices across different brands
• Customer ratings and reviews
• Value for money

What specific aspect would you like me to focus on for the comparison?`;
  }

  private async handleConversationAgent(message: string, userContext: UserContext): Promise<string> {
    const currentProduct = userContext.currentPage;
    
    if (!currentProduct) {
      return `👋 Hi! I'm WallAI, your personal shopping assistant. I can help you:
• Find products that match your needs
• Compare prices and features
• Analyze customer reviews
• Check inventory and delivery options
• Get personalized recommendations

What can I help you with today?`;
    }

    // Context-aware response based on current product
    return `🛍️ I see you're looking at **${currentProduct.title}**!

Here's what I can tell you:
• Price: $${currentProduct.price.toFixed(2)} ${this.getPriceInsight(currentProduct.price)}
• Rating: ${currentProduct.rating}/5 stars
• Availability: ${currentProduct.inStock ? "✅ In Stock" : "❌ Out of Stock"}

Would you like me to:
• Summarize customer reviews?
• Find similar products at better prices?
• Check if this is the best deal available?
• Help you compare with alternatives?`;
  }

  private extractCommonThemes(reviews: any[]): string[] {
    // Simplified theme extraction
    const themes = ["quality", "value", "delivery", "packaging", "durability"];
    return themes.slice(0, 3); // Return first 3 for demo
  }

  private analyzePriceValue(price: number, category: string): any {
    // Simplified price analysis
    if (price < 25) {
      return {
        assessment: "Budget-friendly",
        trend: "Stable pricing",
        recommendation: "Great value for the price point!"
      };
    } else if (price < 100) {
      return {
        assessment: "Mid-range pricing",
        trend: "Competitive in this category",
        recommendation: "Good balance of features and cost"
      };
    } else {
      return {
        assessment: "Premium pricing",
        trend: "Higher-end market",
        recommendation: "Consider if premium features justify the cost"
      };
    }
  }

  private getPriceInsight(price: number): string {
    if (price < 25) return "(Budget-friendly)";
    if (price < 100) return "(Good value)";
    return "(Premium option)";
  }
}
