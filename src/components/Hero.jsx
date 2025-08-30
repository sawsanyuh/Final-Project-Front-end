import styles from "./Hero.module.css"
function Hero(props) {
  return (
    <section   className={styles.hero} >
      <div className={styles.heroContent}>
        <h1>{props.page}</h1>
        <ul className={styles.mainContent}>
          <li><a href="/">Home</a></li>
          <li> / {props.page}</li>
        </ul>
      </div>
    </section>
  );
}
export default Hero;
