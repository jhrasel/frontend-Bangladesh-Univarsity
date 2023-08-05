import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider from '../../assets/image/slider.png'
import styles from './slider.module.css'
import {Buttons} from "../../components/buttons/button";

export const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div style={{marginTop: '88px'}}>
            <Carousel activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider.src}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className={styles.sliderHeading}>
                            <h1 className={'headingTitle'}>Top Class University</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <Buttons
                                text={'Contact Us'}
                                bgColor={'#AD1F1F'}
                                color={'#fff'}
                            />{' '}
                            <Buttons text={'View Notice'} bgColor={'#F7D4D4'}/>{' '}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider.src}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className={styles.sliderHeading}>
                            <h1 className={'headingTitle'}>Top Class University</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <Buttons
                                text={'Contact Us'}
                                bgColor={'#AD1F1F'}
                                color={'#fff'}
                            />{' '}
                            <Buttons text={'View Notice'} bgColor={'#F7D4D4'}/>{' '}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider.src}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className={styles.sliderHeading}>
                            <h1 className={'headingTitle'}>Top Class University</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <Buttons
                                text={'Contact Us'}
                                bgColor={'#AD1F1F'}
                                color={'#fff'}
                            />{' '}
                            <Buttons text={'View Notice'} bgColor={'#F7D4D4'}/>{' '}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}
