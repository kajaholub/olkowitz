import NewsletterForm from './NewsletterForm'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Olkowitz z. s.</h3>
          <p>
            <strong>ICO:</strong> 21617694
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@olkowitz.cz">info@olkowitz.cz</a>
          </p>
          <p>
            <strong>Adresa:</strong><br />
            Oleksovice<br />
            Česká republika
          </p>
        </div>

        <div className="footer-section">
          <h3>Rychlé odkazy</h3>
          <ul className="footer-links">
            <li><a href="#/">Domů</a></li>
            <li><a href="#/about">O nás</a></li>
            <li><a href="#/events">Akce</a></li>
            <li><a href="#/contact">Kontakt</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter-section">
          <h3>Odběr novinek</h3>
          <p>Přihlaste se k odběru novinek a informací o aktuálních akcích.</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Olkowitz z. s. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  )
}
