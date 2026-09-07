import { useState } from 'react'
import Reveal from './Reveal'
import { EMAIL } from '../content/site'

const faqs = [
  {
    q: 'How much does it cost to build a website or web app?',
    a: 'We don’t use fixed packages — every project is quoted based on your specific goals and scope. A landing page or automation tool can be ready in under a week. A full web application or SaaS platform typically takes 4–12 weeks. Share your brief and we’ll send a clear proposal with no surprises.',
  },
  {
    q: 'How long does custom web or app development take?',
    a: 'Timelines depend on scope. A landing page or micro-tool takes 1–2 weeks. A full web app typically takes 4–12 weeks. Complex enterprise or AI-powered platforms can take 12+ weeks. We always give you a realistic timeline upfront — no vague estimates.',
  },
  {
    q: 'Do you work with small businesses, startups, and larger companies?',
    a: 'Yes — we work with all of them. From solo founders validating a first idea to established companies building internal tools or customer-facing platforms. No minimum budget. If you have a clear goal, we’ll help you scope and build it.',
  },
  {
    q: 'What digital services does MISK MANAGERS offer?',
    a: 'We offer web and app development, UI/UX design, social media management, and AI-powered solutions including automation, chatbots, and intelligent workflows. Full-stack from design to deployment — one team, not five vendors.',
  },
  {
    q: 'What does your web development and design process look like?',
    a: 'Discovery (understanding your goals) → Design (wireframes and UI) → Development (frontend and backend) → Testing and QA → Launch. After launch we stay available for support, iterations, and growth. You’re kept in the loop at every step.',
  },
  {
    q: 'Do you offer post-launch support and website maintenance?',
    a: 'Yes. We offer ongoing maintenance, bug fixes, performance monitoring, and feature updates after launch. Many clients keep us on retainer for continuous improvements as their product grows.',
  },
  {
    q: 'How do I get started — what happens after I reach out?',
    a: `Send a message via the contact form or email ${EMAIL}. We reply within one business day to schedule a short discovery call. From there we send a custom proposal with scope, timeline, and next steps — no pressure, just clarity.`,
  },
]

function PlusCircle({ open }) {
  return (
    <span
      className="relative flex size-[28px] shrink-0 items-center justify-center rounded-full bg-[#0A0A0A]"
      aria-hidden="true"
    >
      <span className="block h-[1.5px] w-[10px] rounded-full bg-white" />
      <span
        className={`absolute block h-[10px] w-[1.5px] rounded-full bg-white transition-transform duration-200 ${
          open ? 'scale-y-0' : 'scale-y-100'
        }`}
      />
    </span>
  )
}

/**
 * FAQ cards — white r14 · Bold 18 Q · Medium 15 A · black circle + accordion
 */
export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-[#F5F5F5] px-[10px] py-0 md:px-[36px]">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-1">
          <Reveal delay={40}>
            <p className="font-['Gilroy-Bold'] text-[16px] font-normal leading-[22.4px] text-[#0A0A0A]">
              <span className="font-['Gilroy-Regular'] text-[#636363]">/</span>
              {' '}
              Have questions?
            </p>
          </Reveal>

          <Reveal delay={40} className="md:col-span-3 md:col-start-2">
            <div className="max-w-[830px]">
              <h2 className="font-['Gilroy-Medium'] text-[clamp(2.5rem,5vw,60px)] font-normal leading-[1.1] text-[#090909] md:leading-[66px]">
                FAQ
              </h2>
              <p className="mt-4 max-w-[400px] font-['Gilroy-Regular'] text-[16px] font-normal leading-[22.4px] text-[#0A0A0A]">
                What executives usually want to know before starting a project.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 md:mt-16 md:grid md:grid-cols-4 md:gap-1">
          <div className="hidden md:block" aria-hidden="true" />
          <div className="flex flex-col gap-1 md:col-span-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <Reveal key={faq.q} delay={i * 30} y={80}>
                  <article className="rounded-[14px] bg-white">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-start justify-between gap-4 p-5 text-left md:gap-6 md:p-[26px]"
                      aria-expanded={isOpen}
                    >
                      <span className="font-['Gilroy-Bold'] text-[16px] font-normal leading-[22px] text-[#0A0A0A] md:text-[18px] md:leading-[23.4px]">
                        {faq.q}
                      </span>
                      <PlusCircle open={isOpen} />
                    </button>
                    {isOpen ? (
                      <p className="max-w-[960px] px-5 pb-5 pt-0 font-['Gilroy-Medium'] text-[15px] font-normal leading-[21px] text-[#0A0A0A]/60 md:px-[26px] md:pb-[26px]">
                        {faq.a}
                      </p>
                    ) : null}
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
