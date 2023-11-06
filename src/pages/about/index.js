import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import slider from "../../assets/image/slider.jpg";
import { AboutBanner } from "../../components/aboutPage/aboutbanner";
import { Addmission } from '../../components/admission/index';
import { WhyPreloader } from "../../components/homePage/whyUs/whyPreloader";
import { PageBanner } from '../../components/pagebanner/index';
import { Weaver } from '../../components/weaver/index';
import ApiRequest from "../../services/api-services";
import styled from './about.module.css';

const Index = () => {
    const [section, setSection] = useState([]);
    const [hero, setHero] = useState([]);
    const [history, setHistory] = useState([]);

    const{isLoading} = useQuery(['about'], () => ApiRequest.get('page/about/full-page'),{
        onSuccess:(data)=> {
            setHero(data?.data?.body?.hero_data)
            setHistory(data?.data?.body?.history_data)
            setSection(data?.data?.body?.section_data)
        }
    })

  return(
      <div className={styled.main_about}>
          <PageBanner title={'About Us'} photo={slider.src}/>

          <Container>
              <AboutBanner history={history[0]} />
          </Container>
  
          <div className={styled.warverMargin}>
              <Weaver />  
          </div>
          
          {
              isLoading && <>
                  <WhyPreloader />
                  <WhyPreloader />
                  <WhyPreloader />
              </>
          }
        
          <div className={styled.aboutDetails}>
                       {
              section?.map((section, index) => {
                  let RightVisibility;
                  let LeftVisibility;
                  if (index === 0){
                      RightVisibility = true
                  }else if (index === 1){
                      LeftVisibility = true
                  }else if (index === 2){
                      RightVisibility = true
                  }
                  return (
                      <div key={index}>
                          <AboutDetails
                              isVisiableRightImg={RightVisibility}
                              isVisiableLftImg={LeftVisibility}
                              button={false}
                              title={section?.title}
                              description={section?.description}
                              photo={section?.image}
                          />
                      </div>
                  )
              })
          }
          </div>

          <Addmission />
      </div>
  )
}

export default Index;

import { useRouter } from "next/router";
export const AboutDetails = (props) => {
    const { isVisiableLftImg, isVisiableRightImg, button, title, description, photo } = props;

    const router = useRouter();
    const routerHandler = () => {
        router.push('/contact-us')
    }
    return (
         <Container >
            <div>
                <Row>
                    {
                        isVisiableLftImg && (
                            <Col md={6} style={{padding: 0}}>
                                <div className={styled.about_img}>
                                    <img src={photo} alt='cardImg' width={'100%'} height={'100%'}/>
                                </div>
                            </Col>
                        )
                    }

                        <Col md={6} style={{padding: 0}}>
                            <div className={styled.item_center}>
                                <div className={ styled.about_details}>
                                    <h4>{title}</h4>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </Col>
                
                    {
                        isVisiableRightImg && (
                            <Col md={6} style={{padding: 0}}>
                                <div className={styled.about_img}>
                                    <img src={photo} alt='cardImg' width={'100%'} height={'100%'}/>
                                </div>
                            </Col>
                        )
                    }
                </Row>
           
            </div>
        </Container>
    )
}