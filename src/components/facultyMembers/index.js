import styles from './styles.module.css'
import bannerImg from '../../assets/image/slider.png'
import memberImg from '../../assets/image/image.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const FacultyMembers = () => {
  return(
      <>
          <div className={styles.mainFacultyMember}>
                <img src={bannerImg.src} alt={'bannerImg'}/>
              <h1 className={'headingTitle'} style={{margin: '40px 0px'}}>
                  Dignified Teachers of Computer <br /> Science & Engineering.
              </h1>
                  <div className={styles.members}>
                      <div className={styles.memberTitles}>
                          <h2>Chairmen</h2>
                      </div>
                      <Row>
                          <Col md={4}>
                              <div className={styles.memberCard}>
                                  <div className={styles.memberImg}>
                                      <img src={memberImg.src} alt={'memberImg'} />
                                  </div>
                                  <h4>Md. Sadiq Iqbal</h4>
                                  <p>Associate Professor & Chairman</p>
                                  <p>Faculty Id :200510001</p>
                                  <div className={styles.cardFooter}>
                                      <p>View Profile</p>
                                      <p> <span className={'arrow'}>&#8250;</span> </p>
                                  </div>
                              </div>
                          </Col>
                      </Row>
                  </div>
                  <div className={styles.members}>
                      <div className={styles.memberTitles}>
                          <h2>Assistant Professor</h2>
                      </div>
                      <Row>
                          <Col md={4}>
                              <div className={styles.memberCard}>
                                  <div className={styles.memberImg}>
                                      <img src={memberImg.src} alt={'memberImg'} />
                                  </div>
                                  <h4>Md. Sadiq Iqbal</h4>
                                  <p>Associate Professor & Chairman</p>
                                  <p>Faculty Id :200510001</p>
                                  <div className={styles.cardFooter}>
                                      <p>View Profile</p>
                                      <p> <span className={'arrow'}>&#8250;</span> </p>
                                  </div>
                              </div>
                          </Col>
                          <Col md={4}>
                              <div className={styles.memberCard}>
                                  <div className={styles.memberImg}>
                                      <img src={memberImg.src} alt={'memberImg'} />
                                  </div>
                                  <h4>Md. Sadiq Iqbal</h4>
                                  <p>Associate Professor & Chairman</p>
                                  <p>Faculty Id :200510001</p>
                                  <div className={styles.cardFooter}>
                                      <p>View Profile</p>
                                      <p> <span className={'arrow'}>&#8250;</span> </p>
                                  </div>
                              </div>
                          </Col>
                          <Col md={4}>
                              <div className={styles.memberCard}>
                                  <div className={styles.memberImg}>
                                      <img src={memberImg.src} alt={'memberImg'} />
                                  </div>
                                  <h4>Md. Sadiq Iqbal</h4>
                                  <p>Associate Professor & Chairman</p>
                                  <p>Faculty Id :200510001</p>
                                  <div className={styles.cardFooter}>
                                      <p>View Profile</p>
                                      <p> <span className={'arrow'}>&#8250;</span> </p>
                                  </div>
                              </div>
                          </Col>
                      </Row>
                  </div>
                  <div className={styles.members}>
                      <div className={styles.memberTitles}>
                          <h2>Lecturer</h2>
                      </div>
                      <Row>
                          <Col md={4}>
                              <div className={styles.memberCard}>
                                  <div className={styles.memberImg}>
                                      <img src={memberImg.src} alt={'memberImg'} />
                                  </div>
                                  <h4>Md. Sadiq Iqbal</h4>
                                  <p>Associate Professor & Chairman</p>
                                  <p>Faculty Id :200510001</p>
                                  <div className={styles.cardFooter}>
                                      <p>View Profile</p>
                                      <p> <span className={'arrow'}>&#8250;</span> </p>
                                  </div>
                              </div>
                          </Col>
                          <Col md={4}>
                              <div className={styles.memberCard}>
                                  <div className={styles.memberImg}>
                                      <img src={memberImg.src} alt={'memberImg'} />
                                  </div>
                                  <h4>Md. Sadiq Iqbal</h4>
                                  <p>Associate Professor & Chairman</p>
                                  <p>Faculty Id :200510001</p>
                                  <div className={styles.cardFooter}>
                                      <p>View Profile</p>
                                      <p> <span className={'arrow'}>&#8250;</span> </p>
                                  </div>
                              </div>
                          </Col>
                          <Col md={4}>
                              <div className={styles.memberCard}>
                                  <div className={styles.memberImg}>
                                      <img src={memberImg.src} alt={'memberImg'} />
                                  </div>
                                  <h4>Md. Sadiq Iqbal</h4>
                                  <p>Associate Professor & Chairman</p>
                                  <p>Faculty Id :200510001</p>
                                  <div className={styles.cardFooter}>
                                      <p>View Profile</p>
                                      <p> <span className={'arrow'}>&#8250;</span> </p>
                                  </div>
                              </div>
                          </Col>
                          <Col md={4}>
                              <div className={styles.memberCard}>
                                  <div className={styles.memberImg}>
                                      <img src={memberImg.src} alt={'memberImg'} />
                                  </div>
                                  <h4>Md. Sadiq Iqbal</h4>
                                  <p>Associate Professor & Chairman</p>
                                  <p>Faculty Id :200510001</p>
                                  <div className={styles.cardFooter}>
                                      <p>View Profile</p>
                                      <p> <span className={'arrow'}>&#8250;</span> </p>
                                  </div>
                              </div>
                          </Col>
                          <Col md={4}>
                              <div className={styles.memberCard}>
                                  <div className={styles.memberImg}>
                                      <img src={memberImg.src} alt={'memberImg'} />
                                  </div>
                                  <h4>Md. Sadiq Iqbal</h4>
                                  <p>Associate Professor & Chairman</p>
                                  <p>Faculty Id :200510001</p>
                                  <div className={styles.cardFooter}>
                                      <p>View Profile</p>
                                      <p> <span className={'arrow'}>&#8250;</span> </p>
                                  </div>
                              </div>
                          </Col>
                      </Row>
                  </div>
          </div>
      </>
  )
}