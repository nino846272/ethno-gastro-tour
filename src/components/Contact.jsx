import { Send, MessageCircle, MapPin, ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { contactLinks } from '../config/contact'

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
    href: contactLinks.telegram,
    iconWrap: 'bg-sky-500/15 text-sky-400',
    valueClass: 'text-sky-400 hover:text-sky-300',
  },
  {
    key: 'whatsapp',
    icon: MessageCircle,
    href: contactLinks.whatsapp,
    iconWrap: 'bg-emerald-500/15 text-emerald-400',
    valueClass: 'text-emerald-400 hover:text-emerald-300',
  },
  {
    key: 'instagram',
    icon: IconInstagram,
    href: contactLinks.instagram,
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
      className={`group flex flex-col items-center text-center rounded-2xl bg-[#2c241e] border border-white/5 px-5 py-8 transition-all duration-300 ${
        isPlaceholder ? 'cursor-default' : 'hover:bg-[#352c25] hover:border-white/10'
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
        {t(`contact.channels.${channel.key}.value`)}
      </p>
      <p className="font-sans text-gray-500 text-xs">
        {t(`contact.channels.${channel.key}.hint`)}
      </p>
    </a>
  )
}

export default function Contact() {
  const { t } = useLanguage()
  const mapsHref = contactLinks.maps

  return (
    <section id="contact" className="bg-[#1a1512] text-white py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 font-sans block mb-4">
            {t('contact.tag')}
          </span>
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

        {/* Channel cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-5">
          {CHANNELS.map((channel) => (
            <ChannelCard key={channel.key} channel={channel} t={t} />
          ))}
        </div>

        {/* Address */}
        <div className="rounded-2xl bg-[#2c241e] border border-white/5 px-6 py-5 md:px-8 md:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex items-start gap-4 min-w-0 flex-1">
            <div className="w-12 h-12 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0">
              <MapPin size={22} strokeWidth={1.5} />
            </div>
            <div className="min-w-0">
              <h3 className="font-sans font-bold text-white text-base mb-1">
                {t('contact.address.title')}
              </h3>
              <p className="font-sans text-gray-400 text-sm leading-relaxed">
                {t('contact.address.text')}
              </p>
            </div>
          </div>

          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 shrink-0 font-sans text-sm font-semibold text-orange-400 hover:text-orange-300 border border-orange-500/30 hover:border-orange-500/50 rounded-xl px-5 py-3 transition-colors duration-200 sm:ml-4"
          >
            {t('contact.address.mapsLink')}
            <ExternalLink size={16} className="opacity-80" />
          </a>
        </div>
      </div>
    </section>
  )
}
