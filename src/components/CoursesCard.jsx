import styles from "./CourseCard.module.css";

function CourseCard({ id, p, img, price, category, lessons, hours, stars, level,releaseDate }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={img} alt={p} className={styles.img} />
        <span className={styles.price}>${price}</span>
      </div>

      <button className={styles.btn}>{category}</button>

      <div className={styles.meta}>
        <h1 className={styles.parag}>{p}</h1>
        <div className={styles.row}>
          <i className='bx bxs-file'></i><span className={styles.lessons}>{lessons}</span>
          <i className='bx bx-time'></i><span className={styles.hours}>{hours}</span>
          <i className='bx bxs-star'></i><span className={styles.stars}>{stars}</span>
          <i className='bx bx-bar-chart-alt-2'></i><span className={styles.level}>{level}</span>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
