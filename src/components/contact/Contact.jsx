import "./contact.css";
import { TbMail } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className="contact__options">

          <div className="contact__option">
            <TbMail className="contacr__option-icon"/>
            <h4>Email</h4>
            <h5>anuragkrishna14@gmail.com</h5>
            <a href="mailto:anuragkrishna14@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </div>

          <div className="contact__option">
            <BsWhatsapp className="contacr__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>Anurag Krishna</h5>
            <a href="https://api.whatsapp.com/send?phone=919971299451" target="_blank" rel="noreferrer">Send a message</a>
          </div>

        </div>

        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

      </div>

    </section>
  );
};

export default Contact;
