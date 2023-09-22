import styles from "../styles/Contact.module.css"
import { FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {
      async function handleSubmit(event) {
          event.preventDefault();
          const formData = new FormData(event.target);

          formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
          });
          const result = await response.json();
          if (result.success) {
              console.log(result);
          }
      }

    return (
        <section id="contact" className={styles.contact}>
            <h2>CONTACTO</h2>
            <div className={styles.contactContainer}>
                <div className={styles.contactItemsContainer}>
                    <span>
                        <a href="https://www.linkedin.com/in/jonathan-huergo-ramos-maldonado-90260b166/" target="blank">
                            <BsLinkedin/><p>Linkedin: Jonathan Huergo Ramos Maldonado</p>
                        </a>
                    </span>
                    <span><IoMdMail/><p>Email: jh2000@hotmail.com.ar</p></span>
                    <span><FaPhone/><p>Teléfono: 11 60178262</p></span>
                </div>
                <div className={styles.mailContainer}>
                    <h3>Contactame por mail:</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email"/>
                        </div>
                        <div>
                            <label htmlFor="message">Mensaje</label>
                            <textarea name="message" id="message"></textarea>
                        </div>
                        <div className={styles.buttonContainer}>
                            <button type="submit">Enviar Mensaje</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;