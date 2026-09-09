import { motion, useReducedMotion } from 'motion/react'
import { assets } from '../content/assets'
import { PAGE_GUTTER } from '../styles/layout'

/**
 * Clients logo strip:
 * white cards ~222×163 r14 · logo 180×50
 * appear: fade only (y:0) spring bounce 0.2 duration 0.4
 */
export default function Clients() {
  const reduce = useReducedMotion()

  return (
    <section
      className={`bg-[#F5F5F5] py-0 ${PAGE_GUTTER}`}
      aria-label="Our clients"
    >
      <div className="mx-auto max-w-[1440px]">
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
