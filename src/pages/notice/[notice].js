import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import bannerImg from "../../assets/image/slider.jpg";
import styles from "../../components/cards/card.module.css";
import ApiRequest from "../../services/api-services";

import moment from "moment";
import { Spinner } from "react-bootstrap";
import { LatestSingleNotice } from "../../components/notice/LatestNotice";


const NoticeItem = () => {
    const router = useRouter()
    const {notice} = router.query;

    const {data: noticeList, isLoading: noticeListLoading} = useQuery(['single_notice', notice],()=> ApiRequest.get(`notice/find/${notice}`))
    const { isLoading: latestNoticeLoading, data:latestNotice } = useQuery('latestNotice_single', () => ApiRequest.get('notice/all?page=1&perPage=5'))



    return(
        <div style={{marginTop: '110px'}}>
            <div className={'container'}>
                <h1>{noticeList?.data?.data?.title}</h1>
                <p>{noticeList?.data?.data?.shortDesc}</p>
                <p>{moment(noticeList?.data?.data?.updatedAt).format("MMM Do YY")} / notice</p>
            </div>
            {
                noticeListLoading ? (
                    <div className={styles.preloader}><Spinner animation="grow" /></div>
                ) :(
                    <div className={styles.banner}>
                            <img width={'100%'} src={bannerImg?.src} alt={'image'} style={{borderRadius: '10px', margin: '10px 0', height: '600px'}} />
                    </div>
                )
            }


            <div className={'container'}>
                <h1 style={{textAlign: 'justify'}}>{noticeList?.data?.data?.description}</h1>
            </div>

            <LatestSingleNotice latestNotice={latestNotice} style={true} singleRoute={true}/>
        </div>
    )
}
NoticeItem.getInitialProps = ({query}) => {
    return {query}
}
export default NoticeItem;