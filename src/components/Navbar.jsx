import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { EMAIL, LOGO_URL, navLinks } from '../content/site'

/** nextio Framer easing */
const ease = [0.22, 1, 0.36, 1]
const dualTransition = { duration: 0.4, ease }

/**
 * Contact dual-label like nextio:
 * visible text exits downward; replacement enters from above.
 */
function ContactDualLabel({ children }) {
  return (
    <span className="relative block h-3 overflow-hidden leading-3">
      <motion.span
        className="block"
        variants={{ rest: { y: '0%' }, hover: { y: '100%' } }}
        transition={dualTransition}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 block"
        variants={{ rest: { y: '-100%' }, hover: { y: '0%' } }}
        transition={dualTransition}
      >
        {children}
      </motion.span>
    </span>
  )
}

/** Large dual-label for mobile menu links (32/38) */
function MenuDualLabel({ children }) {
  return (
    <span className="relative block h-[38px] overflow-hidden leading-[38px]">
      <motion.span
        className="block"
        variants={{ rest: { y: '0%' }, hover: { y: '100%' } }}
        transition={dualTransition}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 block"
        variants={{ rest: { y: '-100%' }, hover: { y: '0%' } }}
        transition={dualTransition}
      >
        {children}
      </motion.span>
    </span>
  )
}

function MenuPill({ open, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-[30px] items-center gap-2 rounded-full border border-black/12 bg-transparent px-4 font-['Gilroy-Medium'] text-[14px] font-normal leading-[15.4px] text-[#0A0A0A] transition-colors duration-200 hover:text-[#636363]"
      aria-label={open ? 'Close menu' : 'Open menu'}
    >
      <span className={open ? 'opacity-60' : undefined}>Menu</span>
      {open ? (
        <span className="text-[16px] leading-none" aria-hidden>
          ×
        </span>
      ) : (
        <span className="flex flex-col gap-[3px]" aria-hidden="true">
          <span className="block h-[1.5px] w-3.5 bg-current" />
          <span className="block h-[1.5px] w-3.5 bg-current" />
          <span className="block h-[1.5px] w-3.5 bg-current" />
        </span>
      )}
    </button>
  )
}

const menuItemVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.08 + i * 0.055,
      type: 'spring',
      bounce: 0.22,
      duration: 0.55,
    },
  }),
  exit: (i) => ({
    opacity: 0,
    y: 12,
    filter: 'blur(2px)',
    transition: {
      delay: i * 0.03,
      duration: 0.22,
      ease,
    },
  }),
}

/**
 * nextio Phone open @ ~390:
 * pad 15/20/40 · Body centered gap70 · Navigation gap4 · links 32/38 Medium
 * dual-label hover · email 26 underline · Legal 13 · © 12 @ 60%
 * open: staggered spring + blur · exit: reverse fade
 */
function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const items = [
    ...navLinks.map((link) => ({
      key: link.label,
      to: link.to,
      label: link.label,
      badge: link.badge,
    })),
    { key: 'Request demo', to: '/request-demo', label: 'Request demo' },
    { key: 'Contact us', to: '/contact', label: 'Contact us' },
  ]

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col bg-white px-5 pt-[15px] pb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease }}
        >
          <motion.div
            className="flex h-[30px] w-full items-center justify-between"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease }}
          >
            <Link
              to="/"
              onClick={onClose}
              className="flex h-[28px] items-center"
              aria-label="MISK MANAGERS home"
            >
              <img
                src={LOGO_URL}
                alt="MISK MANAGERS"
                className="h-[28px] w-auto object-contain brightness-0"
              />
            </Link>
            <MenuPill open onClick={onClose} />
          </motion.div>

          <div className="flex flex-1 flex-col items-center justify-center gap-[70px]">
            <nav className="flex flex-col items-center gap-1" aria-label="Mobile">
              {items.map((item, i) => (
                <motion.div
                  key={item.key}
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <motion.div initial="rest" whileHover="hover" animate="rest">
                    <Link
                      to={item.to}
                      onClick={onClose}
                      className="inline-flex items-start justify-center gap-1.5 font-['Gilroy-Medium'] text-[32px] font-normal leading-[38px] text-[#0A0A0A]"
                    >
                      <MenuDualLabel>{item.label}</MenuDualLabel>
                      {item.badge ? (
                        <span className="relative top-[4px] font-['Gilroy-Bold'] text-[11px] leading-none text-[#0A0A0A]">
                          {item.badge}
                        </span>
                      ) : null}
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col items-center gap-9">
              <motion.a
                href={`mailto:${EMAIL}`}
                custom={items.length}
                variants={menuItemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="inline-block border-b-2 border-[#0A0A0A] pb-0.5 font-['Gilroy-Bold'] text-[26px] font-normal leading-none text-[#090909]"
              >
                {EMAIL}
              </motion.a>

              <motion.div
                className="flex flex-col items-center gap-3"
                custom={items.length + 1}
                variants={menuItemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <a
                  href="#"
                  className="font-['Gilroy-Medium'] text-[13px] text-[#0A0A0A] transition hover:opacity-55"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="font-['Gilroy-Medium'] text-[13px] text-[#0A0A0A] transition hover:opacity-55"
                >
                  Terms of Service
                </a>
              </motion.div>
            </div>
          </div>

          <motion.p
            className="text-center font-['Gilroy-Medium'] text-[12px] text-[#0A0A0A]/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.35, duration: 0.4, ease }}
          >
            © 2026 MISK MANAGERS®
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

/**
 * Desktop: justify-between row — logo · links · Contact + Menu (NOT centered)
 * Mobile: logo + Menu only
 */
export default function Navbar({ ready = true }) {
  const reduce = useReducedMotion()
  const show = ready || reduce
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[50] w-full bg-[#F5F5F5]/90 backdrop-blur-[7px]">
        <div className="flex h-[60px] w-full items-center px-5 py-[15px] md:px-8">
          <div className="flex h-[30px] w-full items-center justify-between gap-2">
            <motion.div
              className="shrink-0"
              initial={false}
              animate={show ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.55, delay: show ? 0.02 : 0, ease }}
            >
              <Link
                to="/"
                className="flex h-[28px] shrink-0 items-center"
                aria-label="MISK MANAGERS home"
              >
                <img
                  src={LOGO_URL}
                  alt="MISK MANAGERS"
                  className="h-[28px] w-auto object-contain object-left"
                  height={28}
                />
              </Link>
            </motion.div>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                className="hidden shrink-0 min-[1100px]:block"
                initial={false}
                animate={show ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.45, delay: show ? 0.08 + i * 0.04 : 0, ease }}
              >
                <NavLink
                  to={link.to}
                  className="group relative inline-flex h-[15.4px] items-start whitespace-nowrap font-['Gilroy-Medium'] text-[14px] font-normal leading-[15.4px] text-[#0A0A0A] transition-colors duration-200 hover:text-[#636363]"
                >
                  <span className="inline-flex items-start">
                    {link.label}
                    {link.badge ? (
                      <span className="relative -top-[3px] ml-[2px] font-['Gilroy-Bold'] text-[9px] leading-[9px] text-[#090909] transition-colors duration-200 group-hover:text-[#636363]">
                        {link.badge}
                      </span>
                    ) : null}
                  </span>
                </NavLink>
              </motion.div>
            ))}

            <motion.div
              className="flex shrink-0 items-center gap-[10px]"
              initial={false}
              animate={show ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: show ? 0.32 : 0, ease }}
            >
              <Link
                to="/request-demo"
                className="hidden h-[30px] items-center rounded-full bg-[#6C6CAB] px-3.5 font-['Gilroy-Bold'] text-[12px] font-normal leading-3 text-white transition hover:bg-[#5B5B96] min-[1100px]:inline-flex"
              >
                Request demo
              </Link>

              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="hidden md:block"
              >
                <Link
                  to="/contact"
                  className="inline-flex h-[30px] items-center gap-[30px] overflow-hidden rounded-full bg-[#0A0A0A] py-[9px] pr-[11px] pl-3 font-['Gilroy-Bold'] text-[12px] font-normal leading-3 text-white"
                >
                  <ContactDualLabel>Contact us</ContactDualLabel>
                  <motion.span
                    className="block shrink-0 rounded-full bg-white"
                    aria-hidden="true"
                    variants={{
                      rest: { width: 8, height: 8 },
                      hover: { width: 10, height: 10 },
                    }}
                    transition={{ duration: 0.35, ease }}
                  />
                </Link>
              </motion.div>

              <MenuPill open={false} onClick={() => setMenuOpen(true)} />
            </motion.div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
