import { useOutletContext } from 'react-router-dom'
import { motion } from 'motion/react'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import Projects from '../components/Projects'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import Experiences from '../components/Experiences'
import Pricing from '../components/Pricing'
import TeamBehind from '../components/TeamBehind'
import Faq from '../components/Faq'
import LetsTalk from '../components/LetsTalk'
import { PAGE_GUTTER, SECTION_GAP } from '../styles/layout'

const ease = [0.22, 1, 0.36, 1]

/**
 * Landing order (nextio):
 * Hero → Clients → Projects → Why choose us → Services →
 * About us → Experiences → Pricing → Team → FAQ → Let’s talk → Footer
 */
export default function LandingPage() {
  const { introDone = true } = useOutletContext() || {}

  return (
    <>
      <motion.div
        className={`${PAGE_GUTTER} pt-[2px] pb-[10px]`}
        initial={false}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 0.7, delay: introDone ? 0.05 : 0, ease }}
      >
        <Hero ready={introDone} />
      </motion.div>
      <div className={`mt-[50px] flex flex-col ${SECTION_GAP} md:mt-[140px]`}>
        <Clients />
        <Projects />
        <WhyChooseUs />
        <Services />
        <AboutUs />
        <Experiences />
        <Pricing />
        <TeamBehind />
        <Faq />
        <LetsTalk />
      </div>
    </>
  )
}
