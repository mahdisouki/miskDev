import { useMemo, useState } from 'react'

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function toIso(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function startOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1)
}

function addMonths(d, n) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1)
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function isWeekend(d) {
  const day = d.getDay()
  return day === 0 || day === 6
}

/**
 * Figma schedule calendar — dark plate, white selected day circle.
 */
export default function DemoCalendar({
  selectedIso,
  onSelect,
  minDate,
  className = '',
}) {
  const today = useMemo(() => {
    const t = new Date()
    t.setHours(0, 0, 0, 0)
    return t
  }, [])

  const floor = minDate ? new Date(`${minDate}T00:00:00`) : today
  const [view, setView] = useState(() => startOfMonth(floor))

  const days = useMemo(() => {
    const first = startOfMonth(view)
    const startPad = first.getDay()
    const cells = []
    for (let i = 0; i < startPad; i++) cells.push(null)
    const dim = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate()
    for (let day = 1; day <= dim; day++) {
      cells.push(new Date(view.getFullYear(), view.getMonth(), day))
    }
    return cells
  }, [view])

  const label = view.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  const canPrev = view > startOfMonth(floor)

  return (
    <div className={`flex w-full max-w-[420px] flex-col text-white ${className}`}>
      <div className="mb-5 flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous month"
          disabled={!canPrev}
          onClick={() => setView((v) => addMonths(v, -1))}
          className="flex size-8 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white disabled:pointer-events-none disabled:opacity-25"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <p className="font-['Gilroy-Bold'] text-[15px] font-normal md:text-[16px]">{label}</p>
        <button
          type="button"
          aria-label="Next month"
          onClick={() => setView((v) => addMonths(v, 1))}
          className="flex size-8 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="mb-1 grid grid-cols-7">
        {WEEKDAYS.map((d) => (
          <span
            key={d}
            className="py-2 text-center font-['Gilroy-Medium'] text-[11px] text-white/35 md:text-[12px]"
          >
            {d}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-1">
        {days.map((date, i) => {
          if (!date) {
            return <span key={`pad-${i}`} className="aspect-square" />
          }
          const iso = toIso(date)
          const disabled = date < floor || isWeekend(date)
          const selected = selectedIso === iso
          const isToday = isSameDay(date, today)

          return (
            <button
              key={iso}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(iso)}
              className={`mx-auto flex size-9 items-center justify-center rounded-full font-['Gilroy-Medium'] text-[14px] font-normal transition md:size-10 md:text-[15px] ${
                selected
                  ? 'bg-white text-[#0A0A0A]'
                  : disabled
                    ? 'cursor-not-allowed text-white/15'
                    : isToday
                      ? 'text-white ring-1 ring-white/30 hover:bg-white/10'
                      : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { toIso }
