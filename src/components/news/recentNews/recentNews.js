import image from '../../../assets/image/small_card/events.png'
import React from "react";
import ReactSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../components/cards/card.module.css";

import imgOne from '../../../assets/image/news/1.png'
import imgTwo from '../../../assets/image/news/2.png'
import imgThree from '../../../assets/image/news/3.png'
import imgFour from '../../../assets/image/news/4.png'
import imgFive from '../../../assets/image/news/5.png'
import imgSix from '../../../assets/image/news/6.png'

import style from './style.module.css'
import {Breadcrumb} from "react-bootstrap";
export const RecentNews = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    return(
        <>
            <div className={style.newImg}>
                <ul>
                    <li>
                        <img src={imgOne.src} alt='img' />
                    </li>
                    <li>
                        <img src={imgTwo.src} alt='img' />
                    </li>
                    <li>
                        <img src={imgThree.src} alt='img' />
                    </li>
                    <li>
                        <img src={imgFour.src} alt='img' />
                    </li>
                    <li>
                        <img src={imgFive.src} alt='img' />
                    </li>
                    <li>
                        <img src={imgSix.src} alt='img' />
                    </li>
                </ul>
            </div>
            <div className={'mt_30'} style={{marginTop: '80px', marginBottom: '80px', textAlign: 'center'}}>
                <h1 className={'headingTitle'} style={{marginBottom: '50px', marginLeft: '25px'}}>
                    For getting the right support, <br />here’s a genius idea
                </h1>
                <ReactSlider {...settings}>
                    <div>
                        <div className={styles.mainSmallCard}>
                            <img
                                src={image.src}
                                alt="Picture of the date"
                                width='100%'
                            />

                            <div className={styles.cardDetials}>
                                <h4 className={styles.title}>For getting the right support, here’s a genius idea</h4>
                                <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                                    A literary event titled “Rabindra, Nazrul and Shakespeare Carnival 2022” was held in the Bangladesh University auditorium on Saturday,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.mainSmallCard}>
                            <img
                                src={image.src}
                                alt="Picture of the date"
                                width='100%'
                            />

                            <div className={styles.cardDetials}>
                                <h4 className={styles.title}>For getting the right support, here’s a genius idea</h4>
                                <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                                    A literary event titled “Rabindra, Nazrul and Shakespeare Carnival 2022” was held in the Bangladesh University auditorium on Saturday,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.mainSmallCard}>
                            <img
                                src={image.src}
                                alt="Picture of the date"
                                width='100%'
                            />

                            <div className={styles.cardDetials}>
                                <h4 className={styles.title}>For getting the right support, here’s a genius idea</h4>
                                <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                                    A literary event titled “Rabindra, Nazrul and Shakespeare Carnival 2022” was held in the Bangladesh University auditorium on Saturday,
                                </p>
                            </div>
                        </div>
                    </div>
                </ReactSlider>
            </div>
            <div className={'mt_30'} style={{marginTop: '80px', marginBottom: '80px', textAlign: 'center'}}>
                <h1 className={'headingTitle'} style={{marginBottom: '50px', marginLeft: '25px'}}>
                    Recent News
                </h1>
                <ReactSlider {...settings}>
                    <div>
                        <div className={styles.mainSmallCard}>
                            <img
                                src={image.src}
                                alt="Picture of the date"
                                width='100%'
                            />

                            <div className={styles.cardDetials}>
                                <h4 className={styles.title}>For getting the right support, here’s a genius idea</h4>
                                <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                                    A literary event titled “Rabindra, Nazrul and Shakespeare Carnival 2022” was held in the Bangladesh University auditorium on Saturday,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.mainSmallCard}>
                            <img
                                src={image.src}
                                alt="Picture of the date"
                                width='100%'
                            />

                            <div className={styles.cardDetials}>
                                <h4 className={styles.title}>For getting the right support, here’s a genius idea</h4>
                                <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                                    A literary event titled “Rabindra, Nazrul and Shakespeare Carnival 2022” was held in the Bangladesh University auditorium on Saturday,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.mainSmallCard}>
                            <img
                                src={image.src}
                                alt="Picture of the date"
                                width='100%'
                            />

                            <div className={styles.cardDetials}>
                                <h4 className={styles.title}>For getting the right support, here’s a genius idea</h4>
                                <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                                    A literary event titled “Rabindra, Nazrul and Shakespeare Carnival 2022” was held in the Bangladesh University auditorium on Saturday,
                                </p>
                            </div>
                        </div>
                    </div>
                </ReactSlider>
            </div>
            <div className={'mt_30'} style={{marginTop: '80px', marginBottom: '80px', textAlign: 'center'}}>
                <h1 className={'headingTitle'} style={{marginBottom: '50px', marginLeft: '25px'}}>
                    Latest Event
                </h1>
                <ReactSlider {...settings}>
                    <div>
                        <div className={styles.mainSmallCard}>
                            <img
                                src={image.src}
                                alt="Picture of the date"
                                width='100%'
                            />

                            <div className={styles.cardDetials}>
                                <h4 className={styles.title}>For getting the right support, here’s a genius idea</h4>
                                <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                                    A literary event titled “Rabindra, Nazrul and Shakespeare Carnival 2022” was held in the Bangladesh University auditorium on Saturday,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.mainSmallCard}>
                            <img
                                src={image.src}
                                alt="Picture of the date"
                                width='100%'
                            />

                            <div className={styles.cardDetials}>
                                <h4 className={styles.title}>For getting the right support, here’s a genius idea</h4>
                                <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                                    A literary event titled “Rabindra, Nazrul and Shakespeare Carnival 2022” was held in the Bangladesh University auditorium on Saturday,
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.mainSmallCard}>
                            <img
                                src={image.src}
                                alt="Picture of the date"
                                width='100%'
                            />

                            <div className={styles.cardDetials}>

                                <h4 className={styles.title}>For getting the right support, here’s a genius idea</h4>
                                <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                                    A literary event titled “Rabindra, Nazrul and Shakespeare Carnival 2022” was held in the Bangladesh University auditorium on Saturday,
                                </p>
                            </div>
                        </div>
                    </div>
                </ReactSlider>
            </div>
        </>
    )
}