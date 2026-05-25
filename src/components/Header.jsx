import React from 'react'
import { Globe } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <img src="public/logo.png" alt="Logo" className="w-12 h-12" />
          </div>
          <span className="text-white font-bold text-sm">GASTRO-ETNO<br/>TOUR - OSH</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#experience" className="text-white text-sm hover:text-orange-500 transition">Experience</a>
          <a href="#itinerary" className="text-white text-sm hover:text-orange-500 transition">Itinerary</a>
          <a href="#gallery" className="text-white text-sm hover:text-orange-500 transition">Gallery</a>
          <a href="#reviews" className="text-white text-sm hover:text-orange-500 transition">Reviews</a>
          <a href="#faq" className="text-white text-sm hover:text-orange-500 transition">FAQ</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-white hover:text-orange-500 transition">
            <Globe size={18} />
            <span className="text-sm">EN</span>
          </button>
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition font-semibold text-sm">
            Book Now
          </button>
        </div>
      </div>
    </header>
  )
}
