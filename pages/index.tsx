import styles from '../styles/Home.module.css'
import Info from '../components/Info'

export default function Home() {
  return (
    <>
    <section id="home" className='header'>
      <h1>Soy Jonathan Huergo,</h1>
      <h2>desarrollador Front End y estudiante de Ingeniería Informática</h2>
      <a href="#contact"><button type="button" className="contact-button">CONTACTAME</button></a>
    </section>
    <Info/>
    </>
  )
}
