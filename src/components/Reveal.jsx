import { motion, useReducedMotion } from 'motion/react'

/** Soft spring — snappy enough for scroll, still smooth */
export const nextioSpring = {
  type: 'spring',
  damping: 28,
  stiffness: 160,
  mass: 0.4,
}

/**
 * Scroll appear — short delays only (ms). Long Framer load delays are not used on scroll.
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  y = 48,
  once = true,
  amount = 0.05,
}) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: Math.min(y, 64) }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: '0px 0px -40px 0px' }}
      transition={{ ...nextioSpring, delay: Math.min(delay, 120) / 1000 }}
    >
      {children}
    </Tag>
  )
}
