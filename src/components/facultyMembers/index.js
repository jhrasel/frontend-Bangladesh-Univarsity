import { useRouter } from "next/router";
import { useMemo } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useQuery } from "react-query";
import { default as slider } from '../../assets/image/slider.jpg';
import { PageBanner } from "../../components/pagebanner/index";
import ApiRequest from "../../services/api-services";
import { Addmission } from "../admission";
import styles from './styles.module.css';
export const FacultyMembers = () => {
    const Router = useRouter()
    const {data, isLoading} = useQuery(['teacherList'], ()=>ApiRequest.get('teacher/all-for-landing-page'))

    const filterData = useMemo(()=> {
        let teacher = {};
        let designationLecture = [];
        let designationChairman = [];
        let designationProfessor = [];

        data?.data?.data.length > 0 ? data?.data?.data.map((role) => {
            if (role?.editableRole.toLowerCase() === "associate professor & chairman"){
                designationChairman.push(role);
                teacher.chairman = designationChairman
            }
            if (role?.editableRole.toLowerCase() === "chairman"){
                designationChairman.push(role);
                teacher.chairman = designationChairman
            }
            if (role?.editableRole.toLowerCase() === "lecture"){
                designationLecture.push(role)
                teacher.lecture = designationLecture
            }
            if (role?.editableRole.toLowerCase() === "assistant professor"){
                designationProfessor.push(role)
                teacher.professor = designationProfessor
            }
        }): []
        return teacher;


    }, [data])

    const routerHandler = (_id) => {
        Router.push({
            pathname: `faculty/${_id}`
        })
    }

  return(
      <>
          <PageBanner title={'Faculty Member'} photo={slider.src}/>
          <div className={styles.mainFacultyMember}>
              <h1 className={'sectionHeading'} style={{marginBottom: '40px', marginLeft: '25px'}}>Dignified Teachers of Computer <br /> Science & Engineering.</h1>


              <Container>
                  <div className={styles.members}>
                  <div className={styles.memberTitles}>
                      <h2>Chairman</h2>
                  </div>
                  <Row>
                      {
                          filterData?.chairman?.map((role, i) => {
                              return (
                                <Col xs={12} md={4} lg={4} key={i}>
                                    <div className={styles.memberCard}>
                                        <div className={styles.memberImg}>
                                            <img src={role?.photo} alt="member photo" />
                                        </div>
                                        <h4>{role?.name}</h4>
                                        <p>{role?.editableRole}</p>
                                        <span>Phone: +880165245741</span> <br/>
                                        <span>Email: example@gmail.com</span>
                                    </div>
                                </Col>

                              )
                          })
                      }
                  </Row>
              </div>

              <div className={styles.members}>
                  <div className={styles.memberTitles}>
                      <h2>Professor</h2>
                  </div>
                  <Row>
                      {
                          filterData?.professor?.map((role, i) => {
                              return (
                                    <Col xs={12} md={4} lg={4} key={i}>
                                        <div className={styles.memberCard}>
                                            <div className={styles.memberImg}>
                                                <img src={role?.photo} alt={'memberImg'} />
                                            </div>
                                            <h4>{role?.name}</h4>
                                            <p>{role?.editableRole}</p>
                                            <span>Phone: +880165245741</span> <br/>
                                            <span>Email: example@gmail.com</span>
                                        </div>
                                    </Col>
                              )
                          })
                      }
                  </Row>
              </div>


              <div className={styles.members}>
                  <div className={styles.memberTitles}>
                      <h2>Lecture</h2>
                  </div>
                  <Row>
                      {
                         filterData?.lecture?.map((role, i) => {
                              return (
                                  <Col xs={12} md={4} lg={4} key={i}>
                                        <div className={styles.memberCard}>
                                            <div className={styles.memberImg}>
                                                <img src={role.photo} alt={'memberImg'} />
                                            </div>
                                            <h4>{role?.name}</h4>
                                            <p>{role?.editableRole}</p>
                                            <span>Phone: +880165245741</span> <br/>
                                            <span>Email: example@gmail.com</span>
                                        </div>
                                    </Col>

                              )
                          })
                      }
                  </Row>
              </div>
              </Container>
               
          </div>
          <Addmission />
      </>
  )
}