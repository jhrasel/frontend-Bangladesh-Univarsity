import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import ApiRequest from "../../services/api-services";
import ReactSlider from "react-slick";
import styles from "../../components/cards/card.module.css";
import image from "../../assets/image/small_card/events.png";
import bannerImg from "../../assets/image/news/2.png";
import moment from "moment";


const singleItem = () => {
    const router = useRouter()
    const {news} = router.query;
    const {isloading, data:singleData} = useQuery([singleItem, news], () => ApiRequest.get(`news/find/${news}`));
    // const {data: noticeList, isLoading: noticeListisloading} = useQuery(['singleNotice'],()=> ApiRequest.get('news/all?page=1&perPage=10'))
    const {data: newsList, isLoading: newsListisloading} = useQuery(['newsAllList'],()=> ApiRequest.get('news/all?page=1&perPage=10'))
    const {data: eventList, isLoading: eventListisloading} = useQuery(['latestEventList'],()=> ApiRequest.get('event/all?page=1&perPage=10'))

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };


    return(
        <div style={{marginTop: '110px'}}>
            <div className={'container'}>
                <h1>{singleData?.data?.data?.title}</h1>
                <p>{moment(singleData?.data?.data?.updatedAt).format("MMM Do YY")} / {singleData?.data?.data?.newsCreator?.name} / news</p>
            </div>
            <img width={'100%'} src={bannerImg?.src} alt={'image'}/>

            <div className={'container'}>
                <h1 style={{textAlign: 'justify'}}>{singleData?.data?.data?.description}</h1>
            </div>

            <div className={'mt_30'} style={{marginTop: '80px', marginBottom: '80px', textAlign: 'center'}}>
                <h1 className={'headingTitle'} style={{marginBottom: '50px', marginLeft: '25px'}}>
                    Recent News
                </h1>
                <ReactSlider {...settings}>
                    {
                        newsList?.data?.data.length && newsList?.data?.data.map((value, index) => {
                            return (
                                <div key={index}>
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
            <div className={'mt_30'} style={{marginTop: '80px', marginBottom: '80px', textAlign: 'center'}}>
                <h1 className={'headingTitle'} style={{marginBottom: '50px', marginLeft: '25px'}}>
                    Latest Event
                </h1>
                <ReactSlider {...settings}>
                    {
                        eventList?.data?.data.length && eventList?.data?.data.map((value, index) => {
                            return (
                                <div key={index}>
                                    <div className={styles.mainSmallCard}>
                                        <img
                                            src={image.src}
                                            alt="Picture of the date"
                                            width='100%'
                                        />

                                        <div className={styles.cardDetials}>
                                            <p>{moment(value?.updatedAt).format("MMM Do YY")} / {value?.eventCreator?.name}</p>

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
    )
}
singleItem.getInitialProps = ({query}) => {
    return {query}
}
export default singleItem;