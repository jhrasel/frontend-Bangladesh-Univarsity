import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import slider from "../../assets/image/contact-banner.png";
import { Addmission } from "../../components/admission/index";
import { PageBanner } from "../../components/pagebanner/index";
import ApiRequest from "../../services/api-services";
import styles from "./styles.module.css";

export const ContactUs = () => {
  const [contactValue, setContactValue] = useState({});
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setLoader(true);
    ApiRequest.post("contact", contactValue)
      .then((data) => {
        setShow(true);
        setLoader(false);
        setContactValue({});
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
    <>
      <Container fluid style={{ padding: 0 }} className="mt_60">
        <PageBanner title={"Contact Us"} photo={slider.src} position={"top"} />
      </Container>
      <div className={styles.mainForms}>
        <div className="container">
          <div className={styles.mainContact}>
            <h1 className={styles.headingTitle}>Get In Touch With Us</h1>
          </div>
          <div className="row" style={{ background: "#fff" }}>
            <div className="col-md-6 mbl_hide">
              <div className={styles.mainForm}>
                <Form noValidate onSubmit={handleSubmit}>
                  <Row>
                    <Col md={"6"} lg={6} xs={"12"}>
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
                    <Col md={"6"} lg={6} xs={"12"}>
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
                          rows={7}
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
                        Message sent successfully.
                      </strong>
                    </Toast.Header>
                  </Toast>
                  <Button
                    variant="primary"
                    type={loader ? "reset" : "Submit"}
                    className={styles.button}
                  >
                    {loader ? "Loading..." : "Submit"}
                  </Button>
                </Form>
              </div>
            </div>
            <div className="col-md-6 contact_map">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d29213.473560689912!2d90.32380822795238!3d23.758638534515587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d23.750246399999998!2d90.3479296!4m5!1s0x3755c083149585f5%3A0xeb28ac94751626ca!2s5%2FB%2C%20Beribandh%20Main%20Road%2C%20Adabar%2C%20Mohammadpur%2C%20Dhaka%20%E2%80%93%201207!3m2!1d23.767065!2d90.34495539999999!5e0!3m2!1sen!2sbd!4v1707382705850!5m2!1sen!2sbd"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 pr-0 hide">
              <div className={styles.mainForm}>
                <Form noValidate onSubmit={handleSubmit}>
                  <Row>
                    <Col md={"6"} lg={6} xs={"12"}>
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
                    <Col md={"6"} lg={6} xs={"12"}>
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
                          rows={7}
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
                        Message sent successfully.
                      </strong>
                    </Toast.Header>
                  </Toast>
                  <Button
                    variant="primary"
                    type={loader ? "reset" : "Submit"}
                    className={styles.button}
                  >
                    {loader ? "Loading..." : "Submit"}
                  </Button>
                </Form>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <ul>
              <li>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="#EB2A2E" />
                  <path
                    d="M20 14.5C20.663 14.5 21.2989 14.7634 21.7678 15.2322C22.2366 15.7011 22.5 16.337 22.5 17C22.5 17.3283 22.4353 17.6534 22.3097 17.9567C22.1841 18.26 21.9999 18.5356 21.7678 18.7678C21.5356 18.9999 21.26 19.1841 20.9567 19.3097C20.6534 19.4353 20.3283 19.5 20 19.5C19.337 19.5 18.7011 19.2366 18.2322 18.7678C17.7634 18.2989 17.5 17.663 17.5 17C17.5 16.337 17.7634 15.7011 18.2322 15.2322C18.7011 14.7634 19.337 14.5 20 14.5ZM20 10C21.8565 10 23.637 10.7375 24.9497 12.0503C26.2625 13.363 27 15.1435 27 17C27 22.25 20 30 20 30C20 30 13 22.25 13 17C13 15.1435 13.7375 13.363 15.0503 12.0503C16.363 10.7375 18.1435 10 20 10ZM20 12C18.6739 12 17.4021 12.5268 16.4645 13.4645C15.5268 14.4021 15 15.6739 15 17C15 18 15 20 20 26.71C25 20 25 18 25 17C25 15.6739 24.4732 14.4021 23.5355 13.4645C22.5979 12.5268 21.3261 12 20 12Z"
                    fill="white"
                  />
                </svg>
                <p>
                  5/B, Beribandh Main Road, Adabar, Mohammadpur, Dhaka – 1207
                </p>
              </li>
              <li>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="#EB2A2E" />
                  <path
                    d="M28 23.5C26.8 23.5 25.5 23.3 24.4 22.9C24.3 22.9 24.2 22.9 24.1 22.9C23.8 22.9 23.6 23 23.4 23.2L21.2 25.4C18.4 23.9 16 21.6 14.6 18.8L16.8 16.6C17.1 16.3 17.2 15.9 17 15.6C16.7 14.5 16.5 13.2 16.5 12C16.5 11.5 16 11 15.5 11H12C11.5 11 11 11.5 11 12C11 21.4 18.6 29 28 29C28.5 29 29 28.5 29 28V24.5C29 24 28.5 23.5 28 23.5ZM13 13H14.5C14.6 13.9 14.8 14.8 15 15.6L13.8 16.8C13.4 15.6 13.1 14.3 13 13ZM27 27C25.7 26.9 24.4 26.6 23.2 26.2L24.4 25C25.2 25.2 26.1 25.4 27 25.4V27Z"
                    fill="white"
                  />
                </svg>
                <p>+88 01304-350205, +88 01986-634186</p>
              </li>
              <li>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="#EB2A2E" />
                  <path
                    d="M30 14C30 12.9 29.1 12 28 12H12C10.9 12 10 12.9 10 14V26C10 27.1 10.9 28 12 28H28C29.1 28 30 27.1 30 26V14ZM28 14L20 19L12 14H28ZM28 26H12V16L20 21L28 16V26Z"
                    fill="white"
                  />
                </svg>
                <p>cse.bu.com.bd</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Addmission />
    </>
  );
};
