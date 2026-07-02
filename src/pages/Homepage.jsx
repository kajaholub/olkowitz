import NewsletterForm from '../components/NewsletterForm'
import './Homepage.css'

export default function Homepage() {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <h1>Vítejte v Olkowitz</h1>
          <p className="hero-subtitle">Občanské sdružení zaměřené na ochranu přírody a zlepšování života v Oleksovicích</p>
          <div className="hero-buttons">
            <a href="#/about" className="btn btn-primary">Dozvědět se více</a>
            <a href="#/contact" className="btn btn-secondary">Kontaktujte nás</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">🌿</div>
        </div>
      </section>

      <section className="mission-section">
        <h2>Naše poslání</h2>
        <div className="mission-grid">
          <div className="mission-card">
            <div className="card-icon">🌍</div>
            <h3>Ochrana přírody</h3>
            <p>Chrániме a zlepšujeme životní prostředí v našem regionu prostřednictvím iniciativ a edukace.</p>
          </div>
          <div className="mission-card">
            <div className="card-icon">🏘️</div>
            <h3>Zvelebování obce</h3>
            <p>Pracujeme na zlepšení vzhledu a atmosféry naší komunity skrze společné projekty.</p>
          </div>
          <div className="mission-card">
            <div className="card-icon">👥</div>
            <h3>Sousedská sjednocení</h3>
            <p>Budujeme silnou komunitu skrze setkávání, akce a společné zájmy.</p>
          </div>
          <div className="mission-card">
            <div className="card-icon">🎉</div>
            <h3>Veřejné akce</h3>
            <p>Organizujeme kulturní, sportovní a vzdělávací akce pro všechny věkové skupiny.</p>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Zůstaňte s námi v kontaktu</h2>
          <p>Přihlaste se k odběru našeho bulletinu a buďte informováni o nadcházejících akcích a iniciativách.</p>
          <NewsletterForm />
        </div>
      </section>

      <section className="cta-section">
        <h2>Chcete se zapojit?</h2>
        <p>Jsme vždy rádi, když se nám připojují noví lidé! Kontaktujte nás a zjistěte, jak se můžete stát součástí naší komunity.</p>
        <a href="#/contact" className="btn btn-primary btn-large">Kontaktujte nás dnes</a>
      </section>
    </div>
  )
}
