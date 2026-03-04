import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Offer', href: '#offers' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Service', href: '#service' },
  ]

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoText}>Altesa</span>
        </a>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.navActions}>
          <a href="#" className={styles.loginLink}>Log In</a>
          <a href="#" className={`btn btn-primary ${styles.signUpBtn}`}>Sign Up</a>
        </div>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
