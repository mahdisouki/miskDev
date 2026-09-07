import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { assets } from '../content/assets'

const ease = [0.22, 1, 0.36, 1]

export function DualButton({ href, children, variant = 'light', className = '' }) {
  const base =
    variant === 'light'
      ? 'bg-white text-[#0A0A0A]'
      : 'bg-[#0A0A0A] text-white'

  const classNames = `relative inline-flex h-[50px] w-fit shrink-0 items-center justify-center overflow-hidden rounded-full px-[30px] py-[18px] font-['Gilroy-Bold'] text-[14px] font-normal leading-[16.8px] ${base} ${className}`
  const internal = href?.startsWith('/') && !href.startsWith('//')
  const MotionLink = motion.create(Link)

  const content = (
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
  )

  if (internal) {
    return (
      <MotionLink
        to={href}
        className={classNames}
        initial="rest"
        whileHover="hover"
        animate="rest"
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </MotionLink>
    )
  }

  return (
    <motion.a
      href={href}
      className={classNames}
      initial="rest"
      whileHover="hover"
      animate="rest"
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.a>
  )
}

function StarRating() {
  return (
    <div className="mx-auto flex h-2 w-[49px] items-center justify-center gap-[2px] md:mx-0" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="8" height="8" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1.2l1.5 3.05 3.36.49-2.43 2.37.57 3.35L7 9.07l-3 1.58.57-3.35L2.14 4.74l3.36-.49L7 1.2z"
            fill="white"
          />
        </svg>
      ))}
    </div>
  )
}

function HeroBackground() {
  const reduce = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-black" aria-hidden="true">
      {reduce ? (
        <img
          src={assets.heroPoster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={assets.heroWave}
          poster={assets.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      )}
      {/* Soft purple glow — stronger on mobile like nextio Phone hero */}
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-[radial-gradient(ellipse_80%_70%_at_50%_100%,rgba(108,108,171,0.45),transparent_70%)] md:bg-[radial-gradient(ellipse_80%_50%_at_70%_100%,rgba(108,108,171,0.12),transparent_60%)]" />
    </div>
  )
}

/**
 * Desktop (md+): nextio @ 1440 — left-aligned h1 + CTA row (unchanged).
 * Mobile: centered stack — stars/trust → h1 40 → desc → CTA.
 */
export default function Hero({ ready = true }) {
  const reduce = useReducedMotion()
  const show = ready || reduce

  return (
    <section className="relative h-[440px] overflow-hidden rounded-[20px] bg-black text-white md:h-auto md:min-h-[440px] md:rounded-[25px] md:aspect-[97/31]">
      <HeroBackground />

      {/* ——— Mobile layout ——— */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between px-5 pb-8 pt-10 text-center md:hidden">
        <motion.div
          className="flex flex-col items-center gap-1.5 pt-2"
          initial={false}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ duration: 0.7, delay: show ? 0.05 : 0, ease }}
        >
          <StarRating />
          <p className="font-['Gilroy-Medium'] text-[13px] leading-[13px] text-white">
            Trusted by clients worldwide
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-5"
          initial={false}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ duration: 0.85, delay: show ? 0.1 : 0, ease }}
        >
          <h1 className="text-hero-gradient max-w-[330px] font-['Gilroy-Medium'] text-[40px] font-normal leading-[45px] tracking-normal">
            Build and grow
            <br />
            digital products
          </h1>
          <p className="max-w-[300px] font-['Gilroy-Medium'] text-[15px] font-normal leading-[20px] text-white/90">
            We build apps and platforms that solve real business problems and scale with your
            company&apos;s growth.
          </p>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ duration: 0.75, delay: show ? 0.2 : 0, ease }}
        >
          <DualButton href="#contact" variant="light">
            Discuss your project
          </DualButton>
        </motion.div>
      </div>

      {/* ——— Desktop layout (unchanged structure) ——— */}
      <div className="relative z-10 hidden h-full w-full flex-col justify-between px-6 pt-8 pb-10 sm:px-10 md:flex md:px-10 md:pt-10 md:pb-11">
        <div className="flex min-h-0 flex-1 flex-col justify-end overflow-visible pb-10 pl-0 md:pb-20 md:pl-[30px]">
          <motion.h1
            className="text-hero-gradient max-w-none overflow-visible font-['Gilroy-Medium'] text-[clamp(2.4rem,5.9vw,86px)] font-normal leading-[1.05] tracking-normal md:text-[86px] md:leading-[90px]"
            initial={false}
            animate={{ opacity: show ? 1 : 0 }}
            transition={{ duration: 0.85, delay: show ? 0.05 : 0, ease }}
          >
            Build and grow
            <br />
            digital products
          </motion.h1>
        </div>

        <motion.div
          className="flex flex-col gap-6 pl-0 md:h-[50px] md:flex-row md:items-center md:gap-[52px] md:pl-[30px]"
          initial={false}
          animate={{ opacity: show ? 1 : 0 }}
          transition={{ duration: 0.75, delay: show ? 0.18 : 0, ease }}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-6 md:gap-6">
            <DualButton href="#contact" variant="light">
              Discuss your project
            </DualButton>

            <div className="flex w-[168px] flex-col justify-center gap-1">
              <div className="flex h-2 w-[49px] items-center gap-[2px]" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="8" height="8" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1.2l1.5 3.05 3.36.49-2.43 2.37.57 3.35L7 9.07l-3 1.58.57-3.35L2.14 4.74l3.36-.49L7 1.2z"
                      fill="white"
                    />
                  </svg>
                ))}
              </div>
              <p className="font-['Gilroy-Medium'] text-[13px] leading-[13px] text-white">
                Trusted by clients worldwide
              </p>
            </div>
          </div>

          <div className="hidden h-[50px] w-px shrink-0 bg-white/30 md:block" aria-hidden="true" />

          <p className="max-w-[540px] font-['Gilroy-Medium'] text-[16px] font-normal leading-[20.8px] text-white">
            We build apps and platforms that solve real business problems and scale with your
            company&apos;s growth.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
