import styles from "../components/Achievements.module.css";

function Achievements(){
     return(
        <section>
          <div className={styles.factsContainer}>
            <div className={styles.factsCard}>
              <div className={styles.element1}>
                <span>
                  <i className='bx bx-wink-smile' style={{ color: 'blue' }}></i>
                </span>
              </div>
              <div className={styles.element2}>
                <h1>854</h1>
                <p>Entrolled Students</p>
              </div>
            </div>
        
            <div className={styles.factsCard}>
              <div className={styles.element1}>
                <span>
                  <i className='bx bx-file-blank' style={{ color: 'orange' }}></i>
                </span>
              </div>
              <div className={styles.element2}>
                <h1>521</h1>
                <p>Acadimics Program</p>
              </div>
            </div>
        
            <div className={styles.factsCard}>
              <div className={styles.element1}>
                <i className='bx bx-headphone' style={{ color: 'green' }}></i>
              </div>
              <div className={styles.element2}>
                <h1>163</h1>
                <p>Winning award</p>
              </div>
            </div>
        
            <div className={styles.factsCard}>
              <div className={styles.element1}>
                <i className='bx bx-user' style={{ color: 'pink' }}></i>
              </div>
              <div className={styles.element2}>
                <h1>93</h1>
                <p>Cirtified Students</p>
              </div>
            </div>
          </div>
        </section>
     )
}
export default Achievements;