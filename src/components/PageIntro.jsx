import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { LOGO_MONO_URL } from '../content/site'

const ease = [0.76, 0, 0.24, 1]
const soft = [0.22, 1, 0.36, 1]

/**
 * Nextio-style first load:
 * black viewport + centered logo → hold → curtain slides up while page reveals.
 */
export default function PageIntro({ onDone }) {
  const reduce = useReducedMotion()
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (reduce) {
      onDone?.()
      return undefined
    }

    const exitTimer = window.setTimeout(() => {
      setExiting(true)
      onDone?.()
    }, 1700)

    return () => window.clearTimeout(exitTimer)
  }, [reduce, onDone])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
      initial={{ y: '0%' }}
      animate={{ y: exiting ? '-100%' : '0%' }}
      transition={{ duration: 1, ease }}
    >
      <motion.div
        className="flex flex-col items-center px-6"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: soft, delay: 0.08 }}
      >
        <img
          src={LOGO_MONO_URL}
          alt="MISK MANAGERS"
          className="h-[28px] w-auto object-contain brightness-0 invert sm:h-[34px] md:h-[42px]"
          width={240}
          height={42}
          draggable={false}
        />
        <motion.span
          className="mt-6 block h-px w-[72px] origin-center bg-white/40"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.55, delay: 0.5, ease: soft }}
        />
      </motion.div>
    </motion.div>
  )
}
