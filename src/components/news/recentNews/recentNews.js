import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useQuery } from "react-query";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import slider from "../../../assets/image/news.png";
import { Addmission } from "../../../components/admission/index";
import ApiRequest from "../../../services/api-services";
import { SmallCard } from "../../cards/smallCard";
import { BulletinePreloader } from "../../homePage/bulletine/bulletineLoader";
import { PageBanner } from "../../pagebanner";

export const RecentNews = () => {
    const [id, setId] = useState(1);

  const Router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data: newsList, isLoading: newsListisloading } = useQuery(
    ["newsAllList", id],
    () => ApiRequest.get(`news/all?page=${id}&perPage=6`)
  );

  const routerHandler = (_id) => {
    Router.push({
      pathname: `news/${_id}`,
      query: { _id },
    });
  };

  // const loadHandler = () => {
  //   const page = newsList?.data?.currentPage;
  //   setPage(page + 1);
  // };

      const loadHandler = () => {
    setId(id + 1);
  };
  const previousLoadHandler = () => {
    setId(id - 1);
  }

  return (
    <>
      <Container fluid style={{ padding: 0 }} className="mt_60">
        <PageBanner title={"News"} photo={slider.src} position={"center"} />
      </Container>
      <div
        className={"mt_30"}
        style={{ marginTop: "80px", marginBottom: "80px", textAlign: "center" }}
      >
        <Container className={"sliderss"}>
          <>
            {newsListisloading && (
              <Row>
                <Col xs="12" md="4" lg="4">
                  <BulletinePreloader />
                </Col>
                <Col xs="12" md="4" lg="4">
                  <BulletinePreloader />
                </Col>
                <Col xs="12" md="4" lg="4">
                  <BulletinePreloader />
                </Col>
              </Row>
            )}
          </>
          <Row>
            {/* <h1 className={"sectionHeading"} style={{ marginBottom: "40px" }}>
              Most Viewed News
            </h1> */}
            {newsList?.data?.data.length &&
              newsList?.data?.data.map((value, index) => {
                return (
                  <Col
                    xs="12"
                    md="12"
                    lg="4"
                    style={{ cursor: "pointer" }}
                    key={index}
                  >
                    <a href={`/news/${value?._id}`}>
                      <SmallCard
                        {...value}
                        showDate={false}
                        clickHandler={routerHandler}
                      />
                    </a>
                  </Col>
                );
              })}
          </Row>

                      {newsList?.data?.data?.length === 0 && (
              <p style={{color: 'red'}}> &nbsp;&nbsp; No Data Found!</p>
            )}
            
      <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 3px",
            flexDirection: "row-reverse",
          }}
        >
          <a
            className={"readMore"}
            onClick={loadHandler}
            style={
              newsList?.data?.totalItems >= id
                ? { paddingBottom: "10px" }
                : {
                    opacity: "0.4",
                    pointerEvents: "none",
                    paddingBottom: "10px",
                  }
            }
          >
            Next
          </a>

          <a
            className={"readMore"}
            style={
              newsList?.data?.currentPage > 1
                ? { paddingBottom: "10px" }
                : {
                    opacity: "0.4",
                    pointerEvents: "none",
                    paddingBottom: "10px",
                  }
            }
            onClick={previousLoadHandler}
            disabled
          >
            Previous
          </a>
          </div>
          
        </Container>
        <Addmission />
      </div>
      {/* <div className={'mt_30'} style={{marginTop: '80px', marginBottom: '80px', textAlign: 'center'}}>
                <h1 className={'headingTitle'} style={{marginBottom: '50px', marginLeft: '25px'}}>
                    Recent News
                </h1>
                <>
                    {
                        newsListisloading && (
                            <Row>
                                <Col  xs='12' md='12' lg="6">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='12' lg="6">
                                    <BulletinePreloader />
                                </Col>
                            </Row>
                        )
                    }

                </>
                <div className={'slider'}>
                    <ReactSlider {...settings}>
                        {
                            newsList?.data?.data.length && newsList?.data?.data.map((value, index) => {
                                return (
                                    <div key={index} onClick={()=> routerHandler(value?._id)} style={{cursor: 'pointer'}}>
                                        <div className={styles.mainSmallCard}>
                                            <img
                                                src={value?.photo ?? image.src}
                                                alt="Picture of the date"
                                                width='100%'
                                                style={{height: '380px'}}
                                            />

                                            <div className={styles.cardDetials}>
                                                <p>{moment(value?.updatedAt).format("MMM Do YY")} / {value?.newsCreator?.name}</p>

                                                <h4 className={styles.title}>{value?.title}</h4>
                                                <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                                                    {
                                                        value.shortDesc.length > 120 ? value.shortDesc.substring(0, 120) + '...' : value.shortDesc
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </ReactSlider>
                </div>
            </div> */}
    </>
  );
};
