import { Link } from 'react-router-dom'
import { contact, EMAIL, footerNav, socialLinks } from '../content/site'
import { assets } from '../content/assets'
import { leadIndent } from './typography'

const FOOTER_LOGO_URL =
  'https://res.cloudinary.com/wntdlk90/image/upload/v1786088513/Misk_Managers_2_1_ua8shy.png'

/**
 * nextio Footer @ 1440:
 * quote dual-tone 30 · Erik 42 + meta · email 34 underline
 * Navigation / Social 14 labels + 20 links · large logo · bottom legal row
 */
export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5]">
      <div className="px-[10px] pt-10 pb-10 md:px-[36px] md:pt-[140px] md:pb-[140px]">
        <div className="mx-auto max-w-[1440px]">
          {/* Quote + founder — left column on desktop (nextio.co/contact) */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-1">
            <div className="max-w-[594px]">
              <p className={`font-['Gilroy-Medium'] text-[clamp(1.25rem,2.4vw,30px)] font-normal leading-[1.2] ${leadIndent}`}>
                <span className="text-[#0A0A0A]/60">{contact.quoteMuted}</span>
                <span className="font-['Gilroy-Bold'] text-[#0A0A0A]">{contact.quoteBold}</span>
              </p>
              <div className="mt-10 flex items-center gap-3.5">
                <img
                  src={assets.people.erik}
                  alt={contact.founder.name}
                  className="size-[42px] rounded-full object-cover"
                  width={42}
                  height={42}
                  loading="lazy"
                />
                <div>
                  <p className="font-['Gilroy-Regular'] text-[16px] font-normal text-[#0A0A0A]">
                    {contact.founder.name}
                  </p>
                  <p className="mt-0.5 font-['Gilroy-Medium'] text-[14px] font-normal text-[#636363]">
                    {contact.founder.role}
                  </p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="hidden lg:block" />
          </div>

          {/* Email + nav + logo */}
          <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-1">
            <div className="lg:pr-20">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-block border-b-2 border-[#0A0A0A] pb-1 font-['Gilroy-Bold'] text-[clamp(1.5rem,2.8vw,34px)] font-normal leading-none text-[#090909] transition hover:opacity-70"
              >
                {EMAIL}
              </a>
            </div>

            <div className="flex flex-col gap-16 sm:max-w-[674px] lg:justify-self-end">
              <div className="grid grid-cols-2 gap-1">
                <div>
                  <p className="font-['Gilroy-Medium'] text-[14px] font-normal text-[#0A0A0A]">
                    Navigation
                  </p>
                  <ul className="mt-4 flex flex-col gap-2.5 font-['Gilroy-Medium'] text-[16px] font-normal text-[#0A0A0A] md:text-[20px]">
                    {footerNav.map((item) => (
                      <li key={item.label}>
                        <Link to={item.to} className="transition hover:opacity-55">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-['Gilroy-Medium'] text-[14px] font-normal text-[#0A0A0A]">
                    Social
                  </p>
                  <ul className="mt-4 flex flex-col gap-2.5 font-['Gilroy-Medium'] text-[16px] font-normal text-[#0A0A0A] md:text-[20px]">
                    {socialLinks.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="inline-flex items-center gap-1.5 transition hover:opacity-55"
                        >
                          {item.label}
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden="true"
                            className="shrink-0 opacity-50"
                          >
                            <path
                              d="M3.5 8.5 8.5 3.5M4 3.5h4.5V8"
                              stroke="currentColor"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <img
                src={FOOTER_LOGO_URL}
                alt="MISK MANAGERS"
                className="h-12 w-auto max-w-full object-contain object-left brightness-0 md:h-[100px] lg:h-[111px]"
                height={111}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom legal */}
      <div className="flex flex-col gap-4 px-[10px] py-8 font-['Gilroy-Medium'] text-[14px] font-normal text-[#0A0A0A] md:flex-row md:items-center md:justify-between md:px-[36px] md:py-[42px]">
        <p>© 2026 MISK MANAGERS® s.r.o. All rights reserved.</p>
        <div className="flex flex-wrap gap-[18px] md:gap-10">
          <a href="#" className="transition hover:opacity-55">
            Privacy Policy
          </a>
          <a href="#" className="transition hover:opacity-55">
            Cookies settings
          </a>
          <a href="#" className="transition hover:opacity-55">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
