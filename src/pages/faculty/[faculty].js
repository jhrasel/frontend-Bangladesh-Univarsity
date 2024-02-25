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
    console.log(FacultyMemberData)
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
                                        <p style={{textTransform: 'capitalize'}}><b>Role :</b> {FacultyMemberData?.data?.data?.editableRole}</p>
                                        <p style={{textTransform: 'capitalize'}}><b>Phone :</b> {FacultyMemberData?.data?.data?.phone}</p>
                                        <p style={{textTransform: 'capitalize'}}><b>Email Address :</b> {FacultyMemberData?.data?.data?.email}</p>
                                        <div className="hide">
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
                                        <div className="mbl_hide">
                                            <div className={styles.mblDetails}>
                                                <h2>Academic Qualification</h2>
                                                <h3>{FacultyMemberData?.data?.data?.academicQualification}</h3>
                                                <h2>Training Experience</h2>
                                                <h3>{FacultyMemberData?.data?.data?.trainingExperience}</h3>
                                                <h2>Teaching Area</h2>
                                                <h3>{FacultyMemberData?.data?.data?.teachingArea}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        )
                    }


                <div class="card">
                        <div class="card-header" style={{background: '#c1c7cf66', borderBottom: 'none', color: '#000',fontWeight: '600'}}>
                        Journal Publication: 
                        </div>
                        <div class="card-body">
                        <div dangerouslySetInnerHTML={{__html: FacultyMemberData?.data?.data?.JournalPublication}}></div>

                        </div>
                </div>
                <div class="card">
                    <div class="card-header" style={{background: '#c1c7cf66', borderBottom: 'none', color: '#000',fontWeight: '600'}}>
                        Project And Thèsis Supervision:
                    </div>
                    <div class="card-body">
                        <div dangerouslySetInnerHTML={{__html: FacultyMemberData?.data?.data?.ProjectAndThesisSupervision}}></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" style={{background: '#c1c7cf66', borderBottom: 'none', color: '#000',fontWeight: '600'}}>
                        Book Reviewer:
                    </div>
                    <div class="card-body">
                        <div dangerouslySetInnerHTML={{__html: FacultyMemberData?.data?.data?.BookReviewer}}></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" style={{background: '#c1c7cf66', borderBottom: 'none', color: '#000',fontWeight: '600'}}>
                        Seminar And Workshops:
                    </div>
                    <div class="card-body">
                        <div dangerouslySetInnerHTML={{__html: FacultyMemberData?.data?.data?.SeminarAndWorkshops}}></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" style={{background: '#c1c7cf66', borderBottom: 'none', color: '#000',fontWeight: '600'}}>
                        Professional Certification:
                    </div>
                    <div class="card-body">
                        <div dangerouslySetInnerHTML={{__html: FacultyMemberData?.data?.data?.ProfessionalCertification}}></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" style={{background: '#c1c7cf66', borderBottom: 'none', color: '#000',fontWeight: '600'}}>
                        Award & Scholarship:
                    </div>
                    <div class="card-body">
                        <div dangerouslySetInnerHTML={{__html: FacultyMemberData?.data?.data?.AwardAndScholarship}}></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" style={{background: '#c1c7cf66', borderBottom: 'none', color: '#000',fontWeight: '600'}}>
                        Membership: 
                    </div>
                    <div class="card-body">
                        <div dangerouslySetInnerHTML={{__html: FacultyMemberData?.data?.data?.Membership}}></div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" style={{background: '#c1c7cf66', borderBottom: 'none', color: '#000',fontWeight: '600'}}>
                        Previous Employment:
                    </div>
                    <div class="card-body">
                        <div dangerouslySetInnerHTML={{__html: FacultyMemberData?.data?.data?.PreviousEmployment}}></div>
                    </div>
                </div>
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