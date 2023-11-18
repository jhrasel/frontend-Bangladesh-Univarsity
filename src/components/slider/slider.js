import Image from 'next/image';
import { useRouter } from "next/router";
import React, { useMemo, useState } from 'react';
import { Spinner } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { useQuery } from "react-query";
import slider from '../../assets/image/slider.jpg';
import ApiRequest from "../../services/api-services";
import { Buttons } from '../buttons/button';
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
       
                    <div className={styles.mt}>
            {
                isLoading && <div className={styles.preloader}><Spinner animation="grow" /></div>
            }
            <Carousel activeIndex={index} onSelect={handleSelect} >
                {
                    gallery.map((item, index) => {
                        return(
                            <Carousel.Item key={index}>
                                <div className='slider_overylay'>
                                    <Image
                                        loading="lazy"
                                        unoptimized
                                        className={styles.Image_Slider}
                                        src={item?.image?.path ?? slider.src}
                                        alt="slider"
                                        width={0}
                                        height={0}
                                        style={{ width: '100%', height: '750px' }}
                                    />
                                    <div className='slider_lay'></div>
                                </div>
                                <Carousel.Caption>
                                    <p className={'sliderTag'}>{item?.title}t</p>
                                    <h1 className={'headingTitle'}>{item?.description} </h1>
                                    <Buttons
                                        text={'Apply Now'}
                                        bgColor={'#EB2A2E'}
                                        color={'#fff'}
                                        click={gotoContact}
                                    />
                                        
                                </Carousel.Caption>
                                {/* <Carousel.Caption>
                                    <div className={styles.sliderHeading}>
                                        <h1 className={'headingTitle'}>{item?.title}</h1>
                                        <p className={styles.mobiles}>{item?.description.length > 90 ? item?.description.substring(0, 90) + '...' : item?.description}</p>
                                        <Button
                                            text={'Contact Us'}
                                            bgColor={'#AD1F1F'}
                                            color={'#fff'}
                                            click={gotoContact}
                                        />{' '}
                                        <Button click={gotoNotice} text={'View Notice'} bgColor={'#F7D4D4'}/>{' '}
                                    </div>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

