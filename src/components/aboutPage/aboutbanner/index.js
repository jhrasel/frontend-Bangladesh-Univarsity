import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import adjust from "../../../assets/image/adjust.png";
import assistantNav from "../../../assets/image/assistant_navigation.png";
import slider from "../../../assets/image/slider.jpg";
import touch from "../../../assets/image/touch_app.png";
import styles from "../../slider/sliderWithButton.module.css";

export const AboutBanner = ({ history }) => {
  return (
    <>
      <div className={styles.mainAboutBanner}>
        <img
          className="d-block w-100"
          src={slider.src}
          alt="First slide"
          style={{ borderRadius: "5px" }}
        />
        <div className={styles.overlay}>
          <h1 style={{ textAlign: "center" }} className={styles.title}>
            {history?.title}
          </h1>
        </div>
      </div>
      <div className={styles.mainAboutBannerText}>
        <p>{history?.description}</p>
      </div>
    </>
  );
};

export const AboutSliderWithButton = ({ item }) => {
  return (
    <div className={item ? styles.aboutSliderButton : styles.sliderWithButton}>
      <Container fluid>
        <Row>
          <Col xs="12" md="12" lg="4">
            <div className={styles.innerSliderWithButton}>
              <img src={adjust.src} alt={"img"} />
              <p style={{ margin: "10px 0px!important" }}>Request for Weaver</p>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem
              </span>
              <a
                className={"readMore"}
                style={{ paddingBottom: "10px", justifyContent: "flex-start" }}
              >
                Read More <span className={"arrow"}>&#8250;</span>
              </a>
            </div>
          </Col>
          <Col xs="12" md="12" lg="4">
            <div className={styles.innerSliderWithButton}>
              <img src={assistantNav.src} alt={"img"} />
              <p style={{ margin: "10px 0px!important" }}>Apply Online</p>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem
              </span>
              <a
                className={"readMore"}
                style={{ paddingBottom: "10px", justifyContent: "flex-start" }}
              >
                Read More <span className={"arrow"}>&#8250;</span>
              </a>
            </div>
          </Col>
          <Col xs="12" md="12" lg="4">
            <div className={styles.innerSliderWithButton}>
              <img src={touch.src} alt={"img"} />

              <p style={{ margin: "10px 0px!important" }}>Get in Touch</p>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem
              </span>
              <a
                className={"readMore"}
                style={{ paddingBottom: "10px", justifyContent: "flex-start" }}
              >
                Read More <span className={"arrow"}>&#8250;</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
