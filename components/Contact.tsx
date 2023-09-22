import styles from "../styles/Contact.module.css"
import { FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { BsLinkedin } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*
** Email is sent using:
** https://web3forms.com/platforms/nextjs-contact-form
*/

const Contact = () => {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "85600c1d-a256-4a5f-84e8-179771c57969");

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
    const notify = () => {
        toast.success("Mensaje enviado!", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 10000
        });
    };

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
                            <button className={styles.sendMailButton} type="submit" onClick={notify}>Enviar Mensaje</button>
                        </div>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;