import { useState, useRef } from 'react'
import ValueStats from './Values'
import EGCSection from './Egc'
import HeroSection from './HeroSection'
import BrandSolutionsLanding from './StrategicSolution'
import AudienceSection from './AudienceSection'
import ComingSoonSection from './Commingsoon'

export default function Home() {
  const brandSolutionsRef = useRef(null);

  const handleCTAClick = () => {
    brandSolutionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <>
        <HeroSection onCTAClick={handleCTAClick} />
        <EGCSection onCTAClick={handleCTAClick}  />
        <ValueStats />
        
        <AudienceSection onCTAClick={handleCTAClick} />
        
        <div ref={brandSolutionsRef}>
          <BrandSolutionsLanding />
        </div>
        
        <ComingSoonSection />
      </>
    </div>
  );
}