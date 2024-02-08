import { Col, Row } from "react-bootstrap";
import ReactPlayer from "react-player/lib";
import styles from "./Highlights.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default function Highlights() {
  return (
    <section className={styles.highlights}>
      <div className="container">
        <h2>Highlights</h2>

        {/* video Content */}
        <div className={styles.video__content}>
          <Row>
            {/* item */}
            <Col lg={12}>
              <Swiper
                pagination={{
                  type: "progressbar",
                }}
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
                {/* item */}
                <SwiperSlide>
                  <div className={styles.video}>
                    <ReactPlayer
                      width="100%"
                      controls={true}
                      url="https://youtu.be/tTI1eZLwUXI?si=C_Vuybcpxgc9KIlu"
                    />
                  </div>
                </SwiperSlide>
                {/* item */}
                <SwiperSlide>
                  <div className={styles.video}>
                    <ReactPlayer
                      width="100%"
                      controls={true}
                      url="https://youtu.be/tTI1eZLwUXI?si=C_Vuybcpxgc9KIlu"
                    />
                  </div>
                </SwiperSlide>
                {/* item */}
                <SwiperSlide>
                  <div className={styles.video}>
                    <ReactPlayer
                      width="100%"
                      controls={true}
                      url="https://youtu.be/tTI1eZLwUXI?si=C_Vuybcpxgc9KIlu"
                    />
                  </div>
                </SwiperSlide>

                {/* item */}
                <SwiperSlide>
                  <div className={styles.video}>
                    <ReactPlayer
                      width="100%"
                      controls={true}
                      url="https://youtu.be/tTI1eZLwUXI?si=C_Vuybcpxgc9KIlu"
                    />
                  </div>
                </SwiperSlide>

                {/* item */}
                <SwiperSlide>
                  <div className={styles.video}>
                    <ReactPlayer
                      width="100%"
                      controls={true}
                      url="https://youtu.be/tTI1eZLwUXI?si=C_Vuybcpxgc9KIlu"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
}
