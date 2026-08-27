const STORAGE_KEY = 'misk-demo-booking'

export function loadDemoBooking() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function saveDemoBooking(data) {
  const next = { ...loadDemoBooking(), ...data }
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  return next
}

export function clearDemoBooking() {
  sessionStorage.removeItem(STORAGE_KEY)
}

/** Format like "Thursday, September 3, 2026" */
export function formatDemoDate(isoDate) {
  const d = new Date(`${isoDate}T12:00:00`)
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

/** Format like "08:15 - Thursday September 3, 2026" */
export function formatDemoSlot(isoDate, time) {
  const d = new Date(`${isoDate}T12:00:00`)
  const datePart = d.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  return `${time} — ${datePart}`
}

export function buildGoogleCalendarUrl({ title, isoDate, time, details }) {
  const [hh, mm] = time.split(':').map(Number)
  const start = new Date(`${isoDate}T00:00:00`)
  start.setHours(hh, mm, 0, 0)
  const end = new Date(start.getTime() + 30 * 60 * 1000)

  const stamp = (d) =>
    d
      .toISOString()
      .replace(/[-:]/g, '')
      .replace(/\.\d{3}/, '')

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${stamp(start)}/${stamp(end)}`,
    details: details || '',
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
