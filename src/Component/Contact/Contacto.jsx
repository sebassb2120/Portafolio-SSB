import"./Contacto.css"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export function Contacto(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3lopf6g', 'template_3tsufoa', form.current, 'k5FtN66n4Zbr5A7qf')
        e.target.reset()
      };


    return(
        <>
            <section id="contact">
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>

                <div className="container contact_container">
                    <div className="contact_options">
                        <article className="contact_option">
                            <i class="bi bi-envelope" ></i>
                            <h4>Email</h4>
                            <h5>sebassaldarriaga20@gmail.com</h5>
                            <a href="mailto:sebassaldarriaga20@gmail.com" target="_blank">send a message</a>
                        </article>

                        <article className="contact_option">
                            <i class="bi bi-whatsapp"></i>
                            <h4>WhatsApp</h4>
                            <h5>+57 320-769-94-02</h5>
                            <a href="https://api.whatsapp.com/send?phone+573207699402" target="_blank">send a message</a>
                        </article>
                    </div>

                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="Your Full Name" required/>
                        <input type="email" name="email" placeholder="Your Email" required/>
                        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn btn-primary">send message</button>
                    </form>
                </div>
            </section>
        </>
    )
}