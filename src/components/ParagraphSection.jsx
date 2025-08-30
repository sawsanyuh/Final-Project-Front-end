import girlAbout1 from "../assets/girlAbout1.png";
import { useNavigate } from "react-router-dom";
import styles from "../components/ParagraphSection.module.css"

function ParagraphSection(){
      const navigate=useNavigate()
      return(

                    <section>
                         <div className={styles.sectionTwoContainer}>
                             <img src={girlAbout1} alt="image of a girl" />
                             <div className={styles.separateSection}>
                             <h1 className={styles.heading} >Learn new skills to go <span>ahead for your</span> career.</h1>
                             <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply. From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.From blogs to emails to ad copies, auto-generate catchy, original and high-converting copies.</p>
                             <p className={styles.paragraph}>Auto-generate catchy original and high-converting copies in popular tones languages. From blogs to emails to ad copies auto-generate catchy</p>
                             <button onClick={() => navigate("/")} className={styles.btn}>Explore More</button></div>
                         </div>
                     </section>)
}
export default ParagraphSection;