import { useEffect, useMemo, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Reveal from '../components/Reveal'
import DemoCalendar, { toIso } from '../components/demo/DemoCalendar'
import { demo } from '../content/site'
import { formatDemoDate, loadDemoBooking, saveDemoBooking } from '../lib/demoBooking'

const ease = [0.22, 1, 0.36, 1]

function nextWeekdayIso() {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() + 1)
  while (d.getDay() === 0 || d.getDay() === 6) {
    d.setDate(d.getDate() + 1)
  }
  return toIso(d)
}

export default function DemoSchedulePage() {
  const navigate = useNavigate()
  const reduce = useReducedMotion()
  const booking = loadDemoBooking()
  const hasLead = Boolean(booking?.email && booking?.projectSlug)

  const minIso = useMemo(() => toIso(new Date()), [])
  const [selectedIso, setSelectedIso] = useState(
    () => booking?.date || nextWeekdayIso(),
  )
  const [time, setTime] = useState(() => booking?.time || '')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!hasLead) {
    return <Navigate to="/request-demo" replace />
  }

  const onConfirm = () => {
    if (!selectedIso || !time) return
    saveDemoBooking({ date: selectedIso, time })
    navigate('/request-demo/confirmed')
  }

  return (
    <main className="bg-[#F5F5F5]">
      <section className="px-[6px] pt-6 pb-10 md:px-[10px] md:pt-10 md:pb-14">
        <Reveal delay={20} y={50}>
          <motion.div
            className="mx-auto overflow-hidden rounded-[20px] bg-black px-5 py-12 text-white md:rounded-[25px] md:px-12 md:py-14 lg:px-16 lg:py-16"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            {/* Figma: centered title block */}
            <div className="mx-auto max-w-[560px] text-center">
              <h1 className="font-['Gilroy-Medium'] text-[clamp(2.25rem,5vw,56px)] font-normal leading-[1.05] tracking-[-0.02em] text-white">
                {demo.scheduleTitle}
              </h1>
              <p className="mt-3 font-['Gilroy-Medium'] text-[14px] font-normal text-white/45 md:text-[15px]">
                {demo.scheduleMeta}
              </p>
            </div>

            <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-20">
              <div className="flex flex-col items-center lg:items-start">
                <DemoCalendar
                  selectedIso={selectedIso}
                  onSelect={(iso) => {
                    setSelectedIso(iso)
                    setTime('')
                  }}
                  minDate={minIso}
                />
                <p className="mt-7 w-full max-w-[420px] font-['Gilroy-Medium'] text-[12px] font-normal text-white/35 md:text-[13px]">
                  {demo.timezoneLabel}
                </p>
              </div>

              <div className="flex min-h-0 flex-col">
                <p className="mb-4 font-['Gilroy-Bold'] text-[15px] font-normal text-white md:text-[16px]">
                  {formatDemoDate(selectedIso)}
                </p>

                <div className="flex max-h-[340px] flex-col gap-2 overflow-y-auto pr-1 md:max-h-[380px]">
                  {demo.timeSlots.map((slot) => {
                    const active = time === slot
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={`flex h-[46px] w-full shrink-0 items-center px-5 font-['Gilroy-Medium'] text-[15px] font-normal transition md:h-[48px] ${
                          active
                            ? 'rounded-full bg-white text-[#0A0A0A]'
                            : 'rounded-[10px] border border-white/18 text-white hover:border-white/40'
                        }`}
                      >
                        {slot}
                      </button>
                    )
                  })}
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    disabled={!time}
                    onClick={onConfirm}
                    className="inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-white px-8 font-['Gilroy-Bold'] text-[14px] font-normal text-[#0A0A0A] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-35 sm:w-auto sm:min-w-[240px] md:h-[54px]"
                  >
                    {demo.confirmCta}
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </section>
    </main>
  )
}
