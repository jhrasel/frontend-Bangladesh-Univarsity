import {useEffect, useState} from 'react'
import {SmallCard} from "../../cards/smallCard";
import ApiRequest from "../../../services/api-services";
import {useQuery} from "react-query";
import {useRouter} from "next/router";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {BulletinePreloader} from "../bulletine/bulletineLoader";

export const Bulletine = () => {
    const Router = useRouter()
    const { isLoading, data:bulletin } = useQuery('bulletin', () => ApiRequest.get('news/all?page=1&perPage=3'))

    const routerHandler = (_id) => {
        Router.push({
            pathname: `news/${_id}`
        })
    }
  return(
      <Container fluid>
              <div className={'mt_30'}>
                  <Row>

                  <h1 className={'headingTitle'} style={{marginBottom: '40px', marginLeft: '25px'}}>Our update bulletin</h1>
                      {
                          isLoading && (
                            <>
                                <Col  xs='12' md='12' lg="4">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='12' lg="4">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='12' lg="4">
                                    <BulletinePreloader />
                                </Col>
                            </>
                          )
                      }
                      {
                          bulletin?.data?.data?.length && bulletin?.data?.data?.map((value, i) => (
                              <Col  xs='12' md='12' lg="4" style={{cursor: "pointer"}} key={i}>
                                  <SmallCard {...value}  showDate={false} clickHandler={routerHandler}/>
                              </Col>
                          ))
                      }

                  {/*<a href='@/pages#' className={'readMore'} style={{textAlign: 'center'}}> Read More <span className={'arrow'}>&#8250;</span></a>*/}
                  </Row>

              </div>
      </Container>

  )
}