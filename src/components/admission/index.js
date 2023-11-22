import { Button, Col, Container, Row } from 'react-bootstrap';
import styles from './admission.module.css';

export const Addmission = () => {

  return(
      <div className={styles.mt}>
          <Container>
          <Row className={styles.bg}>
                <Col md='6' className={styles.inner}>
                      <div className={styles.Bigimg}>
                          <div className={styles.first_quata_img}>
                              <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="124" height="87" viewBox="0 0 124 87" fill="none">
                                    <g opacity="0.5">
                                        <path d="M101.7 86.1553C92.8814 86.1553 86.2108 82.5373 81.6884 75.3014C77.8443 69.1961 75.9222 61.7341 75.9222 52.9154C75.9222 41.6093 78.7488 31.4338 84.4018 22.3889C90.281 13.344 99.0998 6.10809 110.858 0.681152L113.911 6.78645C106.901 9.72604 100.796 14.3615 95.5949 20.693C90.6202 27.0244 88.1328 33.4689 88.1328 40.0264C88.1328 42.7399 88.472 45.1141 89.1504 47.1492C92.7683 44.2097 96.9516 42.7399 101.7 42.7399C107.805 42.7399 112.893 44.775 116.963 48.8452C121.26 52.6892 123.408 57.89 123.408 64.4476C123.408 70.5529 121.26 75.7537 116.963 80.05C112.893 84.1202 107.805 86.1553 101.7 86.1553Z" fill="#667580"/>
                                        <path d="M25.7779 86.1553C16.9592 86.1553 10.2886 82.5373 5.76611 75.3014C1.92204 69.1961 0 61.7341 0 52.9154C0 41.6093 2.82653 31.4338 8.47958 22.3889C14.3588 13.344 23.1775 6.10809 34.9359 0.681152L37.9885 6.78645C30.9787 9.72604 24.8734 14.3615 19.6726 20.693C14.6979 27.0244 12.2106 33.4689 12.2106 40.0264C12.2106 42.7399 12.5498 45.1141 13.2281 47.1492C16.8461 44.2097 21.0294 42.7399 25.7779 42.7399C31.8832 42.7399 36.971 44.775 41.0411 48.8452C45.3375 52.6892 47.4856 57.89 47.4856 64.4476C47.4856 70.5529 45.3375 75.7537 41.0411 80.05C36.971 84.1202 31.8832 86.1553 25.7779 86.1553Z" fill="#667580"/>
                                    </g>
                            </svg>
                          </div>
                            
                       
                          <img src='https://s3-alpha-sig.figma.com/img/543a/aa6e/5eb66ea93a1ed4a9c438914cf4dd5e5f?Expires=1701648000&Signature=ffrWsA6SaRJEvllz3ZAExbNgXu~~wKI1I~3PQ~nOdotP15VYjMnEJYegsOVYyp9f80ldu9kaACubRKwnxkQ1I-VQpjAmehlSVb4921WJ~K47yLgYoNaqTm5x7T4I95U7MtSjXAZrGUc0X99-YnDu6OmwEQJZ~GeEKNjjMYzPx5eh8cQhkni6r0~oORXp8g2owkL-JAgSABgJQ~wPLwa9O00EMPi5SvtqY0wP0DCAv0KP0FLbezglDeq3bMow-Rkc-ZPk3XRwllDOYgbjmXhKNs98fS7aOr-nrLO8qUBD491hxZdYDfPOJiM3fafYmT~y~TpgQggb~uP52LV~Bnt1YQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                          <div className={styles.quata_img}>
                              <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="124" height="87" viewBox="0 0 124 87" fill="none">
                            <g opacity="0.5">
                                <path d="M101.7 86.1553C92.8814 86.1553 86.2108 82.5373 81.6884 75.3014C77.8443 69.1961 75.9222 61.7341 75.9222 52.9154C75.9222 41.6093 78.7488 31.4338 84.4018 22.3889C90.281 13.344 99.0998 6.10809 110.858 0.681152L113.911 6.78645C106.901 9.72604 100.796 14.3615 95.5949 20.693C90.6202 27.0244 88.1328 33.4689 88.1328 40.0264C88.1328 42.7399 88.472 45.1141 89.1504 47.1492C92.7683 44.2097 96.9516 42.7399 101.7 42.7399C107.805 42.7399 112.893 44.775 116.963 48.8452C121.26 52.6892 123.408 57.89 123.408 64.4476C123.408 70.5529 121.26 75.7537 116.963 80.05C112.893 84.1202 107.805 86.1553 101.7 86.1553Z" fill="#667580"/>
                                <path d="M25.7779 86.1553C16.9592 86.1553 10.2886 82.5373 5.76611 75.3014C1.92204 69.1961 0 61.7341 0 52.9154C0 41.6093 2.82653 31.4338 8.47958 22.3889C14.3588 13.344 23.1775 6.10809 34.9359 0.681152L37.9885 6.78645C30.9787 9.72604 24.8734 14.3615 19.6726 20.693C14.6979 27.0244 12.2106 33.4689 12.2106 40.0264C12.2106 42.7399 12.5498 45.1141 13.2281 47.1492C16.8461 44.2097 21.0294 42.7399 25.7779 42.7399C31.8832 42.7399 36.971 44.775 41.0411 48.8452C45.3375 52.6892 47.4856 57.89 47.4856 64.4476C47.4856 70.5529 45.3375 75.7537 41.0411 80.05C36.971 84.1202 31.8832 86.1553 25.7779 86.1553Z" fill="#667580"/>
                            </g>
                          </svg>
                          </div>
                    </div>
                </Col>
                <Col md='6' className={styles.item_center}>
                      <div className={styles.details}>
                           <h2>Admission is on going</h2>      
                            <p>Join our diverse community and embark on a transformative educational journey. Secure your future with us today.</p>
                           {/* <h4>Apply Now</h4> */}
                          <a href={"/contact-us"}>
                                <Button className="galleryButton" variant="danger">Contact us</Button>
                          </a>
                     </div>
                </Col>
          </Row>
      </Container>
      </div>
  );
}