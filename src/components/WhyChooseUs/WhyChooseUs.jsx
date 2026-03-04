import { useEffect, useRef } from 'react'
import styles from './WhyChooseUs.module.css'

const WhyChooseUs = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateItem}`)
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: 'All-Inclusive Amenities',
      description: 'Enjoy our world-class amenities including spa, fitness center, and fine dining restaurants.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: 'Unbeatable Affordability',
      description: 'Although the ambiance is unparalleled here, we offer competitive pricing for all budgets.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Excellent 4.9/5 Rating',
      description: 'Rated 4.9/5 by thousands of satisfied guests who experienced our exceptional hospitality.'
    }
  ]

  const reviewCards = [
    {
      rating: 5,
      text: 'Absolutely stunning! The service was impeccable.',
      author: 'Sarah M.',
      position: 'top-right'
    },
    {
      rating: 5,
      text: 'Best vacation experience we\'ve ever had.',
      author: 'John D.',
      position: 'bottom-right'
    }
  ]

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={`${styles.header} ${styles.animateItem}`}>
            <h2 className={styles.title}>
              Why You Should <span className="text-gold">Choose Us</span>
            </h2>
            <p className={styles.subtitle}>
              We offer a curated luxury experience with the finest accommodations, 
              exceptional service, and unforgettable moments.
            </p>
          </div>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`${styles.feature} ${styles.animateItem}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={`${styles.imageGrid} ${styles.animateItem}`}>
            <div className={styles.imageMain}>
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" 
                alt="Luxury hotel room"
              />
            </div>
            <div className={styles.imageSecondary}>
              <img 
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80" 
                alt="Hotel amenities"
              />
            </div>
          </div>

          {reviewCards.map((card, index) => (
            <div 
              key={index}
              className={`${styles.reviewCard} ${styles[card.position]} ${styles.animateItem}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className={styles.reviewStars}>
                {[...Array(card.rating)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-gold)">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className={styles.reviewText}>{card.text}</p>
              <span className={styles.reviewAuthor}>{card.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
