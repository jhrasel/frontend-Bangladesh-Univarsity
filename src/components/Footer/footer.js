import Image from "next/image";
import Link from "next/link";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BrandIcon from "../../assets/image/white-logo.svg";
import { ImportantLinkData, PageData } from "./FooterData";
import styles from "./style.module.css";

export const Footer = () => {
  return (
    <div className={styles.mainFooter}>
      <Container>
        <Row>
          <Col md={3} xs={12}>
            <Image
              src={BrandIcon.src}
              alt={"home image"}
              width={212}
              height={32}
              style={{ height: "auto" }}
            />
            <p className={styles.text} style={{textAlign: 'justify'}}>
Explore the endless possibilities and embark on an adventure of knowledge and innovation. Discover a vibrant community committed to academic success and transform your goals into reality with us.
Join our renowned university, a center of excellence for higher education.  

            </p>
          </Col>
          <Col md={3} xs={12}>
            <div className={styles.pages}>
              <h4>Pages</h4>
              <ul>
                {PageData.map((data, i) => (
                  <li key={i}>
                    <Link href={data.url}>{data.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={3} xs={12}>
            <div className={styles.important}>
              <h4>Important Link</h4>
              <ul>
                {ImportantLinkData.map((data, i) => (
                  <li key={i}>
                    <Link href={data.url}>{data.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={3} xs={12}>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                    fill="white"
                  />
                </svg>
                &nbsp;&nbsp; cse@bu.edu.bd
              </li>
              <li>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 12.5C15.8 12.5 14.5 12.3 13.4 11.9C13.3 11.9 13.2 11.9 13.1 11.9C12.8 11.9 12.6 12 12.4 12.2L10.2 14.4C7.4 12.9 5 10.6 3.6 7.8L5.8 5.6C6.1 5.3 6.2 4.9 6 4.6C5.7 3.5 5.5 2.2 5.5 1C5.5 0.5 5 0 4.5 0H1C0.5 0 0 0.5 0 1C0 10.4 7.6 18 17 18C17.5 18 18 17.5 18 17V13.5C18 13 17.5 12.5 17 12.5ZM2 2H3.5C3.6 2.9 3.8 3.8 4 4.6L2.8 5.8C2.4 4.6 2.1 3.3 2 2ZM16 16C14.7 15.9 13.4 15.6 12.2 15.2L13.4 14C14.2 14.2 15.1 14.4 16 14.4V16Z"
                    fill="white"
                  />
                </svg>
                &nbsp;&nbsp; +88 01755-559301, +88 01755-559312
              </li>
              <li style={{display: 'flex'}}>
                <svg
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5ZM7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 12.25 7 20 7 20C7 20 0 12.25 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0ZM7 2C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7C2 8 2 10 7 16.71C12 10 12 8 12 7C12 5.67392 11.4732 4.40215 10.5355 3.46447C9.59785 2.52678 8.32608 2 7 2Z"
                    fill="white"
                  />
                </svg>
                <span style={{paddingLeft: '16px'}}>5/B, Beribandh Main Road, Adabar, Mohammadpur,
                Dhaka – 1207</span>
              </li>
            </ul>
            <ul className={styles.footerText} style={{ marginTop: "10px" }}>
              <li>
                <a href="https://www.facebook.com/BangladeshUniversityBd" target="_blank" rel="noreferrer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0002 4.36084C7.78126 4.36084 4.36133 7.78077 4.36133 11.9997C4.36133 15.8123 7.15487 18.9725 10.807 19.5462V14.2074H8.86674V11.9997H10.807V10.3169C10.807 8.40258 11.9467 7.34535 13.6922 7.34535C14.5279 7.34535 15.4018 7.49431 15.4018 7.49431V9.37348H14.4393C13.4898 9.37348 13.1942 9.96244 13.1942 10.5667V11.9997H15.3124L14.974 14.2074H13.1942V19.5462C16.8456 18.9733 19.6391 15.8115 19.6391 11.9997C19.6391 7.78077 16.2192 4.36084 12.0002 4.36084Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/BangladeshUniversityBd" target="_blank" rel="noreferrer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0002 4.36084C14.0757 4.36084 14.3347 4.36848 15.149 4.40667C15.9625 4.44487 16.5163 4.57244 17.0037 4.76188C17.5079 4.95591 17.9326 5.21869 18.3573 5.64265C18.7457 6.02451 19.0463 6.48643 19.2381 6.99626C19.4267 7.48285 19.5551 8.03744 19.5933 8.85098C19.6292 9.66528 19.6391 9.92424 19.6391 11.9997C19.6391 14.0752 19.6315 14.3342 19.5933 15.1485C19.5551 15.962 19.4267 16.5158 19.2381 17.0032C19.0468 17.5133 18.7462 17.9753 18.3573 18.3568C17.9753 18.7451 17.5134 19.0457 17.0037 19.2376C16.5171 19.4263 15.9625 19.5546 15.149 19.5928C14.3347 19.6287 14.0757 19.6386 12.0002 19.6386C9.92473 19.6386 9.66577 19.631 8.85147 19.5928C8.03793 19.5546 7.48411 19.4263 6.99674 19.2376C6.48672 19.0462 6.02472 18.7456 5.64313 18.3568C5.25462 17.975 4.95405 17.5131 4.76237 17.0032C4.57293 16.5166 4.44536 15.962 4.40716 15.1485C4.37126 14.3342 4.36133 14.0752 4.36133 11.9997C4.36133 9.92424 4.36897 9.66528 4.40716 8.85098C4.44536 8.03667 4.57293 7.48362 4.76237 6.99626C4.95352 6.48612 5.25416 6.02407 5.64313 5.64265C6.02483 5.254 6.48679 4.95341 6.99674 4.76188C7.48411 4.57244 8.03716 4.44487 8.85147 4.40667C9.66577 4.37077 9.92473 4.36084 12.0002 4.36084ZM12.0002 8.18028C10.9872 8.18028 10.0157 8.58269 9.29946 9.29897C8.58318 10.0153 8.18077 10.9867 8.18077 11.9997C8.18077 13.0127 8.58318 13.9842 9.29946 14.7005C10.0157 15.4168 10.9872 15.8192 12.0002 15.8192C13.0132 15.8192 13.9847 15.4168 14.701 14.7005C15.4173 13.9842 15.8197 13.0127 15.8197 11.9997C15.8197 10.9867 15.4173 10.0153 14.701 9.29897C13.9847 8.58269 13.0132 8.18028 12.0002 8.18028ZM16.9655 7.98931C16.9655 7.73607 16.8649 7.49319 16.6858 7.31412C16.5068 7.13505 16.2639 7.03445 16.0106 7.03445C15.7574 7.03445 15.5145 7.13505 15.3354 7.31412C15.1564 7.49319 15.0558 7.73607 15.0558 7.98931C15.0558 8.24256 15.1564 8.48543 15.3354 8.6645C15.5145 8.84357 15.7574 8.94417 16.0106 8.94417C16.2639 8.94417 16.5068 8.84357 16.6858 8.6645C16.8649 8.48543 16.9655 8.24256 16.9655 7.98931ZM12.0002 9.70806C12.608 9.70806 13.1909 9.9495 13.6207 10.3793C14.0504 10.809 14.2919 11.3919 14.2919 11.9997C14.2919 12.6075 14.0504 13.1904 13.6207 13.6202C13.1909 14.05 12.608 14.2914 12.0002 14.2914C11.3924 14.2914 10.8095 14.05 10.3798 13.6202C9.94999 13.1904 9.70855 12.6075 9.70855 11.9997C9.70855 11.3919 9.94999 10.809 10.3798 10.3793C10.8095 9.9495 11.3924 9.70806 12.0002 9.70806Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/bu_officialpage?lang=en" target="_blank" rel="noreferrer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.7627 7.15379C19.1795 7.41175 18.5611 7.58117 17.9279 7.65643C18.5953 7.25725 19.0949 6.62901 19.3334 5.88879C18.707 6.26157 18.0203 6.52282 17.3045 6.66414C16.8237 6.14972 16.1865 5.80856 15.4918 5.69368C14.7971 5.57881 14.0839 5.69667 13.4631 6.02893C12.8423 6.36119 12.3487 6.88924 12.059 7.53099C11.7693 8.17274 11.6997 8.89223 11.8611 9.57761C10.5908 9.51394 9.34812 9.18384 8.21371 8.60874C7.0793 8.03364 6.07852 7.2264 5.27634 6.23942C4.9924 6.72712 4.84318 7.28153 4.84398 7.84587C4.84398 8.95351 5.40773 9.93205 6.26481 10.505C5.7576 10.489 5.26155 10.352 4.81801 10.1055V10.1452C4.81816 10.8829 5.07343 11.5978 5.54053 12.1688C6.00763 12.7397 6.65782 13.1316 7.38085 13.2779C6.91 13.4055 6.4163 13.4243 5.9371 13.3329C6.14096 13.9679 6.53829 14.5232 7.07346 14.9211C7.60863 15.319 8.25484 15.5396 8.92162 15.552C8.25893 16.0724 7.50016 16.4572 6.68868 16.6842C5.8772 16.9112 5.02894 16.9761 4.19238 16.875C5.65271 17.8142 7.35266 18.3128 9.08891 18.3111C14.9655 18.3111 18.1792 13.4429 18.1792 9.22087C18.1792 9.08337 18.1754 8.94435 18.1693 8.80837C18.7948 8.35628 19.3346 7.79624 19.7635 7.15456L19.7627 7.15379Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <p
          style={{
            border: "1px solid #356655",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></p>

        <Row className={styles.footerBottom}>
          <Col>
            <p>
              @2024 All rights reserved by Department of CSE, Bangladesh
              University
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
