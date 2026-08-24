import Reveal from './Reveal'

function GalleryImage({ src, mobileSrc, alt, className = '' }) {
  if (mobileSrc) {
    return (
      <picture>
        <source media="(max-width: 767px)" srcSet={mobileSrc} />
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${className}`}
          loading="lazy"
        />
      </picture>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      loading="lazy"
    />
  )
}

function Frame({ children, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-[20px] ${className}`}>{children}</div>
  )
}

/**
 * nextio product-detail gallery:
 * full 1353×768 · split pair 672×608 · gap 4px (blocks) / 8px (split pair)
 */
function GalleryBlock({ block }) {
  if (block.type === 'full') {
    return (
      <Frame>
        <GalleryImage
          src={block.src}
          mobileSrc={block.mobileSrc}
          alt={block.alt}
          className="aspect-[1353/768]"
        />
      </Frame>
    )
  }

  if (block.type === 'split') {
    return (
      <div className="grid gap-2 md:grid-cols-2">
        <Frame>
          <GalleryImage
            src={block.left.src}
            mobileSrc={block.left.mobileSrc}
            alt={block.left.alt}
            className="aspect-[672/608]"
          />
        </Frame>
        <Frame>
          <GalleryImage
            src={block.right.src}
            mobileSrc={block.right.mobileSrc}
            alt={block.right.alt}
            className="aspect-[672/608]"
          />
        </Frame>
      </div>
    )
  }

  return null
}

export function ProjectGallerySection({ blocks, className = '' }) {
  if (!blocks?.length) return null

  return (
    <section className={`px-[10px] md:px-[36px] ${className}`}>
      <div className="mx-auto flex max-w-[1353px] flex-col gap-2">
        {blocks.map((block, i) => (
          <Reveal key={`${block.type}-${i}`} delay={i * 20} y={40}>
            <GalleryBlock block={block} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/**
 * nextio: afterDelivered images, then avatar + name row + quote (left col) | status image (right)
 */
export function ProjectDeliveredGalleryAndTestimonial({ blocks, testimonial, image }) {
  return (
    <section className="px-[10px] md:px-[36px]">
      <div className="mx-auto flex max-w-[1353px] flex-col gap-2">
        {blocks?.length ? (
          <div className="flex flex-col gap-2">
            {blocks.map((block, i) => (
              <Reveal key={`${block.type}-${i}`} delay={i * 20} y={40}>
                <GalleryBlock block={block} />
              </Reveal>
            ))}
          </div>
        ) : null}

        {testimonial ? (
          <div className="grid gap-2 md:grid-cols-2 md:items-stretch">
            <Reveal className="flex items-center">
              <figure className="w-full py-10 pl-6 pr-4 md:py-12 md:pl-[86px] md:pr-8">
                <div className="flex items-center gap-3">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt=""
                      className="size-11 shrink-0 rounded-full object-cover md:size-[44px]"
                      width={44}
                      height={44}
                      loading="lazy"
                    />
                  ) : (
                    <span
                      className="size-11 shrink-0 rounded-full bg-[#E8E8E8] md:size-[44px]"
                      aria-hidden="true"
                    />
                  )}
                  <figcaption>
                    <p className="font-['Gilroy-Medium'] text-[16px] leading-[19.2px] text-black">
                      {testimonial.name}
                    </p>
                    <p className="font-['Gilroy-Medium'] text-[13px] leading-[15.6px] text-[#626262]">
                      {testimonial.role}
                    </p>
                  </figcaption>
                </div>
                <blockquote className="mt-6 font-['Gilroy-Medium'] text-[20px] leading-6 text-black">
                  {testimonial.quote}
                </blockquote>
              </figure>
            </Reveal>

            {image ? (
              <Reveal delay={40}>
                <Frame className="relative h-full min-h-[280px] md:min-h-[608px]">
                  <GalleryImage
                    src={image.src}
                    mobileSrc={image.mobileSrc}
                    alt={image.alt}
                    className="aspect-[672/608] md:absolute md:inset-0 md:h-full md:aspect-auto"
                  />
                </Frame>
              </Reveal>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
