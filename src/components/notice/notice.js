import moment from "moment";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { Container } from 'react-bootstrap';
import { useQuery } from "react-query";
import slider from '../../assets/image/notice.png';
import { Addmission } from '../../components/admission/index';
import { WhyPreloader } from "../../components/homePage/whyUs/whyPreloader";
import { PageBanner } from '../../components/pagebanner/index';
import ApiRequest from "../../services/api-services";
import { LatestSingleNotice } from "./LatestNotice";
import styles from './styles.module.css';


export const Notice = () => {
    const Router = useRouter();
    const [id, setId] = useState(2);

    const { isLoading: allNoticeLoading, data:allNotice } = useQuery(['allNotice',], () => ApiRequest.get(`notice/all?page=0&perPage=10`))

    const { isLoading: allPaginationNoticeLoading, data:allPaginationNotice } = useQuery(['all_Notice', id], () => ApiRequest.get(`notice/all?page=${id}&perPage=5`))

    const { isLoading: latestNoticeLoading, data:latestNotice } = useQuery('latestNotice', () => ApiRequest.get('notice/all?page=1&perPage=5'))


    const loadHandler = () => {
        setId(id + 1)
    }

    const allNoticeData = useMemo(() => {
        return allNotice?.data?.data.concat(allPaginationNotice?.data?.data || [])
    }, [allPaginationNotice, allNotice])

    const singleNoticeHandler = (_id) => {
        Router.push({
            pathname: `notice/${_id}`
        })
    }

    return (
        <>
            <Container fluid style={{padding: 0}} className="mt_60">
                <PageBanner title={'Notice'} photo={slider.src} position={'top'}/>
            </Container>

            <Container>
                <div className={styles.mainNotice}>
                <LatestSingleNotice latestNotice={latestNotice} style={false} singleRoute={false}/>
                <div className={styles.mainNoticeBody}>
                    <h1 className={[styles.heading, styles.mblHeading].join(' ')}>
                        ALL Notice
                    </h1>
                    {
                        allNoticeLoading && <WhyPreloader />
                    }
                    {
                        allNoticeData?.map((notice, index)=> {
                            return <div key={index} className={styles.noticeItem} >
                                <div className={styles.noticeDate}>
                                    <p>{moment(notice?.date).format("MMM Do YY")}</p>
                                </div>
                                <div className={styles.noticeDetails}>
                                    <h4>{notice?.title}</h4>
                                    <p>
                                        {notice?.shortDesc}
                                    </p>
                                    <a href={`/notice/${notice?._id}`} onClick={()=> singleNoticeHandler(notice?._id)} className={'readMore'} style={{ paddingBottom: '10px', justifyContent: 'flex-start'}}>
                                        Read More <span className={'arrow'}>&#8250;</span>
                                    </a>
                                </div>
                            </div>
                        })
                    }


                    {
                        (allNotice?.data?.totalItems >= id) && (
                            <a className={'readMore'} style={{ paddingBottom: '10px'}} onClick={loadHandler}>
                                Load More
                            </a>
                        )
                    }

                </div>
            </div>
            </Container>

            <Addmission />
        </>
  );
}