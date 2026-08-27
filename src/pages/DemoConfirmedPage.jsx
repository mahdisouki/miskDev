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
    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
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
    <div className="rounded-[14px] bg-[#1A1A1A] px-5 py-4 md:px-6 md:py-[18px]">
      <p className="font-['Gilroy-Medium'] text-[10px] font-normal uppercase tracking-[0.08em] text-white/40">
        {label}
      </p>
      <p className="mt-2 break-all font-['Gilroy-Medium'] text-[15px] font-normal text-white md:text-[16px]">
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
        <Reveal delay={20} y={50}>
          <motion.div
            className="mx-auto overflow-hidden rounded-[20px] bg-black px-5 py-10 text-white md:rounded-[25px] md:px-12 md:py-14 lg:px-16 lg:py-16"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="mb-6 flex size-9 items-center justify-center rounded-full bg-white/12 text-white md:mb-7 md:size-10">
              <CheckIcon />
            </div>

            <h1 className="font-['Gilroy-Medium'] text-[clamp(2.25rem,5vw,56px)] font-normal leading-[1.05] tracking-[-0.02em] text-white">
              You&apos;re <span className="text-[#6C6CAB]">booked.</span>
            </h1>

            <p className="mt-4 font-['Gilroy-Medium'] text-[15px] font-normal text-white/60 md:mt-5 md:text-[17px]">
              {slotLabel}
            </p>
            {project ? (
              <p className="mt-1 font-['Gilroy-Medium'] text-[13px] font-normal text-white/35 md:text-[14px]">
                Selected product · {project.brand}
              </p>
            ) : null}

            {/* Figma: First name | Last name | Email */}
            <div className="mt-8 grid gap-2.5 sm:grid-cols-3 md:mt-10 md:gap-3">
              <InfoBox label="First name" value={booking.firstName} />
              <InfoBox label="Last name" value={booking.lastName} />
              <InfoBox label="E-mail" value={booking.email} />
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-7">
              <a
                href={calendarUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-white px-7 font-['Gilroy-Bold'] text-[14px] font-normal text-[#0A0A0A] transition hover:opacity-90"
              >
                Add to calendar
                <span aria-hidden="true">+</span>
              </a>
              <Link
                to="/request-demo/schedule"
                className="font-['Gilroy-Medium'] text-[14px] font-normal text-white/55 transition hover:text-white"
              >
                {demo.rescheduleLabel}
              </Link>
              <Link
                to="/"
                className="font-['Gilroy-Medium'] text-[14px] font-normal text-white/55 transition hover:text-white sm:ml-auto"
              >
                {demo.bookedCta}
              </Link>
            </div>
          </motion.div>
        </Reveal>
      </section>
    </main>
  )
}
