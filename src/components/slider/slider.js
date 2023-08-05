import React, {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider from '../../assets/image/slider.png'
import styles from './slider.module.css'
import {Buttons} from "../../components/buttons/button";
import ApiRequest from "../../services/api-services";

export const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const [galleryItem, setGalleryItem] = useState([]);

    const routerHandler = () => {
        router.push('/news')
    }

    const getGalleryData = () => {
        ApiRequest.get('gallery/all').then((data) => {
            setGalleryItem(data?.data?.body)
        }).catch(e => console.log(e))
    }

    useEffect(() => {
        getGalleryData();
    }, [])

    return (
        <div style={{marginTop: '88px'}}>
            <Carousel activeIndex={index} onSelect={handleSelect} >
                {
                    galleryItem.length && galleryItem.map((item, index) => {
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
                                        <p>{item?.description.length > 220 ? item?.description.substring(0, 220) + '...' : item?.description}</p>
                                        <Buttons
                                            text={'Contact Us'}
                                            bgColor={'#AD1F1F'}
                                            color={'#fff'}
                                        />{' '}
                                        <Buttons text={'View Notice'} bgColor={'#F7D4D4'}/>{' '}
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
