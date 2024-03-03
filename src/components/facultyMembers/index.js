import { useRouter } from "next/router";
import { useMemo } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useQuery } from "react-query";
import { default as slider } from '../../assets/image/faculties.jpeg';
import { PageBanner } from "../../components/pagebanner/index";
import ApiRequest from "../../services/api-services";
import { Addmission } from "../admission";
import { BulletinePreloader } from "../homePage/bulletine/bulletineLoader";
import styles from './styles.module.css';

  
export const FacultyMembers = () => {
    const Router = useRouter()
    const {data, isLoading} = useQuery(['teacherList'], ()=>ApiRequest.get('teacher/all-for-landing-page'))


    
    const filterData = useMemo(()=> {
        let teacher = {};
        let designationLecture = [];
        let designationChairman = [];
        let designationAssistantProfessor = [];
        let designationProfessor = [];
        let designationOfficeStuff = [];
        let designationCoOrdinator = [];
        let designationAssociateChairman = [];
        let onStudyLeave = [];
        let exFaculty = [];

        data?.data?.data.length > 0 ? data?.data?.data.map((role) => {
            if (role?.editableRole.toLowerCase() === "on study leave"){
                onStudyLeave.push(role);
                teacher.onStudyLeave = onStudyLeave
            }
            if (role?.editableRole.toLowerCase() === "ex faculty") {
                exFaculty.push(role);
                teacher.exFaculty = exFaculty
            }
            if (role?.editableRole.toLowerCase() === "associate professor & chairman"){
                designationAssociateChairman.push(role);
                teacher.associateProfessorAndChairman = designationAssociateChairman
            }
            if (role?.editableRole.toLowerCase() === "chairman"){
                designationChairman.push(role);
                teacher.chairman = designationChairman
            }
            if (role?.editableRole.toLowerCase() === "lecturer"){
                designationLecture.push(role)
                teacher.lecture = designationLecture
            }
            if (role?.editableRole.toLowerCase() === "assistant professor"){
                designationAssistantProfessor.push(role)
                teacher.assistantProfessor = designationAssistantProfessor
            }
            if (role?.editableRole.toLowerCase() === "professor"){
                designationProfessor.push(role)
                teacher.professor = designationProfessor
            }
            if (role?.editableRole.toLowerCase() === "co-ordinator"){
                designationCoOrdinator.push(role)
                teacher.CoOrdinator = designationCoOrdinator
            }
            if (role?.editableRole.toLowerCase() === "office stuff"){
                designationOfficeStuff.push(role)
                teacher.officeStuff = designationOfficeStuff
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
            <Container fluid style={{padding: 0}} className="mt_60">
                <PageBanner title={'Faculty Member'} photo={slider.src} position={'center'}/>
            </Container>
            <div className={styles.mainFacultyMember}>
              <h1 className={'sectionHeading'} style={{marginBottom: '40px', marginLeft: '25px', display: 'none'}}>Dignified Teachers of Computer <br /> Science & Engineering.</h1>

              <Container>
                  {
                      isLoading && (
                            <Row>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                            </Row>
                    )
                  }

                  {
                      filterData?.chairman?.length && (
                                            <div className={styles.members}>
                  <div className={styles.memberTitles}>
                      <h2>Chairman</h2>
                  </div>
                  <Row>
                      {
                          filterData?.chairman?.map((role, i) => {
                              return (
                                <Col xs={12} md={4} lg={3} key={i}>
                                        <div className={styles.memberCard} onClick={()=> routerHandler(role?._id)}>
                                            <div className={styles.memberImg}>
                                                <img src={role.photo} alt={'memberImg'} />
                                            </div>
                                            <h4>{role?.name}</h4>
                                            <p>{role?.editableRole}</p>
                                          <span>Phone: {role?.phone}</span> <br/>
                                          <span>Email: { role?.email}</span>
                                        </div>
                                </Col>

                              )
                          })
                      }
                  </Row>
                  </div>
                    )
                  }

                                    {
                      filterData?.professor?.length && (
                                        <div className={styles.members}>
                  <div className={styles.memberTitles}>
                      <h2>Professor</h2>
                    </div>
                      

                    {
                      isLoading && (
                            <Row>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                            </Row>
                    )
                  }
                  <Row>
                      {
                         filterData?.professor?.map((role, i) => {
                              return (
                                  <Col xs={12} md={4} lg={3} key={i}>
                                        <div className={styles.memberCard} onClick={()=> routerHandler(role?._id)}>
                                            <div className={styles.memberImg}>
                                                <img src={role.photo} alt={'memberImg'} />
                                            </div>
                                            <h4>{role?.name}</h4>
                                            <p>{role?.editableRole}</p>
                                          <span>Phone: {role?.phone}</span> <br/>
                                          <span>Email: { role?.email}</span>
                                        </div>
                                    </Col>

                              )
                          })
                      }
                  </Row>
                  </div>
                    )
                  }

                  {
                      filterData?.associateProfessorAndChairman?.length && (
                        <div className={styles.members}>
                        <div className={styles.memberTitles}>
                            <h2>Associate Professor</h2>
                        </div>
                        <Row>
                            {
                                filterData?.associateProfessorAndChairman?.map((role, i) => {
                                    return (
                                        <Col xs={12} md={4} lg={3} key={i}>
                                                <div className={styles.memberCard} onClick={()=> routerHandler(role?._id)}>
                                                    <div className={styles.memberImg}>
                                                        <img src={role.photo} alt={'memberImg'} />
                                                    </div>
                                                    <h4>{role?.name}</h4>
                                                    <p>{role?.editableRole}</p>
                                                <span>Phone: {role?.phone}</span> <br/>
                                                <span>Email: { role?.email}</span>
                                                </div>
                                        </Col>

                                    )
                                })
                            }
                        </Row>
                    </div>
                    )
                  }


                  {
                      filterData?.assistantProfessor?.length && (
                                        <div className={styles.members}>
                    <div className={styles.memberTitles}>
                        <h2>Assistant Professor</h2>
                    </div>
                    {
                      isLoading && (
                            <Row>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                            </Row>
                    )
                  }
                  <Row>
                      {
                          filterData?.assistantProfessor?.map((role, i) => {
                              return (
                                    <Col xs={12} md={4} lg={3} key={i}>
                                        <div className={styles.memberCard} onClick={()=> routerHandler(role?._id)}>
                                            <div className={styles.memberImg}>
                                                <img src={role.photo} alt={'memberImg'} />
                                            </div>
                                            <h4>{role?.name}</h4>
                                            <p>{role?.editableRole}</p>
                                          <span>Phone: {role?.phone}</span> <br/>
                                          <span>Email: { role?.email}</span>
                                        </div>
                                    </Col>
                              )
                          })
                      }
                  </Row>
              </div>
                    )
                  }





                  
                  {
                      filterData?.lecture?.length && (
                                        <div className={styles.members}>
                  <div className={styles.memberTitles}>
                      <h2>Lecturer</h2>
                    </div>
                      

                    {
                      isLoading && (
                            <Row>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                            </Row>
                    )
                  }
                  <Row>
                      {
                         filterData?.lecture?.map((role, i) => {
                              return (
                                  <Col xs={12} md={4} lg={3} key={i}>
                                        <div className={styles.memberCard} onClick={()=> routerHandler(role?._id)}>
                                            <div className={styles.memberImg}>
                                                <img src={role.photo} alt={'memberImg'} />
                                            </div>
                                            <h4>{role?.name}</h4>
                                            <p>{role?.editableRole}</p>
                                          <span>Phone: {role?.phone}</span> <br/>
                                          <span>Email: { role?.email}</span>
                                        </div>
                                    </Col>

                              )
                          })
                      }
                  </Row>
                  </div>
                     )
                  }

                  
                  {
                      filterData?.CoOrdinator?.length && (
                                        <div className={styles.members}>
                  <div className={styles.memberTitles}>
                      <h2>Co-Ordinator</h2>
                    </div>
                      

                    {
                      isLoading && (
                            <Row>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                            </Row>
                    )
                  }
                  <Row>
                      {
                         filterData?.CoOrdinator?.map((role, i) => {
                              return (
                                  <Col xs={12} md={4} lg={3} key={i}>
                                        <div className={styles.memberCard} onClick={()=> routerHandler(role?._id)}>
                                            <div className={styles.memberImg}>
                                                <img src={role.photo} alt={'memberImg'} />
                                            </div>
                                            <h4>{role?.name}</h4>
                                            <p>{role?.editableRole}</p>
                                          <span>Phone: {role?.phone}</span> <br/>
                                          <span>Email: { role?.email}</span>
                                        </div>
                                    </Col>

                              )
                          })
                      }
                  </Row>
                  </div>  
                    )
                  }

                                    {
                      filterData?.onStudyLeave?.length && (
                                        <div className={styles.members}>
                  <div className={styles.memberTitles}>
                      <h2>On Study Leave</h2>
                    </div>
                      

                    {
                      isLoading && (
                            <Row>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                            </Row>
                    )
                  }
                  <Row>
                      {
                         filterData?.onStudyLeave?.map((role, i) => {
                              return (
                                  <Col xs={12} md={4} lg={3} key={i}>
                                        <div className={styles.memberCard} onClick={()=> routerHandler(role?._id)}>
                                            <div className={styles.memberImg}>
                                                <img src={role.photo} alt={'memberImg'} />
                                            </div>
                                            <h4>{role?.name}</h4>
                                            <p>{role?.editableRole}</p>
                                          <span>Phone: {role?.phone}</span> <br/>
                                          <span>Email: { role?.email}</span>
                                        </div>
                                    </Col>

                              )
                          })
                      }
                  </Row>
                  </div>  
                    )
                  }
                                    {
                      filterData?.exFaculty?.length && (
                                        <div className={styles.members}>
                  <div className={styles.memberTitles}>
                      <h2>Ex Faculty</h2>
                    </div>
                      

                    {
                      isLoading && (
                            <Row>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                            </Row>
                    )
                  }
                  <Row>
                      {
                         filterData?.exFaculty?.map((role, i) => {
                              return (
                                  <Col xs={12} md={4} lg={3} key={i}>
                                        <div className={styles.memberCard} onClick={()=> routerHandler(role?._id)}>
                                            <div className={styles.memberImg}>
                                                <img src={role.photo} alt={'memberImg'} />
                                            </div>
                                            <h4>{role?.name}</h4>
                                            <p>{role?.editableRole}</p>
                                          <span>Phone: {role?.phone}</span> <br/>
                                          <span>Email: { role?.email}</span>
                                        </div>
                                    </Col>

                              )
                          })
                      }
                  </Row>
                  </div>  
                    )
                  }

                  
                  {
                      filterData?.officeStuff?.length && (
                                                         <div className={styles.members}>
                  <div className={styles.memberTitles}>
                      <h2>Office Stuff</h2>
                    </div>
                      

                    {
                      isLoading && (
                            <Row>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='3' lg="3">
                                    <BulletinePreloader />
                                </Col>
                            </Row>
                    )
                  }
                  <Row>
                      {
                         filterData?.officeStuff?.map((role, i) => {
                              return (
                                  <Col xs={12} md={4} lg={3} key={i}>
                                        <div className={styles.memberCard} onClick={()=> routerHandler(role?._id)}>
                                            <div className={styles.memberImg}>
                                                <img src={role.photo} alt={'memberImg'} />
                                            </div>
                                            <h4>{role?.name}</h4>
                                            <p>{role?.editableRole}</p>
                                          <span>Phone: {role?.phone}</span> <br/>
                                          <span>Email: { role?.email}</span>
                                        </div>
                                    </Col>

                              )
                          })
                      }
                  </Row>
              </div> 
                    )
                  }
   
              </Container>
               
          </div>
          <Addmission />
      </>
  )
}