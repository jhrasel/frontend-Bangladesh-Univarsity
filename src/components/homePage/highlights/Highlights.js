import { Col, Row } from "react-bootstrap";
import ReactPlayer from "react-player/lib";
import styles from "./Highlights.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { useQuery } from "react-query";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ApiRequest from "../../../services/api-services";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { useEffect, useState } from 'react';
export const Highlights = () => {
    const [domLoaded, setDomLoaded] = useState(false);

  
    const { data, isLoading } = useQuery(["highlights-item"], () =>
    ApiRequest.get("url/dashboard?page=1&perPage=10")
  );
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  console.log('data', data)
  return (
    <section className={styles.highlights}>
      {
        domLoaded && (
           <div className="container">
        <h2>Highlights</h2>

        {/* video Content */}
        <div className={styles.video__content}>
          <Row>
            {/* item */}
            <Col lg={12}>
              <Swiper
                breakpoints={{
                  320: {
                    slidesPerView: 1.1,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3.2,
                    spaceBetween: 30,
                  },
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper highlights__swiper"
                id={styles.swiper__id}
                  >
                    {
                      data?.data?.data?.map((value, i) => { 
                        return (
                            <SwiperSlide key={i}>
                              <div className={styles.video}>
                                <ReactPlayer
                                            width="100%"
                                            controls={true}
                                            url={value?.url}
                                />
                              </div>
                          </SwiperSlide>
                          )
                      })
                    }
            
              </Swiper>
            </Col>
          </Row>
        </div>
      </div>
        )
      }
    </section>
  );
}
