import { projects } from '../../content/site'

/**
 * Figma product card:
 * image · category pill · short title · 2 stats · light grey Select button
 */
export default function DemoProductCard({ project, selected, onSelect }) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] transition ${
        selected ? 'outline outline-2 outline-[#0A0A0A]' : ''
      }`}
    >
      <div className="relative h-[148px] shrink-0 overflow-hidden bg-[#0A0A0A] sm:h-[160px] md:h-[170px]">
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {project.logo ? (
          <img
            src={project.logo}
            alt={project.brand || ''}
            className="absolute left-3.5 top-3.5 z-10 h-5 w-auto max-w-[110px] object-contain object-left"
            height={20}
            loading="lazy"
          />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-4 md:px-5 md:pb-5">
        <span className="inline-flex w-fit rounded-full bg-[#F0F0F0] px-2.5 py-1 font-['Gilroy-Medium'] text-[11px] font-normal text-[#636363]">
          {project.category || 'Case study'}
        </span>

        <h3 className="mt-3 font-['Gilroy-Bold'] text-[16px] font-normal leading-none text-[#0A0A0A] md:text-[17px]">
          {project.brand}
        </h3>
        <p className="mt-2 line-clamp-2 min-h-[38px] font-['Gilroy-Medium'] text-[13px] font-normal leading-[1.35] text-[#636363]">
          {project.title}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2 border-t border-black/[0.07] pt-3.5">
          {project.stats.slice(0, 2).map((stat) => (
            <div key={stat.value} className="min-w-0">
              <p className="truncate font-['Gilroy-Bold'] text-[15px] font-normal text-[#0A0A0A] md:text-[16px]">
                {stat.value}
              </p>
              <p className="mt-0.5 line-clamp-2 font-['Gilroy-Medium'] text-[11px] font-normal leading-snug text-[#888888]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onSelect(project.slug)}
          aria-pressed={selected}
          className={`mt-4 inline-flex h-[42px] w-full items-center justify-center rounded-full font-['Gilroy-Bold'] text-[13px] font-normal transition ${
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
