import Hero from './Hero.jsx'
import WhyChoose from './WhyChoose.jsx'
import Ingredients from './Ingredients.jsx'
import Results from './Results.jsx'
import HowToUse from './HowToUse.jsx'
import Testimonials from './Testimonials.jsx'
import CTASection from './CTASection.jsx'
import FAQSection from './FAQSection.jsx'

export default function Home(){
    return (
        <>
            <Hero />
            <WhyChoose />
            <Ingredients />
            <Results />
            <HowToUse />
            <Testimonials />
            <CTASection />
            <FAQSection />
        </>
    )
}