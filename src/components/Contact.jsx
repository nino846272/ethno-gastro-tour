import { Send, MessageCircle, Phone, MapPin, ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const MAPS_URL =
  'https://www.google.com/maps/place/ABS+Guest+House+Osh/@40.51912,72.7957675,17z/data=!4m9!3m8!1s0x38bdad3e5e1b9dc3:0x753ec399860561f1!5m2!4m1!1i2!8m2!3d40.5190303!4d72.7973446!16s%2Fg%2F11txp0b_jp?entry=ttu'

const ADDRESS_TEXT = 'ABS Guest House Osh'

function IconInstagram({ size = 26, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const CHANNELS = [
  {
    key: 'telegram',
    icon: Send,
    href: 'https://t.me/gastroethnotour',
    value: '@gastroethnotour',
    iconWrap: 'bg-sky-500/15 text-sky-400',
    valueClass: 'text-sky-400 hover:text-sky-300',
  },
  {
    key: 'whatsapp',
    icon: MessageCircle,
    href: '#',
    value: '+996 XXX XXX XXX',
    iconWrap: 'bg-emerald-500/15 text-emerald-400',
    valueClass: 'text-emerald-400 hover:text-emerald-300',
  },
  {
    key: 'phone',
    icon: Phone,
    href: 'tel:+996123123123',
    value: '+996 123 123 123',
    iconWrap: 'bg-amber-500/15 text-amber-400',
    valueClass: 'text-amber-400 hover:text-amber-300',
  },
  {
    key: 'instagram',
    icon: IconInstagram,
    href: 'https://instagram.com/gastroethnotour',
    value: '@gastroethnotour',
    iconWrap: 'bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 text-pink-400',
    valueClass: 'text-pink-400 hover:text-pink-300',
  },
]

function ChannelCard({ channel, t }) {
  const Icon = channel.icon
  const isExternal = channel.href.startsWith('http')
  const isPlaceholder = channel.href === '#'

  return (
    <a
      href={channel.href}
      target={isExternal && !isPlaceholder ? '_blank' : undefined}
      rel={isExternal && !isPlaceholder ? 'noopener noreferrer' : undefined}
      className={`group flex flex-col items-center text-center rounded-2xl bg-[#2c241e] border border-white/5 px-5 py-8 transition-all duration-300 hover:bg-[#352c25] hover:border-white/10 ${
        isPlaceholder ? 'cursor-default' : 'cursor-pointer'
      }`}
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105 ${channel.iconWrap}`}
      >
        <Icon size={26} strokeWidth={1.5} />
      </div>
      <h3 className="font-sans font-bold text-white text-lg mb-2">
        {t(`contact.channels.${channel.key}.title`)}
      </h3>
      <p className={`font-sans font-medium text-sm mb-2 transition-colors ${channel.valueClass}`}>
        {channel.value}
      </p>
      <p className="font-sans text-gray-500 text-xs">
        {t(`contact.channels.${channel.key}.hint`)}
      </p>
    </a>
  )
}

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="bg-[#1a1512] text-white py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          {t('contact.tag') ? (
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 font-sans block mb-4">
              {t('contact.tag')}
            </span>
          ) : null}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="font-sans text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-16 h-px bg-white/10" />
            <div className="w-2 h-2 rotate-45 bg-orange-500" />
            <div className="w-16 h-px bg-white/10" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-5">
          {CHANNELS.map((channel) => (
            <ChannelCard key={channel.key} channel={channel} t={t} />
          ))}
        </div>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 rounded-2xl bg-[#2c241e] border border-white/5 px-6 py-5 md:px-8 md:py-6 transition-all duration-300 hover:bg-[#352c25] hover:border-white/10 cursor-pointer"
        >
          <div className="flex items-start gap-4 min-w-0 flex-1">
            <div className="w-12 h-12 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <MapPin size={22} strokeWidth={1.5} />
            </div>
            <div className="min-w-0">
              <h3 className="font-sans font-bold text-white text-base mb-1">
                {t('contact.address.title')}
              </h3>
              <p className="font-sans text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {ADDRESS_TEXT}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center justify-center gap-2 shrink-0 font-sans text-sm font-semibold text-orange-400 group-hover:text-orange-300 transition-colors sm:ml-4">
            {t('contact.address.mapsLink')}
            <ExternalLink size={16} className="opacity-80" />
          </span>
        </a>
      </div>
    </section>
  )
}
