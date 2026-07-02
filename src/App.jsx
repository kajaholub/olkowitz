import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import EventsPage from './pages/EventsPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('/')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/'
      setCurrentPage(hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <Homepage />
      case '/about':
        return <About />
      case '/contact':
        return <Contact />
      case '/events':
        return <EventsPage />
      default:
        return <Homepage />
    }
  }

  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
