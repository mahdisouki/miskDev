import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Reveal from '../components/Reveal'
import DemoProductCard, { getDemoProducts } from '../components/demo/DemoProductCard'
import { demo } from '../content/site'
import { assets } from '../content/assets'
import { loadDemoBooking, saveDemoBooking } from '../lib/demoBooking'

const ease = [0.22, 1, 0.36, 1]

const fieldClass =
  "h-[52px] w-full rounded-[10px] border-0 bg-[#F5F5F5] px-4 font-['Gilroy-Medium'] text-[15px] font-normal text-[#0A0A0A] outline-none placeholder:text-[#0A0A0A]/30 md:h-[56px] md:text-[16px]"

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

function DemoHero() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-[#F5F5F5] px-[6px] md:px-[10px]">
      <motion.div
        className="relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-b-[20px] rounded-t-[20px] bg-[#0A0A0A] px-5 pb-12 pt-16 text-white sm:min-h-[320px] md:min-h-[380px] md:rounded-[25px] md:px-[60px] md:pb-16 md:pt-20 lg:px-[80px] lg:pb-[72px]"
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease }}
      >
        <p className="mb-3 font-['Gilroy-Medium'] text-[13px] font-normal text-white/50 md:mb-4 md:text-[15px]">
          {demo.eyebrow}
        </p>
        <h1 className="max-w-[920px] font-['Gilroy-Medium'] text-[clamp(2.75rem,7.2vw,86px)] font-normal leading-[0.98] tracking-[-0.02em]">
          <span className="text-white">{demo.heroLead}</span>
          <span className="text-services-gradient">{demo.heroTrail}</span>
        </h1>
        <p className="mt-5 max-w-[520px] font-['Gilroy-Medium'] text-[15px] font-normal leading-[1.45] text-white/60 md:mt-6 md:text-[18px] md:leading-[1.4]">
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

      {/* Product picker — Figma: left title, 4-col cards */}
      <section className="px-[10px] py-12 md:px-[36px] md:py-[80px]">
        <div className="mx-auto max-w-[1440px]">
          <Reveal delay={40}>
            <h2 className="mb-8 max-w-[720px] text-left font-['Gilroy-Medium'] text-[clamp(1.35rem,2.6vw,32px)] font-normal leading-[1.25] md:mb-12 md:text-[32px] md:leading-[1.2]">
              <span className="text-[#0A0A0A]">{demo.pickTitleLead}</span>
              <span className="text-demo-accent">{demo.pickTitleTrail}</span>
              <span className="text-[#0A0A0A]">{demo.pickTitleEnd}</span>
            </h2>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[10px]">
            {products.map((project, i) => (
              <Reveal key={project.id} delay={16 + i * 16} y={48} className="h-full">
                <DemoProductCard
                  project={project}
                  selected={projectSlug === project.slug}
                  onSelect={setProjectSlug}
                />
              </Reveal>
            ))}
          </div>
          {!projectSlug ? (
            <p className="mt-4 font-['Gilroy-Medium'] text-[13px] text-[#888888]">
              Select a product to continue.
            </p>
          ) : null}
        </div>
      </section>

      {/* Form + pitch — Figma: white form left, copy right inside black plate */}
      <section className="bg-[#F5F5F5] px-[6px] pb-12 md:px-[10px] md:pb-[80px]">
        <Reveal delay={20} y={80}>
          <div className="relative mx-auto overflow-hidden rounded-[20px] bg-[#0A0A0A] px-4 py-8 md:rounded-[25px] md:px-10 md:py-12 lg:px-12 lg:py-14">
            <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,506px)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
              {/* Form card */}
              <div className="flex w-full flex-col gap-7 rounded-[18px] bg-white p-6 sm:p-8 md:gap-8 md:p-10">
                <h3 className="max-w-[400px] font-['Gilroy-Medium'] text-[clamp(1.35rem,2.2vw,28px)] font-normal leading-[1.25] text-[#0A0A0A]">
                  {demo.formTitle}
                </h3>

                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
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
                  <div className="grid gap-4 sm:grid-cols-2">
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
                      rows={4}
                      placeholder="Product goals, timeline, constraints…"
                      className={`${fieldClass} h-auto min-h-[110px] resize-none py-3.5`}
                    />
                  </Field>

                  <label className="flex items-start gap-2.5 font-['Gilroy-Medium'] text-[12px] font-normal leading-snug text-[#888888]">
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

                  <button
                    type="submit"
                    disabled={!projectSlug}
                    className="mt-1 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#0A0A0A] font-['Gilroy-Medium'] text-[16px] font-normal text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 md:h-[56px]"
                  >
                    {demo.formCta}
                    <span aria-hidden="true">→</span>
                  </button>
                </form>
              </div>

              {/* Pitch column */}
              <div className="flex flex-col justify-between gap-10 text-white lg:py-2">
                <div>
                  <h2 className="max-w-[560px] font-['Gilroy-Medium'] text-[clamp(2.4rem,5.5vw,64px)] font-normal leading-[1.05] tracking-[-0.02em]">
                    <span className="text-white">{demo.pitchTitleLead}</span>
                    <span className="text-services-gradient">{demo.pitchTitleTrail}</span>
                  </h2>
                  <p className="mt-5 max-w-[480px] font-['Gilroy-Medium'] text-[clamp(1.05rem,1.8vw,22px)] font-normal leading-[1.35] md:mt-7">
                    <span className="text-white">{demo.pitchBodyLead}</span>
                    <span className="text-[#636363]">{demo.pitchBodyTrail}</span>
                  </p>
                </div>

                <div className="grid gap-7 sm:grid-cols-3 sm:gap-5">
                  {demo.benefits.map((b) => (
                    <div key={b.title} className="max-w-[200px]">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={assets.letsTalk[b.icon]}
                          alt=""
                          className="size-[22px] shrink-0 object-contain"
                          width={22}
                          height={22}
                          loading="lazy"
                        />
                        <h3 className="font-['Gilroy-Bold'] text-[15px] font-normal leading-tight text-white md:text-[16px]">
                          {b.title}
                        </h3>
                      </div>
                      <p className="mt-2 font-['Gilroy-Medium'] text-[13px] font-normal leading-snug text-white/55 md:text-[14px]">
                        {b.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex max-w-[440px] items-center gap-3 rounded-[14px] bg-white/[0.12] p-3 backdrop-blur-[5px]">
                  <div className="flex -space-x-2 shrink-0">
                    <img
                      src={assets.people.erik}
                      alt=""
                      className="size-11 rounded-full object-cover ring-2 ring-[#0A0A0A]"
                      width={44}
                      height={44}
                      loading="lazy"
                    />
                    <img
                      src={assets.people.giacomo}
                      alt=""
                      className="size-11 rounded-full object-cover ring-2 ring-[#0A0A0A]"
                      width={44}
                      height={44}
                      loading="lazy"
                    />
                  </div>
                  <p className="font-['Gilroy-Medium'] text-[13px] font-normal leading-snug text-white/90 md:text-[14px]">
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
