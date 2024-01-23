import './App.scss'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Logos from './Components/Logos/Logos'
import Projects from './Components/Projects/Projects'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/contact'

function App() {
  

  return (
    <div className="webpage">
      <Header />
      <Hero id="Home"/>
      <Logos />
      <Projects id="Projects"/>
      <Experience />
      <Contact />

    </div>
  )
}

export default App
