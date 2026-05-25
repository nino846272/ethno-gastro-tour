import { Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Header() {
  const { lang, setLang, t } = useLanguage()

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ru' : 'en')
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <img src="/logo.png" alt="Logo" className="w-12 h-12" />
          </div>
          <span className="text-white font-bold text-sm">GASTRO-ETNO<br/>TOUR - OSH</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#experience" className="text-white text-sm hover:text-orange-500 transition">{t('header.experience')}</a>
          <a href="#itinerary" className="text-white text-sm hover:text-orange-500 transition">{t('header.itinerary')}</a>
          <a href="#gallery" className="text-white text-sm hover:text-orange-500 transition">{t('header.gallery')}</a>
          <a href="#reviews" className="text-white text-sm hover:text-orange-500 transition">{t('header.reviews')}</a>
          <a href="#faq" className="text-white text-sm hover:text-orange-500 transition">{t('header.faq')}</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white hover:text-orange-500 transition cursor-pointer select-none"
          >
            <Globe size={18} />
            <span className="text-sm font-semibold">{lang.toUpperCase()}</span>
          </button>
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition font-semibold text-sm">
            <a href="https://osh-travel-guide.vercel.app/">{t('header.guideLink')}</a>
          </button>
        </div>
      </div>
    </header>
  )
}

