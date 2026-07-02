import { useState } from 'react'
import './Navigation.css'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <h1>🌿 Olkowitz</h1>
          <p className="nav-tagline">z. s.</p>
        </div>

        <button
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#/" className="nav-link">Domů</a>
          <a href="#/about" className="nav-link">O nás</a>
          <a href="#/events" className="nav-link">Akce</a>
          <a href="#/contact" className="nav-link">Kontakt</a>
        </div>
      </div>
    </nav>
  )
}
