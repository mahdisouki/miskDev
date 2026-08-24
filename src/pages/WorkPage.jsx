import { useMemo, useState } from 'react'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projectCategories, projects, work } from '../content/site'

function SearchIcon() {
  return (
    <svg
      className="pointer-events-none absolute left-[15px] top-1/2 size-4 -translate-y-1/2 text-[#0A0A0A]/45"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg
      className="pointer-events-none absolute right-[15px] top-1/2 size-3.5 -translate-y-1/2 text-[#0A0A0A]/55"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 5l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function WorkPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      const catOk = category === 'All' || p.category === category
      const qOk =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.brand && p.brand.toLowerCase().includes(q))
      return catOk && qOk
    })
  }, [query, category])

  return (
    <main className="bg-[#F5F5F5] px-[10px] pb-16 pt-16 md:px-[36px] md:pb-[100px] md:pt-[100px]">
      <div className="mx-auto w-full">
        {/* Desktop: title + filters left · stat + copy right */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="min-w-0 shrink-0">
            <Reveal>
              <h1 className="font-['Gilroy-Medium'] text-[clamp(2.75rem,7vw,86px)] font-normal leading-none text-[#0A0A0A]">
                {work.heroTitle}
              </h1>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 flex flex-col gap-1 sm:mt-10 sm:flex-row sm:items-center sm:gap-1 lg:mt-12">
                <label className="relative block w-full max-w-[270px]">
                  <SearchIcon />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search…"
                    className="h-12 w-full rounded-[14px] border-0 bg-white py-0 pr-[15px] pl-10 font-['Gilroy-Medium'] text-[16px] text-[#0A0A0A] outline-none placeholder:text-[#0A0A0A]/35"
                    aria-label="Search projects"
                  />
                </label>
                <label className="relative block w-full max-w-[180px] sm:w-[180px]">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="h-12 w-full appearance-none rounded-[14px] border-0 bg-white py-0 pr-10 pl-[15px] font-['Gilroy-Medium'] text-[14px] text-[#0A0A0A] outline-none"
                    aria-label="Filter by category"
                  >
                    {projectCategories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <ChevronIcon />
                </label>
              </div>
            </Reveal>
          </div>

          <Reveal delay={60} className="max-w-[420px] lg:pt-3">
            <p className="font-['Gilroy-Bold'] text-[16px] font-normal leading-[22.4px] text-[#0A0A0A]">
              {work.heroStat}
            </p>
            <p className="mt-3 font-['Gilroy-Medium'] text-[16px] font-normal leading-[1.4] text-[#636363]">
              {work.heroSub}
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col gap-[30px] md:mt-14 md:gap-[50px]">
          {filtered.map((project, i) => (
            <Reveal
              key={project.id}
              delay={Math.min(i * 40, 160)}
              y={80}
              amount={0.12}
              className="block w-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}
