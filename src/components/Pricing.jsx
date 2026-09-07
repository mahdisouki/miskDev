import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useReducedMotion } from 'motion/react'
import Reveal from './Reveal'
import { leadIndent } from './typography'
import { assets } from '../content/assets'

const ease = [0.22, 1, 0.36, 1]
const barEase = [0.32, 0.72, 0, 1]

function DiscussCta() {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest" className="inline-flex w-full max-w-[389px]">
      <Link
        to="/contact"
        className="inline-flex h-[58px] w-full items-center justify-center overflow-hidden rounded-full bg-white px-[30px] font-['Gilroy-Bold'] text-[14px] font-normal text-[#0A0A0A]"
      >
        <span className="relative block h-[1.2em] overflow-hidden">
          <motion.span
            className="block"
            variants={{ rest: { y: '0%' }, hover: { y: '-100%' } }}
            transition={{ duration: 0.4, ease }}
          >
            Discuss your project
          </motion.span>
          <motion.span
            className="absolute inset-0 block"
            variants={{ rest: { y: '100%' }, hover: { y: '0%' } }}
            transition={{ duration: 0.4, ease }}
          >
            Discuss your project
          </motion.span>
        </span>
      </Link>
    </motion.div>
  )
}

/** nextio Delivery — label row + 1px track with scaleX fill on scroll */
function DeliveryProgress({ time, progress, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()

  return (
    <div ref={ref} className="w-full max-w-[389px]">
      <div className="flex items-center justify-between gap-4">
        <p className="font-['Gilroy-Medium'] text-[14px] font-normal leading-[18.2px] text-white/60">
          Delivery time
        </p>
        <p className="font-['Gilroy-Medium'] text-[14px] font-normal leading-[18.2px] text-white">
          {time}
        </p>
      </div>

      <div className="relative mt-[21px] h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-white/10" aria-hidden="true" />
        <motion.div
          className="absolute inset-y-0 left-0 w-full origin-left bg-white"
          initial={false}
          animate={{ scaleX: inView || reduce ? progress : 0 }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 1.15, delay, ease: barEase }
          }
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

const plans = [
  {
    name: 'MVP & Validation',
    headline: 'Start small.',
    scopeNote: 'Custom quote on request',
    time: '3+ Weeks',
    progress: 0.14,
    body: 'Simple internal tools and small MVPs, usually to validate an idea or digitize simple process. Includes usually up to 5 core functionalities and 1-2 integrations',
    items: [
      'Product scope & validation framework',
      'MVP prototype (core features only)',
      'Market & user assumptions validation',
      'Clear next-step roadmap',
      'Final scope and pricing depend on product requirements.',
    ],
    tone: 'strong',
  },
  {
    name: 'Product Build',
    headline: 'Build it right.',
    scopeNote: 'Custom quote on request',
    time: '12+ Weeks',
    progress: 0.52,
    body: 'Production-ready digital products built for real users and real business operations.',
    items: [
      'Scalable product architecture',
      'Core feature development',
      'Integrations & system logic',
      'Quality assurance & deployment',
      'Final scope and pricing depend on product requirements.',
    ],
    tone: 'soft',
  },
  {
    name: 'Deeply complex',
    headline: 'Go all in.',
    scopeNote: 'Custom quote on request',
    time: '4+ Months',
    progress: 0.9,
    body: 'Complex digital systems designed for scale, performance, and long-term growth.',
    items: [
      'Enterprise-grade architecture',
      'Advanced integrations & workflows',
      'Security, performance & scalability',
      'Long-term support & evolution',
      'Final scope and pricing depend on product requirements.',
    ],
    tone: 'soft',
  },
]

/**
 * How we engage @ 1440:
 * black plate r20 · / How we engage · “Every project welcome” 70 · lead 22 + side note
 * each plan row: left 330 name/body · right 999 headline/list/delivery/CTA · gap 4 · pad 50 · r18
 */
export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#F5F5F5] px-[6px] py-0 md:px-[10px]">
      <div className="mx-auto overflow-hidden rounded-[20px] bg-black px-[10px] py-12 text-white md:px-[36px] md:py-16">
        {/* Header */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-1">
          <Reveal delay={40}>
            <p className="font-['Gilroy-Bold'] text-[16px] font-normal leading-[22.4px] text-white">
              <span className="font-['Gilroy-Regular'] text-white/55">/</span>
              {' '}
              How we engage
            </p>
          </Reveal>

          <Reveal delay={40} className="md:col-span-3 md:col-start-2">
            <div className="max-w-[1052px]">
              <h2 className="font-['Gilroy-Medium'] text-[clamp(2.25rem,5.6vw,70px)] font-normal leading-[1.15] tracking-[-0.02em]">
                <span className="text-[#8B8BB8]">Every project </span>
                <span className="text-white">welcome</span>
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
                <div className="md:col-span-2">
                  <p className="max-w-[620px] font-['Gilroy-Bold'] text-[clamp(1.1rem,1.8vw,22px)] font-normal leading-[1.35] text-white">
                    We work with companies of all sizes.
                  </p>
                  <p className="max-w-[620px] font-['Gilroy-Medium'] text-[clamp(1.1rem,1.8vw,22px)] font-normal leading-[1.35] text-[#6E6E6E]">
                    Tell us what you need and we scope it together.
                  </p>
                </div>
                <p className="max-w-[360px] font-['Gilroy-Regular'] text-[14px] font-normal leading-[1.5] text-white/55">
                  No minimum budget. No fixed packages. Every system is built around your specific
                  goals.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Plan rows */}
        <div className="mt-12 flex flex-col gap-1 md:mt-16">
          {plans.map((plan, i) => {
            const panel =
              plan.tone === 'strong' ? 'bg-white/15' : 'bg-white/10'

            return (
              <Reveal key={plan.name} delay={i * 40} y={120}>
                <div className="grid gap-1 lg:grid-cols-[minmax(240px,330px)_minmax(0,1fr)]">
                  {/* Left — name + body */}
                  <div
                    className={`rounded-[18px] p-5 md:min-h-[408px] md:p-[50px] ${panel}`}
                  >
                    <h3 className="font-['Gilroy-Medium'] text-[22px] font-normal leading-tight text-white md:text-[26px]">
                      {plan.name}
                    </h3>
                    <p className="mt-4 max-w-[230px] font-['Gilroy-Regular'] text-[16px] font-normal leading-snug text-white/70">
                      {plan.body}
                    </p>
                  </div>

                  {/* Right — headline, features, delivery bar, CTA */}
                  <div
                    className={`flex flex-col justify-between rounded-[18px] p-5 md:min-h-[408px] md:p-[50px] ${panel}`}
                  >
                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
                      <div>
                        <p className="font-['Gilroy-Bold'] text-[clamp(1.5rem,2.5vw,30px)] font-normal leading-none text-white">
                          {plan.headline}
                        </p>
                        <p className="mt-3 font-['Gilroy-Regular'] text-[14px] leading-snug text-white/45">
                          {plan.scopeNote}
                        </p>
                      </div>
                      <ul className="flex flex-col gap-[6px]">
                        {plan.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 font-['Gilroy-Regular'] text-[16px] font-normal leading-[22px] text-white/80"
                          >
                            <span className="shrink-0 text-white/40">/</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-10 grid items-end gap-8 sm:grid-cols-2 sm:gap-[120px]">
                      <DeliveryProgress
                        time={plan.time}
                        progress={plan.progress}
                        delay={i * 0.12}
                      />
                      <DiscussCta />
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Our approach */}
        <Reveal delay={40} className="mt-12 md:mt-16">
          <div className="grid gap-8 border-t border-white/10 pt-10 md:grid-cols-4 md:gap-1 md:pt-14">
            <p className="font-['Gilroy-Bold'] text-[16px] font-normal text-white">
              <span className="font-['Gilroy-Regular'] text-white/55">/</span>
              {' '}
              Our approach
            </p>
            <div className="md:col-span-3 md:col-start-2">
              <p className={`max-w-[720px] font-['Gilroy-Medium'] text-[clamp(1.15rem,2vw,26px)] font-normal leading-snug text-white ${leadIndent}`}>
                Software is only a tool. Our focus is building digital products that support real
                business growth.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={assets.people.erik}
                  alt="Erik Hajduk"
                  className="size-[42px] rounded-full object-cover"
                  width={42}
                  height={42}
                  loading="lazy"
                />
                <div>
                  <p className="font-['Gilroy-Bold'] text-[15px] text-white">Erik Hajduk</p>
                  <p className="font-['Gilroy-Regular'] text-[13px] text-white/55">
                    CEO & Founder of MISK MANAGERS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
