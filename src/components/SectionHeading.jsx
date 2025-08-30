import  styles from "./SectionHeading.module.css";

function SectionHeading({ subtitle, children }) {
  return (
   <div className={styles.sectionHeading}>
      {subtitle && (
        <div className={styles.subtitleRow}>
          <span className={styles.subtitleText}>{subtitle}</span>
          <span className={styles.subtitleLine}  />
        </div>
      )}
       <h2>{children}</h2>
       
    </div>
  );
}

export default SectionHeading;
