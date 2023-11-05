import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useQuery } from "react-query";
import assistantNav from '../../assets/image/assistant_navigation.png';
import main__ from '../../assets/image/bg_main__.png.png';
import circle from '../../assets/image/circle.png';
import touch from '../../assets/image/touch_app.png';
import { Bulletine } from "../../components/homePage/bulletine/bulletine";
import { LatestNotice } from "../../components/homePage/latestNotice/latestNotice";
import { WhyUs } from "../../components/homePage/whyUs/whyUs";
import { Slider } from "../../components/slider/slider";
import { SliderWithButton } from "../../components/slider/sliderWithButton";
import styles from '../../components/slider/sliderWithButton.module.css';
import ApiRequest from "../../services/api-services";




const Index = () => {
    const {data, isLoading} = useQuery(['gallery-item'],()=> ApiRequest.get('gallery/all'))
    console.log(data)

  return(
      <>
          <Slider />
          <SliderWithButton />
          <LatestNotice />
          {/*<Messages />*/}
          <WhyUs />


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
          
          <Bulletine />
          {/*<Events/>*/}

          <Container>
                <h1 className={'sectionHeading'}>Gallery</h1>
              <p className='sectionSubtitle'>Dive into our gallery,  where photos tell <br />stories of our campus life, preserving cherished memories.</p>
              <Row style={{marginTop: '30px'}}>
                  <Col xs='12' md='6' lg="6">
                      <img src={data?.data?.body[0].image} alt='main' width={'100%'} height={'550px'} />
                  </Col>
                  <Col xs='12' md='6' lg="6">
                      <Row style={{marginBottom: '20px'}}>
                          <Col md='6'>
                             <img src={data?.data?.body[1].image} alt='main' width={'100%'} height={'264px'}/>

                          </Col>
                          <Col md='6'>
                            <img src={data?.data?.body[2].image} alt='main' width={'100%'} height={'264px'}/>
                          </Col>
                      </Row>
                      <Row>
                          <Col md='6'>
                             <img src={data?.data?.body[3].image} alt='main' width={'100%'} height={'264px'}/>

                          </Col>
                          <Col md='6'>
                            <img src={data?.data?.body[4].image} alt='main' width={'100%'} height={'264px'}/>
                          </Col>
                      </Row>
                  </Col>
                    <Button className="galleryButton" variant="danger">View All</Button>

              </Row>

          </Container>
      </>
  )
}
export default Index;