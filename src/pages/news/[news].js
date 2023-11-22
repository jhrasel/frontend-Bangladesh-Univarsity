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
                                    <p className="hide">
                                        <span onClick={() => { router.push('/') }}>Home</span>
                                        &nbsp; / <span onClick={() => { router.push('/news') }}>News</span>
                                        {
                                            singleData?.data?.data?.title && ` / ${singleData?.data?.data?.title.length > 20 ? singleData?.data?.data?.title.slice(0, 20) + '...' : '' }`
                                        }
                                    </p>
                                     <p className="mbl_hide">
                                        <span onClick={() => { router.push('/') }}>Home</span>
                                        &nbsp; / <span onClick={() => { router.push('/news') }}>News</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </Container>

            <Container>
                <div className={styled.topCard}>
                    <Card style={{padding: '20px', border: 'none'}} className="newsCard">
                        <p className={styled.title}>{moment(singleData?.data?.data?.updatedAt).format("MMM Do YY")} / {singleData?.data?.data?.newsCreator?.name} / news</p>
                        <h4 className={styled.subtitle}>{singleData?.data?.data?.description}</h4>
                    </Card>
                </div>
                 <div className={'mt_30'} style={{marginTop: '80px', marginBottom: '80px', textAlign: 'center'}}>
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