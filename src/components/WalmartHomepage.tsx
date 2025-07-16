'use client';

import HeaderComponent from './HeaderComponent';
import MainContent from './MainContent';
import FooterComponent from './FooterComponent';

export default function WalmartHomepage() {
  return (
    <div className="Web-page">
      <HeaderComponent />
      <MainContent />
      <FooterComponent />
    </div>
  );
}
