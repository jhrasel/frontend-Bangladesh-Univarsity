import styles from './styles.module.css'
import bannerImg from "../../assets/image/slider.png";
import React, {useEffect, useMemo, useState} from "react";
import ApiRequest from "../../services/api-services";
import moment from "moment";
import {Loader} from "../../components/loader";
import {useQuery} from "react-query";
import {useRouter} from "next/router";
import {LatestSingleNotice} from "./LatestNotice";
export const Notice = ({singleNotice}) => {
    const Router = useRouter();
    const [id, setId] = useState(2);

    const { isLoading: allNoticeLoading, data:allNotice } = useQuery(['allNotice',], () => ApiRequest.get(`notice/all?page=0&perPage=10`))

    const { isLoading: allPaginationNoticeLoading, data:allPaginationNotice } = useQuery(['allNotice', id], () => ApiRequest.get(`notice/all?page=${id}&perPage=5`))

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

    return(
      <div className={styles.mainNotice}>
          <img src={bannerImg.src} alt={'bannerImg'}/>
          <LatestSingleNotice latestNotice={latestNotice} style={false} singleRoute={false}/>
          <div className={styles.mainNoticeBody}>
              <h1 className={'headingTitle'} style={{margin: '40px 0px'}}>
                  ALL Notice
              </h1>
              {
                  allNoticeLoading && (<Loader />)
              }
              {
                  allNoticeData?.length && allNoticeData?.map((notice, index)=> {
                      return <div key={index} className={styles.noticeItem} >
                          <div className={styles.noticeDate}>
                              <p>{moment(notice?.date).format("MMM Do YY")}</p>
                          </div>
                          <div className={styles.noticeDetails}>
                              <h4>{notice?.title}</h4>
                              <p>
                                  {notice?.shortDesc}
                              </p>
                              <a onClick={()=> singleNoticeHandler(notice?._id)} className={'readMore'} style={{ paddingBottom: '10px', justifyContent: 'flex-start'}}>
                                  Read More <span className={'arrow'}>&#8250;</span>
                              </a>
                          </div>
                      </div>
                  })
              }


              {
                  (allNoticeData?.length < allNotice?.data?.totalItems) && (
                      <a className={'readMore'} style={{ paddingBottom: '10px'}} onClick={loadHandler}>
                          Load More
                      </a>
                  )
              }

          </div>
      </div>
  );
}