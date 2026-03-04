import { useState } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const [location, setLocation] = useState('')
  const [persons, setPersons] = useState(2)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [showPersonDropdown, setShowPersonDropdown] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
    }, 1500)
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroText}>
          <span className={styles.heroTag}>Top Rated</span>
          <h1 className={styles.heroTitle}>
            Experience The<br />
            Dream Vacation<br />
            At Altesa
          </h1>
          <p className={styles.heroDescription}>
            Discover our handpicked collection of extraordinary accommodations 
            that redefine luxury living. From serene beachfront villas to 
            elegant mountain retreats.
          </p>
        </div>

        <form className={styles.searchBar} onSubmit={handleSearch}>
          <div className={styles.searchField}>
            <div className={styles.fieldIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className={styles.fieldContent}>
              <label className={styles.fieldLabel}>Location</label>
              <input
                type="text"
                placeholder="Where are you going?"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={styles.fieldInput}
              />
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.searchField}>
            <div className={styles.fieldIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div 
              className={styles.fieldContent}
              onClick={() => setShowPersonDropdown(!showPersonDropdown)}
            >
              <label className={styles.fieldLabel}>Person</label>
              <div className={styles.fieldValue}>
                {persons} {persons === 1 ? 'Guest' : 'Guests'}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
              {showPersonDropdown && (
                <div className={styles.dropdown}>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      className={`${styles.dropdownItem} ${persons === num ? styles.active : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setPersons(num)
                        setShowPersonDropdown(false)
                      }}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.searchField}>
            <div className={styles.fieldIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div className={styles.fieldContent}>
              <label className={styles.fieldLabel}>Check-in</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className={styles.fieldInput}
              />
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.searchField}>
            <div className={styles.fieldIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div className={styles.fieldContent}>
              <label className={styles.fieldLabel}>Check-out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className={styles.fieldInput}
              />
            </div>
          </div>

          <button 
            type="submit" 
            className={`${styles.searchBtn} ${isSearching ? styles.searching : ''}`}
            disabled={isSearching}
          >
            {isSearching ? (
              <span className={styles.spinner}></span>
            ) : (
              'Search'
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Hero
