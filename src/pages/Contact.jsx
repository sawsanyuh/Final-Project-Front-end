import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <>
            <Navbar  btn1="Login" btn2="Sign Up"/>
            <Hero page="Contact" />
            <section>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <i className='bx bx-map-alt'></i>
                        <h3>Our Location</h3>
                        <p>3481 Melrose Place, Beverly Hills<br />CA 90210</p>
                    </div>
                    <div className={styles.card}>
                        <i className='bx bx-phone'></i>
                        <h3>Telephone</h3>
                        <p>(+1) 517 397 7100<br />(+1) 411 315 8138</p>
                    </div>
                    <div className={styles.card}>
                        <i className='bx bx-envelope'></i>
                        <h3>Send Email</h3>
                        <p>Info@example.com<br />admin@example.com</p>
                    </div>
                </div>
            </section>
            <section className={styles.contact}>
              <form action="https://formsubmit.co/sawsanhani2002@gmail.com" method="POST">
              <h1 className={styles.heading}>Send your message</h1>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                 <label htmlFor="name">Name</label>
                 <input type="text" id="name" />
                </div>
                <div className={styles.inputGroup}>
                 <label htmlFor="email">Your Email</label>
                 <input type="email" id="email" />
                </div>
               </div>

            <div className={styles.inputGroupFull}>
             <label htmlFor="subject">Your Subject</label>
             <input type="text" id="subject" />
            </div>

            <div className={styles.inputGroupFull}>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" cols="30" rows="6"></textarea>
            </div>

            <div  className={styles.btnContainer}>
              <input type="submit" value="Send Message" className={styles.btn} />
            </div>
            </form>
            </section>

            <Footer />
        </>
    );
}

export default Contact;
