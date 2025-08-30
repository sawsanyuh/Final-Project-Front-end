import styles from "../components/HomeCourses.module.css";

function HomeCourses({ img, price, category, title, lessons, hours, stars, level }) {
  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <div className={styles.imageWrapper}>
          <img src={img} alt={title} className={styles.img} />
          <span className={styles.price}>${price}</span>
        </div>
        <div className={styles.titleBtnWrapper}>
          <button className={styles.btn}>{category}</button>
          <h1 className={styles.parag}>{title}</h1>

        </div>
      </div>

      <div className={styles.meta}>
        <div className={styles.row}>
          <i className='bx bxs-file'></i><span>{lessons} Lessons</span>
          <i className='bx bx-time'></i><span>{hours}</span>
          <i className='bx bxs-star'></i><span>{stars}</span>
          <i className='bx bx-bar-chart-alt-2'></i><span>{level}</span>
        </div>
      </div>
    </div>
  );
}

export default HomeCourses;
