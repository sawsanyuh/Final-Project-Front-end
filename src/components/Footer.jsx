import logo2 from "../assets/logo2.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        
        <div className={styles.footerAbout}>
          <img src={logo2} alt="edu logo" />
          <p>
            Lorem ipsum dolor sit amet,
          </p>
          <span>CONNECT WITH:</span>
          <span className={styles.socialIcons}>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-youtube"></i>
            <i className="bx bxl-pinterest"></i>
          </span>
        </div>

       
        <div className={styles.footerLinks}>
          <h4>Courses</h4>
          <a href="#">Creative Writing</a>
          <a href="#">Digital Marketing</a>
          <a href="#">SEO Business</a>
          <a href="#">Social Marketing</a>
          <a href="#">Graphic Design</a>
          <a href="#">Website Development</a>
        </div>

        
        <div className={styles.footerLinks}>
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Knowledge Base</a>
          <a href="#">Affiliate Program</a>
          <a href="#">Community</a>
          <a href="#">Market API</a>
          <a href="#">Support Team</a>
        </div>

    
        <div className={styles.footerContact}>
          <h4>Contact Info</h4>

          <div className={styles.contactItem}>
            <i className="bx bxs-phone"></i>
            <div>
              <h3>Phone Number</h3>
              <p>+999586584</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <i className="bx bxs-envelope"></i>
            <div>
              <h3>Email Address</h3>
              <p>example12@re.com</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <i className="bx bxs-map"></i>
            <div>
              <h3>Location</h3>
              <p>California, USA</p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className={styles.footerBottom}>
        <p>© 2025 Edusion. All Rights Reserved</p>
        <div id={styles.finalAnchor}>
          <a href="#">Terms & Conditions</a>
          <a href="#">Special</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
