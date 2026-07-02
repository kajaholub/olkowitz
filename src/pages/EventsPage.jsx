import Events from '../components/Events'
import './EventsPage.css'

export default function EventsPage() {
  return (
    <div className="events-page">
      <div className="page-header">
        <h1>Naše Akce</h1>
        <p>Podívejte se na veškeré plánované a probíhající akce</p>
      </div>

      <section className="events-section">
        <Events />
      </section>

      <section className="event-info">
        <h2>Jak se zapojit?</h2>
        <div className="info-grid">
          <div className="info-item">
            <div className="step-number">1</div>
            <h3>Vyberte akci</h3>
            <p>Procházejte seznam nadcházejících akcí a vyberte si tu, která vás zajímá.</p>
          </div>
          <div className="info-item">
            <div className="step-number">2</div>
            <h3>Kontaktujte nás</h3>
            <p>Napište nám email nebo zavolejte, abychom Vás zaregistrovali.</p>
          </div>
          <div className="info-item">
            <div className="step-number">3</div>
            <h3>Přijďte a zapojte se!</h3>
            <p>Dorazit v daný čas a místo a začínat společně pracovat na našich cílech.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Máte nápad na akci?</h2>
        <p>Jsme otevřeni novým nápady! Pokud byste rádi viděli určitou akci, kontaktujte nás.</p>
        <a href="#/contact" className="btn btn-primary">Navrhněte akci</a>
      </section>
    </div>
  )
}
