'use client';

import { useState } from 'react';
import HeaderComponent from './HeaderComponent';
import MainContent from './MainContent';
import FooterComponent from './FooterComponent';
import WallAIChat from './WallAIChat';
import WallAIActionBar from './WallAIActionBar';

export default function WalmartHomepage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleActionClick = (action: string) => {
    // Open chat and potentially pre-fill with the action
    setIsChatOpen(true);
    // You could add logic here to pre-fill the chat with the action
  };

  return (
    <div className="Web-page">
      <HeaderComponent />
      <MainContent />
      <FooterComponent />
      <WallAIActionBar onActionClick={handleActionClick} />
      <WallAIChat 
        isOpen={isChatOpen} 
        onToggle={() => setIsChatOpen(!isChatOpen)} 
      />
    </div>
  );
}
