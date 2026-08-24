import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import LetsTalk from '../components/LetsTalk'
import {
  ProjectDeliveredGalleryAndTestimonial,
  ProjectGallerySection,
} from '../components/ProjectGallery'
import { DualButton } from '../components/Hero'
import { assets } from '../content/assets'
import { getNextProjects, getProjectBySlug } from '../content/site'
import { projectDetails } from '../content/projectDetails'

/** nextio project detail gutters */
const GUTTER = 'px-[10px] md:px-[36px]'

function BackPill({ className = '' }) {
  return (
    <Link
      to="/projects"
      className={`inline-flex h-[30px] items-center gap-2 rounded-full bg-white py-[9px] pl-3 pr-[11px] font-['Gilroy-Bold'] text-[14px] leading-none text-[#0A0A0A] transition hover:opacity-90 ${className}`}
    >
      <span className="size-2 shrink-0 rounded-full bg-[#0A0A0A]" aria-hidden="true" />
      Back to all projects
    </Link>
  )
}

/** nextio eyebrow: gray slash + label on the left half */
function SectionEyebrow({ children }) {
  return (
    <p className="font-['Gilroy-Bold'] text-[16px] leading-[22.4px] text-[#0A0A0A]">
      <span className="font-['Gilroy-Regular'] text-[#636363]">/</span>
      {' '}
      {children}
    </p>
  )
}

/** nextio list rows: 24px mark + 16px / 24px body */
function ListMark() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0 shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3.5" stroke="#0A0A0A" strokeWidth="1.5" />
    </svg>
  )
}

function BulletList({ items, className = '' }) {
  return (
    <ul className={`flex flex-col gap-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <ListMark />
          <span className="font-['Gilroy-Medium'] text-[16px] leading-6 text-[#0A0A0A]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

/** Left eyebrow · right title + stacked content (50/50 grid, 4px gap) */
function ContentBand({ eyebrow, title, children }) {
  return (
    <div className="mx-auto grid max-w-[1353px] gap-8 md:grid-cols-2 md:gap-1">
      <div>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
      </div>
      <div className="flex flex-col gap-[60px]">
        {title ? (
          <h2 className="font-['Gilroy-Medium'] text-[30px] leading-[36px] text-[#0A0A0A]">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </div>
  )
}

function resolveHeroImage(project, detail) {
  if (detail?.heroImage) return detail.heroImage
  if (project.slug === 'viaspaces') return assets.projectDetail.viaspaces.hero
  return project.image
}

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const detail = project ? projectDetails[project.slug] : null
  const [next] = getNextProjects(slug, 1)

  if (!project || !detail) {
    return <Navigate to="/projects" replace />
  }

  const heroImage = resolveHeroImage(project, detail)
  const heroImageMobile = detail?.heroImageMobile ?? project.imageMobile

  const copyShare = () => {
    navigator.clipboard.writeText(window.location.href)
  }

  return (
    <main className="flex flex-col gap-[120px] bg-[#F5F5F5] pb-[140px]">
      {/* Hero — nextio: 828px image, no overlay, no CTA, ProjectCard positioning */}
      <section className="px-[10px] pt-4 md:pt-6">
        <div className="relative mx-auto h-[min(480px,88svh)] overflow-hidden rounded-[20px] bg-[#0A0A0A] md:h-[828px]">
          {heroImage ? (
            <picture>
              {heroImageMobile ? (
                <source media="(max-width: 767px)" srcSet={heroImageMobile} />
              ) : null}
              <img
                src={heroImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          ) : null}

          <div className="absolute left-4 top-5 z-10 md:left-[80px] md:top-[80px]">
            <BackPill />
          </div>

          <div className="absolute left-4 top-[72px] z-10 h-10 sm:left-8 md:left-[80px] md:top-[160px]">
            {project.logo ? (
              <img
                src={project.logo}
                alt={project.brand || ''}
                className="h-10 w-auto max-w-[240px] object-contain object-left"
              />
            ) : project.brand ? (
              <p className="font-['Gilroy-Medium'] text-[20px] text-white/90">{project.brand}</p>
            ) : null}
          </div>

          <p className="absolute top-[42%] left-4 right-4 z-10 max-w-[590px] font-['Gilroy-Medium'] text-[clamp(1.5rem,3.2vw,46px)] leading-[1.2] text-white sm:left-8 md:top-[288px] md:left-[80px] md:text-[46px] md:leading-[55.2px]">
            {project.title}
          </p>

          <div className="absolute bottom-8 left-4 right-4 z-10 flex max-w-[483px] items-start sm:bottom-12 sm:left-8 md:top-[534px] md:right-auto md:bottom-auto md:left-[80px]">
            {project.stats.slice(0, 2).map((stat, si) => (
              <div key={stat.value} className="flex items-start">
                {si > 0 ? (
                  <div
                    className="mx-6 mt-1 hidden h-[89px] w-[3px] shrink-0 bg-white/20 sm:mx-[41px] sm:block"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="w-[min(200px,40vw)] sm:w-[200px]">
                  <p className="font-['Gilroy-Medium'] text-[clamp(1.35rem,2.5vw,36px)] leading-[1.2] text-white md:text-[36px] md:leading-[43.2px]">
                    {stat.value}
                  </p>
                  <p className="mt-5 font-['Gilroy-Medium'] text-[14px] leading-[1.2] text-white/40 sm:text-[16px] md:text-[18px] md:leading-[21.6px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro · features · challenge · gallery — one nextio band, 120px internal rhythm */}
      <section className={GUTTER}>
        <div className="mx-auto flex max-w-[1353px] flex-col gap-[120px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-1">
            <Reveal>
              <div className="flex max-w-[630px] flex-col gap-[30px]">
                <p className="font-['Gilroy-Medium'] text-[30px] leading-[36px] text-[#0A0A0A]">
                  {detail.intro}
                </p>
                <DualButton href="/contact" variant="dark">
                  Discuss your project
                </DualButton>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <dl className="flex flex-col gap-5">
                {detail.meta.map((row) => (
                  <div key={row.label} className="grid grid-cols-[110px_1fr] gap-x-0">
                    <dt className="font-['Gilroy-Medium'] text-[12px] leading-[15.6px] text-[#0A0A0A]">
                      {row.label}
                    </dt>
                    <dd className="font-['Gilroy-Medium'] text-[15px] leading-[21px] text-[#0A0A0A]">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {detail.features.map((feat, i) => (
              <Reveal key={feat.title} delay={i * 40}>
                <article className="flex h-full flex-col rounded-[18px] bg-white p-[30px]">
                  <div className="flex items-center gap-5">
                    {feat.icon ? (
                      <img
                        src={feat.icon}
                        alt=""
                        className="h-5 w-5 shrink-0 object-contain brightness-0"
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                    ) : null}
                    <p className="font-['Gilroy-Bold'] text-[10px] leading-[11px] text-[#090909]">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                  </div>
                  <h3 className="mt-5 font-['Gilroy-Medium'] text-[18px] leading-[21.6px] text-black">
                    {feat.title}
                  </h3>
                  <p className="mt-4 font-['Gilroy-Medium'] text-[14px] leading-[18.2px] text-[#636363]">
                    {feat.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-1 md:grid-cols-2">
            <div className="hidden md:block" aria-hidden="true" />
            <Reveal>
              <p className="font-['Gilroy-Medium'] text-[30px] leading-[36px] text-[#0A0A0A]">
                {detail.challenge}
              </p>
            </Reveal>
          </div>

          <ProjectGallerySection blocks={detail.gallery?.afterChallenge} className="!px-0" />
        </div>
      </section>

      {/* How we solved it */}
      <section className={GUTTER}>
        <Reveal>
          <ContentBand eyebrow={detail.solvedEyebrow} title={detail.solvedTitle}>
            <div>
              <p className="font-['Gilroy-Medium'] text-[20px] leading-5 text-black">
                Our approach included:
              </p>
              <BulletList items={detail.approach} className="mt-5" />
            </div>
            <div>
              <p className="font-['Gilroy-Medium'] text-[20px] leading-5 text-black">
                Capabilities behind the product:
              </p>
              <BulletList items={detail.capabilities} className="mt-5" />
            </div>
          </ContentBand>
        </Reveal>
      </section>

      <ProjectGallerySection blocks={detail.gallery?.afterSolved} />

      {/* What we delivered */}
      <section className={GUTTER}>
        <Reveal>
          <ContentBand eyebrow={detail.deliveredEyebrow} title={detail.deliveredTitle}>
            <div>
              <p className="font-['Gilroy-Medium'] text-[20px] leading-5 text-black">What we built:</p>
              <BulletList items={detail.built ?? []} className="mt-5" />
            </div>
            <div>
              <p className="font-['Gilroy-Medium'] text-[20px] leading-5 text-black">Impact:</p>
              <BulletList items={detail.impact ?? []} className="mt-5" />
            </div>
          </ContentBand>
        </Reveal>
      </section>

      {/* Delivered gallery + testimonial — combined like nextio */}
      <ProjectDeliveredGalleryAndTestimonial
        blocks={detail.gallery?.afterDelivered}
        testimonial={detail.testimonial}
        image={detail.gallery?.testimonialImage}
      />

      {/* Relevance */}
      <section className={GUTTER}>
        <Reveal>
          <ContentBand eyebrow={detail.relevanceEyebrow} title={detail.relevanceTitle}>
            <div>
              <p className="font-['Gilroy-Medium'] text-[20px] leading-5 text-black">
                Relevant if you’re:
              </p>
              <BulletList items={detail.relevantIf} className="mt-5" />
            </div>
          </ContentBand>
        </Reveal>
      </section>

      {/* Share row — back pill left, question + link centered */}
      <section className={GUTTER}>
        <Reveal>
          <div className="mx-auto flex max-w-[1353px] flex-wrap items-center gap-6">
            <BackPill />
            <div className="flex flex-1 flex-wrap items-baseline justify-center gap-4 md:gap-6">
              <p className="font-['Gilroy-Medium'] text-[28px] leading-[33.6px] text-black">
                Do you like this project?
              </p>
              <button
                type="button"
                onClick={copyShare}
                className="font-['Gilroy-Medium'] text-[18px] leading-5 text-[#0A0A0A] underline-offset-4 hover:underline"
              >
                Copy share link
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Next project */}
      {next ? (
        <section className={GUTTER}>
          <div className="mx-auto max-w-[1353px]">
            <Reveal>
              <h2 className="mb-8 font-['Gilroy-Medium'] text-[86px] leading-[94.6px] text-[#090909]">
                Next project
              </h2>
            </Reveal>
            <Reveal delay={40} y={80}>
              <ProjectCard project={next} to={`/projects/${next.slug}`} />
            </Reveal>
          </div>
        </section>
      ) : null}

      <LetsTalk />
    </main>
  )
}
