import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Toast,
} from "react-bootstrap";
import assistantNav from "../../assets/image/assistant_navigation.png";
import circle from "../../assets/image/circle.png";
import touch from "../../assets/image/touch_app.png";
import main__ from "../../assets/image/waver_bg.jpg";
import styles from "../../components/slider/sliderWithButton.module.css";
import ApiRequest from "../../services/api-services";
import style from "./applyModal.module.css";

export const Weaver = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [contactValue, setContactValue] = useState({});
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setLoader(true);
    ApiRequest.post("contact", contactValue)
      .then((data) => {

        if (data?.data?.success) {
          setShow(true);
          setLoader(false);
          setContactValue({});
          setMessage('Message Sent Successfully.')
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoader(false);
      });
  };

  const changeHandler = (value) => {
    setContactValue({
      ...contactValue,
      [value.target.name]: value.target.value,
    });
  };

  return (
    <div className="main__" id={style.main__}>
      <Container>
        <div
          className={styles.sliderWithButton}
          style={{ background: "transparent" }}
        >
          <Container>
            <Row>
              <Col xs="12" md="12" lg="4" className="padding_0">
                <div
                  className={styles.inner}
                  style={{ background: "#fff", cursor: "pointer" }}
                  onClick={handleShowModal}
                >
                  <img src={assistantNav.src} alt={"img"} />
                  <p style={{ margin: "10px 0px!important" }}>
                    Request for Weaver
                  </p>
                  <span>
                    Apply online today and take the first step towards a
                    brighter future with us.
                  </span>
                </div>
              </Col>
              <Col xs="12" md="12" lg="4" className="padding_0">
                <div
                  className={styles.middleSliderButton}
                  style={{ background: "#EB2A2E", cursor: "pointer" }}
                  onClick={handleShowModal}
                >
                  <img src={circle.src} alt={"img"} />
                  <p style={{ margin: "10px 0px!important" }}>Apply Online</p>
                  <span>
                    Find the perfect match for your weaving needs. Weaving
                    excellence awaits!
                  </span>
                </div>
              </Col>
              <Col xs="12" md="12" lg="4" className="padding_0">
                <div
                  className={styles.inner}
                  style={{ background: "#fff", cursor: "pointer" }}
                  onClick={handleShowModal}
                >
                  <img src={touch.src} alt={"img"} />

                  <p style={{ margin: "10px 0px!important" }}>Get in Touch</p>
                  <span>
                    Have questions or need assistance? Reach out to us. We are
                    here to help.
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      <img
        className="overlay_main__"
        src={main__.src}
        alt="main"
        width={"100%"}
        height={"100%"}
      />

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={handleClose}
        className={style.apply__modal}
      >
        <Modal.Header closeButton className={style.modal__header}>
          <Modal.Title>Apply Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.mainForm}>
            <Form noValidate onSubmit={handleSubmit}>
              <Row>
                <Col md={"12"}>
                  <Form.Group
                    className="mb-3"
                    controlId="full_name"
                    onChange={changeHandler}
                  >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullname"
                      placeholder="name"
                    />
                  </Form.Group>
                </Col>

                <Col md={"12"}>
                  <Form.Group
                    className="mb-3"
                    controlId="phone"
                    onChange={changeHandler}
                  >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="phone"
                    />
                  </Form.Group>
                </Col>

                <Col md={"12"}>
                  <Form.Group
                    className="mb-3"
                    controlId="email"
                    onChange={changeHandler}
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                    />
                  </Form.Group>
                </Col>

                <Col md={"12"}>
                  <Form.Group
                    className="mb-3"
                    controlId="message"
                    onChange={changeHandler}
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder={"Message Here..."}
                      name="message"
                      rows={5}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Toast
                onClose={() => setShow(false)}
                show={show}
                style={{ marginBottom: "20px" }}
              >
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">
                    { message }
                  </strong>
                </Toast.Header>
              </Toast>
              <Button
                variant="primary"
                type={loader ? "reset" : "Submit"}
                className={style.button}
              >
                {loader ? "Loading..." : "Submit"}
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
