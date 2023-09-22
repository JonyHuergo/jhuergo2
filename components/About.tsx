import styles from "../styles/About.module.css"

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <h2>ACERCA DE MI</h2>
            <div className={styles.aboutInfoContainer}>
                <div className={styles.aboutPhotoContainer}>
                    <img className={styles.photo} src="me.jpg" alt="photo" />
                </div>
                <div className={styles.aboutTextContainer}>
                    <p>Capacitado en el diseño e implementación de páginas web. Actualmente 
                    profesionalizándose en Ingeniería Informática en la Universidad de Buenos Aires. Capaz 
                    de adaptarse a las necesidades de cada proyecto, trabajar independientemente o en 
                    equipo, y con ánimo de aprender nuevas tecnologías si es requerido.</p>
                </div>
            </div>
        </section>
    );
}
 
export default About;