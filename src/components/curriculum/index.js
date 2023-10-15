import Accordion from 'react-bootstrap/Accordion';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bannerImg from "../../assets/image/slider.jpg";
import { CourseDetails } from "./courseDetails";
import styles from './styles.module.css';

export const CurriculumPage = () => {
  return (
      <div className={styles.mainCurriculum}>
        <div className={styles.banner}>
            <img src={bannerImg.src} alt={'curriculum image'} />
        </div>

        <div>
            <Row>
                <Col md={8}>
                    <h1 className={'headingTitle'} style={{margin: '40px 0px'}}>
                        Syllabus Of CSE Department
                    </h1>

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" className={styles.accordianSection}>
                            <Accordion.Header className={styles.header}>Syllabus Of First Year</Accordion.Header>
                            <Accordion.Body className={styles.body}>
                                <CourseDetails />
                                <CourseDetails />
                                <CourseDetails />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className={styles.accordianSection}>
                            <Accordion.Header className={styles.header}>Syllabus Of First Year</Accordion.Header>
                            <Accordion.Body className={styles.body}>
                                <CourseDetails />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className={styles.accordianSection}>
                            <Accordion.Header className={styles.header}>Syllabus Of First Year</Accordion.Header>
                            <Accordion.Body className={styles.body}>
                                <CourseDetails />
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Col>
                <Col md={4}>
                    <div className={[styles.courseDetails, styles.mt].join(' ')}>
                        <div className={styles.tableHead}>
                            <p>Course Credit Distribution</p>
                        </div>
                        <div className={styles.tablebody}>
                            <p>Core Course</p>
                            <p>14</p>
                        </div>
                        <div className={styles.tablebody}>
                            <p>Core Course</p>
                            <p>10</p>
                        </div>
                        <div className={styles.tablebody}>
                            <p>Core Course</p>
                            <p>10</p>
                        </div>
                        <div className={styles.tableFooter}>
                            <p>Total Credits</p>
                            <p>14</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
      </div>
  )
}