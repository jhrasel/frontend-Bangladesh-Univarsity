import { useRouter } from 'next/router';
import React, { useMemo } from "react";
import { Container, Spinner } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useQuery } from "react-query";
import latestImage from '../../../assets/image/latest_notice.png';
import ApiRequest from "../../../services/api-services";
import { Buttons } from "../../buttons/button";
import styles from './styles.module.css';


export const LatestNotice = () => {
    const router = useRouter();
    const routerHandler = () => {
        router.push('/news')
    }
    const singleNotice = (_id) => {
        router.push({
            pathname: `notice/${_id}`
        })
    }

    const { isLoading, data:newsList } = useQuery('news_list', () => ApiRequest.get('news/all?page=1&perPage=3'));
    const { data:noticeList } = useQuery('notice_list_home', () => ApiRequest.get('notice/all?page=1&perPage=3'));

    const shortLit = useMemo(() => {
        const newsItem = [];
        const merge = newsList?.data?.data.concat(noticeList?.data?.data);
   
        merge?.map((news) => {
            if (news) {
                if (newsItem.length >= 5) return
                newsItem.push(news);
            }
        })
        return newsItem || []
    }, [newsList?.data?.data, noticeList?.data?.data]);

    const noticeAndNewsHandler = (data) => { 
        if (data?.newsCreator?.role === 'SUPER-ADMIN') { 
            
        }
    }
  return (
      <Container div className={styles.mainLatestNotice}>
          <Row style={{background: '#fff'}} >
              <Col xl={'6'} md={'12'} xs={'12'}  className='padding_0'>
                  <div className={styles.lftSide}>
                      <div className={styles.lftSideOveryly}>
                            <h1>Latest  Notice And News</h1>
                            <p>
                                Stay connected with our Notice Board, your central hub for important updates, events, and news. Check it regularly for the latest information.
                            </p>
                            <Buttons text={'View All'} bgColor={'#fff'} color={'#323232'} click={routerHandler} />
                      </div>
                      <div className={styles.latest_notice_overylay_img}>
                          <img src={latestImage.src} alt="slider"
                                        width={0}
                                        height={0}
                                        style={{ width: '100%', height: '100%' }} />
                      </div>
                  </div>
              </Col>
              <Col xl={'6'} md={'12'} xs={'12'}>
                    {
                        isLoading && <div className={styles.preloader}><Spinner animation="grow" /></div>
                    }
                   <div className={styles.latest_details}>
                      <ul>
                           {shortLit.map((news, index) => {
                               return (
                                   <li key={index}>
                                      
                                       <a  href={news?.newsCreator?.role !== 'SUPER-ADMIN' ? `/notice/${news?._id}` :`/news/${news?._id}`}>
                                            <h4>{news.title}</h4>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.4204 12C15.4204 12.2151 15.3383 12.4301 15.1744 12.5941L10.0146 17.7538C9.68641 18.0821 9.15424 18.0821 8.82615 17.7538C8.49805 17.4257 8.49805 16.8937 8.82615 16.5654L13.3918 12L8.82631 7.43459C8.49821 7.10636 8.49821 6.57436 8.82631 6.24629C9.1544 5.9179 9.68657 5.9179 10.0148 6.24629L15.1746 11.4059C15.3385 11.57 15.4204 11.785 15.4204 12Z" fill="#323232"/>
                                            </svg>
                                       </a>
                                    </li>
                                )
                            }) }

                          
                        </ul>
                  </div> 
                    
              </Col>
          </Row>
      </Container>
  )
}