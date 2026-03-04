import { useState, useEffect, useRef } from 'react'
import styles from './VideoSection.module.css'

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [ripples, setRipples] = useState([])
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handlePlayClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    }
    
    setRipples((prev) => [...prev, newRipple])
    
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 600)

    setTimeout(() => {
      setIsPlaying(true)
    }, 300)
  }

  const handleClose = () => {
    setIsPlaying(false)
  }

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.background}>
        <img 
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80" 
          alt="Hotel exterior"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.content}`}>
        <h2 className={styles.title}>
          See How We <span className="text-gold">Make</span>
          <br />
          Satisfied Our All Clients
        </h2>
        <p className={styles.description}>
          Experience the magic of Altesa through the eyes of our guests. 
          Watch their stories and discover why we're the preferred choice 
          for unforgettable vacations.
        </p>

        <button 
          className={styles.playButton}
          onClick={handlePlayClick}
          aria-label="Play video"
        >
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className={styles.ripple}
              style={{
                left: ripple.x,
                top: ripple.y
              }}
            />
          ))}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        </button>

        <span className={styles.watchText}>Watch Video</span>
      </div>

      {isPlaying && (
        <div className={styles.videoModal} onClick={handleClose}>
          <div className={styles.videoContainer} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Hotel Video"
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

export default VideoSection
