import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "./Navbar.module.css";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="edu logo" />
      </Link>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "bx bx-x" : "bx bx-menu"}></i>
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pages">Pages</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li className={styles.blog}>Blog</li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className={styles.navIcons}>
        <i className="bx bx-search"></i>
        <i className="bx bx-cart"></i>
        <div className={styles.authButtons}>
          <button className={styles.Contact}>{props.btn1}</button>
          <button className={styles.Account}>{props.btn2}</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
