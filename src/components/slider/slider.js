import React, {useEffect, useMemo, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider from '../../assets/image/slider.png'
import styles from './slider.module.css'
import {Buttons} from "../../components/buttons/button";
import ApiRequest from "../../services/api-services";
import {useQuery} from "react-query";
import {useRouter} from "next/router";
import {Preloader} from "../loader";
import {Spinner} from "react-bootstrap";

export const Slider = () => {
    const router = useRouter()
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const gotoContact = () => {
        router.push('/contact')
    }

    const gotoNotice = () => {
        router.push('/notice')
    }
    const { isLoading, data:galleryItem } = useQuery('gallery_item', () => ApiRequest.get('gallery/all'))

    return (
        <div style={{marginTop: '88px'}}>
            {
                isLoading && <div className={styles.preloader}><Spinner animation="grow" /></div>
            }
            <Carousel activeIndex={index} onSelect={handleSelect} >
                {
                    galleryItem?.data?.body?.length && galleryItem?.data?.body?.map((item, index) => {
                        return(
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={slider.src}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className={styles.sliderHeading}>
                                        <h1 className={'headingTitle'}>{item?.title}</h1>
                                        <p className={styles.desktop}>{item?.description.length > 220 ? item?.description.substring(0, 220) + '...' : item?.description}</p>
                                        <p className={styles.mobile}>{item?.description.length > 90 ? item?.description.substring(0, 90) + '...' : item?.description}</p>
                                        <Buttons
                                            text={'Contact Us'}
                                            bgColor={'#AD1F1F'}
                                            color={'#fff'}
                                            click={gotoContact}
                                        />{' '}
                                        <Buttons click={gotoNotice} text={'View Notice'} bgColor={'#F7D4D4'}/>{' '}
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>

    );
}
