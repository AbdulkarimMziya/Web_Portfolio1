import './App.scss'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Logos from './Components/Logos/Logos'
import Projects from './Components/Projects/Projects'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/contact'
import Sidebar from './Components/Header/Sidebar/Sidebar'

function App() {
  

  return (
    <div className="webpage">
      <Header />
      <Sidebar />
      <Hero />
      <Logos />
      <Projects />
      <Experience />
      <Contact />

    </div>
  )
}

export default App
