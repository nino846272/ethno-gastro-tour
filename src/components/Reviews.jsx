import { Star } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import reviewsData from '../data/reviews.json'

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className="text-orange-400 fill-orange-400"
          strokeWidth={0}
        />
      ))}
    </div>
  )
}

function pickLocale(field, lang) {
  if (!field) return ''
  if (typeof field === 'string') return field
  return field[lang] ?? field.ru ?? field.en ?? ''
}

export default function Reviews() {
  const { t, lang } = useLanguage()
  const { googleReviewsUrl, items } = reviewsData

  return (
    <section id="reviews" className="bg-[#ffffff] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-serif uppercase tracking-widest text-gray-900">
            {t('reviews.title')}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-px bg-orange-300" />
            <div className="w-2 h-2 rounded-full bg-orange-400" />
            <div className="w-12 h-px bg-orange-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <StarRating count={review.rating ?? 5} />

              <blockquote className="mt-5 text-gray-600 text-[15px] leading-relaxed font-sans flex-1">
                &ldquo;{pickLocale(review.text, lang)}&rdquo;
              </blockquote>

              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <p className="font-sans font-bold text-gray-900 text-sm truncate">
                    {review.name}
                  </p>
                  <p className="font-sans text-gray-400 text-sm">
                    {pickLocale(review.location, lang)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={googleReviewsUrl}
            target={googleReviewsUrl !== '#' ? '_blank' : undefined}
            rel={googleReviewsUrl !== '#' ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-1 font-sans text-orange-500 hover:text-orange-600 font-medium text-sm md:text-base transition-colors"
          >
            {t('reviews.viewAll')}
          </a>
        </div>
      </div>
    </section>
  )
}
