import { useEffect, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'motion/react'
import { DualButton } from './Hero'
import Reveal from './Reveal'
import { assets } from '../content/assets'

/**
 * Services accordion @ 1440 (Figma Updates):
 * black plate · 4 rows · open: number · icon 150 · title + body · pills · +/-
 * closed ~66 · number + title · +
 */
const services = [
  {
    title: 'Development',
    body: 'We build robust, scalable web and mobile applications from MVPs to enterprise platforms. Full-stack development with modern tech stacks, clean architecture, and a process that keeps your team in the loop at every step.',
    tagsLabel: 'Our services',
    tags: [
      'Web & Mobile Apps',
      'API Integration',
      'Cloud Infrastructure',
      'Agile Delivery',
      'Full-stack',
      'Scalable Architecture',
    ],
    icon: 'development',
  },
  {
    title: 'Design',
    body: 'From brand identity to interactive prototypes, we craft experiences that convert. Every pixel is intentional — design systems, UI/UX, motion, and visual language that makes your product stand apart and stay remembered.',
    tagsLabel: 'Our services',
    tags: [
      'UI/UX Design',
      'Brand Identity',
      'Prototyping',
      'Design Systems',
      'Motion Design',
      'User Research',
    ],
    icon: 'design',
  },
  {
    title: 'Social Media Management',
    body: "We grow your presence across platforms with strategic content, community engagement, and data-driven campaigns. Your brand's voice stays consistent while we handle the day-to-day execution at scale.",
    tagsLabel: 'Our services',
    tags: [
      'Content Strategy',
      'Community Management',
      'Analytics',
      'Paid Ads',
      'Influencer Marketing',
      'Brand Voice',
    ],
    icon: 'social',
  },
  {
    title: 'AI Solutions',
    body: 'We integrate AI into your workflows and products — from intelligent chatbots and automation pipelines to custom machine learning models. We turn complexity into a competitive advantage you can ship.',
    tagsLabel: 'Our services',
    tags: [
      'Machine Learning',
      'Automation',
      'AI Chatbots',
      'Data Analytics',
      'NLP',
      'Computer Vision',
    ],
    icon: 'ai',
  },
]

const accordionEase = [0.32, 0.72, 0, 1]

function accordionTransition(reduce) {
  return reduce ? { duration: 0 } : { duration: 0.55, ease: accordionEase }
}

function ToggleIcon({ open }) {
  return (
    <motion.span
      className="relative flex size-[46px] shrink-0 items-center justify-center rounded-full border border-white/25"
      aria-hidden="true"
      initial={false}
    >
      <span className="block h-[2px] w-4 bg-white" />
      <motion.span
        className="absolute block h-4 w-[2px] bg-white"
        initial={false}
        animate={{ scaleY: open ? 0 : 1 }}
        transition={{ duration: 0.35, ease: accordionEase }}
      />
    </motion.span>
  )
}

const iconGlow = {
  design:
    'radial-gradient(circle at 50% 48%, rgba(167,139,250,0.45) 0%, rgba(108,108,171,0.2) 38%, transparent 68%)',
  social:
    'radial-gradient(ellipse 70% 55% at 30% 70%, rgba(167,139,250,0.4) 0%, transparent 55%), radial-gradient(ellipse 55% 45% at 75% 25%, rgba(108,108,171,0.35) 0%, transparent 50%)',
  ai: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(167,139,250,0.5) 0%, rgba(88,70,160,0.22) 40%, transparent 70%), radial-gradient(circle at 50% 42%, rgba(196,181,253,0.28) 0%, transparent 45%)',
  development:
    'radial-gradient(circle at 50% 50%, rgba(108,108,171,0.45) 0%, rgba(60,50,120,0.18) 45%, transparent 70%)',
}

function ServiceIcon({ type }) {
  const src = assets.serviceIcons[type]

  return (
    <div className="relative size-[56px] shrink-0 overflow-hidden rounded-[18px] bg-[#0C0C0C] md:size-[104px] md:rounded-[22px]">
      <div
        className="service-icon-glow pointer-events-none absolute inset-0"
        style={{ background: iconGlow[type] || iconGlow.development }}
        aria-hidden="true"
      />
      <motion.img
        src={src}
        alt=""
        className="relative z-10 h-full w-full object-contain p-3 md:p-5"
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: accordionEase, delay: 0.06 }}
      />
    </div>
  )
}

function ServiceRow({ service, index, open, onToggle, reduce }) {
  const num = String(index + 1).padStart(2, '0')
  const transition = accordionTransition(reduce)

  return (
    <div className="border-b border-white/15">
      <AnimatePresence initial={false} mode="popLayout">
        {open ? (
          <motion.div
            key="open"
            layout
            initial={{ height: 66, opacity: 0.001 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 66, opacity: 0.001 }}
            transition={transition}
            className="overflow-hidden"
          >
            <button
              type="button"
              onClick={onToggle}
              className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-x-6 py-5 text-left md:grid-cols-[minmax(120px,338px)_minmax(0,1fr)_auto] md:gap-x-0 md:py-[30px]"
              aria-expanded
            >
              <span className="font-['Gilroy-Regular'] text-[16px] font-normal leading-none text-white">
                {num}
              </span>

              <div className="min-w-0 md:pr-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
                  <div className="flex min-w-0 flex-1 gap-5 sm:gap-6">
                    <ServiceIcon type={service.icon} />
                    <div className="min-w-0 max-w-[363px] pt-1">
                      <h3 className="font-['Gilroy-Medium'] text-[clamp(1.25rem,2vw,28px)] font-normal leading-[1.2] text-white md:leading-[33.6px]">
                        {service.title}
                      </h3>
                      <p className="mt-3 font-['Gilroy-Regular'] text-[16px] font-normal leading-[22.4px] text-white">
                        {service.body}
                      </p>
                    </div>
                  </div>

                  <div className="w-full shrink-0 lg:w-[331px]">
                    <p className="mb-3 font-['Gilroy-Medium'] text-[12px] font-normal text-white/60">
                      {service.tagsLabel}
                    </p>
                    <ul className="flex flex-wrap gap-[8px]">
                      {service.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-white px-3 py-[9px] font-['Gilroy-Medium'] text-[12px] font-normal leading-none text-[#090909]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <span className="justify-self-end self-center">
                <ToggleIcon open />
              </span>
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="closed"
            layout
            initial={{ opacity: 0.001 }}
            animate={{ height: 66, opacity: 1 }}
            exit={{ opacity: 0.001 }}
            transition={transition}
            className="overflow-hidden"
          >
            <button
              type="button"
              onClick={onToggle}
              className="grid h-[66px] w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-6 text-left md:grid-cols-[minmax(120px,338px)_minmax(0,1fr)_auto] md:gap-x-0"
              aria-expanded={false}
            >
              <span className="font-['Gilroy-Regular'] text-[16px] font-normal leading-none text-white">
                {num}
              </span>

              <h3 className="font-['Gilroy-Medium'] text-[clamp(1.25rem,2vw,28px)] font-normal leading-[1.2] text-white md:leading-[33.6px]">
                {service.title}
              </h3>

              <span className="justify-self-end">
                <ToggleIcon open={false} />
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState(1)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (window.location.hash === '#ai') {
      setOpenIndex(3)
    }
  }, [])

  return (
    <section id="services" className="bg-[#F5F5F5] px-[6px] py-0">
      <div className="mx-auto overflow-hidden rounded-[20px] bg-black px-[10px] py-12 text-white md:px-[36px] md:py-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-1">
          <Reveal delay={40}>
            <p className="font-['Gilroy-Bold'] text-[16px] font-normal leading-[22.4px] text-white">
              <span className="font-['Gilroy-Regular'] text-white/55">/</span>
              {' '}
              What we do
            </p>
          </Reveal>
          <Reveal delay={40} className="md:col-span-2 md:col-start-2">
            <h2 className="text-services-gradient font-['Gilroy-Medium'] text-[clamp(3rem,8vw,86px)] font-normal leading-[1.15] tracking-[-0.02em] md:leading-[98.9px]">
              Services
            </h2>
          </Reveal>
        </div>

        <Reveal delay={20} y={48} className="mt-12 md:mt-16">
          <LayoutGroup id="services-accordion">
            {services.map((service, i) => (
              <div key={service.title} id={service.icon === 'ai' ? 'ai' : undefined}>
                <ServiceRow
                  service={service}
                  index={i}
                  open={openIndex === i}
                  reduce={reduce}
                  onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                />
              </div>
            ))}
          </LayoutGroup>
        </Reveal>

        <Reveal delay={40}>
          <div className="mt-12 flex justify-start md:mt-16">
            <DualButton href="/contact" variant="light">
              Discuss your project
            </DualButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
