import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css'
import {Buttons} from "../../buttons/button";
import Accordion from 'react-bootstrap/Accordion';
import {useRouter } from 'next/router'
import ApiRequest from "../../../services/api-services";
import {useQuery} from "react-query";
import {Preloader} from "../../loader";
import React from "react";
import {Spinner} from "react-bootstrap";
export const LatestNotice = () => {
    const router = useRouter();
    const routerHandler = () => {
        router.push('/news')
    }
    const singleNotice = (_id) => {
        router.push({
            pathname: `news/${_id}`
        })
    }

    const { isLoading, data:newsList } = useQuery('news_list', () => ApiRequest.get('news/all'));

  return (
      <div className={styles.mainLatestNotice}>
          <Row>
              <Col xl={'6'} md={'12'} xs={'12'}  style={{display: 'flex', alignItems: 'center'}}>
                  <div className={styles.lftSide}>
                      <h1 className={'headingTitle'}>Latest <br /> Notice News</h1>
                      <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      </p>
                      <Buttons text={'View All'} bgColor={'#AD1F1F'} color={'#fff'} click={routerHandler} />
                  </div>
              </Col>
              <Col xl={'6'} md={'12'} xs={'12'}>
                  {
                      isLoading && <div className={styles.preloader}><Spinner animation="grow" /></div>
                  }
                  {
                      newsList?.data?.data?.length && newsList?.data?.data?.map((news, index) => {
                          return (
                              <div className={styles.rightSideNotice} key={index} >
                                  <Accordion defaultActiveKey={0}>
                                      <Accordion.Item eventKey={index}>
                                          <Accordion.Header className='latestNew_Heading'>{news.title} </Accordion.Header>
                                          <Accordion.Body>
                                              {
                                                  news.shortDesc.length > 220 ? news.shortDesc.substring(0, 220) + '...' : news.shortDesc
                                              }
                                              <a onClick={()=>singleNotice(news?._id)} className={'readMore'} style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', justifyContent: 'flex-start'}}> Read More <span className={'arrow'}>&#8250;</span></a>
                                          </Accordion.Body>
                                      </Accordion.Item>
                                  </Accordion>
                              </div>
                          )
                      })
                  }

              </Col>
          </Row>
      </div>
  )
}