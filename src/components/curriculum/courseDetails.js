import Table from 'react-bootstrap/Table';
import styles from './styles.module.css'
export const CourseDetails = () => {
  return(
      <div className={styles.courseDetails}>
          <h4>First Semester</h4>
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
          <div className={styles.tableFooter}>
              <p></p>
              <p>Total Credits</p>
              <p>14</p>
          </div>
      </div>
  );
}