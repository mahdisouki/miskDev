import { useEffect, useRef, useState } from 'react'
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
} from 'motion/react'
import Reveal from '../components/Reveal'
import { leadIndent } from '../components/typography'
import LetsTalk from '../components/LetsTalk'
import { DualButton } from '../components/Hero'
import { about, LOGO_URL } from '../content/site'
import { assets, testimonials } from '../content/assets'

const ease = [0.22, 1, 0.36, 1]

function SectionEyebrow({ children }) {
  return (
    <p className="font-['Gilroy-Bold'] text-[16px] font-normal leading-[22.4px] text-[#0A0A0A]">
      <span className="font-['Gilroy-Regular'] text-[#636363]">/</span>
      {' '}
      {children}
    </p>
  )
}

function Stars() {
  return (
    <div className="flex h-3 items-center gap-[2px]" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="10" height="10" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1.2l1.5 3.05 3.36.49-2.43 2.37.57 3.35L7 9.07l-3 1.58.57-3.35L2.14 4.74l3.36-.49L7 1.2z"
            fill="#FF6A00"
          />
        </svg>
      ))}
    </div>
  )
}

function TrustBlock() {
  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-5">
      <div className="flex items-center">
        {testimonials.map((t, i) => (
          <img
            key={t.name}
            src={t.avatar}
            alt=""
            className="size-10 rounded-full border-2 border-[#F5F5F5] object-cover"
            style={{ marginLeft: i === 0 ? 0 : -8 }}
            width={40}
            height={40}
            loading="lazy"
          />
        ))}
        <span
          className="flex size-10 items-center justify-center rounded-full bg-[#090909] font-['Gilroy-Bold'] text-[11px] font-semibold leading-none tracking-[-0.04em] text-white"
          style={{ marginLeft: -8 }}
        >
          {about.trustStat}
        </span>
      </div>
      <div>
        <Stars />
        <p className="mt-1 font-['Gilroy-Regular'] text-[13px] leading-[1.3] text-[#0A0A0A]/65">
          {about.trustLabel[0]}
          <br />
          {about.trustLabel[1]}
        </p>
      </div>
    </div>
  )
}

function AboutHeroTitle() {
  const reduce = useReducedMotion()

  const media = reduce ? (
    <img
      src={assets.aboutTitlePoster}
      alt=""
      className="h-[101px] w-[190px] object-cover"
      width={190}
      height={101}
    />
  ) : (
    <video
      src={assets.aboutTitleLoop}
      poster={assets.aboutTitlePoster}
      className="h-[101px] w-[190px] object-cover"
      width={190}
      height={101}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  )

  return (
    <motion.div
      className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:gap-4 md:gap-6"
      initial={reduce ? false : { opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease }}
    >
      <h1 className="max-w-[667px] shrink-0 font-['Gilroy-Medium'] text-[clamp(2.75rem,7vw,86px)] font-normal leading-[0.95] tracking-[-0.02em]">
        <span className="text-[#636363]">We are digital</span>
        <br />
        <span className="text-[#0A0A0A]">product builders.</span>
      </h1>

      <motion.div
        className="shrink-0 overflow-hidden rounded-[12px]"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.1, ease }}
      >
        {media}
      </motion.div>
    </motion.div>
  )
}

function HeroSubtitle() {
  return (
    <h2 className={`max-w-[720px] font-['Gilroy-Medium'] text-[clamp(1.1rem,2.2vw,24px)] font-normal leading-snug ${leadIndent}`}>
      <span className="text-[#636363]">
        We partner with startups, scale-ups, and enterprise teams{' '}
      </span>
      <span className="text-[#0A0A0A]">
        to design, build, and scale digital products with long-term business value.
      </span>
    </h2>
  )
}

function AnimatedStat({ value, suffix, label, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduce = useReducedMotion()
  const motionValue = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return undefined

    if (reduce) {
      setDisplay(value)
      return undefined
    }

    const controls = animate(motionValue, value, {
      duration: 1.35,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })

    return () => controls.stop()
  }, [inView, value, delay, reduce, motionValue])

  return (
    <div ref={ref} className="min-w-0">
      <p className="font-['Gilroy-Medium'] text-[clamp(2.5rem,5vw,56px)] font-normal leading-none tracking-[-0.02em] text-[#0A0A0A]">
        <span>{display}</span>
        <span>{suffix}</span>
      </p>
      <p className="mt-3 max-w-[200px] font-['Gilroy-Regular'] text-[15px] font-normal leading-snug text-[#0A0A0A]/55">
        {label}
      </p>
    </div>
  )
}

function BrandLogo({ className = 'h-[32px]' }) {
  return (
    <img
      src={LOGO_URL}
      alt="MISK MANAGERS"
      className={`w-auto object-contain object-left ${className}`}
      height={32}
    />
  )
}

function ClientCard({ client, index }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="relative flex h-[140px] items-center justify-center rounded-[14px] bg-white px-4 sm:h-[163px] md:h-[186px]"
      initial={reduce ? false : { opacity: 0.001, y: 0 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', bounce: 0.2, duration: 0.4, delay: index * 0.03 }}
    >
      <span className="absolute left-4 top-4 font-['Gilroy-Medium'] text-[12px] text-[#0A0A0A]/45">
        {client.year}
      </span>
      <img
        src={client.src}
        alt={client.name}
        className="h-[50px] w-[180px] max-w-full object-contain brightness-0"
        width={180}
        height={50}
        loading="lazy"
      />
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <main className="bg-[#F5F5F5]">
      <section className="px-[10px] pb-16 pt-10 md:px-[36px] md:pb-[140px] md:pt-[100px]">
        <div className="mx-auto max-w-[1440px]">
          <AboutHeroTitle />

          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-4 md:gap-1">
            <Reveal delay={60}>
              <SectionEyebrow>About us</SectionEyebrow>
            </Reveal>
            <Reveal delay={80} className="md:col-span-2">
              <HeroSubtitle />
              <div className="mt-8 md:mt-10">
                <TrustBlock />
              </div>
            </Reveal>
            <Reveal delay={100} className="md:self-start lg:col-start-4">
              <p className="max-w-[220px] font-['Gilroy-Medium'] text-[15px] leading-snug text-[#636363]">
                {about.focusLine}
              </p>
            </Reveal>
          </div>

          <Reveal delay={40} y={60} className="mt-10 md:mt-14">
            <div className="overflow-hidden rounded-[20px]">
              <img
                src={assets.aboutHero}
                alt="Developers collaborating on custom software development"
                className="aspect-[1368/759] w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={40} className="mt-14 md:mt-20">
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-1">
              {about.stats.map((stat, i) => (
                <AnimatedStat
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={i * 0.08}
                />
              ))}
            </div>
          </Reveal>

          <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-4 lg:gap-1">
            <Reveal delay={60} className="flex flex-col justify-between lg:min-h-[360px]">
              <div>
                <BrandLogo className="mb-6 h-[32px]" />
                <p className="max-w-[340px] font-['Gilroy-Medium'] text-[clamp(1.1rem,2vw,20px)] leading-snug text-[#636363]">
                  {about.introQuote}
                </p>
              </div>
              <div className="mt-10 lg:mt-0">
                <SectionEyebrow>Our clients</SectionEyebrow>
              </div>
            </Reveal>

            <div className="lg:col-span-3">
              <Reveal delay={80}>
                <h2 className="max-w-[900px] font-['Gilroy-Medium'] text-[clamp(1.5rem,3vw,40px)] font-normal leading-tight">
                  <span className="text-[#636363]">Our approach is simple: </span>
                  <span className="text-[#0A0A0A]">
                    We focus on clear product decisions, fast execution, and building only what
                    serves a real business purpose.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 max-w-[560px] font-['Gilroy-Medium'] text-[15px] leading-relaxed text-[#636363]">
                  {about.approachBody}
                </p>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-10">
                  <DualButton href="/projects" variant="dark">
                    View selected projects
                  </DualButton>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-10 grid gap-1 lg:mt-14 lg:grid-cols-4">
            <Reveal delay={60} className="flex flex-col justify-end">
              <p className="font-['Gilroy-Medium'] text-[clamp(2.5rem,5vw,56px)] font-normal leading-none text-[#0A0A0A]">
                {about.clientCount}
              </p>
            </Reveal>

            <div className="lg:col-span-3">
              <Reveal delay={40}>
                <p className="mb-4 font-['Gilroy-Medium'] text-[14px] text-[#636363]">
                  {about.clientYearRange}
                </p>
              </Reveal>
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
                {about.clientTimeline.map((client, i) => (
                  <ClientCard
                    key={`${client.name}-${client.year}-${i}`}
                    client={client}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[10px] py-0 md:px-[36px] md:pb-[140px]">
        <div className="mx-auto max-w-[1440px]">
          <Reveal delay={60} y={40}>
            <div className="grid gap-1 lg:grid-cols-2">
              {assets.aboutPerspective.map((src, i) => (
                <div key={src} className="overflow-hidden rounded-[20px]">
                  <img
                    src={src}
                    alt={
                      i === 0
                        ? 'Product team reviewing mobile app wireframes'
                        : 'Team member portrait'
                    }
                    className="aspect-[674/486] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-4 lg:gap-1">
            <Reveal delay={80}>
              <SectionEyebrow>Our perspective</SectionEyebrow>
            </Reveal>
            <div className="lg:col-span-3 lg:col-start-2">
              <Reveal delay={100}>
                <h2 className="max-w-[720px] font-['Gilroy-Medium'] text-[clamp(1.5rem,3vw,40px)] font-normal leading-tight text-[#0A0A0A]">
                  {about.impactTitle}
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-[560px] font-['Gilroy-Medium'] text-[15px] leading-relaxed text-[#636363]">
                  {about.impactBody}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="px-[10px] py-0 md:px-[36px] md:pb-[140px]">
        <Reveal delay={20} y={120}>
          <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[20px] bg-white">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_444px]">
              <div className="flex flex-col justify-between gap-8 p-6 sm:p-10 md:p-14 lg:min-h-[699px]">
                <div>
                  <BrandLogo className="mb-5 h-[32px]" />
                  <h2 className="max-w-[739px] font-['Gilroy-Medium'] text-[clamp(2rem,4vw,52px)] font-normal leading-[1.1]">
                    <span className="text-[#090909]">The team behind your </span>
                    <span className="text-[#636363]">digital products.</span>
                  </h2>
                </div>

                <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
                  <div className="max-w-[367px]">
                    <p className="font-['Gilroy-Bold'] text-[16px] font-normal text-[#0A0A0A]">
                      {about.teamEyebrow}
                    </p>
                    <p className="mt-3 font-['Gilroy-Regular'] text-[16px] font-normal leading-snug text-[#636363]">
                      {about.teamBody}
                    </p>
                    <div className="mt-6">
                      <DualButton href="/contact" variant="dark">
                        Apply now
                      </DualButton>
                    </div>
                  </div>
                  <p className={`max-w-[367px] font-['Gilroy-Regular'] text-[16px] font-normal leading-snug text-[#636363] ${leadIndent}`}>
                    {about.teamNote}
                  </p>
                </div>
              </div>

              <div className="relative min-h-[320px] lg:min-h-[699px]">
                <img
                  src={assets.aboutTeam}
                  alt="Developers collaborating on a web application"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <LetsTalk />
    </main>
  )
}
