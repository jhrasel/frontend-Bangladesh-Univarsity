import { useRouter } from 'next/router';
import React from "react";
import { Container, Spinner } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
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

    const { isLoading, data:newsList } = useQuery('news_list', () => ApiRequest.get('news/all'));

  return (
      <Container div className={styles.mainLatestNotice}>
          <Row style={{background: '#fff'}} >
              <Col xl={'6'} md={'12'} xs={'12'}  >
                  <div className={styles.lftSide}>
                      <div className={styles.lftSideOveryly}>
                            <h1>Latest  Notice News</h1>
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
                        {
                            newsList?.data?.data?.length && newsList?.data?.data?.map((news, index) => {
                                return (
                                    <div className={styles.rightSideNotice} key={index} >
                                        <Accordion defaultActiveKey={0}>
                                            <Accordion.Item eventKey={index}>
                                                <Accordion.Header className='latestNew_Heading' style={{textTransform: 'uppercase'}}>{news.title} </Accordion.Header>
                                                <Accordion.Body>
                                                    {
                                                        news.shortDesc.length > 220 ? news.shortDesc.substring(0, 220) + '...' : news.shortDesc
                                                    }
                                                    <a href={`/notice/${news?._id}`} onClick={()=>singleNotice(news?._id)} className={'readMore'} style={{ paddingBottom: '10px', marginTop: '15px !important',  justifyContent: 'flex-start'}}> Read More <span className={'arrow'}>&#8250;</span></a>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                )
                            })
                        }
                  </div>
                
          

              </Col>
          </Row>
      </Container>
  )
}