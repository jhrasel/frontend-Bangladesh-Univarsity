import { useRouter } from 'next/router';
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
    const router = useRouter();
    const routerHandler = () => {
        router.push('/gallery')
    }
    const {data, isLoading} = useQuery(['gallery-item'],()=> ApiRequest.get('gallery/all'))
  return(
      <>
          <Slider />
          <SliderWithButton />
          <LatestNotice />
          {/*<Messages />*/}
          <WhyUs />



            <Weaver/>     
          <Bulletine title={'Our top story'}/>
          {/*<Events/>*/}

          <Container className=' mbl_10'>
                <h1 className={'sectionHeading'}>Gallery</h1>
                <p className='sectionSubtitle'>Dive into our gallery,  where photos tell <br />stories of our campus life, preserving cherished memories.</p>
              <Row className='inner_gallery'>
                  <Col xs='12' md='6' lg="6">
                      <div className="gallery_big_img">
                          <img src={data?.data?.body[0].image} alt='main' width={'100%'} height={'100%'} />
                      </div>
                  </Col>
                  <Col xs='12' md='6' lg="6" >
                      <Row className='sm_pic'>
                          <Col md='6' xs='6' className='mr-6'>
                              <div className="gallery_small_img">
                                    <img src={data?.data?.body[1].image} alt='main' width={'100%'} height={'100%'}/>
                              </div>
                          </Col>
                          <Col md='6' xs='6' className='ml-6'>
                                <div className="gallery_small_img">
                                    <img src={data?.data?.body[1].image} alt='main' width={'100%'} height={'100%'}/>
                              </div>
                          </Col>
                      </Row>
                      <Row>
                          <Col md='6' xs='6' className='mr-6'>
                                <div className="gallery_small_img">
                                    <img src={data?.data?.body[1].image} alt='main' width={'100%'} height={'100%'}/>
                              </div>
                          </Col>
                          <Col md='6' xs='6' className='ml-6'>
                                <div className="gallery_small_img">
                                    <img src={data?.data?.body[1].image} alt='main' width={'100%'} height={'100%'}/>
                              </div>
                          </Col>
                      </Row>
                  </Col>
                    <Button className="galleryButton" variant="danger" onClick={routerHandler}>View All</Button>

              </Row>

          </Container>

          <Addmission />
      </>
  )
}
export default Index;