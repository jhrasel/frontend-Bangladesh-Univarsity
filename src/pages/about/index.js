import {SliderWithButton} from "../../components/slider/sliderWithButton";
import React, {useEffect, useMemo, useState} from "react";
import {CardWithImage} from "../../components/cards/CardWithImage";
import {Slider} from "../../components/slider/slider";
import {AboutBanner, AboutSliderWithButton} from "../../components/aboutPage/aboutbanner";
import styled from './about.module.css'
import ApiRequest from "../../services/api-services";
import {useQuery} from "react-query";
import slider from '../../assets/image/slider.png'
import {Placeholder} from "react-bootstrap";
import {WhyPreloader} from "../../components/homePage/whyUs/whyPreloader";


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
          {
              isLoading && (<>

                  <Placeholder as="p" animation="glow">
                      <Placeholder xs={12} />
                      <Placeholder xs={12} />
                  </Placeholder>
              </>)
          }
          {
               hero?.map((section, index) => {
                  return(
                      <div key={index}>

                          <h1 className={'headingTitle'} style={{marginBottom: '20px', marginLeft: '25px', textAlign: 'center'}}>
                              {
                                  section?.title
                              }
                          </h1>
                          <span className={styled.subTitle}>
                              {
                                  section?.description
                              }
                          </span>
                      </div>
                  )
              })
          }

         <div style={{marginTop: '30px'}}>
            <img src={slider.src} alt={'img'} style={{width: '100%'}} />
             <SliderWithButton />

         </div>
          <AboutBanner history={history[0]} />
          <AboutSliderWithButton />

          {
              isLoading && <>
                  <WhyPreloader />
                  <WhyPreloader />
                  <WhyPreloader />
              </>
          }

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
                      <>
                          <br />
                          <CardWithImage
                              isVisiableRightImg={RightVisibility}
                              isVisiableLftImg={LeftVisibility}
                              button={false}
                              title={section?.title}
                              description={section?.description}
                          />
                      </>
                  )
              })
          }
      </div>
  )
}

export default Index;