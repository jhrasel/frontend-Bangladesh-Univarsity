import {Slider} from "../../components/slider/slider";
import {SliderWithButton} from "../../components/slider/sliderWithButton";
import {LatestNotice} from "../../components/homePage/latestNotice/latestNotice";
import {Messages} from "../../components/homePage/messages/messages";
import {Bulletine} from "../../components/homePage/bulletine/bulletine";
import {Events} from "../../components/homePage/events/events";
import React from "react";
import {WhyUs} from "../../components/homePage/whyUs/whyUs";
import {CardWithImage} from "../../components/cards/CardWithImage";
import {title, description} from '../constant'

const Index = () => {

  return(
      <>
          <Slider />
          <SliderWithButton />
          <LatestNotice />
          {/*<Messages />*/}
          <WhyUs />
          <Bulletine />
          {/*<Events/>*/}
          <CardWithImage
              isVisiableRightImg={true}
              isVisiableLftImg={false}
              button={true}
              title={title}
              description={description}
          />
      </>
  )
}
export default Index;