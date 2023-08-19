import React, {useEffect} from "react";
import {useRouter as UseRouter} from "next/router";
import bannerImg from '../../assets/image/teacherBanner.svg'
import avatar from '../../assets/image/image.png'
import phoneIcon from '../../assets/image/teacher/phoneIcon.svg'
import emailIcon from '../../assets/image/teacher/emailIcon.svg'
import websiteIcon from '../../assets/image/teacher/website.svg'
import {useQuery as UseQuery} from "react-query";
import ApiRequest from "../../services/api-services";
import styles from '../../components/facultyMembers/styles.module.css'
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const teacherDetails = () => {
    const router = UseRouter()
    const {FacultyMember} = router.query;
    const {isloading, data:FacultyMemberData} = UseQuery(['singleItem', FacultyMember], () => ApiRequest.get(`teacher/find/64d268b5b634efa2314b9080`));
    const url = 'https://backend-bangladesh-university.onrender.com'

    if (isloading) return <p>loading...</p>


    return(
        <div className={styles.mainBanner}>
            <div className={styles.innerMainBanner}>
                <img src={bannerImg.src} alt={'bannerImg'} width={'100%'}/>
                <div className={styles.details}>
                    <div className={styles.positionCenter}>
                        <div className={styles.avaterImg}>
                            <img src={url+FacultyMemberData?.data?.data?.photo} alt={'avater'} />
                        </div>

                        <p>
                            <img src={phoneIcon.src} alt={'phone'} />
                            {FacultyMemberData?.data?.data?.phone}
                        </p>
                        <p>
                            <img src={emailIcon.src} alt={'email'} />
                            {FacultyMemberData?.data?.data?.email}
                        </p>
                        <p>
                            <img src={websiteIcon.src} alt={'email'} />
                            {FacultyMemberData?.data?.data?.website}
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.bodyDetails}>
                <Row>
                    <Col>
                        <Table style={{background: '#fff', borderRadius: '5px'}}>
                            <tbody>
                            <tr>
                                <td style={{width: '20%'}}><b>Name:</b></td>
                                <td>{FacultyMemberData?.data?.data?.name}</td>
                            </tr>
                            <tr>
                                <td><b>Faculty ID:</b></td>
                                <td>{FacultyMemberData?.data?.data?.teacherID}</td>
                            </tr>
                            <tr>
                                <td><b>Designation:</b></td>
                                <td>{FacultyMemberData?.data?.data?.editableRole}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Table style={{background: 'red', borderRadius: '5px'}}>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>

                </Row>
            </div>
        </div>
    )
}
teacherDetails.getInitialProps = ({query}) => {
    return {query}
}
export default teacherDetails;