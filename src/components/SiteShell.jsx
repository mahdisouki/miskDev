import { useCallback, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Navbar from './Navbar'
import Footer from './Footer'
import PageIntro from './PageIntro'

const ease = [0.76, 0, 0.24, 1]

/**
 * Shared chrome: nextio-style intro gate on home, shell everywhere.
 * Fade only (no y/scale) so the page does not jump after the curtain.
 */
export default function SiteShell() {
  const reduce = useReducedMotion()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [introDone, setIntroDone] = useState(!isHome || !!reduce)
  const [showCurtain, setShowCurtain] = useState(isHome && !reduce)

  const handleIntroReveal = useCallback(() => {
    setIntroDone(true)
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!isHome) {
      setIntroDone(true)
      setShowCurtain(false)
      return
    }
    if (reduce) {
      setIntroDone(true)
      setShowCurtain(false)
    }
  }, [isHome, reduce])

  useEffect(() => {
    if (!introDone || !showCurtain) return undefined
    const t = window.setTimeout(() => setShowCurtain(false), 1050)
    return () => window.clearTimeout(t)
  }, [introDone, showCurtain])

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-svh bg-[#F5F5F5]">
      {showCurtain ? <PageIntro onDone={handleIntroReveal} /> : null}

      <motion.div
        initial={false}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 0.75, ease, delay: introDone ? 0.02 : 0 }}
      >
        <Navbar ready={introDone} />
        {/* Offset page content under fixed nav (nextio fixed bar = 60px) */}
        <div className="pt-[60px]">
          <Outlet context={{ introDone }} />
          <Footer />
        </div>
      </motion.div>
    </div>
  )
}
