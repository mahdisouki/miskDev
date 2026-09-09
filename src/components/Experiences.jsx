import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
} from 'motion/react'
import Reveal from './Reveal'
import { leadIndent } from './typography'
import { assets, testimonials } from '../content/assets'
import { LOGO_MONO_URL } from '../content/site'

const ease = [0.22, 1, 0.36, 1]

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

function ContactPill() {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest" className="inline-flex w-full">
      <Link
        to="/contact"
        className="inline-flex h-[58px] w-full items-center justify-center overflow-hidden rounded-full bg-[#0A0A0A] font-['Gilroy-Bold'] text-[14px] font-normal text-white"
      >
        <span className="relative block h-[1.2em] overflow-hidden">
          <motion.span
            className="block"
            variants={{ rest: { y: '0%' }, hover: { y: '-100%' } }}
            transition={{ duration: 0.4, ease }}
          >
            Contact us
          </motion.span>
          <motion.span
            className="absolute inset-0 block"
            variants={{ rest: { y: '100%' }, hover: { y: '0%' } }}
            transition={{ duration: 0.4, ease }}
          >
            Contact us
          </motion.span>
        </span>
      </Link>
    </motion.div>
  )
}

/** Author strip — its own card, above the quote (below it on the inverted column) */
function PersonCard({ testimonial }) {
  return (
    <div className="flex items-center gap-4 rounded-[18px] bg-white p-5 sm:px-7 sm:py-6">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="size-[46px] shrink-0 rounded-[12px] object-cover"
        width={46}
        height={46}
        loading="lazy"
      />
      <div>
        <h3 className="font-['Gilroy-Bold'] text-[16px] font-normal text-[#0A0A0A]">
          {testimonial.name}
        </h3>
        <p className="mt-1 font-['Gilroy-Regular'] text-[13px] text-[#0A0A0A]/55">
          {testimonial.role.replace('—', '-')}
        </p>
      </div>
    </div>
  )
}

function ReadMore() {
  return (
    <Link
      to="/about-us"
      className="inline-flex h-[31px] w-fit items-center rounded-full border border-black/10 px-4 font-['Gilroy-Medium'] text-[13px] text-[#0A0A0A] transition hover:bg-black/[0.03]"
    >
      Read more
    </Link>
  )
}

const experienceStats = [
  { value: 56, suffix: '+', label: 'digital products delivered' },
  { value: 6, suffix: '+', label: 'Years building\nscalable systems' },
  { value: 80, suffix: '%', label: 'Long-term\nclient partnerships' },
  { value: 3, suffix: '+weeks', label: 'Average MVP\ndelivery phase' },
]

/** nextio-style count-up when the stat enters the viewport */
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
      <p className="mt-3 max-w-[180px] whitespace-pre-line font-['Gilroy-Regular'] text-[15px] font-normal leading-snug text-[#0A0A0A]/55">
        {label}
      </p>
    </div>
  )
}

/**
 * nextio Experiences @ 1440:
 * / Trusted by Clients · Experiences 86 · 4-col testimonials · stats row
 */
export default function Experiences() {
  return (
    <section id="experiences" className="bg-[#F5F5F5] px-[10px] py-0 md:px-[36px]">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-1">
          <Reveal delay={40}>
            <p className="font-['Gilroy-Bold'] text-[16px] font-normal leading-[22.4px] text-[#0A0A0A]">
              <span className="font-['Gilroy-Regular'] text-[#636363]">/</span>
              {' '}
              Trusted by Clients
            </p>
          </Reveal>

          <Reveal delay={40} className="md:col-span-2 md:col-start-2">
            <h2 className="font-['Gilroy-Medium'] text-[clamp(3rem,8vw,86px)] font-normal leading-[1.15] tracking-[-0.02em] text-[#0A0A0A] md:leading-[98.9px]">
              Experiences
            </h2>
            <p className="mt-4 font-['Gilroy-Bold'] text-[16px] font-normal leading-none text-[#0A0A0A] md:mt-5">
              ©2021–2026
            </p>
          </Reveal>
        </div>

        <Reveal delay={20} y={170} className="mt-10 md:mt-12">
          <div className="grid gap-1 lg:min-h-[630px] lg:grid-cols-4 lg:items-stretch">
            {/* Intro column */}
            <div className="flex h-full flex-col rounded-[18px] bg-white p-5 sm:p-7">
              <div className="flex items-start gap-5">
                <p className="shrink-0 font-['Gilroy-Medium'] text-[32px] font-normal leading-none text-[#0A0A0A] sm:text-[44px]">
                  4.9
                  <span className="font-['Gilroy-Regular'] text-[18px] text-[#0A0A0A]/45">/5</span>
                </p>
                <p className="font-['Gilroy-Regular'] text-[15px] font-normal leading-snug text-[#0A0A0A]/70">
                  We’ve successfully delivered over{' '}
                  <span className="font-['Gilroy-Bold'] text-[#0A0A0A]">56+ projects</span>
                  {' '}
                  that drive measurable business results.
                </p>
              </div>

              <div className="mt-auto pt-8">
                <img
                  src={LOGO_MONO_URL}
                  alt="MISK MANAGERS"
                  className="h-[26px] w-auto shrink-0 object-contain object-left"
                  height={26}
                  loading="lazy"
                />
                <img
                  src={assets.ratings}
                  alt=""
                  className="mt-4 h-[22px] w-auto object-contain"
                  loading="lazy"
                />
                <div className="mt-3">
                  <Stars />
                  <p className="mt-2 font-['Gilroy-Regular'] text-[13px] leading-snug text-[#0A0A0A]/55">
                    <span className="font-['Gilroy-Bold'] text-[#0A0A0A]">Trusted by</span>
                    {' '}
                    clients worldwide
                  </p>
                </div>
                <div className="mt-6">
                  <ContactPill />
                </div>
              </div>
            </div>

            {/* Testimonials — author card + quote card, middle column mirrored */}
            {testimonials.map((t, i) => {
              const mirrored = i % 2 === 1
              const quote = (
                <p className={`font-['Gilroy-Bold'] text-[18px] font-normal leading-[1.45] text-[#0A0A0A] ${leadIndent}`}>
                  {t.quote}
                </p>
              )

              return (
                <div key={t.name} className="flex h-full flex-col gap-1">
                  {!mirrored && <PersonCard testimonial={t} />}

                  <article className="flex flex-1 flex-col rounded-[18px] bg-white p-5 sm:p-7">
                    {mirrored ? (
                      <>
                        {quote}
                        <div className="mt-5">
                          <ReadMore />
                        </div>
                        <div className="mt-auto pt-10">
                          <Stars />
                        </div>
                      </>
                    ) : (
                      <>
                        <Stars />
                        <div className="mt-auto pt-10">{quote}</div>
                        <div className="mt-5">
                          <ReadMore />
                        </div>
                      </>
                    )}
                  </article>

                  {mirrored && <PersonCard testimonial={t} />}
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* Stats strip — count-up like nextio */}
        <Reveal delay={40} className="mt-14 md:mt-20">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-1">
            {experienceStats.map((stat, i) => (
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
      </div>
    </section>
  )
}
