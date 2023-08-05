import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../slider/sliderWithButton.module.css'
import adjust from '../../../assets/image/adjust.png'
import assistantNav from '../../../assets/image/assistant_navigation.png'
import touch from '../../../assets/image/touch_app.png'
import slider from "../../../assets/image/slider.png";
export const AboutBanner = ({history}) =>{

    return (
        <>
            {

            }
            <div className={styles.mainAboutBanner}>
                <h1 style={{textAlign: 'center'}}  className={'headingTitle'}>{history?.title}</h1>
                <img
                    className="d-block w-100"
                    src={slider.src}
                    alt="First slide"
                />
            </div>
            <div className={styles.mainAboutBannerText}>
                <p>
                    {history?.description}
                </p>
            </div>
        </>
    );
}


export const AboutSliderWithButton = () => {
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