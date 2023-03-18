import Projects from './projects'
import About from './about'
import Contact from './contact'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <section id="home" className='header'>
      <h1>Soy Jonathan Huergo,</h1>
      <h2>desarrollador Front End y estudiante de Ingeniería Informática</h2>
      <a href="#contact"><button type="button" className="contact-button">CONTACTAME</button></a>
    </section>
    <Projects/>
    <About/>
    <Contact/>
    </>
  )
}
