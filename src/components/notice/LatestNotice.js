import styles from "./styles.module.css";
import moment from "moment";
import {Loader} from "../../components/loader";
import React from "react";
import {useRouter} from "next/router";

export const LatestSingleNotice = ({latestNotice, style, singleRoute}) => {
    const Router = useRouter();
    const singleNoticeHandler = (_id) => {
        Router.push({
            pathname: `${singleRoute ? _id: `notice/${_id}`}`
        })
    }

    return (
        <div className={style ? styles.fromSingleNotice: styles.mainNoticeBody}>
            <h1 className={'headingTitle'} style={{margin: '40px 0px'}}>
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
                            <a  className={'readMore'} style={{ paddingBottom: '10px', justifyContent: 'flex-start', cursor: 'pointer'}} onClick={()=> singleNoticeHandler(notice?._id)}>
                                Read More <span className={'arrow'}>&#8250;</span>
                            </a>
                        </div>
                    </div>
                }): <Loader />
            }
        </div>
    )
}