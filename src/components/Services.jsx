import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'motion/react'
import { DualButton } from './Hero'
import Reveal from './Reveal'
import { assets } from '../content/assets'

/**
 * nextio Services accordion @ 1440:
 * black plate r20 · open row: 01 · icon 150 · title 28 + body · pills · +/-
 * closed row ~66 · number + title 28
 * Framer uses separate open/closed panels with height + opacity crossfade
 */
const services = [
  {
    title: 'Dedicated Product Teams',
    body: 'We integrate into your team and take ownership of product delivery — from design to development. You get a reliable, long-term partner without the overhead of building and managing an internal team.',
    tagsLabel: 'Our services',
    tags: [
      'Senior experts',
      'End-to-end delivery',
      'Agile delivery',
      'Long-term partnership',
      'Scalable execution',
      'Cross-functional team',
    ],
  },
  {
    title: 'Strategy & Discovery',
    body: 'We define what success looks like and what needs to be built to achieve it — so every decision is tied to real business outcomes.',
    tagsLabel: 'Our services',
    tags: [
      'Business & product analysis',
      'User research',
      'Market research',
      'Product strategy',
      'Product roadmap',
      'MVP definition & validation',
    ],
  },
  {
    title: 'Design & Experience',
    body: 'We design product experiences that are not just usable — but directly impact adoption, conversion, and retention.',
    tagsLabel: 'Our services',
    tags: [
      'UI/UX design',
      'Product design',
      'Interaction design',
      'Design systems',
      'Prototyping & user testing',
    ],
  },
  {
    title: 'Product Development',
    body: 'We take ownership of development and delivery — building scalable systems that your business can rely on long-term.',
    tagsLabel: 'Categories',
    tags: [
      'Web app',
      'Mobile app',
      'AI solutions',
      'AI automation',
      'Backend systems',
      'Integrations',
    ],
  },
  {
    title: 'Launch, Support & Growth',
    body: 'We stay and continuously improve your product — handling development, optimization, and scaling as part of your team.',
    tagsLabel: 'Categories',
    tags: [
      'Product launch',
      'Monitoring',
      'Maintenance',
      'Ongoing support',
      'Feature evolution',
      'Performance optimization',
    ],
  },
]

/** Framer-like accordion easing (smooth deceleration, ~550ms) */
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
      animate={{ rotate: open ? 0 : 0 }}
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

function ServiceIcon() {
  return (
    <div className="relative size-[72px] shrink-0 overflow-hidden rounded-[28px] bg-[#121212] md:size-[150px]">
      <motion.img
        src={assets.peopleIcon}
        alt=""
        className="service-icon-glow h-full w-full object-cover"
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
                    <ServiceIcon />
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
  const [openIndex, setOpenIndex] = useState(0)
  const reduce = useReducedMotion()

  return (
    <section id="services" className="bg-[#F5F5F5] px-[6px] py-0">
      <div
        id="ai"
        className="mx-auto overflow-hidden rounded-[20px] bg-black px-[10px] py-12 text-white md:px-[36px] md:py-20"
      >
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
              <ServiceRow
                key={service.title}
                service={service}
                index={i}
                open={openIndex === i}
                reduce={reduce}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </LayoutGroup>
        </Reveal>

        <Reveal delay={40}>
          <div className="mt-12 flex justify-center md:mt-16">
            <DualButton href="/contact" variant="light">
              Discuss your project
            </DualButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
