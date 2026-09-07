import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Reveal from './Reveal'
import { assets } from '../content/assets'
import { LOGO_URL } from '../content/site'

const ease = [0.22, 1, 0.36, 1]

function BannerCta({ to, children }) {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest" className="inline-flex">
      <Link
        to={to}
        className="inline-flex h-[50px] items-center gap-[30px] overflow-hidden rounded-full bg-white py-[18px] pr-[18px] pl-[30px] font-['Gilroy-Bold'] text-[14px] font-normal leading-[16.8px] text-[#0A0A0A]"
      >
        <span className="relative block h-[1.2em] overflow-hidden">
          <motion.span
            className="block"
            variants={{ rest: { y: '0%' }, hover: { y: '-100%' } }}
            transition={{ duration: 0.4, ease }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute inset-0 block"
            variants={{ rest: { y: '100%' }, hover: { y: '0%' } }}
            transition={{ duration: 0.4, ease }}
          >
            {children}
          </motion.span>
        </span>
        <motion.span
          className="block shrink-0 rounded-full bg-[#0A0A0A]"
          aria-hidden="true"
          variants={{
            rest: { width: 8, height: 8 },
            hover: { width: 10, height: 10 },
          }}
          transition={{ duration: 0.35, ease }}
        />
      </Link>
    </motion.div>
  )
}

const steps = [
  {
    n: '01',
    title: 'No Surprises. Ever.',
    body: 'Scope, budget, and success metrics locked before a single line of code is written.',
    icon: assets.aboutSteps[0],
  },
  {
    n: '02',
    title: 'First Users in Weeks, Not Months.',
    body: 'We cut scope ruthlessly to ship what validates your riskiest assumptions before you over-invest.',
    icon: assets.aboutSteps[1],
  },
  {
    n: '03',
    title: 'Code You Can Scale and Own.',
    body: 'Clean, documented, production-ready systems your internal team can confidently take forward.',
    icon: assets.aboutSteps[2],
  },
  {
    n: '04',
    title: 'We’re Still Here After Launch.',
    body: 'Most agencies disappear post-launch. We stay — iterating, optimizing, and scaling as you grow.',
    icon: assets.aboutSteps[3],
  },
]

/**
 * nextio Showreel / About us — after Services
 * step cards: icon top-left · index top-right · title · body · white r18 pad 30
 */
export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="bg-[#F5F5F5] px-[10px] py-0 md:px-[36px]"
    >
      <div className="mx-auto w-full">
        <Reveal delay={20} y={170}>
          <div className="relative flex min-h-[380px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-black px-6 py-16 text-center md:min-h-[432px] md:py-20">
            {/* Purple glow — bottom center */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] opacity-90"
              style={{
                background:
                  'radial-gradient(ellipse 70% 80% at 50% 100%, rgba(108,108,171,0.55) 0%, rgba(60,50,120,0.25) 40%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            <h3 className="relative z-10 max-w-[1240px] font-['Gilroy-Medium'] text-[clamp(1.5rem,4vw,52px)] font-normal leading-[1.15]">
              <span className="block text-[#8B8BB8]">You&apos;re not paying for time.</span>
              <span className="block text-[#B8B8DA]">
                You&apos;re investing in results that grow your business.
              </span>
            </h3>

            <div className="relative z-10 mt-10">
              <BannerCta to="/contact">Discuss your project</BannerCta>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-[100px] md:grid-cols-4 md:gap-1">
          <Reveal delay={40}>
            <p className="font-['Gilroy-Bold'] text-[16px] font-normal leading-[22.4px] text-[#0A0A0A]">
              <span className="font-['Gilroy-Regular'] text-[#636363]">/</span>
              {' '}
              About us
            </p>
          </Reveal>

          <Reveal delay={40} className="md:col-span-3 md:col-start-2">
            <div className="max-w-[890px]">
              <img
                src={LOGO_URL}
                alt="MISK MANAGERS"
                className="mb-5 h-[32px] w-auto object-contain object-left"
                height={32}
              />
              <h2 className="font-['Gilroy-Medium'] text-[clamp(1.75rem,3.2vw,46px)] font-normal leading-[1.1] md:text-[46px] md:leading-[50.6px]">
                <span className="block text-[#090909]">Senior-led teams, No middlemen.</span>
                <span className="block text-[#636363]">
                  Products clients bet their business on.
                </span>
              </h2>
              <p className="mt-6 max-w-[890px] font-['Gilroy-Bold'] text-[16px] font-normal leading-[1.5] text-[#0A0A0A]">
                No hand-offs to juniors. No bloated timelines. Every project is owned end-to-end by
                the same senior team that scoped it
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={20} y={170} className="mt-12 md:mt-16">
          <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.n}
                className="flex min-h-[160px] flex-col rounded-[18px] bg-white p-5 md:min-h-[188px] md:p-[30px]"
              >
                <div className="flex items-start justify-between gap-3">
                  <img
                    src={step.icon}
                    alt=""
                    className="h-5 w-5 object-contain"
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  <p className="font-['Gilroy-Medium'] text-[11px] font-normal leading-none text-[#090909]/45">
                    {step.n}
                  </p>
                </div>
                <h3 className="mt-8 font-['Gilroy-Bold'] text-[18px] font-normal leading-tight text-[#0A0A0A]">
                  {step.title}
                </h3>
                <p className="mt-3 font-['Gilroy-Regular'] text-[16px] font-normal leading-snug text-[#0A0A0A]/70">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
