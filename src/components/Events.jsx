import './Events.css'

export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Setkání členů - Jaro 2026',
      date: '2026-03-15',
      time: '18:00',
      location: 'Oleksovice - Sál obce',
      description: 'Jarní setkání všech členů občanského sdružení. Budeme diskutovat o plánech na letošní rok a aktivitách.'
    },
    {
      id: 2,
      title: 'Úklid okolí Oleksovic',
      date: '2026-04-22',
      time: '09:00',
      location: 'Centrální park, Oleksovice',
      description: 'Dobrovolnická akce zaměřená na úklid okolí našeho městyse. Přivítejte jaro s námi!'
    },
    {
      id: 3,
      title: 'Přírodní procházka a vzdělávání',
      date: '2026-05-10',
      time: '10:00',
      location: 'Lesy okolo Oleksovic',
      description: 'Edukaèní vycházka zaměřená na poznávání místní přírody a ekosystému. Vhodné pro všechny věkové skupiny.'
    },
    {
      id: 4,
      title: 'Letní piknik komunity',
      date: '2026-06-20',
      time: '14:00',
      location: 'Park v Oleksovicích',
      description: 'Setkání celé komunity s rodinnami. Společný piknik, hry a soutěže pro děti. Bring your own snacks!'
    },
    {
      id: 5,
      title: 'Podzimní festival',
      date: '2026-09-05',
      time: '11:00',
      location: 'Hlavní náměstí, Oleksovice',
      description: 'Velký podzimní festival s kulturním programem, ochutnávkou místních produktů a workshopy'
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="events-container">
      <h2>Nadcházející akce</h2>
      <p className="events-subtitle">Podívejte se na naše plánované akce a připojte se k nám!</p>
      
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-date">
              <span className="date-badge">{formatDate(event.date)}</span>
              <span className="time-badge">⏰ {event.time}</span>
            </div>
            
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-location">📍 {event.location}</p>
              <p className="event-description">{event.description}</p>
              <button className="event-btn">Více informací</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
