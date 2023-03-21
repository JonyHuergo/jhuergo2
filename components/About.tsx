import styles from "../styles/About.module.css"

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <h2>ACERCA DE MI</h2>
            <div>
                <div>
                    <h3>Titulo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div>
                    <img src="me.jpg" className="photo" alt="photo" />
                </div>
            </div>
        </section>
    );
}
 
export default About;