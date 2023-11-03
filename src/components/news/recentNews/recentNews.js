import moment from "moment";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useQuery } from "react-query";
import ReactSlider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import image from '../../../assets/image/small_card/events.png';
import styles from "../../../components/cards/card.module.css";
import { BulletinePreloader } from "../../../components/homePage/bulletine/bulletineLoader";




import ApiRequest from "../../../services/api-services";
export const RecentNews = () => {
    const [page, setPage] = useState(1)
    const Router = useRouter()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const {data: newsList, isLoading: newsListisloading} = useQuery(['newsAllList', page],()=> ApiRequest.get(`news/all?page=${page}&perPage=10`))

    const routerHandler = (_id) => {
        Router.push({
            pathname:`news/${_id}`,
            query: {_id },
        })
    }

    

    const loadHandler = () => {
        const page = newsList?.data?.currentPage;
        setPage(page + 1)
    }

    return(
        <>
            {/*<div className={style.newImg}>*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <img src={imgOne.src} alt='img' />*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <img src={imgTwo.src} alt='img' />*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <img src={imgThree.src} alt='img' />*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <img src={imgFour.src} alt='img' />*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <img src={imgFive.src} alt='img' />*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <img src={imgSix.src} alt='img' />*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <div className={'mt_30'} style={{marginTop: '80px', marginBottom: '80px', textAlign: 'center'}}>
                <h1 className={'headingTitle'} style={{marginBottom: '50px', marginLeft: '25px'}}>
                    For getting the right support, <br />here’s a genius idea
                </h1>

                <>
                    {
                        newsListisloading && (
                            <Row>
                                <Col  xs='12' md='12' lg="6">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='12' lg="6">
                                    <BulletinePreloader />
                                </Col>
                            </Row>
                        )
                    }

                </>
                <div className={'sliderss'}>
                    <Row>
                        
                    
                    {
                            newsList?.data?.data.length && newsList?.data?.data.map((value, index) => {
                                return (
                                    <Col key={index} xs='12' md='12' lg="4" style={{padding: '10px'}}>
                            <div  onClick={()=> routerHandler(value?._id)} style={{cursor: 'pointer'}}>
                                        <div className={styles.mainSmallCard} style={{margin: '0'}}>
                                            <img
                                                src={value.photo ?? image.src}
                                                alt="Picture of the date"
                                                width='100%'
                                                style={{height: '280px'}}
                                            />

                                            <div className={styles.cardDetials}>
                                                <p>{moment(value?.updatedAt).format("MMM Do YY")} / {value?.newsCreator?.name}</p>

                                                <h4 className={styles.title}>{value?.title}</h4>
                                                <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                                                    {
                                                        value.shortDesc.length > 120 ? value.shortDesc.substring(0, 120) + '...' : value.shortDesc
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                        </Col>
                                )
                            })
                        }

                    </Row>
                    <Button variant="danger" onClick={loadHandler}>Load More +</Button>

                </div>
            </div>
            <div className={'mt_30'} style={{marginTop: '80px', marginBottom: '80px', textAlign: 'center'}}>
                <h1 className={'headingTitle'} style={{marginBottom: '50px', marginLeft: '25px'}}>
                    Recent News
                </h1>
                <>
                    {
                        newsListisloading && (
                            <Row>
                                <Col  xs='12' md='12' lg="6">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='12' lg="6">
                                    <BulletinePreloader />
                                </Col>
                            </Row>
                        )
                    }

                </>
                <div className={'slider'}>
                    <ReactSlider {...settings}>
                        {
                            newsList?.data?.data.length && newsList?.data?.data.map((value, index) => {
                                return (
                                    <div key={index} onClick={()=> routerHandler(value?._id)} style={{cursor: 'pointer'}}>
                                        <div className={styles.mainSmallCard}>
                                            <img
                                                src={value?.photo ?? image.src}
                                                alt="Picture of the date"
                                                width='100%'
                                                style={{height: '380px'}}
                                            />

                                            <div className={styles.cardDetials}>
                                                <p>{moment(value?.updatedAt).format("MMM Do YY")} / {value?.newsCreator?.name}</p>

                                                <h4 className={styles.title}>{value?.title}</h4>
                                                <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                                                    {
                                                        value.shortDesc.length > 120 ? value.shortDesc.substring(0, 120) + '...' : value.shortDesc
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </ReactSlider>
                </div>
            </div>
        </>
    )
}