import styles from './styles.module.css'
import bannerImg from '../../assets/image/slider.png'
import memberImg from '../../assets/image/image.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useQuery} from "react-query";
import ApiRequest from "../../services/api-services";
import {useEffect, useMemo} from "react";
import {useRouter} from "next/router";
export const FacultyMembers = () => {
    const Router = useRouter()
    const {data, isLoading} = useQuery(['teacherList'], ()=>ApiRequest.get('teacher/all-for-landing-page'))
    const url = 'https://backend-bangladesh-university.onrender.com'

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
            pathname: `faculty-members/${_id}`
        })
    }

    console.log('filterData', filterData)
  return(
      <>
          <div className={styles.mainFacultyMember}>
                <img src={bannerImg.src} alt={'bannerImg'}/>
              <h1 className={'headingTitle'} style={{margin: '40px 0px'}}>
                  Dignified Teachers of Computer <br /> Science & Engineering.
              </h1>

              <div className={styles.members}>
                  <div className={styles.memberTitles}>
                      <h2>Chairman</h2>
                  </div>
                  <Row>
                      {
                          filterData?.chairman?.map((role, i) => {
                              return (
                                <Col md={4} key={i}>
                                    <div className={styles.memberCard}>
                                        <div className={styles.memberImg}>
                                            {/*<img src={memberImg.src} alt={'memberImg'} />*/}
                                            <img src={url+role?.photo} />
                                        </div>
                                        <h4>{role?.name}</h4>
                                        <p>{role?.editableRole}</p>
                                        <p>Faculty Id :{role?.teacherID}</p>
                                        <div className={styles.cardFooter} style={{cursor: 'pointer'}} onClick={()=>routerHandler(role?._id)}>
                                            <p>View Profile</p>
                                            <p> <span className={'arrow'}>&#8250;</span> </p>
                                        </div>
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
                                    <Col md={4} key={i}>
                                        <div className={styles.memberCard}>
                                            <div className={styles.memberImg}>
                                                <img src={memberImg.src} alt={'memberImg'} />
                                            </div>
                                            <h4>{role?.name}</h4>
                                            <p>{role?.editableRole}</p>
                                            <p>Faculty Id :{role?.teacherID}</p>
                                            <div className={styles.cardFooter} style={{cursor: 'pointer'}} onClick={()=>routerHandler(role?._id)}>
                                                <p>View Profile</p>
                                                <p> <span className={'arrow'}>&#8250;</span> </p>
                                            </div>
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
                                    <Col md={4} key={i}>
                                        <div className={styles.memberCard}>
                                            <div className={styles.memberImg}>
                                                <img src={memberImg.src} alt={'memberImg'} />
                                            </div>
                                            <h4>{role?.name}</h4>
                                            <p>{role?.editableRole}</p>
                                            <p>Faculty Id :{role?.teacherID}</p>
                                            <div className={styles.cardFooter} style={{cursor: 'pointer'}} onClick={()=>routerHandler(role?._id)}>
                                                <p>View Profile</p>
                                                <p> <span className={'arrow'}>&#8250;</span> </p>
                                            </div>
                                        </div>
                                    </Col>

                              )
                          })
                      }
                  </Row>
              </div>
          </div>
      </>
  )
}