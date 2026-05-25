import React, { useRef, useState, useEffect } from 'react'
import { Mountain, Home, ShieldAlert, Music, Utensils, ChevronLeft, ChevronRight } from 'lucide-react'

// Curated high-quality Kyrgyzstan and nomadic lifestyle images from Unsplash
const experiences = [
  {
    id: 1,
    title: 'Sacred Mountain',
    description: 'Climb the UNESCO World Heritage Sulaiman-Too with breathtaking views',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    icon: Mountain,
    color: 'text-emerald-600 bg-emerald-50 hover:bg-emerald-100',
  },
  {
    id: 2,
    title: 'Build a Yurt',
    description: 'Learn traditional yurt construction from nomad masters',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80',
    icon: Home,
    color: 'text-amber-600 bg-amber-50 hover:bg-amber-100',
  },
  {
    id: 3,
    title: 'Nomad Archery',
    description: 'Practice ancient archery techniques on horseback',
    image: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?auto=format&fit=crop&w=800&q=80',
    icon: ShieldAlert, // Using ShieldAlert as a stylized arrow target look
    color: 'text-orange-600 bg-orange-50 hover:bg-orange-100',
  },
  {
    id: 4,
    title: 'Traditional Music',
    description: 'Experience authentic komuz music and nomad storytelling',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80',
    icon: Music,
    color: 'text-purple-600 bg-purple-50 hover:bg-purple-100',
  },
  {
    id: 5,
    title: 'Kyrgyz Feast',
    description: 'Taste kuurdak, samsa, and bread cooked over fire',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    icon: Utensils,
    color: 'text-rose-600 bg-rose-50 hover:bg-rose-100',
  },
]

export default function Experience() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 10)
      // Allow a small tolerance for fractional scroll values
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', updateScrollButtons)
      // Check on initial load
      updateScrollButtons()
      // Also check on window resize
      window.addEventListener('resize', updateScrollButtons)
    }
    return () => {
      if (el) el.removeEventListener('scroll', updateScrollButtons)
      window.removeEventListener('resize', updateScrollButtons)
    }
  }, [])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -340 : 340
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 block mb-3">
            Why Choose Gastro-Etno Tour
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            This experience lets you live like a real nomad.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Not a typical tour. Join real nomad families in their daily traditions—from building yurts to cooking over open fires. Real people, real culture, real connections.
          </p>
        </div>

        {/* Scroll Buttons */}
        <div className="flex items-center gap-3 mt-6 md:mt-0">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all ${
              canScrollLeft
                ? 'bg-white text-gray-800 hover:border-gray-400 active:scale-95'
                : 'bg-gray-50 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all ${
              canScrollRight
                ? 'bg-white text-gray-800 hover:border-gray-400 active:scale-95'
                : 'bg-gray-50 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Cards Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {experiences.map((exp) => {
          const IconComponent = exp.icon
          return (
            <div
              key={exp.id}
              className="min-w-[280px] sm:min-w-[320px] max-w-[320px] flex-none snap-start group"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 shadow-sm">
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to local default exp1.jpg if offline/fails to load
                    e.target.src = '/exp1.jpg'
                  }}
                />
                
                {/* Floating Icon Badge on Card */}
                <div className={`absolute bottom-3 left-3 p-2 rounded-full shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 ${exp.color}`}>
                  <IconComponent size={20} />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-sans text-xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
                {exp.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
