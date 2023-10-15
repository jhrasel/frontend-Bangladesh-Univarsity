import { useRouter } from "next/router";
import React, { useMemo, useState } from 'react';
import { Spinner } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { useQuery } from "react-query";
import slider from '../../assets/image/slider.jpg';
import { Buttons } from "../../components/buttons/button";
import ApiRequest from "../../services/api-services";
import styles from './slider.module.css';

export const Slider = () => {
    const router = useRouter()
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const gotoContact = () => {
        router.push('/contact-us')
    }

    const gotoNotice = () => {
        router.push('/notice')
    }

        const { isLoading, data:galleryItem } = useQuery('gallery_item', () => ApiRequest.get('banner/all'))
    console.log('galleryItem', galleryItem)

    const gallery = useMemo(() => { 
        const arr = [];
        galleryItem?.data?.data?.map((singleItem) => { 
            singleItem?.images?.map((image) => { 
                const obj = {
                    ...singleItem,
                    image
                }
                arr.push(obj)
            })
        })
        return arr;
    }, [galleryItem])

    return (
        <div style={{marginTop: '88px'}}>
            {
                isLoading && <div className={styles.preloader}><Spinner animation="grow" /></div>
            }
            <Carousel activeIndex={index} onSelect={handleSelect} >
                {
                    gallery.length && gallery.map((item, index) => {
                       console.log(item)
                        return(
                            <Carousel.Item key={index}>
                                <img className={styles.Image_Slider} src={item?.image?.path ?? slider.src} alt="slider" />
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

