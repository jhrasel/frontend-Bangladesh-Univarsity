import { useRouter } from "next/router";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useQuery } from "react-query";
import ApiRequest from "../../../services/api-services";
import { SmallCard } from "../../cards/smallCard";
import { BulletinePreloader } from "../bulletine/bulletineLoader";

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
                <Container>
                    <Row>

                    <h1 className={'sectionHeading'} style={{marginBottom: '40px', marginLeft: '25px'}}>Our Top Stories</h1>
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

                    </Row>
                    </Container>
              </div>
      </Container>

  )
}