import { Col, Container, Row } from 'react-bootstrap';
import assistantNav from '../../assets/image/assistant_navigation.png';
import main__ from '../../assets/image/bg_main__.png.png';
import circle from '../../assets/image/circle.png';
import touch from '../../assets/image/touch_app.png';
import styles from '../../components/slider/sliderWithButton.module.css';

export const Weaver = () => {
  return(
                  <div className="main__">
               <Container fluid>
                    <div className={styles.sliderWithButton} style={{background: 'transparent'}}>
                      <Container>
                           <Row>
                            <Col xs='12' md='12' lg="4" className="padding_0">
                                <div className={styles.inner} style={{ background: '#fff'}}>
                                    <img src={assistantNav.src} alt={'img'} />
                                    <p style={{margin: '10px 0px!important'}}>Request for Weaver</p>
                                    <span>Apply online today and take the first step towards a brighter future with us.</span>

                                </div>
                            </Col>
                            <Col xs='12' md='12' lg="4" className="padding_0">
                                <div className={styles.middleSliderButton} style={{ background: '#EB2A2E'}}>
                                    <img src={circle.src} alt={'img'} />
                                    <p style={{margin: '10px 0px!important'}}>Apply Online</p>
                                    <span>Find the perfect match for your weaving needs. Weaving excellence awaits!</span>

                                </div>
                            </Col>
                            <Col xs='12' md='12' lg="4" className="padding_0">
                                <div className={styles.inner} style={{ background: '#fff'}}>
                                    <img src={touch.src} alt={'img'} />

                                    <p style={{margin: '10px 0px!important'}}>Get in Touch</p>
                                    <span>Have questions or need assistance? Reach out to us. We are here to help.</span>

                                </div>
                            </Col>
                        </Row>
                        </Container>
                    </div>
              </Container>
              <img className="overlay_main__" src={main__.src} alt='main' width={'100%'} height={'100%'}/>
      </div>
  );
}