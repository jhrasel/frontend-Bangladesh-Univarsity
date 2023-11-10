import moment from "moment";
import { useRouter as UseRouter } from 'next/router';
import React from "react";
import { Card, Container } from "react-bootstrap";
import { useQuery as UseQuery } from "react-query";
import slider from '../../assets/image/news-banner.png';
import { Addmission } from '../../components/admission/index';
import { Bulletine } from '../../components/homePage/bulletine/bulletine';
import ApiRequest from "../../services/api-services";
import styled from './styled.module.css';

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
        <div>
            <Container fluid style={{padding: 0}} className="mt_60">
                <div className={styled.mainPageBanner}>
                    <div className={styled.banner}>
                        <div className={styled.heading}>
                            <img src={slider.src} alt='banner' />
                        </div>
                        <div className={styled.overlay}>
                            <div className={styled.navigation}>
                                <h4>{singleData?.data?.data?.title}</h4>

                                <div className={styled.inner_navigation}>
                                    <svg onClick={() => {router.push('/')}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M2 5.99998L8 1.33331L14 5.99998V13.3333C14 13.6869 13.8595 14.0261 13.6095 14.2761C13.3594 14.5262 13.0203 14.6666 12.6667 14.6666H3.33333C2.97971 14.6666 2.64057 14.5262 2.39052 14.2761C2.14048 14.0261 2 13.6869 2 13.3333V5.99998Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6 14.6667V8H10V14.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> &nbsp;
                                    <p>
                                        <span onClick={() => { router.push('/') }}>Home</span>
                                        &nbsp; / <span onClick={() => { router.push('/news') }}>News</span>
                                        {
                                            singleData?.data?.data?.title && ` / ${singleData?.data?.data?.title.length > 20 ? singleData?.data?.data?.title.slice(0, 20) + '...' : '' }`
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </Container>


            {/* {
                isloading ? (
                    <div className={styles.preloader}><Spinner animation="grow" /></div>
                ) :(
                    <div className={styles.banner}>
                        <img width={'100%'} src={singleData?.data?.data?.photo} alt={'image'} style={{width: '100%', height: '100%', borderRadius: '10px'}}/>
                    </div>
                )
            } */}


            {/* <div className={'container'}>
                <h1 style={{textAlign: 'justify'}}>{singleData?.data?.data?.description}</h1>
            </div> */}

            <Container>
                <div className={styled.topCard}>
                    <Card style={{padding: '20px'}}>
                        <p className={styled.title}>{moment(singleData?.data?.data?.updatedAt).format("MMM Do YY")} / {singleData?.data?.data?.newsCreator?.name} / news</p>
                        <h4 className={styled.subtitle}>{singleData?.data?.data?.description}</h4>
                    </Card>
                </div>
                 <div className={'mt_30'} style={{marginTop: '80px', marginBottom: '80px', textAlign: 'center'}}>
                    {/* <h1 className={styled.heading}>
                        Most Viewed News
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
                    <Row> */}
                        {/* <div className={styles.slider}> */}
                            {/* <ReactSlider {...settings}>
                                {
                                    newsList?.data?.data.length && newsList?.data?.data.map((value, index) => {
                                        return (
                                            <Col key={index} md={6} xs={6} lg={12}>
                                                 <div onClick={()=> routerHandler(value?._id)}>
                                                    <div className={styles.mainSmallCard}>
                                                        <img
                                                            src={value?.photo}
                                                            alt="Picture of the date"
                                                            width='100%'
                                                            style={{height: '230px'}}
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
                            </ReactSlider> */}
                        {/* </div> */}
                    {/* </Row> */}
                    <Bulletine title={'Most Viewed News'} />
                </div>
            </Container>
            <Addmission />
        </div>
    )
}
singleItem.getInitialProps = ({query}) => {
    return {query}
}
export default singleItem;