import { useState } from 'react'
import Reveal from './Reveal'

const faqs = [
  {
    q: 'How quickly can we get started?',
    a: 'We can usually start within days. For early-stage initiatives, we often deliver an MVP or validated prototype in ≤ 3 days, allowing fast validation of assumptions before larger investments. This helps reduce risk and accelerate decision-making early in the process.',
  },
  {
    q: 'How do you manage scope, budget, and delivery risk?',
    a: 'We start by aligning on business goals, scope, and success metrics. Projects are delivered in clear phases, which allows early validation, controlled investment, and flexibility as priorities evolve.',
  },
  {
    q: 'Do you focus on MVPs or enterprise-grade systems?',
    a: 'Both — depending on the business need. We help teams validate ideas quickly through MVPs and then evolve successful products into stable, scalable, enterprise-ready systems. MVPs are built with long-term architecture in mind.',
  },
  {
    q: 'What happens after the product is launched?',
    a: 'Launch is not the end of our involvement. We provide ongoing support, performance optimization, and feature development to ensure the product continues to deliver value as the business grows. Many of our clients continue with us long-term.',
  },
  {
    q: 'How do you collaborate with internal teams and stakeholders?',
    a: 'We work as an extension of your team. Our process is designed to integrate smoothly with internal product owners, management, and technical teams, ensuring clear ownership, transparency, and efficient delivery.',
  },
  {
    q: 'What type of companies do you typically work with?',
    a: 'We work with startups, scale-ups, and established companies. The common factor is a focus on building digital products with long-term business value, not short-term experiments or one-off deliveries.',
  },
  {
    q: 'What’s the first step if we want to start a conversation?',
    a: 'We begin with a short, focused discussion. The goal is to understand your business context, goals, constraints, and timeline. Based on that, we propose a clear next step — whether that’s MVP validation, product scoping, or full delivery.',
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
