import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const CURSOR = 140

/**
 * Frosted “View detail” project card — matches nextio / landing Selected projects.
 */
export default function ProjectCard({ project, to }) {
  const href = to === null ? null : to ?? (project.slug ? `/projects/${project.slug}` : '/projects')
  const reduce = useReducedMotion()
  const cardRef = useRef(null)
  const [hover, setHover] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = useCallback((e) => {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
  }, [])

  const className =
    'group relative block h-[min(480px,72svh)] w-full overflow-hidden rounded-[20px] bg-[#0A0A0A] md:h-[720px] md:cursor-none'

  const inner = (
    <>
      {project.image ? (
        <picture>
          {project.imageMobile ? (
            <source media="(max-width: 767px)" srcSet={project.imageMobile} />
          ) : null}
          <img
            src={project.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            loading="lazy"
          />
        </picture>
      ) : null}

      <div className="absolute left-4 top-5 z-10 h-10 w-[min(240px,60%)] sm:left-8 sm:top-10 md:left-[80px] md:top-[80px]">
        {project.logo ? (
          <img
            src={project.logo}
            alt={project.brand || ''}
            className="h-10 w-auto max-w-full object-contain object-left"
            width={240}
            height={40}
            loading="lazy"
          />
        ) : project.brand ? (
          <p className="font-['Gilroy-Medium'] text-[20px] leading-10 text-white/90">
            {project.brand}
          </p>
        ) : null}
      </div>

      <p className="absolute top-[42%] left-4 right-4 z-10 max-w-[590px] font-['Gilroy-Medium'] text-[clamp(1.5rem,3.2vw,46px)] font-normal leading-[1.2] text-white sm:left-8 md:top-[288px] md:left-[80px] md:right-auto md:text-[46px] md:leading-[55.2px]">
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
              <p className="font-['Gilroy-Medium'] text-[clamp(1.35rem,2.5vw,36px)] font-normal leading-[1.2] text-white md:text-[36px] md:leading-[43.2px]">
                {stat.value}
              </p>
              <p className="mt-5 font-['Gilroy-Medium'] text-[14px] font-normal leading-[1.2] text-white/40 sm:text-[16px] md:mt-5 md:text-[18px] md:leading-[21.6px]">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {!reduce ? (
        <motion.div
          className="pointer-events-none absolute z-30 hidden size-[140px] items-center justify-center rounded-full bg-white/20 text-center backdrop-blur-[12px] md:flex"
          style={{
            left: pos.x,
            top: pos.y,
            x: -CURSOR / 2,
            y: -CURSOR / 2,
          }}
          initial={false}
          animate={{
            opacity: hover ? 1 : 0,
            scale: hover ? 1 : 0.65,
          }}
          transition={{ type: 'spring', stiffness: 380, damping: 28, mass: 0.35 }}
          aria-hidden="true"
        >
          <span className="font-['Gilroy-Medium'] text-[14px] font-normal leading-none text-white">
            View detail
          </span>
        </motion.div>
      ) : null}
    </>
  )

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onMouseMove: onMove,
  }

  if (href) {
    return (
      <Link ref={cardRef} to={href} className={className} {...handlers}>
        {inner}
      </Link>
    )
  }

  return (
    <article ref={cardRef} className={className} {...handlers}>
      {inner}
    </article>
  )
}
