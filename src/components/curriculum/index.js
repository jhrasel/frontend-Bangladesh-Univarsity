import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import slider from '../../assets/image/carriculam.png';
import { PageBanner } from '../../components/pagebanner/index';
import { Addmission } from "../admission";
import { CourseDetails } from "./courseDetails";
import styles from './styles.module.css';

export const CurriculumPage = () => {
    return (
        <>
            <Container fluid style={{padding: 0}} className="mt_60">
                <PageBanner title={''} photo={slider.src}/>
            </Container>
            <Container>
                      <div className={styles.mainCurriculum}>

                    <div>
                        <h1 className={[styles.heading, styles.hide].join(' ')} style={{ textAlign: 'center'}}>
                            CSE (COMPUTER SCIENCE & ENGINEERING ) TOTAL COURSE REQUIRED 161 CR. HRS.
                        </h1>
                        <Row>
                            <Col md={4} className={styles.hide}>
                                <div className={[styles.courseDetails, styles.mt].join(' ')} style={{padding: '0px'}}>
                                    <div className={styles.courseDetails} style={{padding: '0px'}}>
                                       
                                        <div className={[styles.tableHead, styles.sideHead].join(' ')} style={{background: '#eb2a2e'}}>
                                            <p style={{textAlign: 'center'}}>Course Credit Distribution</p>
                                        </div>
                                        <div className={styles.tablebody}>
                                            <p>CSE 111</p>
                                            <p>14</p>
                                        </div>
                                        <div className={styles.tablebody}>
                                            <p>CSE 111</p>
                                            <p>10</p>
                                        </div>
                                        <div className={styles.tablebody}>
                                            <p>CSE 111</p>
                                            <p>10</p>
                                        </div>
                                          <div className={styles.tableFooter}>
                                            <p style={{fontWeight: 'bold'}}>Total Credits</p>
                                            <p style={{fontWeight: 'bold'}}>14</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={8}>
                                <h1 className={[styles.heading, styles.mbl_hide].join(' ')}>
                                    CSE (COMPUTER SCIENCE & ENGINEERING ) TOTAL COURSE REQUIRED 161 CR. HRS.
                                </h1>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0" className={styles.accordianSection}>
                                        <Accordion.Header className={styles.header} id='accordion'>First Year</Accordion.Header>
                                        <Accordion.Body className={styles.body}>
                                            <CourseDetails semester={'First Semester'} />
                                            <CourseDetails semester={'Second Semester'}/>
                                            <CourseDetails semester={'Third Semester'}/>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className={styles.accordianSection}>
                                        <Accordion.Header className={styles.header} id='accordion'>Second Year</Accordion.Header>
                                        <Accordion.Body className={styles.body}>
                                            <CourseDetails semester={'First Semester'} />
                                            <CourseDetails semester={'Second Semester'}/>
                                            <CourseDetails semester={'Third Semester'}/>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" className={styles.accordianSection}>
                                        <Accordion.Header className={styles.header} id='accordion'>Third Year</Accordion.Header>
                                        <Accordion.Body className={styles.body}>
                                            <CourseDetails semester={'First Semester'} />
                                            <CourseDetails semester={'Second Semester'}/>
                                            <CourseDetails semester={'Third Semester'}/>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                     <Accordion.Item eventKey="3" className={styles.accordianSection}>
                                        <Accordion.Header className={styles.header} id='accordion'>Fourth Year</Accordion.Header>
                                        <Accordion.Body className={styles.body}>
                                            <CourseDetails semester={'First Semester'} />
                                            <CourseDetails semester={'Second Semester'}/>
                                            <CourseDetails semester={'Third Semester'}/>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                            <Col md={4} className={styles.mbl_hide}>
                                <div className={[styles.courseDetails, styles.mt].join(' ')} style={{padding: '0px'}}>
                                    <div className={styles.courseDetails} style={{padding: '0px'}}>
                                       
                                        <div className={[styles.tableHead, styles.sideHead].join(' ')} style={{background: '#eb2a2e'}}>
                                            <p style={{textAlign: 'center'}}>Course Credit Distribution</p>
                                        </div>
                                        <div className={styles.tablebody}>
                                            <p>CSE 111</p>
                                            <p>14</p>
                                        </div>
                                        <div className={styles.tablebody}>
                                            <p>CSE 111</p>
                                            <p>10</p>
                                        </div>
                                        <div className={styles.tablebody}>
                                            <p>CSE 111</p>
                                            <p>10</p>
                                        </div>
                                          <div className={styles.tableFooter}>
                                            <p style={{fontWeight: 'bold'}}>Total Credits</p>
                                            <p style={{fontWeight: 'bold'}}>14</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
            <Addmission />
        </>
  )
}