import { NextRequest, NextResponse } from 'next/server';
import { WallAIAgentSystem } from '@/lib/agents/wallai-agent-system';
import { DOMContextExtractor } from '@/lib/context/dom-extractor';

export async function POST(request: NextRequest) {
  try {
    const { message, userContext } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Initialize agent system
    const agentSystem = new WallAIAgentSystem();
    
    // Process the message
    const result = await agentSystem.processMessage(message, userContext);

    return NextResponse.json({
      success: true,
      response: result.messages[result.messages.length - 1],
      confidence: result.confidence,
      agentType: result.messages[result.messages.length - 1]?.agentType
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'WallAI API is running',
    version: '1.0.0',
    agents: [
      'Context Agent',
      'Conversation Agent', 
      'Review Agent',
      'Price Agent',
      'Inventory Agent',
      'Comparison Agent'
    ]
  });
}
