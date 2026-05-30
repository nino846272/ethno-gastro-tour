import { useEffect, useState } from 'react'
import { Globe, MapPin, ExternalLink, Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { OSH_TRAVEL_GUIDE_URL } from '../config/links'

const NAV_LINKS = [
  { href: '#experience', key: 'experience' },
  { href: '#itinerary', key: 'itinerary' },
  { href: '#gallery', key: 'gallery' },
  { href: '#reviews', key: 'reviews' },
  { href: '#faq', key: 'faq' },
]

export default function Header() {
  const { lang, setLang, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ru' : 'en')
  }

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-12 h-12" />
            </div>
            <span className="text-white font-bold text-sm hidden sm:block">
              GASTRO-ETHNO
              <br />
              TOUR - OSH
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ href, key }) => (
              <a
                key={key}
                href={href}
                className="text-white text-sm hover:text-orange-500 transition-colors duration-200"
              >
                {t(`header.${key}`)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-white hover:text-orange-500 transition-colors duration-200 cursor-pointer select-none p-2"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="text-sm font-semibold">{lang.toUpperCase()}</span>
            </button>

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center font-sans text-white text-sm font-semibold px-4 py-2 rounded-lg border border-white/30 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-200"
            >
              {t('header.contactBtn')}
            </a>

            <a
              href={OSH_TRAVEL_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white font-sans px-5 py-2 rounded-lg transition-all duration-200 font-semibold text-sm active:scale-[0.98]"
            >
              <MapPin size={16} className="shrink-0" />
              <span>{t('header.guideLink')}</span>
              <ExternalLink size={14} className="shrink-0 opacity-80" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white border border-white/20 hover:border-orange-500/60 hover:bg-white/5 transition-all duration-200 cursor-pointer"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t('header.menuClose') : t('header.menuOpen')}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay + sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ease-out ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
          aria-label={t('header.menuClose')}
        />

        <aside
          className={`absolute top-0 right-0 h-full w-[min(100%,320px)] bg-[#1a1512] border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest font-sans">
              {t('header.menuTitle')}
            </span>
            <button
              type="button"
              onClick={closeMenu}
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white border border-white/15 hover:bg-white/5 hover:border-orange-500/40 transition-all duration-200 cursor-pointer"
              aria-label={t('header.menuClose')}
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, key }, index) => (
              <a
                key={key}
                href={href}
                onClick={closeMenu}
                className="font-sans text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/5 hover:text-orange-400 border border-transparent hover:border-white/5 transition-all duration-200"
                style={{ transitionDelay: menuOpen ? `${index * 40}ms` : '0ms' }}
              >
                {t(`header.${key}`)}
              </a>
            ))}
          </nav>

          <div className="px-5 py-6 border-t border-white/10 space-y-3 bg-[#14100e]">
            <button
              type="button"
              onClick={() => {
                toggleLanguage()
              }}
              className="w-full flex items-center justify-center gap-2 font-sans text-white text-sm font-semibold py-3 rounded-lg border border-white/15 hover:border-orange-500/40 hover:bg-white/5 transition-all duration-200 cursor-pointer"
            >
              <Globe size={18} className="text-orange-500" />
              {lang === 'ru' ? 'English' : 'Русский'}
            </button>

            <a
              href="#contact"
              onClick={closeMenu}
              className="flex items-center justify-center font-sans text-white text-sm font-semibold w-full py-3 rounded-lg border border-white/25 hover:bg-white/5 hover:border-orange-500/50 transition-all duration-200"
            >
              {t('header.contactBtn')}
            </a>

            <a
              href={OSH_TRAVEL_GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-sans py-3 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-[0.98]"
            >
              <MapPin size={18} />
              {t('header.guideLink')}
              <ExternalLink size={14} className="opacity-80" />
            </a>
          </div>
        </aside>
      </div>
    </>
  )
}
