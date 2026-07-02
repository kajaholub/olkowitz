import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>O nás</h1>
        <p>Poznámek více o naší organizaci a našem poslání</p>
      </div>

      <section className="about-section">
        <div className="about-image">
          <div className="image-placeholder">📸</div>
        </div>
        <div className="about-content">
          <h2>O Olkowitz z. s.</h2>
          <p>
            Olkowitz z. s. je občanské sdružení registrované v České republice (ICO: 21617694) s posláním zlepšovat kvalitu života v obci Oleksovice a okolí.
          </p>
          <p>
            Jsme komunita nadšenců a aktivistů, kteří věří v sílu lokální akce a sousedské solidarity. Naše činnosti se zaměřují na ochranu přírody, zlepšování veřejných prostranství a organizaci akcí pro všechny generace.
          </p>
          <p>
            Věříme, že každý jednotlivec může přispět k pozitivní změně ve své komunity. Ať již prostřednictvím dobrovolné činnosti, nápadu nebo jednoduše sdílením našich hodnot.
          </p>
        </div>
      </section>

      <section className="goals-section">
        <h2>Naše čtyři hlavní cíle</h2>
        <div className="goals-grid">
          <div className="goal-card">
            <div className="goal-number">1</div>
            <h3>Ochrana přírody a zlepšování životního prostředí</h3>
            <p>Iniciujeme a podporujeme projekty zaměřené na ochranu místní flóry a fauny, zvyšujeme povědomí o ekologických problémech a pracujeme na udržitelných řešeních.</p>
          </div>

          <div className="goal-card">
            <div className="goal-number">2</div>
            <h3>Zvelebování městyse Oleksovice a jeho okolí</h3>
            <p>Organizujeme dobrovolnické akce na údržbu veřejných prostranství, zlepšujeme vzhled obce a vytváříme příjemné prostředí pro všechny obyvatele.</p>
          </div>

          <div className="goal-card">
            <div className="goal-number">3</div>
            <h3>Veřejné akce a dobrovolnické aktivity</h3>
            <p>Pořádáme kulturní, sportovní a vzdělávací akce, které přispívají k našim hlavním cílům a укрепljují vztahy v komunitě.</p>
          </div>

          <div className="goal-card">
            <div className="goal-number">4</div>
            <h3>Podpora občanské společnosti a sousedské vzájemnosti</h3>
            <p>Vytváříme prostor pro setkávání, výměnu nápadů a společné rozhodování. Podporujeme aktivní participaci občanů na životě komunity.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Náš tým</h2>
        <p className="team-intro">
          Naší organizaci tvoří skupina oddaných dobrovolníků a vedoucích, kteří věnují svůj čas a energii na zlepšování života v našem regionu.
        </p>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👤</div>
            <h3>Vedoucí projektu</h3>
            <p className="role">Koordinátor hlavních iniciativ</p>
            <p className="placeholder">[Jméno a kontakt - bude doplněno]</p>
          </div>

          <div className="team-card">
            <div className="team-avatar">👤</div>
            <h3>Správce akcí</h3>
            <p className="role">Organizátor komunitních akcí</p>
            <p className="placeholder">[Jméno a kontakt - bude doplněno]</p>
          </div>

          <div className="team-card">
            <div className="team-avatar">👤</div>
            <h3>Vedoucí prostředí</h3>
            <p className="role">Iniciátor projektů na ochranu přírody</p>
            <p className="placeholder">[Jméno a kontakt - bude doplněno]</p>
          </div>
        </div>
      </section>

      <section className="join-section">
        <h2>Chcete se připojit?</h2>
        <p>Naše organizace je otevřena všem, kteří chtějí přispět k lepšímu budoucnosti naší komunity. Bez ohledu na Vaší dovednost nebo zkušenost, najdeme pro Vás vhodné místo.</p>
        <a href="#/contact" className="btn btn-primary">Kontaktujte nás</a>
      </section>
    </div>
  )
}
