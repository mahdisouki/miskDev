import { motion, useReducedMotion } from 'motion/react'
import Reveal from '../components/Reveal'
import { EMAIL, contact } from '../content/site'
import { assets } from '../content/assets'

const ease = [0.22, 1, 0.36, 1]

const fieldClass =
  "w-full border-0 bg-transparent p-0 font-['Gilroy-Medium'] text-[16px] text-[#0A0A0A] outline-none placeholder:text-[#0A0A0A] focus:outline-none md:text-[18px]"

function FormField({ children, multiline = false }) {
  return (
    <div
      className={`border-b border-black/15 pb-5 ${multiline ? 'min-h-[180px] pt-1' : 'pt-1'}`}
    >
      {children}
    </div>
  )
}

function EnvelopeIcon() {
  return (
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="20" height="16" rx="3" stroke="#7B61FF" strokeWidth="1.5" />
      <path d="M1 4l10 7 10-7" stroke="#7B61FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" aria-hidden="true">
      <path
        d="M9 1C5.686 1 3 3.686 3 7c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="9" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M3 11V3.5A1.5 1.5 0 014.5 2H11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 3h7v7M13 3L6 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function SubmitDualButton({ children }) {
  return (
    <motion.button
      type="submit"
      className="relative inline-flex h-[50px] w-fit shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0A0A0A] px-[30px] py-[18px] font-['Gilroy-Bold'] text-[14px] font-normal leading-[16.8px] text-white"
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
      <h1 className="max-w-[900px] font-['Gilroy-Medium'] text-[clamp(2.75rem,7vw,86px)] font-normal leading-[0.95] tracking-[-0.02em]">
        <span className="block text-[#636363]">{contact.heroLead}</span>
        <span className="block text-[#0A0A0A]">{contact.heroTrail}</span>
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

function OfficeCard({ office }) {
  return (
    <div className="flex h-full flex-col rounded-[20px] bg-white p-6 sm:p-8 md:p-10 lg:p-12">
      <h2 className="font-['Gilroy-Medium'] text-[clamp(1.75rem,3vw,40px)] font-normal leading-tight text-[#0A0A0A]">
        {office.title}
      </h2>

      <span className="mt-8 inline-flex text-[#0A0A0A]" aria-hidden="true">
        <MapPinIcon />
      </span>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-['Gilroy-Bold'] text-[16px] text-[#0A0A0A]">{office.name}</p>
          <p className="mt-2 font-['Gilroy-Medium'] text-[15px] leading-relaxed text-[#636363]">
            {office.address}
          </p>
        </div>
        <div className="flex gap-2 sm:pt-1">
          <button
            type="button"
            aria-label="Copy address"
            className="flex size-10 items-center justify-center rounded-[10px] bg-[#F5F5F5] text-[#0A0A0A]/55 transition hover:text-[#0A0A0A]"
            onClick={() => navigator.clipboard.writeText(office.address)}
          >
            <CopyIcon />
          </button>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Open in maps"
            className="flex size-10 items-center justify-center rounded-[10px] bg-[#F5F5F5] text-[#0A0A0A]/55 transition hover:text-[#0A0A0A]"
          >
            <ExternalIcon />
          </a>
        </div>
      </div>

      <div className="my-8 h-px bg-black/10" />

      <div className="mt-auto grid gap-6 sm:grid-cols-2">
        <div>
          <p className="font-['Gilroy-Bold'] text-[16px] text-[#0A0A0A]">{office.company}</p>
          <p className="mt-2 font-['Gilroy-Medium'] text-[15px] leading-relaxed text-[#636363]">
            {office.companyAddress}
          </p>
        </div>
        {office.taxLines.length > 0 ? (
          <div className="font-['Gilroy-Medium'] text-[15px] leading-relaxed text-[#636363]">
            {office.taxLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default function ContactPage() {
  const office = contact.offices[0]

  return (
    <main className="bg-[#F5F5F5]">
      <section className="px-[10px] pb-16 pt-10 md:px-[36px] md:pb-[140px] md:pt-[100px]">
        <div className="mx-auto max-w-[1440px]">
          <ContactHero />

          {/* nextio @ 1440: 671px contact info | 10px | 671px form — same row start */}
          <div className="mt-16 grid items-start gap-10 lg:mt-[120px] lg:grid-cols-2 lg:gap-1">
            <Reveal delay={60} className="w-full min-w-0">
              <div className="flex max-w-[671px] flex-col gap-8 md:gap-10">
                <p className="font-['Gilroy-Medium'] text-[clamp(1.1rem,2.2vw,24px)] font-normal leading-snug">
                  <span className="text-[#0A0A0A]">{contact.heroSubLead} </span>
                  <span className="text-[#636363]">{contact.heroSubTrail}</span>
                </p>
                <EmailLink />
              </div>
            </Reveal>

            <Reveal delay={80} className="w-full min-w-0 lg:flex lg:justify-end">
              <form
                className="flex w-full max-w-[671px] flex-col gap-10"
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <FormField>
                  <input
                    required
                    name="name"
                    placeholder="Your name *"
                    className={fieldClass}
                  />
                </FormField>
                <FormField>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className={fieldClass}
                  />
                </FormField>
                <FormField>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    className={fieldClass}
                  />
                </FormField>
                <FormField multiline>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    className={`${fieldClass} min-h-[140px] resize-none`}
                  />
                </FormField>

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
              </form>
            </Reveal>
          </div>

          <Reveal delay={40} y={60} className="mt-14 lg:mt-20">
            <div className="grid gap-1 lg:grid-cols-2">
              <OfficeCard office={office} />
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={assets.contactOfficeMap}
                  alt="Office location map"
                  className="aspect-[674/486] h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
