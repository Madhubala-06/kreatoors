
import ValueStats from './Values'
import EGCSection from './Egc'
import HeroSection from './HeroSection'
import BrandSolutionsLanding from './StrategicSolution'
import AudienceSection from './AudienceSection'
import ComingSoonSection from './Commingsoon'

export default function(){
    return(
        <>
        <HeroSection />
        <ValueStats />
        <EGCSection />
        <AudienceSection />

        <BrandSolutionsLanding />
        <ComingSoonSection/>
        </>
    )
}