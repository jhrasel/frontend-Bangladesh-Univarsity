import React, {useEffect} from "react";
import {useQuery as UseQuery} from "react-query";
import ApiRequest from "../../services/api-services";
import ReactSlider from "react-slick";
import styles from "../../components/cards/card.module.css";
import image from "../../assets/image/small_card/events.png";
import bannerImg from "../../assets/image/news/2.png";
import moment from "moment";
import Col from "react-bootstrap/Col";
import {BulletinePreloader} from "../../components/homePage/bulletine/bulletineLoader";
import Row from "react-bootstrap/Row";
import {Spinner} from "react-bootstrap";
import { useRouter as UseRouter} from 'next/router'


const singleItem = () => {
    const router = UseRouter()
    const {news} = router.query;

    const {isloading, data:singleData} = UseQuery([singleItem, news], () => ApiRequest.get(`news/find/${news}`));
    // const {data: noticeList, isLoading: noticeListisloading} = useQuery(['singleNotice'],()=> ApiRequest.get('news/all?page=1&perPage=10'))
    const {data: newsList, isLoading: newsListisloading} = UseQuery(['newsAllList'],()=> ApiRequest.get('news/all?page=1&perPage=10'))

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

    const routerHandler = (_id) => {
        router.push({
            pathname:`${_id}`,
        })
    }


    return(
        <div style={{marginTop: '110px'}}>
            <div className={'container'}>
                <h1>{singleData?.data?.data?.title}</h1>
                <p>{moment(singleData?.data?.data?.updatedAt).format("MMM Do YY")} / {singleData?.data?.data?.newsCreator?.name} / news</p>
            </div>
            {
                isloading ? (
                    <div className={styles.preloader}><Spinner animation="grow" /></div>
                ) :(
                    <div className={styles.banner}>
                        <img width={'100%'} src={bannerImg?.src} alt={'image'}/>
                    </div>
                )
            }


            <div className={'container'}>
                <h1 style={{textAlign: 'justify'}}>{singleData?.data?.data?.description}</h1>
            </div>

            <div className={'mt_30'} style={{marginTop: '80px', marginBottom: '80px', textAlign: 'center'}}>
                <h1 className={'headingTitle'}>
                    Recent News
                </h1>
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
                <div className={styles.slider}>
                    <ReactSlider {...settings}>
                        {
                            newsList?.data?.data.length && newsList?.data?.data.map((value, index) => {
                                return (
                                    <div key={index} onClick={()=> routerHandler(value?._id)}>
                                        <div className={styles.mainSmallCard}>
                                            <img
                                                src={image.src}
                                                alt="Picture of the date"
                                                width='100%'
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
        </div>
    )
}
singleItem.getInitialProps = ({query}) => {
    return {query}
}
export default singleItem;