/** Shared site copy — Figma MISK branding; structure mirrors nextio.co */
import { assets } from './assets'

export const LOGO_URL =
  'https://res.cloudinary.com/wntdlk90/image/upload/v1786088513/Misk_Managers_2_1_ua8shy.png'

export const EMAIL = 'hi@miskmanagers.com'

export const navLinks = [
  { label: 'Services', to: '/#services' },
  { label: 'AI & Automation', to: '/#ai' },
  { label: 'Projects', to: '/projects', badge: '18+' },
  { label: 'About us', to: '/about-us' },
  { label: 'Careers', to: '/#team' },
]

export const footerNav = [
  { label: 'AI & Automation', to: '/#ai' },
  { label: 'About us', to: '/about-us' },
  { label: 'Projects', to: '/projects' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact us', to: '/contact' },
]

export const socialLinks = [
  { label: 'Linkedin', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Dribbble', href: '#' },
]

/** Project cards — featured first four use landing Cloudinary assets (nextio layout) */
export const projects = [
  {
    id: 'saas-docs',
    slug: 'viaspaces',
    brand: 'ViaSpaces',
    logo: assets.projectLogos.viaspaces,
    title: 'From business document workflow to a full SaaS product.',
    category: 'Web apps',
    image: assets.projects.viaspaces,
    imageMobile: assets.projectsMobile.viaspaces,
    stats: [
      { value: '12.000+', label: 'documents processed by platform per year' },
      { value: 'E-signing', label: 'Built-in signing with full audit history' },
    ],
  },
  {
    id: 'gym-app',
    slug: 'gym-app',
    brand: 'GymApp',
    logo: assets.projectLogos.gym,
    title: 'The app that runs a gym without a single staff member.',
    category: 'Mobile apps',
    image: assets.projects.gym,
    imageMobile: assets.projectsMobile.gym,
    stats: [
      { value: '500+', label: 'reservations booked through the app' },
      { value: '24/7', label: 'operation with zero staff on site' },
    ],
  },
  {
    id: 'mortgage',
    slug: 'fincare',
    brand: 'FinCare',
    logo: assets.projectLogos.fincare,
    title: 'From website calculator to closed mortgage — every lead in one system.',
    category: 'Web apps',
    image: assets.projects.fincare,
    imageMobile: assets.projectsMobile.fincare,
    stats: [
      { value: '+36%', label: 'more deals after we automated lead routing' },
      { value: '+24%', label: 'Faster deal completion' },
    ],
  },
  {
    id: 'service-center',
    slug: 'atv',
    brand: 'ATV',
    logo: assets.projectLogos.atv,
    title: 'A paper-run service center, now one connected digital system.',
    category: 'Web apps',
    image: assets.projects.atv,
    imageMobile: assets.projectsMobile.atv,
    stats: [
      { value: '~70%', label: 'Less admin time on every service case' },
      { value: '6 weeks', label: 'To the first working MVP' },
    ],
  },
  {
    id: 'hosting-portal',
    slug: 'webglobe',
    brand: 'Webglobe',
    title: 'Sell domains, hosting, and cloud from one portal you fully control.',
    category: 'AI & automation',
    image: assets.projects.webglobe,
    imageMobile: assets.projectsMobile.webglobe,
    stats: [
      { value: '30%', label: 'Faster delivery through AI-powered workflow' },
      { value: '5.0*', label: 'App review' },
    ],
  },
  {
    id: 'ai-assistant',
    slug: 'mindwio',
    brand: 'Mindwio',
    title: 'AI-powered daily assistant for notes, tasks, reminders, and events.',
    category: 'AI & automation',
    image: assets.projects.mindwio,
    imageMobile: assets.projectsMobile.mindwio,
    stats: [
      { value: '30%', label: 'Faster delivery through AI-powered workflow' },
      { value: '5.0*', label: 'App review' },
    ],
  },
  {
    id: 'photo-print',
    slug: 'momentka',
    brand: 'Momentka',
    title: 'Your favorite photos, printed and delivered to your door.',
    category: 'Mobile apps',
    image: assets.projects.momentka,
    imageMobile: assets.projectsMobile.momentka,
    stats: [
      { value: '1.000+', label: 'happy customers' },
      { value: '400+', label: 'prints ordered monthly' },
    ],
  },
  {
    id: 'inventory',
    slug: 'roomvio',
    brand: 'Roomvio',
    title: 'Everything you own, tracked in one app.',
    category: 'Mobile apps',
    image: assets.projects.roomvio,
    imageMobile: assets.projectsMobile.roomvio,
    stats: [
      { value: 'iOS + Android', label: 'Native apps, live on both stores' },
      { value: '5.0*', label: 'Rated on the App Store' },
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}

export function getNextProjects(slug, count = 1) {
  const i = projects.findIndex((p) => p.slug === slug)
  if (i < 0) return []
  const out = []
  for (let n = 1; n <= count; n++) {
    out.push(projects[(i + n) % projects.length])
  }
  return out
}

export const projectCategories = ['All', 'Mobile apps', 'Web apps', 'AI & automation']

export const about = {
  heroTitle: 'We are digital product builders.',
  heroSub:
    'We partner with startups, scale-ups, and enterprise teams to design, build, and scale digital products with long-term business value.',
  trustStat: '39+',
  trustLabel: ['Trusted by', 'clients worldwide'],
  focusLine: 'Focused execution without unnecessary complexity.',
  metrics: [
    { label: 'digital products delivered' },
    { label: 'Years building scalable systems' },
    { label: 'Long-term client partnerships' },
    { label: 'From idea to MVP validation' },
  ],
  approachTitle:
    'Our approach is simple: We focus on clear product decisions, fast execution, and building only what serves a real business purpose.',
  approachBody:
    'We avoid unnecessary complexity and focus on building digital products that perform, scale, and support long-term business goals.',
  impactTitle:
    'Digital products should do more than just exist. That’s why we focus on performance, usability, and scalability — building products that work reliably in real business environments.',
  impactBody:
    'We design and build digital products that are efficient, maintainable, and ready to grow with your business.',
  teamTitle: 'The team behind your digital products.',
  teamEyebrow: 'Built as a long-term partner',
  teamBody:
    'We operate as an extension of your team, taking responsibility for delivery, quality, and long-term product success.',
  teamNote:
    'Our multidisciplinary teams collaborate closely to deliver digital products that meet business goals, timelines, and quality standards.',
  introQuote:
    'Every project we take on is built with long-term business impact in mind.',
  clientTimeline: [
    { name: 'AXIORY', src: assets.clients[0].src, year: '/2023' },
    { name: 'Webglobe', src: assets.clients[1].src, year: '/2020' },
    { name: 'TITANS', src: assets.clients[2].src, year: '/2019' },
    { name: 'CARLAVIA', src: assets.clients[3].src, year: '/2019' },
    { name: 'Powerful Medical', src: assets.clients[4].src, year: '/2019' },
    { name: 'BALIK PLUS', src: assets.clients[5].src, year: '/2025' },
    { name: 'AXIORY', src: assets.clients[0].src, year: '/2019' },
    { name: 'Webglobe', src: assets.clients[1].src, year: '/2022' },
    { name: 'TITANS', src: assets.clients[2].src, year: '/2019' },
    { name: 'CARLAVIA', src: assets.clients[3].src, year: '/2020' },
    { name: 'Powerful Medical', src: assets.clients[4].src, year: '/2025' },
    { name: 'BALIK PLUS', src: assets.clients[5].src, year: '/2025' },
    { name: 'AXIORY', src: assets.clients[0].src, year: '/2024' },
    { name: 'Webglobe', src: assets.clients[1].src, year: '/2026' },
  ],
  clientYearRange: '©2019 - 2026',
  clientCount: '25+ clients',
  stats: [
    { value: 56, suffix: '+', label: 'digital products delivered' },
    { value: 6, suffix: '+', label: 'Years building scalable systems' },
    { value: 80, suffix: '%', label: 'Long-term client partnerships' },
    { value: 3, suffix: '+weeks', label: 'From idea to MVP validation' },
  ],
}

export const contact = {
  heroLead: 'Let’s work',
  heroTrail: 'together.',
  heroSubLead: 'Fill in the form below',
  heroSubTrail: 'or reach out to us directly:',
  quoteMuted:
    'We don’t start with technology or features. ',
  quoteBold:
    'We start by understanding the business problem and building the right digital product around it.',
  founder: {
    name: 'Erik Hajduk',
    role: 'CEO & Founder of MISK MANAGERS',
  },
  offices: [
    {
      title: 'Where to find us?',
      name: 'MISK MANAGERS',
      address: 'Office details coming soon',
      company: 'MISK MANAGERS',
      companyAddress: 'Office details coming soon',
      taxLines: [],
    },
  ],
}

export const work = {
  heroTitle: 'Our work',
  heroStat: '56+ Successful projects completed',
  heroSub:
    'We’ve helped businesses across industries achieve their goals. Here are some of our selected projects.',
}
