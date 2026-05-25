import { useLanguage } from '../context/LanguageContext'
import { UtensilsCrossed, Mountain, Wheat, Home, Star, Music } from 'lucide-react'

const itinerary = [
  { time: '10:00', timeEn: '10:00 AM', key: 'teaHouse', icon: UtensilsCrossed },
  { time: '11:00', timeEn: '11:00 AM', key: 'mountain', icon: Mountain },
  { time: '12:30', timeEn: '12:30 PM', key: 'samsa',    icon: Wheat },
  { time: '14:00', timeEn: '2:00 PM',  key: 'yurt',     icon: Home },
  { time: '16:00', timeEn: '4:00 PM',  key: 'archery',  icon: Star },
  { time: '18:00', timeEn: '6:00 PM',  key: 'dinner',   icon: Music },
]

export default function Itinerary() {
  const { t, lang } = useLanguage()


  return (
    <section id="itinerary" className="bg-[#faf7f2] py-20 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-black font-serif uppercase tracking-widest text-gray-900">
          {t('itinerary.title')}
        </h2>
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="w-12 h-px bg-orange-300"></div>
          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
          <div className="w-12 h-px bg-orange-300"></div>
        </div>
      </div>

      {/* Cards row */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {itinerary.map(({ time, timeEn, key, icon: Icon }) => (
          <div
            key={key}
            className="bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow duration-300 group"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
              <Icon size={22} className="text-orange-500" strokeWidth={1.5} />
            </div>

            {/* Time */}
            <span className="text-xs font-bold text-orange-500 tracking-widest">
              {lang === 'en' ? timeEn : time}
            </span>


            {/* Title */}
            <h3 className="text-sm font-bold text-gray-900 leading-snug font-sans">
              {t(`itinerary.items.${key}.title`)}
            </h3>

            {/* Description */}
            <p className="text-xs text-gray-400 leading-relaxed">
              {t(`itinerary.items.${key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
