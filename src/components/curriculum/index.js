import { useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useQuery } from "react-query";
import slider from '../../assets/image/carriculam.jpeg';
import { PageBanner } from '../../components/pagebanner/index';
import ApiRequest from "../../services/api-services";
import { Addmission } from "../admission";
import { CourseDetails } from './courseDetails';
import styles from './styles.module.css';

export const CurriculumPage = () => {
     const arr = [
        {
             year: 'first',
            label: 'First',
            children: []
        },
        {
            year: 'second',
            label: 'Second',
            children: []
        },
        {
            year: 'third',
                        label: 'Third',

            children: []
        },
        {
            year: 'fourth',
                        label: 'Fourth',

            children: []
        }
    ]
    
    const { data, isLoading } = useQuery(['curriculumList'], () => ApiRequest.get('curriculum/all'))

    const semesterCalculation = useCallback((yearArr, year) => { 
        const item = yearArr?.map((value) => {
                arr.map((data) => { 
                    if (data?.year === year) { 
                        data.children.push( value)
                    }
                })
          
        })
        
        return item;

    }, [arr])

    const item = useMemo(() => {
        const allData = data?.data?.allCourses;

        allData?.length > 0 && allData?.filter((value) => { 
            if (value.year === 'first') { 
                semesterCalculation([value], 'first')
            }
            else if (value.year === 'second') { 
                semesterCalculation([value], 'second')
            }
            else if (value.year === 'third') { 
                semesterCalculation([value],  'third')
            }
            else if (value.year === "fourth") { 
                semesterCalculation([value], 'fourth')
            }
        })

    }, [data?.data?.allCourses, semesterCalculation]);

    console.log(data?.data?.creditDistribution)
    return (
        <>
            <Container fluid style={{padding: 0}} className="mt_60">
                <PageBanner title={'Curriculum'} photo={slider.src} position={'top'}/>
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
                                <Accordion defaultActiveKey={arr[0]}>
                                                                          {
                                           arr?.map((value, i) => { 
                                                return (
                                                    <Accordion.Item eventKey={i === 0 ? 0 : i} key={i} className={styles.accordianSection}>
                                                        <Accordion.Header className={styles.header} id='accordion'>{value?.label} Year</Accordion.Header>
                                                        <Accordion.Body className={styles.body}>
                                                            <CourseDetails semester={'First Semester'} value={value} />
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                )
                                            })
                                        }

                                </Accordion>
                            </Col>
                            <Col md={4} className={styles.mbl_hide}>
                                <div className={[styles.courseDetails, styles.mt].join(' ')} style={{padding: '0px'}}>
                                    <div className={styles.courseDetails} style={{padding: '0px'}}>
                                       
                                        <div className={[styles.tableHead, styles.sideHead].join(' ')} style={{background: '#eb2a2e'}}>
                                            <p style={{textAlign: 'center'}}>Course Credit Distribution</p>
                                        </div>
                                        <div className={styles.tablebody}>
                                            <p>{data?.data?.creditDistribution?.BusCourse?.propertyName}</p>
                                            <p>{data?.data?.creditDistribution?.BusCourse?.credit}</p>
                                        </div>
                                        <div className={styles.tablebody}>
                                            <p>{data?.data?.creditDistribution?.CoreCourse?.propertyName}</p>
                                            <p>{data?.data?.creditDistribution?.CoreCourse?.credit}</p>
                                        </div>
          
                                        <div className={styles.tablebody}>
                                            <p>{data?.data?.creditDistribution?.ElectiveMajor?.propertyName}</p>
                                            <p>{data?.data?.creditDistribution?.ElectiveMajor?.credit}</p>
                                        </div>
                                        <div className={styles.tablebody}>
                                            <p>{data?.data?.creditDistribution?.GEDCourse?.propertyName}</p>
                                            <p>{data?.data?.creditDistribution?.GEDCourse?.credit}</p>
                                        </div>
                                        <div className={styles.tablebody}>
                                            <p>{data?.data?.creditDistribution?.ProjectThesis?.propertyName}</p>
                                            <p>{data?.data?.creditDistribution?.ProjectThesis?.credit}</p>
                                        </div>
                                        <div className={styles.tableFooter}>
                                            <p>{data?.data?.creditDistribution?.TOTAL_CREDIT?.propertyName}</p>
                                            <p>{data?.data?.creditDistribution?.TOTAL_CREDIT?.credit}</p>
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