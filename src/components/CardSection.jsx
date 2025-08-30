import styles from "../components/CardSection.module.css";
import { useNavigate } from "react-router-dom";

function CardSection(){
     const navigate=useNavigate()

    return(
       <section>
                   <div className={styles.container}>
                       <div className={styles.card}>
                           <h3>Quality Education</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                           <button onClick={() => navigate("/courses")} className={styles.exploreButton}>
         <span className={styles.circle}></span>
         EXPLORE COURSES <span className={styles.arrow}>→</span>
       </button>
                       </div>
                       <div className={styles.card}>
                           <h3> Experienced Teachers</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                           <button onClick={() => navigate("/courses")} className={styles.exploreButton}>
         <span className={styles.circle}></span>
         EXPLORE COURSES <span className={styles.arrow}>→</span>
       </button>
                       </div>
                       <div className={styles.card}>
                           <h3> Delicious Food</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                           <button onClick={() => navigate("/courses")} className={styles.exploreButton}>
         <span className={styles.circle}></span>
         EXPLORE COURSES <span className={styles.arrow}>→</span>
       </button>
                       </div></div> </section>
    )
} export default CardSection;