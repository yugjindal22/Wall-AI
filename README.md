![Wall-AI](https://socialify.git.ci/yugjindal22/Wall-AI/image?description=1&forks=1&issues=1&name=1&owner=1&pulls=1&theme=Auto)

# Wall-AI
Wall-AI is an intelligent shopping assistant built directly into Walmart's website that revolutionizes the e-commerce experience with a real, scalable tech stack. Using advanced multi-agent AI architecture with LangChain and Gemini Pro, WallAI provides personalized, context-aware shopping assistance by understanding user behavior, product context, and real-time data to enhance decision-making.

WallAI understands user context by combining data from their current page (scraped via the browser DOM) with past shopping behavior using LangChain. This enables highly personalized, context-aware responses based on live product titles, prices, categories, and user history. The system employs specialized AI agents orchestrated through LangGraph to deliver comprehensive shopping support — from product comparisons and review summaries to price tracking and customer service automation — all seamlessly integrated into the existing Walmart shopping experience.

## ⚙️ Features
- **Context-Aware AI**: Understands user context by combining current page data with shopping history using LangChain
- **Intelligent Conversations**: Powered by Gemini API with LangGraph orchestration for complex reasoning and proactive assistance
- **Smart Review Summaries**: RAG-powered review analysis that condenses thousands of reviews into digestible insights
- **Multi-Agent Customer Support**: Dedicated InventoryAgent, ReturnAgent, and DeliveryAgent for specialized customer service
- **Behavioral Analytics**: Tracks user interactions through LocalStorage, LangChain memory, and structured logging
- **Real-Time Price Monitoring**: Continuous price tracking with automatic notifications and alternative suggestions
- **Dynamic Action Bar**: Context-aware suggestions built with React and TailwindCSS
- **Seamless Integration**: Native integration into Walmart's website with consistent UI/UX
- **Admin Dashboard**: Real-time insights for Walmart with Recharts visualization

---

## Project Structure and How to Get Started

### Frontend/Next.js Application
The main web application built with Next.js, React, and Tailwind CSS, providing the intelligent shopping assistant interface integrated into Walmart's website.

**Steps to Run:**
1. Clone the repository:
```bash 
git clone https://github.com/yugjindal22/Wall-AI.git
cd Wall-AI
```
2. Install dependencies:
```bash
npm install
```
3. Configure the environment variables by copying `.env.example` to `.env` and filling in the required details:
   - `GEMINI_API_KEY`: Your Google Gemini Pro API key
   - `LANGCHAIN_API_KEY`: LangChain API key for memory and orchestration
   - `WALMART_API_KEY`: Walmart API access (if applicable)
4. Start the development server:
```bash
npm run dev
```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the WallAI interface.

### Admin Dashboard
Internal dashboard for Walmart teams to monitor WallAI performance and user interactions.

**Features:**
- Real-time feature usage analytics
- Customer satisfaction metrics
- Query pattern analysis
- Performance monitoring with Recharts visualization

### Production Build
To create an optimized production build:
```bash
npm run build
npm start
```

---

## ⚡ Quick Start

1. **Installation:**
```bash
git clone https://github.com/yugjindal22/Wall-AI.git
cd Wall-AI
npm install
```

2. **Environment Setup:**
   - Copy `.env.example` to `.env.local`
   - Configure your API keys and environment variables

3. **Run Development Server:**
```bash
npm run dev
```

4. **Start Shopping with AI:**
   - Navigate to `http://localhost:3000`
   - Experience WallAI's context-aware shopping assistance
   - Test product comparisons, review summaries, and price tracking features

---

## 🛒 AI Agents

WallAI employs several specialized AI agents orchestrated through LangGraph:

- **Context Agent**: Analyzes current page DOM and combines with user shopping history for personalized recommendations
- **Conversation Agent**: Powers intelligent conversations using Gemini API with complex reasoning and proactive questioning
- **Review Agent**: Uses RAG with Gemini Pro to summarize thousands of product reviews into digestible insights
- **Inventory Agent**: Handles stock level checking and availability queries
- **Return Agent**: Manages return processes and refund workflows
- **Delivery Agent**: Provides shipping updates and delivery assistance
- **Price Agent**: Monitors product prices and suggests alternatives when prices drop
- **Analytics Agent**: Tracks user behavior and shopping patterns for continuous improvement

---

## 📸 Screenshots

|||
|:----------------------------------------:|:-----------------------------------------:|
| ![WallAI Interface](https://via.placeholder.com/400x300?text=WallAI+Shopping+Assistant) | ![Product Comparison](https://via.placeholder.com/400x300?text=Smart+Product+Comparison) |
| ![Review Summaries](https://via.placeholder.com/400x300?text=AI+Review+Summary) | ![Price Tracking](https://via.placeholder.com/400x300?text=Price+Monitoring) |
| ![Dynamic Action Bar](https://via.placeholder.com/400x300?text=Context+Action+Bar) | ![Admin Dashboard](https://via.placeholder.com/400x300?text=Analytics+Dashboard) |
| ![Multi-Agent Support](https://via.placeholder.com/400x300?text=Customer+Support+AI) | 

# Built With 🛠

- [Next.js](https://nextjs.org/)  
  React framework for production-grade applications with server-side rendering and static generation.  
- [React.js](https://reactjs.org/)  
  A JavaScript library for building interactive user interfaces.  
- [TypeScript](https://www.typescriptlang.org/)  
  Typed superset of JavaScript for better development experience and code reliability.  
- [Tailwind CSS](https://tailwindcss.com/)  
  Utility-first CSS framework for rapid UI development.  
- [LangChain](https://langchain.com/)  
  Framework for developing applications powered by language models with memory and orchestration.  
- [LangGraph](https://github.com/langchain-ai/langgraph)  
  Library for building stateful, multi-actor applications with LLMs for complex agent workflows.  
- [Google Gemini Pro](https://ai.google.dev/)  
  Advanced AI model for intelligent conversations and complex reasoning.  
- [Recharts](https://recharts.org/)  
  Composable charting library for React applications used in admin dashboard.  
- [Walmart APIs](https://developer.walmartlabs.com/)  
  Product data, pricing, and inventory information integration.

---

## 🤖 AI Architecture & Features

1. **Context-Aware Intelligence**:  
   Combines DOM scraping with LangChain memory to understand user shopping context and history.  
2. **Multi-Agent Orchestration**:  
   LangGraph coordinates specialized agents for inventory, returns, delivery, and price monitoring.  
3. **RAG-Powered Review Analysis**:  
   Gemini Pro processes thousands of reviews to extract relevant insights and summaries.  
4. **Real-Time Price Tracking**:  
   Continuous DOM monitoring with automated notifications and alternative suggestions.  
5. **Behavioral Analytics**:  
   LocalStorage and structured logging track user patterns without explicit input.  
6. **Dynamic Action Intelligence**:  
   Context-aware suggestions adapt based on product type, user intent, and shopping behavior.  
7. **Seamless UI Integration**:  
   React and TailwindCSS components blend natively into Walmart's existing interface.  
8. **Admin Intelligence Dashboard**:  
   Real-time analytics with Recharts visualization for performance and satisfaction metrics.

---

## 🚀 Deployment

Deploy your Wall-AI application:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t wall-ai .
docker run -p 3000:3000 wall-ai
```

### Manual Deployment
```bash
npm run build
npm start
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

For support, email support@wall-ai.com or join our [Discord community](https://discord.gg/wall-ai).
