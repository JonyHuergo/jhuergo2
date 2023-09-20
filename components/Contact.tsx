import styles from "../styles/Contact.module.css"

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
                <div>
                    {/* <ContactInfoItem icon={<MdLocalPhone/>}/>
                    <ContactInfoItem icon={<MdEmail/>}/>
                    <ContactInfoItem /> */}
                </div>
                <div className={styles.mailContainer}>
                    {/* <ContactForm /> */}
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