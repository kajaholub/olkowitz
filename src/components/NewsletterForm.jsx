import { useState } from 'react'
import './NewsletterForm.css'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!email) {
      setMessage('Prosím zadejte svou emailovou adresu')
      return
    }

    setStatus('loading')
    setMessage('')

    setTimeout(() => {
      setStatus('success')
      setMessage('Děkujeme! Nyní jste přihlášeni k odběru novinek.')
      setEmail('')
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    }, 800)
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          placeholder="Vaš email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          required
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Odesílám...' : 'Přihlásit'}
        </button>
      </div>
      {message && (
        <p className={`form-message ${status}`}>
          {message}
        </p>
      )}
    </form>
  )
}
