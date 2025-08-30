import styles from "../components/TrustedCompany.module.css";
import companyLogo1 from "../assets/companyLogo1.png";
import companyLogo2 from "../assets/companyLogo2.png";
import companyLogo3 from "../assets/companyLogo3.png";
import companyLogo4 from "../assets/companyLogo4.png";
import companyLogo5 from "../assets/companyLogo5.png";
import { useEffect, useRef } from "react";

function TrustedCompany() {
  const images = [
    companyLogo1,
    companyLogo2,
    companyLogo3,
    companyLogo4,
    companyLogo5,
    companyLogo1,
    companyLogo2,
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideWidth = slider.children[0].offsetWidth + 20; 
    let scrollPosition = 0;

    const interval = setInterval(() => {
      scrollPosition += slideWidth;
      if (scrollPosition >= slider.scrollWidth - slider.clientWidth) {
        scrollPosition = 0;
      }
      slider.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Trusted Companies Around The World!</h3>

      <div className={styles.container}>
        
        <div className={styles.logoWindow}>
          <div className={styles.slider} ref={sliderRef}>
            {images.map((logo, idx) => (
              <img key={idx} src={logo} alt={`Company ${idx + 1}`} className={styles.logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedCompany;
