import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './Testimonials.module.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef(null)
  const intervalRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      text: "Absolutely breathtaking experience! The staff went above and beyond to make our honeymoon unforgettable. The room had stunning ocean views and the spa treatments were divine.",
      author: "Sarah Mitchell",
      role: "Travel Blogger",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      id: 2,
      text: "We've stayed at many luxury hotels, but Altesa truly stands out. The attention to detail, the personalized service, and the exquisite dining options made this our best vacation ever.",
      author: "Michael Chen",
      role: "Business Executive",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      id: 3,
      text: "From the moment we arrived, we felt like royalty. The concierge arranged amazing local experiences and the infinity pool overlooking the sunset was magical.",
      author: "Emma Rodriguez",
      role: "Interior Designer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      rating: 5
    },
    {
      id: 4,
      text: "Perfect getaway for our anniversary! The private beach dinner they arranged was incredibly romantic. Can't wait to come back next year.",
      author: "David Thompson",
      role: "Photographer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5
    }
  ]

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }, [testimonials.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [testimonials.length])

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        goToNext()
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, goToNext])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            What Our <span className="text-gold">Guests</span> Say
          </h2>
          <p className={styles.subtitle}>
            Real experiences from travelers who chose Altesa for their perfect getaway
          </p>
        </div>

        <div 
          className={styles.carousel}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={goToPrev}
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className={styles.carouselTrack}>
            <div 
              className={styles.carouselSlides}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={styles.slide}>
                  <div className={styles.testimonialCard}>
                    <div className={styles.quoteIcon}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--color-gold)" opacity="0.3">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z"/>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                      </svg>
                    </div>

                    <div className={styles.stars}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--color-gold)">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ))}
                    </div>

                    <p className={styles.testimonialText}>{testimonial.text}</p>

                    <div className={styles.author}>
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className={styles.avatar}
                      />
                      <div className={styles.authorInfo}>
                        <span className={styles.authorName}>{testimonial.author}</span>
                        <span className={styles.authorRole}>{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
