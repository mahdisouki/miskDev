import { projects } from '../../content/site'

/**
 * Figma Request-demo product card:
 * image top · category · brand · blurb · 2 stats · light “Select this project”
 */
export default function DemoProductCard({ project, selected, onSelect }) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-[20px] bg-white transition ${
        selected ? 'outline outline-2 outline-[#0A0A0A] outline-offset-0' : ''
      }`}
    >
      <div className="relative h-[160px] shrink-0 overflow-hidden bg-[#0A0A0A] sm:h-[180px] md:h-[200px]">
        {project.image ? (
          <picture>
            {project.imageMobile ? (
              <source media="(max-width: 767px)" srcSet={project.imageMobile} />
            ) : null}
            <img
              src={project.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </picture>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
        <div className="absolute left-4 top-4 z-10">
          {project.logo ? (
            <img
              src={project.logo}
              alt={project.brand || ''}
              className="h-6 w-auto max-w-[120px] object-contain object-left drop-shadow"
              height={24}
              loading="lazy"
            />
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 md:px-6 md:pb-6">
        <p className="font-['Gilroy-Medium'] text-[11px] font-normal uppercase tracking-[0.08em] text-[#888888]">
          {project.category || 'Case study'}
        </p>
        <h3 className="mt-2 font-['Gilroy-Bold'] text-[18px] font-normal leading-none text-[#0A0A0A] md:text-[20px]">
          {project.brand}
        </h3>
        <p className="mt-3 line-clamp-2 font-['Gilroy-Medium'] text-[14px] font-normal leading-[1.35] text-[#636363]">
          {project.title}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-black/[0.08] pt-4">
          {project.stats.slice(0, 2).map((stat) => (
            <div key={stat.value} className="min-w-0">
              <p className="truncate font-['Gilroy-Bold'] text-[16px] font-normal text-[#0A0A0A] md:text-[18px]">
                {stat.value}
              </p>
              <p className="mt-1 line-clamp-2 font-['Gilroy-Medium'] text-[12px] font-normal leading-snug text-[#636363]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onSelect(project.slug)}
          aria-pressed={selected}
          className={`mt-5 inline-flex h-[44px] w-full items-center justify-center rounded-full font-['Gilroy-Bold'] text-[13px] font-normal transition md:h-[46px] md:text-[14px] ${
            selected
              ? 'bg-[#0A0A0A] text-white'
              : 'bg-[#EFEFEF] text-[#0A0A0A] hover:bg-[#E4E4E4]'
          }`}
        >
          {selected ? 'Selected' : 'Select this project'}
        </button>
      </div>
    </article>
  )
}

export function getDemoProducts() {
  return projects.slice(0, 4)
}
