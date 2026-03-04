import { useState, useEffect, useRef } from 'react'
import styles from './Rooms.module.css'

const Rooms = () => {
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

  const rooms = [
    {
      id: 1,
      name: 'Luxe Our Luxury Rooms',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
      beds: 2,
      baths: 1,
      size: '45m²',
      description: 'Experience unparalleled luxury in our spacious rooms with stunning views and premium amenities.',
      price: 299,
      rating: 5,
      reviews: 128
    },
    {
      id: 2,
      name: 'Luxe Our Classic Rooms',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      beds: 1,
      baths: 1,
      size: '35m²',
      description: 'A perfect blend of comfort and elegance, our classic rooms offer a serene retreat.',
      price: 199,
      rating: 5,
      reviews: 96
    },
    {
      id: 3,
      name: 'Luxe Our Couple Rooms',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      beds: 1,
      baths: 1,
      size: '40m²',
      description: 'Romantic getaway with intimate settings, perfect for couples seeking privacy.',
      price: 249,
      rating: 5,
      reviews: 84
    },
    {
      id: 4,
      name: 'Medium Couple Rooms',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
      beds: 1,
      baths: 1,
      size: '32m²',
      description: 'Cozy and comfortable rooms designed for couples on a memorable vacation.',
      price: 179,
      rating: 4,
      reviews: 72
    },
    {
      id: 5,
      name: 'Luxe Our Classic Rooms',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
      beds: 2,
      baths: 1,
      size: '38m²',
      description: 'Timeless elegance meets modern comfort in our beautifully appointed classic rooms.',
      price: 219,
      rating: 5,
      reviews: 104
    },
    {
      id: 6,
      name: 'Luxe Our Couple Rooms',
      image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=800&q=80',
      beds: 1,
      baths: 1,
      size: '42m²',
      description: 'Indulge in luxury with our premium couple rooms featuring exclusive amenities.',
      price: 279,
      rating: 5,
      reviews: 91
    }
  ]

  return (
    <section id="rooms" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={`${styles.header} ${styles.animateItem}`}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              Enjoy an Extraordinary Retreat <span className="text-gold">with</span>
              <br />
              <span className="text-gold">Exclusive Offers</span>
            </h2>
          </div>
          <a href="#" className={styles.discoverLink}>
            Discover More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        <div className={styles.grid}>
          {rooms.map((room, index) => (
            <RoomCard 
              key={room.id} 
              room={room} 
              index={index}
              animateClass={styles.animateItem}
              visibleClass={styles.visible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const RoomCard = ({ room, index, animateClass }) => {
  const [bookingState, setBookingState] = useState('idle')
  const cardRef = useRef(null)

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

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleBook = () => {
    if (bookingState !== 'idle') return
    
    setBookingState('loading')
    setTimeout(() => {
      setBookingState('success')
      setTimeout(() => {
        setBookingState('idle')
      }, 2000)
    }, 1500)
  }

  return (
    <div 
      ref={cardRef}
      className={`${styles.card} ${animateClass}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.cardImage}>
        <img src={room.image} alt={room.name} />
        <div className={styles.cardOverlay}></div>
      </div>
      
      <div className={styles.cardContent}>
        <div className={styles.cardMeta}>
          <span className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 4v16"/>
              <path d="M2 8h18a2 2 0 0 1 2 2v10"/>
              <path d="M2 17h20"/>
              <path d="M6 8v9"/>
            </svg>
            {room.beds} Bed
          </span>
          <span className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>
              <line x1="10" y1="5" x2="8" y2="7"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <line x1="7" y1="19" x2="7" y2="21"/>
              <line x1="17" y1="19" x2="17" y2="21"/>
            </svg>
            {room.baths} Bath
          </span>
          <span className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
            </svg>
            {room.size}
          </span>
        </div>

        <h3 className={styles.cardTitle}>{room.name}</h3>
        <p className={styles.cardDescription}>{room.description}</p>

        <div className={styles.cardFooter}>
          <div className={styles.priceRating}>
            <span className={styles.price}>${room.price}<span>/night</span></span>
            <div className={styles.rating}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    width="12" 
                    height="12" 
                    viewBox="0 0 24 24" 
                    fill={i < room.rating ? 'var(--color-gold)' : 'var(--color-gray-300)'}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <span className={styles.reviewCount}>({room.reviews})</span>
            </div>
          </div>

          <button 
            className={`${styles.bookBtn} ${styles[bookingState]}`}
            onClick={handleBook}
            disabled={bookingState !== 'idle'}
          >
            {bookingState === 'loading' && (
              <span className={styles.spinner}></span>
            )}
            {bookingState === 'success' && (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            )}
            {bookingState === 'idle' && 'Book Now'}
            {bookingState === 'success' && 'Booked!'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rooms
