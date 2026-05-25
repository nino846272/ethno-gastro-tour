import { Users, Clock, UtensilsCrossed, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

// Put your image in public/cta-bg.jpg (or change the path below)
const CTA_BACKGROUND = '/cta-bg.jpg'

const FEATURES = [
  { key: 'groups', icon: Users },
  { key: 'duration', icon: Clock },
  { key: 'food', icon: UtensilsCrossed },
  { key: 'location', icon: MapPin },
]

function FeatureCard({ icon: Icon, title, subtitle }) {
  return (
    <div className="rounded-xl bg-black/45 backdrop-blur-md border border-white/10 px-5 py-5 md:px-6 md:py-6 flex flex-col gap-2">
      <Icon size={28} className="text-orange-500 shrink-0" strokeWidth={1.5} />
      <h3 className="font-sans font-bold text-white text-base md:text-lg leading-snug">
        {title}
      </h3>
      <p className="font-sans text-gray-400 text-sm">{subtitle}</p>
    </div>
  )
}

export default function NomadCta() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[520px] md:min-h-[560px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${CTA_BACKGROUND}")` }}
        role="img"
        aria-label=""
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          {/* Left: headline + CTA */}
          <div className="flex-1 text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-serif uppercase leading-[1.1] tracking-wide">
              {t('nomadCta.title')}
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-200 font-sans max-w-md">
              {t('nomadCta.subtitle')}
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold font-sans px-8 py-3.5 rounded-lg transition active:scale-[0.98]"
            >
              {t('nomadCta.button')}
            </a>
          </div>

          {/* Right: feature grid */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map(({ key, icon }) => (
                <FeatureCard
                  key={key}
                  icon={icon}
                  title={t(`nomadCta.features.${key}.title`)}
                  subtitle={t(`nomadCta.features.${key}.subtitle`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
