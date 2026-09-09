import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import Reveal from '../components/Reveal'
import { EMAIL, contact } from '../content/site'

const ease = [0.22, 1, 0.36, 1]

const fieldClass =
  "w-full border-0 bg-transparent p-0 font-['Gilroy-Medium'] text-[16px] text-[#0A0A0A] outline-none placeholder:text-[#0A0A0A]/45 focus:outline-none"

const selectClass =
  "w-full appearance-none border-0 bg-transparent bg-[length:12px] bg-[right_center] bg-no-repeat p-0 pr-6 font-['Gilroy-Medium'] text-[16px] text-[#0A0A0A] outline-none focus:outline-none"

const selectChevron =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5 6 6.5 11 1.5' stroke='%230A0A0A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")"

function FormField({ children, multiline = false }) {
  return (
    <div
      className={`border-b border-black/15 ${multiline ? 'min-h-[140px] py-4' : 'py-4'}`}
    >
      {children}
    </div>
  )
}

function EnvelopeIcon() {
  return (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="20" height="16" rx="3" stroke="white" strokeWidth="1.5" />
      <path d="M1 4l10 7 10-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon({ muted = false }) {
  return (
    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
      <path
        d="M1 4l2.8 2.8L9 1.5"
        stroke={muted ? 'rgba(10,10,10,0.2)' : 'white'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SubmitDualButton({ children }) {
  return (
    <motion.button
      type="submit"
      className="relative inline-flex h-[50px] w-fit shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-[#0A0A0A] px-[30px] py-[18px] font-['Gilroy-Bold'] text-[14px] font-normal leading-[16.8px] text-white"
      initial="rest"
      whileHover="hover"
      animate="rest"
      whileTap={{ scale: 0.98 }}
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
        className="block shrink-0 rounded-full bg-white"
        aria-hidden="true"
        variants={{ rest: { width: 8, height: 8 }, hover: { width: 10, height: 10 } }}
        transition={{ duration: 0.35, ease }}
      />
    </motion.button>
  )
}

function ContactHero() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease }}
    >
      <h1 className="max-w-[520px] font-['Gilroy-Medium'] text-[clamp(2.75rem,6.2vw,86px)] font-normal leading-[0.95] tracking-[-0.02em]">
        <span className="block text-[#636363]">{contact.heroLead}</span>
        <span className="block font-['Gilroy-Bold'] text-[#0A0A0A]">{contact.heroTrail}</span>
      </h1>
    </motion.div>
  )
}

function EmailLink({ className = '' }) {
  return (
    <a
      href={`mailto:${EMAIL}`}
      className={`group inline-flex items-center gap-4 ${className}`}
    >
      <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-[#0A0A0A]">
        <EnvelopeIcon />
      </span>
      <span className="border-b-2 border-[#0A0A0A] pb-1 font-['Gilroy-Bold'] text-[clamp(1.35rem,2.6vw,34px)] font-normal leading-none text-[#090909] transition group-hover:opacity-70">
        {EMAIL}
      </span>
    </a>
  )
}

function InterestToggle({ label, index, checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex w-full items-center gap-4 border-b border-black/10 py-4 text-left"
      aria-pressed={checked}
    >
      <span
        className={`shrink-0 font-['Gilroy-Medium'] text-[12px] leading-none ${
          checked ? 'text-[#0A0A0A]/45' : 'text-[#0A0A0A]/25'
        }`}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <span
        className={`min-w-0 flex-1 text-[15px] leading-snug md:text-[16px] ${
          checked
            ? "font-['Gilroy-Bold'] text-[#0A0A0A]"
            : "font-['Gilroy-Medium'] text-[#0A0A0A]/40"
        }`}
      >
        {label}
      </span>
      <span
        className={`flex size-5 shrink-0 items-center justify-center rounded-full border transition ${
          checked
            ? 'border-[#0A0A0A] bg-[#0A0A0A]'
            : 'border-black/15 bg-transparent'
        }`}
        aria-hidden="true"
      >
        <CheckIcon muted={!checked} />
      </span>
    </button>
  )
}

function BudgetPill({ label, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(label)}
      className={`rounded-full px-4 py-2.5 font-['Gilroy-Medium'] text-[13px] leading-none transition md:text-[14px] ${
        selected
          ? 'bg-[#0A0A0A] text-white'
          : 'border border-black/10 bg-transparent text-[#0A0A0A] hover:bg-black/[0.04]'
      }`}
      aria-pressed={selected}
    >
      {label}
    </button>
  )
}

export default function ContactPage() {
  const [interests, setInterests] = useState(() => new Set(contact.defaultInterests))
  const [budget, setBudget] = useState('Not sure yet')

  const toggleInterest = (label, next) => {
    setInterests((prev) => {
      const nextSet = new Set(prev)
      if (next) nextSet.add(label)
      else nextSet.delete(label)
      return nextSet
    })
  }

  return (
    <main className="bg-[#F5F5F5]">
      <section className="px-[10px] pb-16 pt-10 md:px-[36px] md:pb-[140px] md:pt-[100px]">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-1">
            <Reveal delay={40} className="w-full min-w-0 lg:sticky lg:top-28">
              <div className="flex max-w-[671px] flex-col gap-8 md:gap-10">
                <ContactHero />
                <p className="font-['Gilroy-Medium'] text-[clamp(1.1rem,2.2vw,24px)] font-normal leading-snug">
                  <span className="text-[#0A0A0A]">{contact.heroSubLead} </span>
                  <span className="text-[#636363]">{contact.heroSubTrail}</span>
                </p>
                <EmailLink />
              </div>
            </Reveal>

            <Reveal delay={80} className="w-full min-w-0 lg:flex lg:justify-end">
              <form
                className="flex w-full max-w-[671px] flex-col gap-8 md:gap-10"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <div className="flex flex-col">
                  <FormField>
                    <input
                      required
                      name="name"
                      placeholder="Your name*"
                      className={fieldClass}
                    />
                  </FormField>
                  <FormField>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email*"
                      className={fieldClass}
                    />
                  </FormField>
                  <FormField>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="Phone Number*"
                      className={fieldClass}
                    />
                  </FormField>
                </div>

                <div>
                  <p className="mb-4 font-['Gilroy-Medium'] text-[14px] font-normal text-[#0A0A0A]/45">
                    Services you are interested in —
                  </p>
                  <ul className="flex flex-col border-t border-black/10">
                    {contact.interests.map((label, i) => (
                      <li key={label}>
                        <InterestToggle
                          label={label}
                          index={i}
                          checked={interests.has(label)}
                          onChange={(next) => toggleInterest(label, next)}
                        />
                      </li>
                    ))}
                  </ul>
                  <input
                    type="hidden"
                    name="interests"
                    value={[...interests].join(', ')}
                  />
                </div>

                <FormField>
                  <select
                    required
                    name="industry"
                    defaultValue=""
                    className={selectClass}
                    style={{ backgroundImage: selectChevron }}
                  >
                    <option value="" disabled>
                      Industry / sector *
                    </option>
                    {contact.industries.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </FormField>

                <div className="grid gap-8 sm:grid-cols-2 sm:gap-6 md:gap-10">
                  <FormField>
                    <select
                      required
                      name="location"
                      defaultValue=""
                      className={selectClass}
                      style={{ backgroundImage: selectChevron }}
                    >
                      <option value="" disabled>
                        Where are you based? *
                      </option>
                      {contact.locations.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField>
                    <select
                      required
                      name="targetMarket"
                      defaultValue=""
                      className={selectClass}
                      style={{ backgroundImage: selectChevron }}
                    >
                      <option value="" disabled>
                        Target market *
                      </option>
                      {contact.targetMarkets.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>

                <FormField>
                  <input
                    name="website"
                    placeholder="Existing website URL (if any)"
                    className={fieldClass}
                  />
                </FormField>

                <div>
                  <p className="mb-4 font-['Gilroy-Bold'] text-[12px] font-normal uppercase tracking-[0.04em] text-[#0A0A0A]/55">
                    Estimated budget
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {contact.budgets.map((label) => (
                      <BudgetPill
                        key={label}
                        label={label}
                        selected={budget === label}
                        onSelect={setBudget}
                      />
                    ))}
                  </div>
                  <input type="hidden" name="budget" value={budget} />
                </div>

                <FormField multiline>
                  <textarea
                    name="message"
                    aria-label="Your message"
                    placeholder="Your message — tell us more about your project"
                    rows={4}
                    className={`${fieldClass} min-h-[132px] resize-none`}
                  />
                </FormField>

                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                  <label className="flex items-start gap-3 font-['Gilroy-Medium'] text-[12px] leading-relaxed text-[#888888]">
                    <input type="checkbox" required className="mt-0.5 size-4 shrink-0 accent-[#0A0A0A]" />
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

                  <SubmitDualButton>Discuss your project</SubmitDualButton>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
