import { motion, useReducedMotion } from 'motion/react'
import { assets } from '../content/assets'
import { PAGE_GUTTER } from '../styles/layout'

/**
 * nextio clients strip:
 * "/" #636363 16 Regular · "Our clients" #0A0A0A 16 SemiBold/Bold · 140% line
 * white cards ~222×163 r14 · logo 180×50
 * appear: fade only (y:0) spring bounce 0.2 duration 0.4
 */
export default function Clients() {
  const reduce = useReducedMotion()

  return (
    <section
      className={`bg-[#F5F5F5] py-0 ${PAGE_GUTTER}`}
      aria-labelledby="clients-heading"
    >
      <div className="mx-auto max-w-[1440px]">
        <motion.p
          id="clients-heading"
          className="mb-8 font-['Gilroy-Bold'] text-[16px] font-normal leading-[22.4px] text-[#0A0A0A] sm:mb-10"
          initial={reduce ? false : { opacity: 0.001, y: 0 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
        >
          <span className="font-['Gilroy-Regular'] text-[#636363]">/</span>
          {' '}
          Our clients
        </motion.p>

        <motion.div
          className="grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-1 lg:grid-cols-6 lg:gap-1"
          initial={reduce ? false : { opacity: 0.001 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
        >
          {assets.clients.map((client) => (
            <div
              key={client.name}
              className="flex h-[100px] items-center justify-center rounded-[14px] bg-white px-3 sm:h-[140px] md:h-[163px] md:px-4"
            >
              <img
                src={client.src}
                alt={client.name}
                className="h-[50px] w-[180px] max-w-full object-contain brightness-0"
                width={180}
                height={50}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
