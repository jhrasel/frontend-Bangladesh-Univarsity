import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { Loader } from "../../components/loader";
import styles from "./styles.module.css";

export const LatestSingleNotice = ({latestNotice, style, singleRoute}) => {
    const Router = useRouter();
    const singleNoticeHandler = (_id) => {
        Router.push({
            pathname: `${singleRoute ? _id: `notice/${_id}`}`
        })
    }

    return (
        <div className={style ? styles.fromSingleNotice: styles.mainNoticeBody}>
            <h1 className={[styles.heading, styles.mblHeading].join(' ')}>
                Recent Notice
            </h1>
            {
                latestNotice?.data?.data.length > 0 ? latestNotice?.data?.data.map((notice, index)=> {
                    return <div key={index} className={styles.noticeItem}>
                        <div className={styles.noticeDate}>
                            <p>{moment(notice?.date).format("MMM Do YY")}</p>
                        </div>
                        <div className={styles.noticeDetails}>
                            <h4>{notice?.title}</h4>
                            <p>
                                {notice?.shortDesc}
                            </p>
                            <a href={`/notice/${notice?._id}`} className={'readMore'} style={{ paddingBottom: '0px', marginTop:'0', justifyContent: 'flex-start', cursor: 'pointer'}} onClick={()=> singleNoticeHandler(notice?._id)}>
                                Read More <span className={'arrow'}>&#8250;</span>
                            </a>
                        </div>
                    </div>
                }): <Loader />
            }
        </div>
    )
}