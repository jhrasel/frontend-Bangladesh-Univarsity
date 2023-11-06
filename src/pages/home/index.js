import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useQuery } from "react-query";
import { Addmission } from '../../components/admission/index';
import { Bulletine } from "../../components/homePage/bulletine/bulletine";
import { LatestNotice } from "../../components/homePage/latestNotice/latestNotice";
import { WhyUs } from "../../components/homePage/whyUs/whyUs";
import { Slider } from "../../components/slider/slider";
import { SliderWithButton } from "../../components/slider/sliderWithButton";
import { Weaver } from '../../components/weaver/index';
import ApiRequest from "../../services/api-services";


const Index = () => {
    const {data, isLoading} = useQuery(['gallery-item'],()=> ApiRequest.get('gallery/all'))
  return(
      <>
          <Slider />
          <SliderWithButton />
          <LatestNotice />
          {/*<Messages />*/}
          <WhyUs />



            <Weaver/>     
          <Bulletine />
          {/*<Events/>*/}

          <Container>
                <h1 className={'sectionHeading'}>Gallery</h1>
              <p className='sectionSubtitle'>Dive into our gallery,  where photos tell <br />stories of our campus life, preserving cherished memories.</p>
              <Row style={{marginTop: '30px'}}>
                  <Col xs='12' md='6' lg="6">
                      <div className="gallery_big_img">
                          <img src={data?.data?.body[0].image} alt='main' width={'100%'} height={'450px'} />
                      </div>
                  </Col>
                  <Col xs='12' md='6' lg="6">
                      <Row style={{marginBottom: '20px'}}>
                          <Col md='6'>
                              <div className="gallery_small_img">
                                    <img src={data?.data?.body[1].image} alt='main' width={'100%'} height={'100%'}/>
                              </div>
                          </Col>
                          <Col md='6'>
                                <div className="gallery_small_img">
                                    <img src={data?.data?.body[1].image} alt='main' width={'100%'} height={'100%'}/>
                              </div>                          </Col>
                      </Row>
                      <Row>
                          <Col md='6'>
                                <div className="gallery_small_img">
                                    <img src={data?.data?.body[1].image} alt='main' width={'100%'} height={'100%'}/>
                              </div>
                          </Col>
                          <Col md='6'>
                                <div className="gallery_small_img">
                                    <img src={data?.data?.body[1].image} alt='main' width={'100%'} height={'100%'}/>
                              </div>
                          </Col>
                      </Row>
                  </Col>
                    <Button className="galleryButton" variant="danger">View All</Button>

              </Row>

          </Container>

          <Addmission />
      </>
  )
}
export default Index;