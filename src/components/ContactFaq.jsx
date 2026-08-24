import { DualButton } from './Hero'
import Reveal from './Reveal'
import { PAGE_GUTTER } from '../styles/layout'

const faqs = [
  {
    q: 'How fast can you start?',
    a: 'We can usually start within days. For early-stage initiatives, we often deliver an MVP or validated prototype quickly, allowing fast validation of assumptions before larger investments.',
  },
  {
    q: 'How do projects usually run?',
    a: 'We start by aligning on business goals, scope, and success metrics. Projects are delivered in clear phases, which allows early validation, controlled investment, and flexibility as priorities evolve.',
  },
  {
    q: 'Do you build MVPs or enterprise products?',
    a: 'Both — depending on the business need. We help teams validate ideas quickly through MVPs and then evolve successful products into stable, scalable, enterprise-ready systems.',
  },
  {
    q: 'What happens after launch?',
    a: 'Launch is not the end of our involvement. We provide ongoing support, performance optimization, and feature development to ensure the product continues to deliver value as the business grows.',
  },
]

export default function ContactFaq() {
  return (
    <section id="contact" className={`bg-misk-surface py-16 sm:py-20 ${PAGE_GUTTER}`}>
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
        <div>
          <h2 className="font-['Gilroy-Medium'] text-[clamp(2rem,4vw,3rem)] text-[#0A0A0A]">
            FAQ
          </h2>
          <p className="mt-3 max-w-[420px] font-['Gilroy-Medium'] text-[15px] text-[#0A0A0A]/65">
            What executives usually want to know before starting a project.
          </p>
          <div className="mt-8 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl bg-white p-5 open:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <summary className="cursor-pointer list-none font-['Gilroy-Bold'] text-[15px] text-[#0A0A0A]">
                  {faq.q}
                </summary>
                <p className="mt-3 font-['Gilroy-Medium'] text-[14px] leading-relaxed text-[#0A0A0A]/65">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
        </Reveal>

        <Reveal delay={120} y={40}>
        <div className="rounded-[24px] bg-white p-6 sm:p-8 md:p-10">
          <h3 className="font-['Gilroy-Medium'] text-[clamp(1.5rem,3vw,2rem)] text-[#0A0A0A]">
            No commitment. Just a focused discussion.
          </h3>
          <form
            className="mt-8 flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <label className="flex flex-col gap-1.5 font-['Gilroy-Medium'] text-[13px] text-[#0A0A0A]/7">
              Your name*
              <input
                required
                name="name"
                placeholder="John Doe"
                className="h-12 rounded-xl border border-black/10 px-4 font-['Gilroy-Medium'] text-[14px] text-[#0A0A0A] outline-none focus:border-black/30"
              />
            </label>
            <label className="flex flex-col gap-1.5 font-['Gilroy-Medium'] text-[13px] text-[#0A0A0A]/7">
              E-mail*
              <input
                required
                type="email"
                name="email"
                placeholder="hello@site.com"
                className="h-12 rounded-xl border border-black/10 px-4 font-['Gilroy-Medium'] text-[14px] text-[#0A0A0A] outline-none focus:border-black/30"
              />
            </label>
            <label className="flex flex-col gap-1.5 font-['Gilroy-Medium'] text-[13px] text-[#0A0A0A]/7">
              Message
              <textarea
                name="message"
                rows={4}
                placeholder="Your message"
                className="rounded-xl border border-black/10 px-4 py-3 font-['Gilroy-Medium'] text-[14px] text-[#0A0A0A] outline-none focus:border-black/30"
              />
            </label>
            <label className="flex items-start gap-2 font-['Gilroy-Medium'] text-[12px] text-[#0A0A0A]/65">
              <input type="checkbox" required className="mt-1" />
              I agree to Terms and Privacy Policy.
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex h-[50px] items-center justify-center rounded-full bg-[#0A0A0A] px-6 font-['Gilroy-Bold'] text-[14px] text-white"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8">
            <DualButton href="mailto:hi@miskmanagers.com" variant="dark">
              Discuss your project
            </DualButton>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
