import React, {useEffect, useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {CardWithImage} from "../../../components/cards/CardWithImage";
import ApiRequest from "../../../services/api-services";

export const WhyUs = () =>{
    const [key, setKey] = useState('Benefits');
    const [tabs, setTabs] = useState([]);
    const routerHandler = () => {
        router.push('/news')
    }

    const getLatestNews = () => {
        ApiRequest.get('need_tab/all').then((data) => setTabs(data?.data?.body)).catch(e => console.log(e))
    }


    useEffect(() => {
        getLatestNews();
    }, [])

    return (
        <div style={{margin: '0px 60px'}} className='whyUs'>
            <h1 style={{fontSize: '55px', marginBottom: '20px'}} className={'headingTitle'}>Here’s what you need</h1>
            <Tabs
                id="why_us"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mt-5 mb-5"
            >
                {
                    tabs?.length && tabs?.map((item, index)=> {
                        return(
                            <Tab key={index} eventKey={item?.tab} title={item?.tab} className={styles.tabs}>
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

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../slider/sliderWithButton.module.css'
import adjust from '../../../assets/image/adjust.png'
import assistantNav from '../../../assets/image/assistant_navigation.png'
import touch from '../../../assets/image/touch_app.png'

export const SliderWithButton = () => {
    return(
        <div className={styles.sliderWithButton} style={{background: 'transparent', marginBottom:'60px'}}>
            <Row>
                <Col>
                    <div className={styles.innerSliderWithButton} style={{textAlign: 'left', width: '350px'}}>
                        <img src={adjust.src} alt={'img'} />
                        <p style={{margin: '10px 0px!important'}}>Request for Weaver</p>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </span>
                        <a href='@/pages#' className={'readMore'} style={{ paddingBottom: '10px', justifyContent: 'flex-start'}}> Read More <span className={'arrow'}>&#8250;</span></a>

                    </div>
                </Col>
                <Col>
                    <div className={styles.innerSliderWithButton} style={{textAlign: 'left', width: '350px'}}>
                        <img src={assistantNav.src} alt={'img'} />
                        <p style={{margin: '10px 0px!important'}}>Apply Online</p>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</span>
                        <a href='@/pages#' className={'readMore'} style={{ paddingBottom: '10px', justifyContent: 'flex-start'}}> Read More <span className={'arrow'}>&#8250;</span></a>

                    </div>
                </Col>
                <Col>
                    <div className={styles.innerSliderWithButton} style={{textAlign: 'left', width: '350px'}}>
                        <img src={touch.src} alt={'img'} />

                        <p style={{margin: '10px 0px!important'}}>Get in Touch</p>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                        <a href='@/pages#' className={'readMore'} style={{ paddingBottom: '10px', justifyContent: 'flex-start'}}> Read More <span className={'arrow'}>&#8250;</span></a>

                    </div>
                </Col>
            </Row>
        </div>
    )
}