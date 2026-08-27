import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Reveal from '../components/Reveal'
import DemoProductCard, { getDemoProducts } from '../components/demo/DemoProductCard'
import { demo, LOGO_URL } from '../content/site'
import { assets } from '../content/assets'
import { loadDemoBooking, saveDemoBooking } from '../lib/demoBooking'

const ease = [0.22, 1, 0.36, 1]

const fieldClass =
  "h-[52px] w-full rounded-[10px] border-0 bg-[#F5F5F5] px-4 font-['Gilroy-Medium'] text-[15px] font-normal text-[#0A0A0A] outline-none placeholder:text-[#0A0A0A]/30 md:h-[54px] md:text-[16px]"

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

/** Figma: black plate · label top-left · CENTERED title (lavender) + sub */
function DemoHero() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-[#F5F5F5] px-[6px] md:px-[10px]">
      <motion.div
        className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-black px-6 py-16 text-center text-white sm:min-h-[300px] md:min-h-[340px] md:rounded-[25px] md:px-16 md:py-20"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease }}
      >
        <p className="absolute left-5 top-5 font-['Gilroy-Medium'] text-[12px] font-normal text-white/45 md:left-8 md:top-8 md:text-[14px]">
          {demo.eyebrow}
        </p>

        <h1 className="max-w-[900px] font-['Gilroy-Medium'] text-[clamp(2.5rem,6.5vw,72px)] font-normal leading-[1.05] tracking-[-0.02em] text-[#C4C4E8]">
          See it in action.
        </h1>
        <p className="mt-5 max-w-[480px] font-['Gilroy-Medium'] text-[14px] font-normal leading-[1.45] text-white/55 md:mt-6 md:text-[17px]">
          {demo.heroSub}
        </p>
      </motion.div>
    </section>
  )
}

export default function RequestDemoPage() {
  const navigate = useNavigate()
  const products = getDemoProducts()
  const existing = loadDemoBooking()

  const [projectSlug, setProjectSlug] = useState(existing?.projectSlug || '')
  const [form, setForm] = useState({
    firstName: existing?.firstName || '',
    lastName: existing?.lastName || '',
    email: existing?.email || '',
    phone: existing?.phone || '',
    message: existing?.message || '',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!projectSlug) return
    saveDemoBooking({ projectSlug, ...form })
    navigate('/request-demo/schedule')
  }

  return (
    <main className="bg-[#F5F5F5]">
      <DemoHero />

      {/* Products — Figma: centered title, 4 equal cards */}
      <section className="px-[10px] py-12 md:px-[36px] md:py-[72px]">
        <div className="mx-auto max-w-[1440px]">
          <Reveal delay={40}>
            <h2 className="mx-auto mb-10 max-w-[640px] text-center font-['Gilroy-Medium'] text-[clamp(1.25rem,2.4vw,28px)] font-normal leading-[1.3] text-[#0A0A0A] md:mb-12 md:text-[28px]">
              {demo.pickTitleLead}
              <span className="text-demo-accent">{demo.pickTitleTrail}</span>
              {demo.pickTitleEnd}
            </h2>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[12px]">
            {products.map((project, i) => (
              <Reveal key={project.id} delay={12 + i * 12} y={40} className="h-full">
                <DemoProductCard
                  project={project}
                  selected={projectSlug === project.slug}
                  onSelect={setProjectSlug}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + pitch */}
      <section className="bg-[#F5F5F5] px-[6px] pb-12 md:px-[10px] md:pb-[72px]">
        <Reveal delay={20} y={70}>
          <div className="relative mx-auto overflow-hidden rounded-[20px] bg-black px-4 py-8 md:rounded-[25px] md:px-10 md:py-12 lg:px-12 lg:py-14">
            <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:gap-14 xl:gap-[72px]">
              {/* White form card */}
              <div className="flex w-full flex-col gap-6 rounded-[18px] bg-white p-6 sm:p-8 md:gap-7 md:p-9">
                <div>
                  <img
                    src={LOGO_URL}
                    alt="MISK MANAGERS"
                    className="mb-4 h-[20px] w-auto object-contain object-left brightness-0"
                    height={20}
                  />
                  <h3 className="font-['Gilroy-Medium'] text-[clamp(1.35rem,2.2vw,26px)] font-normal leading-[1.25] text-[#0A0A0A]">
                    {demo.formTitle}
                  </h3>
                  <p className="mt-2 font-['Gilroy-Medium'] text-[13px] font-normal leading-snug text-[#636363] md:text-[14px]">
                    Share a few details so we can personalize the demo for you.
                  </p>
                </div>

                <form className="flex flex-col gap-3.5" onSubmit={onSubmit}>
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <Field label="First name*">
                      <input
                        required
                        name="firstName"
                        value={form.firstName}
                        onChange={onChange}
                        placeholder="Jane"
                        className={fieldClass}
                      />
                    </Field>
                    <Field label="Last name*">
                      <input
                        required
                        name="lastName"
                        value={form.lastName}
                        onChange={onChange}
                        placeholder="Doe"
                        className={fieldClass}
                      />
                    </Field>
                  </div>
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <Field label="Email*">
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="hello@company.com"
                        className={fieldClass}
                      />
                    </Field>
                    <Field label="Phone*">
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        placeholder="+1 555 000 0000"
                        className={fieldClass}
                      />
                    </Field>
                  </div>
                  <Field label="Tell us what you’re building">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      rows={3}
                      placeholder="Product goals, timeline, constraints…"
                      className={`${fieldClass} h-auto min-h-[96px] resize-none py-3`}
                    />
                  </Field>

                  <label className="mt-1 flex items-start gap-2.5 font-['Gilroy-Medium'] text-[12px] font-normal leading-snug text-[#888888]">
                    <input
                      type="checkbox"
                      required
                      className="mt-0.5 size-4 shrink-0 accent-[#0A0A0A]"
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

                  {/* Figma: medium-grey full-width CTA */}
                  <button
                    type="submit"
                    disabled={!projectSlug}
                    className="mt-1 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#6E6E6E] font-['Gilroy-Medium'] text-[15px] font-normal text-white transition hover:bg-[#5A5A5A] disabled:cursor-not-allowed disabled:opacity-40 md:h-[54px] md:text-[16px]"
                  >
                    {demo.formCta}
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              </div>

              {/* Pitch */}
              <div className="flex flex-col justify-between gap-10 text-white lg:py-1">
                <div>
                  <h2 className="max-w-[520px] font-['Gilroy-Medium'] text-[clamp(2.25rem,5vw,56px)] font-normal leading-[1.08] tracking-[-0.02em]">
                    <span className="text-white">{demo.pitchTitleLead}</span>
                    <span className="text-[#C4C4E8]">{demo.pitchTitleTrail}</span>
                  </h2>
                  <p className="mt-5 max-w-[440px] font-['Gilroy-Medium'] text-[clamp(1rem,1.6vw,20px)] font-normal leading-[1.35] md:mt-6">
                    <span className="text-white">{demo.pitchBodyLead}</span>
                    <span className="text-[#636363]">{demo.pitchBodyTrail}</span>
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-3 sm:gap-4">
                  {demo.benefits.map((b) => (
                    <div key={b.title} className="max-w-[190px]">
                      <div className="flex items-center gap-2">
                        <img
                          src={assets.letsTalk[b.icon]}
                          alt=""
                          className="size-[20px] shrink-0 object-contain"
                          width={20}
                          height={20}
                          loading="lazy"
                        />
                        <h3 className="font-['Gilroy-Bold'] text-[14px] font-normal leading-tight text-white md:text-[15px]">
                          {b.title}
                        </h3>
                      </div>
                      <p className="mt-2 font-['Gilroy-Medium'] text-[13px] font-normal leading-snug text-white/50">
                        {b.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex max-w-[420px] items-center gap-3 rounded-[14px] bg-white/[0.1] p-3 backdrop-blur-[5px]">
                  <img
                    src={assets.people.erik}
                    alt=""
                    className="size-11 shrink-0 rounded-full object-cover"
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                  <p className="font-['Gilroy-Medium'] text-[13px] font-normal leading-snug text-white/85 md:text-[14px]">
                    {demo.expertLine}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
