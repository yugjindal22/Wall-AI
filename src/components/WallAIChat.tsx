'use client';

import { useState, useEffect, useRef } from 'react';
import { WallAIAgentSystem } from '@/lib/agents/wallai-agent-system';
import { DOMContextExtractor } from '@/lib/context/dom-extractor';
import { AgentMessage, UserContext } from '@/types/agents';

interface WallAIChatProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function WallAIChat({ isOpen, onToggle }: WallAIChatProps) {
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userContext, setUserContext] = useState<UserContext | null>(null);
  const [agentSystem] = useState(() => new WallAIAgentSystem());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize user context when component mounts
    const sessionId = Math.random().toString(36).substring(2, 15);
    const context = DOMContextExtractor.extractUserContext(sessionId);
    setUserContext(context);

    // Add welcome message
    setMessages([
      {
        role: 'assistant',
        content: '👋 Hi! I\'m WallAI, your intelligent shopping assistant. I can help you with product reviews, price comparisons, inventory checks, and personalized recommendations. What can I help you find today?',
        timestamp: new Date(),
        agentType: 'conversation'
      }
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !userContext || isLoading) return;

    const userMessage: AgentMessage = {
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Track user interaction
    DOMContextExtractor.trackUserAction('chat_message', { message: inputMessage.trim() });

    try {
      // Update context with current page data
      const updatedContext = {
        ...userContext,
        currentPage: DOMContextExtractor.extractProductContext()
      };

      const result = await agentSystem.processMessage(inputMessage.trim(), updatedContext);
      
      if (result.messages.length > 1) {
        const assistantMessage = result.messages[result.messages.length - 1];
        setMessages(prev => [...prev, assistantMessage]);
      }

      // Update user context
      setUserContext(result.userContext);
      DOMContextExtractor.saveUserContext(result.userContext);

    } catch (error) {
      console.error('Error processing message:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I\'m having trouble processing your request right now. Please try again in a moment.',
        timestamp: new Date(),
        agentType: 'error'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getAgentIcon = (agentType?: string) => {
    switch (agentType) {
      case 'review': return '📝';
      case 'price': return '💰';
      case 'inventory': return '📦';
      case 'comparison': return '🔍';
      case 'conversation': return '🤖';
      default: return '🤖';
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-all duration-300 z-50"
        aria-label="Open WallAI Assistant"
      >
        <span className="text-2xl">🤖</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl">🤖</span>
          <div>
            <h3 className="font-semibold">WallAI Assistant</h3>
            <p className="text-xs text-blue-100">Your intelligent shopping companion</p>
          </div>
        </div>
        <button
          onClick={onToggle}
          className="text-white hover:text-blue-200 transition-colors"
          aria-label="Close chat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.role === 'assistant' && (
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-sm">{getAgentIcon(message.agentType)}</span>
                  <span className="text-xs text-gray-600 capitalize">{message.agentType || 'assistant'}</span>
                </div>
              )}
              <div className="whitespace-pre-wrap text-sm">{message.content}</div>
              <div className="text-xs opacity-60 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 rounded-lg p-3 max-w-[80%]">
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
                <span className="text-sm">WallAI is thinking...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about products, prices, reviews..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={1}
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !inputMessage.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-lg px-4 py-2 transition-colors"
            aria-label="Send message"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <div className="mt-2 flex gap-2 flex-wrap">
          {['Check reviews', 'Compare prices', 'Check stock', 'Find alternatives'].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setInputMessage(suggestion)}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
