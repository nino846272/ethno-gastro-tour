import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function YurtPromo() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  // YouTube embed URL (change to your real YouTube video ID when ready)
  const videoSrc = "https://www.youtube.com/embed/18-T8JcKjCg?autoplay=1"

  return (
    <section className="bg-[#7c441b] text-white py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 text-left space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold font-serif leading-tight text-[#fdf9f4]">
            {t('yurtPromo.title')}
          </h2>
          <p className="text-[#ebd9c8] text-base md:text-lg leading-relaxed font-sans max-w-xl">
            {t('yurtPromo.description')}
          </p>
          
          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-2 border border-[#fdf9f4]/60 hover:border-[#fdf9f4] hover:bg-white/10 text-[#fdf9f4] font-semibold px-6 py-3 rounded-lg transition-all active:scale-95 cursor-pointer text-sm"
            >
              <Play size={16} className="fill-current" />
              <span>{t('yurtPromo.watchBtn')}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Video Thumbnail / Play Button */}
        <div className="flex-1 w-full max-w-xl">
          <div 
            onClick={() => setIsOpen(true)}
            className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
          >
            {/* Thumbnail Image */}
            <img
              src="/exp1.jpg" // Using local exp1.jpg or yurt image if available
              alt="Build Yurt video preview"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                // Fallback to high-quality yurt building image from Unsplash if public image isn't loaded
                e.target.src = 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1000&q=80'
              }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>

            {/* Pulsing Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white text-[#7c441b] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 active:scale-95">
                <Play size={24} className="fill-current ml-1" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Video Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          {/* Click outside to close */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)}></div>
          
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl z-10">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition active:scale-95 cursor-pointer"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            
            {/* Iframe player */}
            <iframe
              className="w-full h-full"
              src={videoSrc}
              title="Yurt Building Experience Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  )
}
