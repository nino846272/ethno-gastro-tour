import { Play, Star, Clock, Users } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import reviewsData from '../data/reviews.json'

export default function Hero() {
  const { t } = useLanguage()
  const { totalCount } = reviewsData

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/hero-bg.png")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6 text-white">
        <div className="max-w-3xl">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-3 md:mb-4 leading-[1.1] font-serif tracking-wide md:whitespace-nowrap">
            {t('hero.title1')}<br />
            {t('hero.title2')}
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl md:text-4xl text-orange-400 italic mb-5 md:mb-8 font-serif">
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className="text-base md:text-xl text-gray-100 mb-8 md:mb-12 leading-relaxed max-w-2xl">
            {t('hero.description')}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-20">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition text-sm md:text-base cursor-pointer">
            {t('hero.bookBtn')}
          </button>
          <button className="border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-3 rounded transition flex items-center justify-center gap-2 text-sm md:text-base cursor-pointer">
            <Play size={18} />
            {t('hero.videoBtn')}
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-row flex-wrap gap-x-6 gap-y-4 md:gap-12">
          {/* Rating */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-sm md:text-lg leading-tight">{t('hero.rating')}</p>
              <p className="text-xs md:text-sm text-gray-300">{totalCount}+{t('hero.reviews')}</p>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-2 md:gap-3">
            <Clock size={22} className="text-orange-400 shrink-0" />
            <div className="text-left">
              <p className="font-bold text-sm md:text-lg leading-tight">{t('hero.duration')}</p>
              <p className="text-xs md:text-sm text-gray-300">{t('hero.durationSub')}</p>
            </div>
          </div>

          {/* Group Size */}
          <div className="flex items-center gap-2 md:gap-3">
            <Users size={22} className="text-orange-400 shrink-0" />
            <div className="text-left">
              <p className="font-bold text-sm md:text-lg leading-tight">{t('hero.group')}</p>
              <p className="text-xs md:text-sm text-gray-300">{t('hero.groupSub')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

