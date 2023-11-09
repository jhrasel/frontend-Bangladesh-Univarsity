import styles from './styles.module.css';
export const CourseDetails = ({semester}) => {
  return(
      <div className={styles.courseDetails}>
          <div className={styles.heading_title}>
              <h4>{semester}</h4>
              <h4>Total Credit: 14</h4>
          </div>
          <div className={styles.tableHead}>
              <p>Course Code</p>
              <p>Course Title</p>
              <p>Credits</p>
          </div>
          <div className={styles.tablebody}>
              <p>CSE 111</p>
              <p>Introduction of computer Science</p>
              <p>14</p>
          </div>
          <div className={styles.tablebody}>
              <p>CSE 111</p>
              <p>Analog Electronics</p>
              <p>10</p>
          </div>
          <div className={styles.tablebody}>
              <p>CSE 111</p>
              <p>Analog Electronics (Lab)</p>
              <p>10</p>
          </div>
 
      </div>
  );
}