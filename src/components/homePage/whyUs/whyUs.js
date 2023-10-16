import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { CardWithImage } from "../../../components/cards/CardWithImage";
import ApiRequest from "../../../services/api-services";
import { WhyPreloader } from "../whyUs/whyPreloader";

export const WhyUs = () =>{
    const [key, setKey] = useState('Benefits');

    const { isLoading, data:tabData } = useQuery('tab_list', () => ApiRequest.get('need_tab/all'))

    return (
        <div className={styles.whyUs}>
            <h1 className={'headingTitle'}>Here’s what you need</h1>
            {
                isLoading && <WhyPreloader />
            }
            <Tabs
                id="why_us"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className={styles.whyUs_tab}
            >

                {
                    tabData?.data?.body?.length && tabData?.data?.body?.map((item, index) => {
                        console.log('sdf', item)
                        return(
                            <Tab key={index} eventKey={item?.tab} title={item?.tab} className={styles.tabs} tabClassName={styles.tabz}>
                                <CardWithImage
                                    isVisiableRightImg={false}
                                    isVisiableLftImg={true}
                                    button={false}
                                    title={item?.title}
                                    description={item?.description}
                                    photo={item?.photo}
                                />
                            </Tab>
                        )
                    })
                }

            </Tabs>

            <SliderWithButton />
        </div>
    );
}

import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useQuery } from "react-query";
import adjust from '../../../assets/image/adjust.png';
import assistantNav from '../../../assets/image/assistant_navigation.png';
import touch from '../../../assets/image/touch_app.png';
import styles from '../../slider/sliderWithButton.module.css';

export const SliderWithButton = () => {
    return(
        <Container fluid>
            <div className={styles.sliderWithButton} style={{background: 'transparent', marginBottom:'60px'}}>
                <Row>
                    <Col xs='12' md='12' lg="4">
                        <div className={styles.innerSliderWithButton} style={{textAlign: 'left'}}>
                            <img src={adjust.src} alt={'img'} />
                            <p style={{margin: '10px 0px!important'}}>Request for Weaver</p>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </span>
                            <a className={'readMore'} style={{ paddingBottom: '10px', justifyContent: 'flex-start'}}> Read More <span className={'arrow'}>&#8250;</span></a>

                        </div>
                    </Col>
                    <Col xs='12' md='12' lg="4">
                        <div className={styles.innerSliderWithButton} style={{textAlign: 'left'}}>
                            <img src={assistantNav.src} alt={'img'} />
                            <p style={{margin: '10px 0px!important'}}>Apply Online</p>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.</span>
                            <a className={'readMore'} style={{ paddingBottom: '10px', justifyContent: 'flex-start'}}> Read More <span className={'arrow'}>&#8250;</span></a>

                        </div>
                    </Col>
                    <Col xs='12' md='12' lg="4">
                        <div className={styles.innerSliderWithButton} style={{textAlign: 'left'}}>
                            <img src={touch.src} alt={'img'} />

                            <p style={{margin: '10px 0px!important'}}>Get in Touch</p>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,</span>
                            <a className={'readMore'} style={{ paddingBottom: '10px', justifyContent: 'flex-start'}}> Read More <span className={'arrow'}>&#8250;</span></a>

                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}