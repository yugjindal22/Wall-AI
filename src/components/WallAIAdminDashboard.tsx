'use client';

import { useState, useEffect } from 'react';

interface AnalyticsData {
  totalInteractions: number;
  popularQueries: { query: string; count: number }[];
  agentUsage: { agent: string; count: number }[];
  satisfaction: number;
  responseTime: number;
}

export default function WallAIAdminDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalInteractions: 0,
    popularQueries: [],
    agentUsage: [],
    satisfaction: 0,
    responseTime: 0
  });

  useEffect(() => {
    // Simulate loading analytics data
    setAnalytics({
      totalInteractions: 1247,
      popularQueries: [
        { query: "Check reviews", count: 342 },
        { query: "Compare prices", count: 289 },
        { query: "Find alternatives", count: 234 },
        { query: "Check stock", count: 198 },
        { query: "Product features", count: 184 }
      ],
      agentUsage: [
        { agent: "Review Agent", count: 456 },
        { agent: "Price Agent", count: 378 },
        { agent: "Inventory Agent", count: 298 },
        { agent: "Comparison Agent", count: 234 },
        { agent: "Conversation Agent", count: 567 }
      ],
      satisfaction: 4.7,
      responseTime: 1.2
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">WallAI Analytics Dashboard</h1>
          <p className="text-gray-600 mt-2">Real-time insights into AI assistant performance</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Interactions</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.totalInteractions.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Satisfaction</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.satisfaction}/5.0</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
                <p className="text-2xl font-bold text-gray-900">{analytics.responseTime}s</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Agents</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Popular Queries */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Queries</h2>
            <div className="space-y-3">
              {analytics.popularQueries.map((query, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{query.query}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(query.count / analytics.popularQueries[0].count) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 w-8">{query.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agent Usage */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Agent Usage</h2>
            <div className="space-y-3">
              {analytics.agentUsage.map((agent, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{agent.agent}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${(agent.count / analytics.agentUsage[0].count) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 w-8">{agent.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real-time Activity */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { time: '2 min ago', user: 'User #1247', action: 'Asked for product comparison', agent: 'Comparison Agent' },
              { time: '3 min ago', user: 'User #1246', action: 'Requested review summary', agent: 'Review Agent' },
              { time: '5 min ago', user: 'User #1245', action: 'Checked inventory status', agent: 'Inventory Agent' },
              { time: '7 min ago', user: 'User #1244', action: 'Price tracking inquiry', agent: 'Price Agent' },
              { time: '9 min ago', user: 'User #1243', action: 'General product question', agent: 'Conversation Agent' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{activity.time}</span>
                    <span className="text-sm font-medium text-gray-700">{activity.user}</span>
                  </div>
                  <p className="text-gray-600">{activity.action}</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {activity.agent}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
