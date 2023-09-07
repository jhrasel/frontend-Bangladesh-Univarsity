import React from "react";
import { CardWithImage } from "../../components/cards/CardWithImage";
import { description, title } from '../../components/constant';
import { Bulletine } from "../../components/homePage/bulletine/bulletine";
import { LatestNotice } from "../../components/homePage/latestNotice/latestNotice";
import { WhyUs } from "../../components/homePage/whyUs/whyUs";
import { Slider } from "../../components/slider/slider";
import { SliderWithButton } from "../../components/slider/sliderWithButton";

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