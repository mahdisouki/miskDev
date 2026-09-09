import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Reveal from './Reveal'
import { assets } from '../content/assets'
import { contact, LOGO_MONO_URL } from '../content/site'

const ease = [0.22, 1, 0.36, 1]

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

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-['Gilroy-Medium'] text-[12px] font-normal leading-4 text-[#090909]">
        {label}
      </span>
      {children}
    </label>
  )
}

const fieldClass =
  "h-[52px] w-full rounded-[10px] border-0 bg-[#F5F5F5] px-4 font-['Gilroy-Medium'] text-[15px] font-normal text-[#0A0A0A] outline-none placeholder:text-[#0A0A0A]/35"

const selectClass =
  `${fieldClass} appearance-none bg-[length:11px] bg-[right_1rem_center] bg-no-repeat pr-9`

const selectChevron =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5 6 6.5 11 1.5' stroke='%230A0A0A' stroke-opacity='0.45' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")"

const textareaClass =
  "min-h-[104px] w-full resize-none rounded-[10px] border-0 bg-[#F5F5F5] px-4 py-3 font-['Gilroy-Medium'] text-[15px] font-normal leading-snug text-[#0A0A0A] outline-none placeholder:text-[#0A0A0A]/35"

/**
 * nextio Let’s talk @ 1440:
 * black plate r20 · white form card r18 pad40 · gray inputs r10 h58
 * right: Let’s talk 86 · dual 30 desc · Q/A 18/15 · heads glass card
 */
export default function LetsTalk() {
  return (
    <section id="contact" className="bg-[#F5F5F5] px-[6px] py-0 md:px-[10px]">
      <Reveal delay={20} y={120}>
        <div className="relative mx-auto overflow-hidden rounded-[20px] bg-black px-4 py-10 md:px-8 md:py-14 lg:min-h-[758px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-1 lg:items-stretch">
            {/* Form */}
            <div className="flex flex-col lg:items-start">
              <div className="flex w-full max-w-[506px] flex-col gap-[30px] rounded-[18px] bg-white p-8 md:p-10">
                <div className="flex flex-col gap-3">
                  <img
                    src={LOGO_MONO_URL}
                    alt="MISK MANAGERS"
                    className="h-[22px] w-auto object-contain object-left"
                    height={22}
                  />
                  <h3 className="max-w-[426px] font-['Gilroy-Bold'] text-[clamp(1.375rem,2.1vw,26px)] font-normal leading-[1.2] text-[#0A0A0A]">
                    Request a quote — tell us about your project.
                  </h3>
                  <p className="max-w-[426px] font-['Gilroy-Regular'] text-[13px] font-normal leading-snug text-[#0A0A0A]/55">
                    We reply within one business day with a clear proposal and next steps.
                  </p>
                </div>

                <form
                  className="flex max-w-[426px] flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name*">
                      <input
                        required
                        name="name"
                        placeholder="John Doe"
                        className={fieldClass}
                      />
                    </Field>
                    <Field label="Company / Organisation">
                      <input
                        name="company"
                        placeholder="Acme Inc."
                        className={fieldClass}
                      />
                    </Field>
                    <Field label="Work e-mail*">
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        className={fieldClass}
                      />
                    </Field>
                    <Field label="Phone / WhatsApp">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 555 000 0000"
                        className={fieldClass}
                      />
                    </Field>
                    <Field label="Service needed*">
                      <select
                        required
                        name="service"
                        defaultValue=""
                        className={selectClass}
                        style={{ backgroundImage: selectChevron }}
                      >
                        <option value="" disabled>
                          Select a service…
                        </option>
                        {contact.serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Estimated budget">
                      <select
                        name="budget"
                        defaultValue=""
                        className={selectClass}
                        style={{ backgroundImage: selectChevron }}
                      >
                        <option value="" disabled>
                          Select a range…
                        </option>
                        {contact.budgets.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Decision timeline">
                    <input
                      name="timeline"
                      placeholder="When do you need this?"
                      className={fieldClass}
                    />
                  </Field>

                  <Field label="Tell us about your project*">
                    <textarea
                      required
                      name="brief"
                      rows={4}
                      placeholder="Describe what you want to build, the problem it solves, and any relevant context — existing systems, tech stack, or constraints."
                      className={textareaClass}
                    />
                  </Field>

                  <label className="flex items-center gap-2.5 font-['Gilroy-Medium'] text-[12px] font-normal text-[#888888]">
                    <input
                      type="checkbox"
                      required
                      className="size-4 shrink-0 accent-[#0A0A0A]"
                    />
                    <span>
                      I agree to{' '}
                      <a href="#" className="underline decoration-transparent transition hover:decoration-current">
                        Terms
                      </a>
                      {' '}and{' '}
                      <a href="#" className="underline decoration-transparent transition hover:decoration-current">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="inline-flex h-[52px] w-full items-center justify-center overflow-hidden rounded-full bg-[#0A0A0A] font-['Gilroy-Bold'] text-[15px] font-normal text-white transition hover:opacity-90 md:h-[56px] md:text-[16px]"
                  >
                    Send Request
                  </button>
                </form>
              </div>

              <p className="mt-6 w-full max-w-[506px] font-['Gilroy-Medium'] text-[12px] font-normal text-white/45">
                © 2026 MISK MANAGERS® s.r.o.
              </p>
            </div>

            {/* Pitch */}
            <div className="flex flex-col justify-between gap-10 py-2 text-white md:gap-[60px] lg:py-0">
              <div>
                <h2 className="text-services-gradient font-['Gilroy-Medium'] text-[clamp(3rem,7vw,86px)] font-normal leading-[1.1] tracking-[-0.02em] md:leading-[94.6px]">
                  Let’s talk.
                </h2>
                <p className="mt-8 max-w-[674px] font-['Gilroy-Medium'] text-[clamp(1.15rem,2.2vw,30px)] font-normal leading-9 md:mt-[60px]">
                  <span className="text-white">Tell us about your goals. </span>
                  <span className="text-[#636363]">
                    We’ll help define the right digital product and next steps.
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-10 md:gap-20">
                <div className="grid gap-8 sm:grid-cols-2 sm:gap-4">
                  <div className="max-w-[280px]">
                    <div className="flex items-center gap-3">
                      <img
                        src={assets.letsTalk.quickResponse}
                        alt=""
                        className="size-[25px] shrink-0 object-contain"
                        width={25}
                        height={25}
                        loading="lazy"
                      />
                      <h3 className="font-['Gilroy-Bold'] text-[18px] font-normal leading-[21.6px] text-white">
                        Quick response.
                      </h3>
                    </div>
                    <p className="mt-3 font-['Gilroy-Medium'] text-[15px] font-normal leading-[21px] text-white">
                      We usually respond within one business day.
                    </p>
                  </div>
                  <div className="max-w-[280px]">
                    <div className="flex items-center gap-3">
                      <img
                        src={assets.letsTalk.clearNextSteps}
                        alt=""
                        className="size-[25px] shrink-0 object-contain"
                        width={25}
                        height={25}
                        loading="lazy"
                      />
                      <h3 className="font-['Gilroy-Bold'] text-[18px] font-normal leading-[21.6px] text-white">
                        Clear next steps.
                      </h3>
                    </div>
                    <p className="mt-3 font-['Gilroy-Medium'] text-[15px] font-normal leading-[21px] text-white">
                      After the consultation, we’ll provide you with a detailed plan and timeline.
                    </p>
                  </div>
                </div>

                <div className="flex items-stretch gap-0">
                  <div className="flex shrink-0 items-center rounded-[16px] bg-white/15 p-1.5 backdrop-blur-[5px]">
                    <img
                      src={assets.hoodPortrait}
                      alt=""
                      className="h-[161px] w-[113px] rounded-[12px] object-cover"
                      width={113}
                      height={161}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between rounded-[16px] bg-white/15 p-6 backdrop-blur-[5px] sm:max-w-[335px]">
                    <div>
                      <p className="font-['Gilroy-Medium'] text-[14px] font-normal leading-[15.4px] text-white">
                        Heads of MISK Managers
                        <sup className="ml-0.5 text-[9px]">®</sup>
                      </p>
                      <p className="mt-2 max-w-[287px] font-['Gilroy-Bold'] text-[18px] font-normal leading-[19.8px] text-white">
                        Talk directly with the team leading product decisions.
                      </p>
                    </div>
                    <MiniDualCta to="/contact">Discuss your project</MiniDualCta>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
