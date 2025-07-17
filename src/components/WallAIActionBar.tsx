'use client';

import { useState, useEffect } from 'react';
import { DOMContextExtractor } from '@/lib/context/dom-extractor';
import { ProductContext } from '@/types/agents';

interface ActionBarProps {
  onActionClick: (action: string) => void;
}

export default function WallAIActionBar({ onActionClick }: ActionBarProps) {
  const [productContext, setProductContext] = useState<ProductContext | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Extract product context and show action bar if on product page
    const context = DOMContextExtractor.extractProductContext();
    setProductContext(context);
    setIsVisible(!!context);
  }, []);

  if (!isVisible || !productContext) {
    return null;
  }

  const actions = [
    {
      id: 'reviews',
      label: 'Review Summary',
      icon: '📝',
      description: `Get AI summary of ${productContext.reviews?.length || 0} reviews`
    },
    {
      id: 'compare',
      label: 'Compare Similar',
      icon: '🔍',
      description: 'Find and compare similar products'
    },
    {
      id: 'price-track',
      label: 'Track Price',
      icon: '💰',
      description: 'Get notified of price drops'
    },
    {
      id: 'alternatives',
      label: 'Find Alternatives',
      icon: '🔄',
      description: 'Discover better value options'
    }
  ];

  return (
    <div className="fixed top-20 right-6 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm z-40">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">🤖</span>
        <div>
          <h4 className="font-semibold text-gray-800">WallAI Suggestions</h4>
          <p className="text-xs text-gray-600">Based on current product</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-auto text-gray-400 hover:text-gray-600"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-2">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={() => {
              onActionClick(action.label);
              DOMContextExtractor.trackUserAction('action_bar_click', { action: action.id });
            }}
            className="w-full text-left p-2 rounded-lg hover:bg-blue-50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{action.icon}</span>
              <div className="flex-1">
                <div className="font-medium text-gray-800 group-hover:text-blue-600">
                  {action.label}
                </div>
                <div className="text-xs text-gray-500">
                  {action.description}
                </div>
              </div>
              <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100">
        <button
          onClick={() => onActionClick('Open WallAI Chat')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors"
        >
          Chat with WallAI Assistant
        </button>
      </div>
    </div>
  );
}
