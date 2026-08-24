import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Reveal from './Reveal'
import { leadIndent } from './typography'
import { assets } from '../content/assets'
import { LOGO_URL } from '../content/site'

const ease = [0.22, 1, 0.36, 1]

function MiniDualCta({ to, children }) {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest" className="inline-flex">
      <Link
        to={to}
        className="inline-flex h-[30px] items-center gap-[30px] overflow-hidden rounded-full bg-[#0A0A0A] py-[9px] pr-[11px] pl-3 font-['Gilroy-Bold'] text-[12px] font-normal leading-3 text-white"
      >
        <span className="relative block h-3 overflow-hidden leading-3">
          <motion.span
            className="block"
            variants={{ rest: { y: '0%' }, hover: { y: '100%' } }}
            transition={{ duration: 0.4, ease }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute inset-0 block"
            variants={{ rest: { y: '-100%' }, hover: { y: '0%' } }}
            transition={{ duration: 0.4, ease }}
          >
            {children}
          </motion.span>
        </span>
        <motion.span
          className="block shrink-0 rounded-full bg-white"
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

/**
 * nextio Team — after Pricing
 * “The team behind” #090909 + “digital products.” #636363 · 52px
 */
export default function TeamBehind() {
  return (
    <section
      id="team"
      className="bg-[#F5F5F5] px-[10px] py-0 md:px-[36px]"
    >
      <Reveal delay={20} y={170}>
        <div className="relative mx-auto overflow-hidden rounded-[20px] bg-white">
          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,444px)]">
            <div className="flex flex-col justify-between gap-8 p-6 sm:p-10 md:p-14 lg:min-h-[699px]">
              <div>
                <img
                  src={LOGO_URL}
                  alt="MISK MANAGERS"
                  className="mb-5 h-[32px] w-auto object-contain object-left brightness-0"
                  height={32}
                />
                <h2 className="max-w-[739px] font-['Gilroy-Medium'] text-[clamp(2rem,4vw,52px)] font-normal leading-[1.1]">
                  <span className="text-[#090909]">The team behind your </span>
                  <span className="text-[#636363]">digital products.</span>
                </h2>
              </div>

              <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
                <div className="max-w-[367px]">
                  <p className="font-['Gilroy-Bold'] text-[16px] font-normal text-[#0A0A0A]">
                    Built as a long-term partner
                  </p>
                  <p className="mt-3 font-['Gilroy-Regular'] text-[16px] font-normal leading-snug text-[#0A0A0A]/70">
                    We operate as an extension of your team, taking responsibility for delivery,
                    quality, and long-term product success.
                  </p>
                  <div className="mt-6">
                    <MiniDualCta to="/contact">Discuss your project</MiniDualCta>
                  </div>
                </div>
                <p className={`max-w-[367px] font-['Gilroy-Regular'] text-[16px] font-normal leading-snug text-[#0A0A0A]/70 ${leadIndent}`}>
                  Our multidisciplinary teams collaborate closely to deliver digital products that
                  meet business goals, timelines, and quality standards.
                </p>
              </div>
            </div>

            <div className="relative min-h-[280px] lg:min-h-[699px]">
              <img
                src={assets.developers}
                alt="MISK MANAGERS team"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
