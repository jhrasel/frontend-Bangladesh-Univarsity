import styles from './styles.module.css'
import bannerImg from "../../assets/image/slider.png";
import React, {useEffect, useState} from "react";
import ApiRequest from "../../services/api-services";
import moment from "moment";
import {Loader} from "../../components/loader";
export const Notice = () => {
    const [LatestNotice, setLatestNotice] = useState([])
    const [AllNotice, setAllNotice] = useState([])

    const getALLNotice = () => {
        ApiRequest.get('notice/all?page=1&perPage=10').then((data) => setAllNotice(data.data.data)).catch(e => console.log(e))
    }
    const getLatestNotice = () => {
        ApiRequest.get('notice/all?page=1&perPage=5').then((data) => setLatestNotice(data.data.data)).catch(e => console.log(e))
    }


    useEffect(() => {
        getLatestNotice();
        getALLNotice();
    }, [])

  return(
      <div className={styles.mainNotice}>
          <img src={bannerImg.src} alt={'bannerImg'}/>
          <div className={styles.mainNoticeBody}>
              <h1 className={'headingTitle'} style={{margin: '40px 0px'}}>
                  Recent Notice
              </h1>
              {
                  LatestNotice?.length > 0 ? LatestNotice.map((notice, index)=> {
                      return <div key={index} className={styles.noticeItem}>
                          <div className={styles.noticeDate}>
                              <p>{moment(notice?.date).format("MMM Do YY")}</p>
                          </div>
                          <div className={styles.noticeDetails}>
                              <h4>{notice?.title}</h4>
                              <p>
                                  {notice?.shortDesc}
                              </p>
                              <a href='@/pages#' className={'readMore'} style={{ paddingBottom: '10px', justifyContent: 'flex-start'}}>
                                  Read More <span className={'arrow'}>&#8250;</span>
                              </a>
                          </div>
                      </div>
                  }): <Loader />
              }
          </div>
          <div className={styles.mainNoticeBody}>
              <h1 className={'headingTitle'} style={{margin: '40px 0px'}}>
                  ALL Notice
              </h1>
              {
                  AllNotice?.length > 0 ? AllNotice.map((notice, index)=> {
                      return <div key={index} className={styles.noticeItem}>
                          <div className={styles.noticeDate}>
                              <p>{moment(notice?.date).format("MMM Do YY")}</p>
                          </div>
                          <div className={styles.noticeDetails}>
                              <h4>{notice?.title}</h4>
                              <p>
                                  {notice?.shortDesc}
                              </p>
                              <a href='@/pages#' className={'readMore'} style={{ paddingBottom: '10px', justifyContent: 'flex-start'}}>
                                  Read More <span className={'arrow'}>&#8250;</span>
                              </a>
                          </div>
                      </div>
                  }): <Loader />
              }

              <a className={'readMore'} style={{ paddingBottom: '10px'}}>
                  Load More
              </a>
          </div>
      </div>
  );
}