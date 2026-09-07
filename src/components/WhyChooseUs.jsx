import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Reveal from './Reveal'
import { leadIndent } from './typography'
import { assets } from '../content/assets'

const ease = [0.22, 1, 0.36, 1]

/** Compact dual-label CTA — nextio Advantages (h30 / 12px) */
function MiniDualCta({ to, children }) {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest" className="inline-flex">
      <Link
        to={to}
        className="inline-flex h-[30px] items-center gap-[30px] overflow-hidden rounded-full bg-white py-[9px] pr-[11px] pl-3 font-['Gilroy-Bold'] text-[12px] font-normal leading-3 text-[#0A0A0A]"
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

/**
 * nextio Advantages @ 1440 — positions:
 * pad 36 · Top & Content = 4×335.2 cols, gap 4
 * Top: eyebrow col1 · heading col2–3 (674) · empty col4
 * gap Top→Content 120
 * Content: portrait col1 (335×534, pad 8) · empty col2 · items col3–4
 * items: collab text · gap 60 · two metrics (counter 64 + white 318 pad 30)
 */
export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#F5F5F5] px-[10px] py-0 md:px-[36px]"
    >
      <div className="mx-auto w-full">
        {/* TOP — 4-column track */}
        <div className="grid grid-cols-1 gap-1 md:grid-cols-4 md:items-start">
          <Reveal delay={40}>
            <p className="font-['Gilroy-Bold'] text-[16px] font-normal leading-[22.4px] text-[#0A0A0A]">
              <span className="font-['Gilroy-Regular'] text-[#636363]">/</span>
              {' '}
              Why choose us
            </p>
          </Reveal>

          <Reveal delay={40} className="md:col-span-2 md:col-start-2">
            <h2 className="max-w-[674px] font-['Gilroy-Medium'] text-[clamp(1.75rem,3.2vw,46px)] font-normal leading-[1.1] md:min-h-[202px] md:text-[46px] md:leading-[50.6px]">
              <span className="text-[#090909]">Each project is built to deliver results, </span>
              <span className="text-[#636363]">
                balancing design excellence with functional performance.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Top → content spacer (nextio ~120px) */}
        <div className="h-10 md:h-[120px]" aria-hidden="true" />

        {/* CONTENT — 4-column track */}
        <Reveal delay={20} y={170} amount={0.12}>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-4 md:items-start">
            {/* Col 1 — portrait CTA */}
            <div className="relative h-[min(420px,65svh)] min-h-[320px] overflow-hidden rounded-[18px] bg-black p-2 md:h-[534px] md:min-h-0">
              <div className="relative h-full w-full overflow-hidden rounded-[10px]">
                <img
                  src={assets.hoodPortrait}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-2 left-2 right-2 z-10 rounded-[10px] bg-black/70 p-5">
                <p className="font-['Gilroy-Medium'] text-[13px] font-normal uppercase leading-none tracking-[0.02em] text-white">
                  Heads of MISK Managers
                  <sup className="ml-0.5 text-[8px] leading-none">®</sup>
                </p>
                <h3 className="mt-3 max-w-[279px] font-['Gilroy-Medium'] text-[18px] font-normal leading-[1.2] text-white">
                  Talk directly with the team leading product decisions.
                </h3>
                <div className="mt-4">
                  <MiniDualCta to="/contact">Discuss your project</MiniDualCta>
                </div>
              </div>
            </div>

            {/* Col 2 — empty spacer (desktop only) */}
            <div className="hidden md:block" aria-hidden="true" />

            {/* Cols 3–4 — collaboration + metric cards */}
            <div className="flex flex-col gap-10 md:col-span-2 md:gap-[60px]">
              <p className={`max-w-[550px] font-['Gilroy-Medium'] text-[clamp(1rem,1.4vw,20px)] font-normal leading-[1.2] ${leadIndent}`}>
                <span className="text-[#0A0A0A]">
                  Built with clear goals, measurable outcomes,{' '}
                </span>
                <span className="text-[#636363]">
                  and solutions that support real business growth.
                </span>
              </p>

              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {/* Metric 01 */}
                <div className="flex flex-col">
                  <div className="flex h-16 items-start justify-between py-[14px] pr-5 pl-[30px]">
                    <p className="font-['Gilroy-Medium'] text-[30px] font-normal leading-none text-[#0A0A0A]">
                      56+
                    </p>
                    <p className="font-['Gilroy-Medium'] text-[10px] leading-none text-[#090909]">
                      01
                    </p>
                  </div>
                  <article className="flex min-h-[260px] flex-col justify-between rounded-[18px] bg-white p-5 md:h-[318px] md:min-h-0 md:p-[30px]">
                    <h3 className="max-w-[200px] font-['Gilroy-Bold'] text-[18px] font-normal leading-tight text-black">
                      Successful projects completed
                    </h3>
                    <p className="max-w-[275px] font-['Gilroy-Regular'] text-[16px] font-normal leading-snug text-[#0A0A0A]">
                      We’ve successfully delivered over 56+ projects that drive measurable business
                      results.
                    </p>
                  </article>
                </div>

                {/* Metric 02 */}
                <div className="flex flex-col">
                  <div className="flex h-16 items-start justify-between py-[14px] pr-5 pl-[30px]">
                    <p className="font-['Gilroy-Medium'] text-[30px] font-normal leading-none text-[#0A0A0A]">
                      100%
                    </p>
                    <p className="font-['Gilroy-Medium'] text-[10px] leading-none text-[#090909]">
                      02
                    </p>
                  </div>
                  <article className="flex min-h-[260px] flex-col justify-between rounded-[18px] bg-white p-5 md:h-[318px] md:min-h-0 md:p-[30px]">
                    <h3 className="max-w-[200px] font-['Gilroy-Bold'] text-[18px] font-normal leading-tight text-black">
                      Long-term client partnerships
                    </h3>
                    <div className="flex items-center gap-[8px]">
                      {assets.clients.slice(0, 3).map((c) => (
                        <img
                          key={c.name}
                          src={c.src}
                          alt=""
                          className="h-[50px] w-[86px] object-contain brightness-0"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
