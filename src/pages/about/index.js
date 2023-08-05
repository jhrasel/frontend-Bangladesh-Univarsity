import {SliderWithButton} from "../../components/slider/sliderWithButton";
import React, {useEffect, useMemo, useState} from "react";
import {CardWithImage} from "../../components/cards/CardWithImage";
import {Slider} from "../../components/slider/slider";
import {AboutBanner, AboutSliderWithButton} from "../../components/aboutPage/aboutbanner";
import styled from './about.module.css'
import ApiRequest from "../../services/api-services";
const Index = () => {
    const [section, setSection] = useState([]);
    const [hero, setHero] = useState([]);
    const [history, setHistory] = useState([]);


    const getAboutData = () => {
        ApiRequest.get('page/about/full-page').then((data) => {
            console.log('ser', data?.data)
            setHero(data?.data?.body?.hero_data)
            setHistory(data?.data?.body?.history_data)
            setSection(data?.data?.body?.section_data)
        }).catch(e => console.log(e))
    }


    useEffect(() => {
        getAboutData();
    }, []);

  return(
      <div className={styled.main_about}>
          {
              hero?.length && hero?.map((section, index) => {
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

          <Slider />
          <SliderWithButton />
          <AboutBanner history={history[0]} />
          <AboutSliderWithButton />

          {
              section?.length && section?.map((section, index) => {
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