import { useRouter as UseRouter } from "next/router";
import React from "react";

import { Card, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { useQuery as UseQuery } from "react-query";
import { Addmission } from '../../components/admission/index';
import styles from '../../components/facultyMembers/styles.module.css';
import { Loader } from '../../components/loader';
import ApiRequest from "../../services/api-services";

const teacherDetails = () => {
    const router = UseRouter()
    const {faculty} = router.query;

    const { data:FacultyMemberData, isloading} = UseQuery(['singleItem', faculty], () => ApiRequest.get(`teacher/find/${faculty}`));
    const url = 'https://backend-bangladesh-university.onrender.com'

    
    return(
        <div className={styles.mainBanner}>

            <Container>
                <Card className="sing_card">
                    {
                        isloading ? <div className={styles.loader}> <Loader /></div> : (
                            <Row>
                                <Col xs={12} md={4} xl={4}>
                                    <div className={styles.single_avaterimg}>
                                        <img src={FacultyMemberData?.data?.data?.photo} alt={'avater'} />
                                    </div>
                                </Col>
                                <Col xs={12} md={8} xl={8}>
                                    <div className={styles.card_details}>
                                        <h4>{FacultyMemberData?.data?.data?.name}</h4>
                                        <p>{FacultyMemberData?.data?.data?.editableRole}</p>
                                        <Table style={{background: 'red', borderRadius: '5px'}}>
                                            <tbody>
                                                <tr>
                                                    <td style={{width: '30%'}}><b>Academic Qualification:</b></td>
                                                    <td>{FacultyMemberData?.data?.data?.academicQualification}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{width: '30%'}}><b>Training Experience:</b></td>
                                                    <td>{FacultyMemberData?.data?.data?.trainingExperience}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{width: '30%'}}><b>Teaching Area:</b></td>
                                                    <td>{FacultyMemberData?.data?.data?.teachingArea}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>
                        )
                    }
                </Card>
            </Container>
          <Addmission />
        </div>
    )
}
teacherDetails.getInitialProps = ({query}) => {
    return {query}
}
export default teacherDetails;