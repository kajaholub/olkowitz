import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessage('Prosím vyplňte všechna pole')
      return
    }

    setStatus('loading')
    setMessage('')

    setTimeout(() => {
      setStatus('success')
      setMessage('Děkujeme! Vaše zpráva byla odeslána. Kontaktujeme Vás co nejdříve.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    }, 1000)
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Kontakt</h1>
        <p>Spojte se s námi - chceme slyšet Vaše nápady a připomínky</p>
      </div>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Informace o organizaci</h2>
          
          <div className="info-card">
            <h3>📍 Adresa</h3>
            <p>
              Oleksovice<br />
              Česká republika
            </p>
          </div>

          <div className="info-card">
            <h3>📞 Telefon</h3>
            <p className="placeholder">[Telefonní číslo - bude doplněno]</p>
          </div>

          <div className="info-card">
            <h3>📧 Email</h3>
            <p>
              <a href="mailto:info@olkowitz.cz">info@olkowitz.cz</a>
            </p>
          </div>

          <div className="info-card">
            <h3>🏢 ICO</h3>
            <p>21617694</p>
          </div>

          <div className="info-card social">
            <h3>🌐 Sociální sítě</h3>
            <p className="placeholder">[Sociální sítě - budou doplněny]</p>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Napište nám zprávu</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Jméno *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Vaše jméno"
                disabled={status === 'loading'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Váš email"
                disabled={status === 'loading'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Předmět *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Předmět zprávy"
                disabled={status === 'loading'}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Zpráva *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Vaše zpráva..."
                rows="6"
                disabled={status === 'loading'}
              ></textarea>
            </div>

            {message && (
              <p className={`form-message ${status}`}>
                {message}
              </p>
            )}

            <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
              {status === 'loading' ? 'Odesílám...' : 'Odeslat zprávu'}
            </button>
          </form>
        </div>
      </section>

      <section className="map-section">
        <h2>Najděte nás na mapě</h2>
        <div className="map-placeholder">
          📍 Mapa Oleksovic - bude doplněna
        </div>
      </section>
    </div>
  )
}
