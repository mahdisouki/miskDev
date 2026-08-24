import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../content/site'

/**
 * Pixel-match nextio.co Selected projects @ 1440
 */
export default function Projects() {
  const featured = projects.slice(0, 4)

  return (
    <section id="projects" className="bg-[#F5F5F5] px-[10px] py-0 md:px-[36px]">
      <div className="mx-auto w-full">
        <Reveal delay={40}>
          <p className="mb-5 font-['Gilroy-Bold'] text-[16px] font-normal leading-[22.4px] text-[#0A0A0A] sm:mb-6">
            <span className="font-['Gilroy-Regular'] text-[#636363]">/</span>
            {' '}
            Selected projects
          </p>
        </Reveal>

        <Reveal delay={40}>
          <h2 className="mx-auto mb-10 max-w-[674px] text-left font-['Gilroy-Medium'] text-[clamp(1.75rem,3.2vw,46px)] font-normal leading-[1.1] sm:mb-14 md:text-[46px] md:leading-[50.6px]">
            <span className="text-[#090909]">Custom software with real business impact </span>
            <span className="text-[#636363]">
              for startups, scale-ups and established companies.
            </span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-8 md:gap-[50px]">
          {featured.map((project) => (
            <Reveal key={project.id} delay={20} y={170} amount={0.15} className="block w-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
