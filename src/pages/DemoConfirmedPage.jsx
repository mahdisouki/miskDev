import { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Reveal from '../components/Reveal'
import { demo, getProjectBySlug } from '../content/site'
import {
  buildGoogleCalendarUrl,
  formatDemoSlot,
  loadDemoBooking,
} from '../lib/demoBooking'

const ease = [0.22, 1, 0.36, 1]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4 9.5l3.2 3.2L14 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InfoBox({ label, value }) {
  return (
    <div className="rounded-[14px] bg-[#1A1A1A] px-5 py-4 md:px-6 md:py-5">
      <p className="font-['Gilroy-Medium'] text-[11px] font-normal uppercase tracking-[0.07em] text-white/40">
        {label}
      </p>
      <p className="mt-2 break-all font-['Gilroy-Medium'] text-[15px] font-normal text-white md:text-[17px]">
        {value || '—'}
      </p>
    </div>
  )
}

export default function DemoConfirmedPage() {
  const reduce = useReducedMotion()
  const booking = loadDemoBooking()
  const isComplete = Boolean(booking?.email && booking?.date && booking?.time)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!isComplete) {
    return <Navigate to="/request-demo" replace />
  }

  const project = getProjectBySlug(booking.projectSlug)
  const slotLabel = formatDemoSlot(booking.date, booking.time)
  const calendarUrl = buildGoogleCalendarUrl({
    title: `MISK MANAGERS demo${project ? ` — ${project.brand}` : ''}`,
    isoDate: booking.date,
    time: booking.time,
    details: `Focused demo with MISK MANAGERS${project ? ` about ${project.brand}` : ''}.`,
  })

  return (
    <main className="bg-[#F5F5F5]">
      <section className="px-[6px] pt-6 pb-10 md:px-[10px] md:pt-10 md:pb-14">
        <Reveal delay={20} y={60}>
          <motion.div
            className="mx-auto overflow-hidden rounded-[20px] bg-[#0A0A0A] px-5 py-10 text-white md:rounded-[25px] md:px-12 md:py-14 lg:px-[72px] lg:py-16"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            {/* Check — Figma top-left */}
            <div className="mb-6 flex size-9 items-center justify-center rounded-full bg-white/15 text-white md:mb-8 md:size-10">
              <CheckIcon />
            </div>

            <h1 className="font-['Gilroy-Medium'] text-[clamp(2.4rem,5.5vw,64px)] font-normal leading-[1.05] tracking-[-0.02em] text-white">
              {demo.bookedTitle}
            </h1>

            <p className="mt-4 font-['Gilroy-Medium'] text-[15px] font-normal text-white/65 md:mt-5 md:text-[18px]">
              {slotLabel}
            </p>
            {project ? (
              <p className="mt-1.5 font-['Gilroy-Medium'] text-[14px] font-normal text-white/40 md:text-[15px]">
                Selected by {project.brand}
              </p>
            ) : null}

            {/* Figma: First name | Email | Phone — dark charcoal boxes */}
            <div className="mt-8 grid gap-2.5 sm:grid-cols-3 md:mt-12 md:gap-3">
              <InfoBox label="First name" value={booking.firstName} />
              <InfoBox label="E-mail" value={booking.email} />
              <InfoBox label="Phone number" value={booking.phone} />
            </div>

            {/* Figma: white CTA + text link beside */}
            <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-8">
              <Link
                to="/"
                className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-white px-7 font-['Gilroy-Bold'] text-[14px] font-normal text-[#0A0A0A] transition hover:opacity-90"
              >
                {demo.bookedCta}
                <span aria-hidden="true">→</span>
              </Link>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-['Gilroy-Medium'] text-[14px] font-normal text-white transition hover:opacity-70 md:text-[15px]"
                >
                  Add to calendar
                </a>
                <Link
                  to="/request-demo/schedule"
                  className="font-['Gilroy-Medium'] text-[14px] font-normal text-white/55 transition hover:text-white md:text-[15px]"
                >
                  {demo.rescheduleLabel}
                </Link>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </section>
    </main>
  )
}
