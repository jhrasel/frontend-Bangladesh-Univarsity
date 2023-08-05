import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from '../../assets/image/logo.png'
import styles from './style.module.css'
import Container from "react-bootstrap/Container";
export const Footer = () => {
  return(
      <div className={styles.mainFooter}>

          <Container>
              <Row>
                  <Col>
                      <img src={logo.src} alt={'logo img'}/>
                  </Col>
                  <Col>
                      <h4>Campus</h4>
                      <ul>
                          <li>Annual Report</li>
                          <li>Benefits</li>
                          <li>Convocation</li>
                          <li>Gallery</li>
                      </ul>
                  </Col>
                  <Col>
                      <h4>Important Link</h4>
                      <ul>
                          <li>Apply Process</li>
                          <li>Blogs</li>
                          <li>Sports</li>
                          <li>Latest Notice</li>
                          <li>Campus</li>
                      </ul>
                  </Col>
                  <Col>
                      <h4>Contact Us</h4>
                      <ul>
                          <li>
                              <svg width="14" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="white"/>
                              </svg>
                              &nbsp;&nbsp;
                              cse.bu.com.bd
                          </li>
                          <li>
                              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17 12.5C15.8 12.5 14.5 12.3 13.4 11.9C13.3 11.9 13.2 11.9 13.1 11.9C12.8 11.9 12.6 12 12.4 12.2L10.2 14.4C7.4 12.9 5 10.6 3.6 7.8L5.8 5.6C6.1 5.3 6.2 4.9 6 4.6C5.7 3.5 5.5 2.2 5.5 1C5.5 0.5 5 0 4.5 0H1C0.5 0 0 0.5 0 1C0 10.4 7.6 18 17 18C17.5 18 18 17.5 18 17V13.5C18 13 17.5 12.5 17 12.5ZM2 2H3.5C3.6 2.9 3.8 3.8 4 4.6L2.8 5.8C2.4 4.6 2.1 3.3 2 2ZM16 16C14.7 15.9 13.4 15.6 12.2 15.2L13.4 14C14.2 14.2 15.1 14.4 16 14.4V16Z" fill="white"/>
                              </svg>
                              &nbsp;&nbsp;
                              +88 01304-350205, +88 01986-634186
                          </li>
                          <li>
                              <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5ZM7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 12.25 7 20 7 20C7 20 0 12.25 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0ZM7 2C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7C2 8 2 10 7 16.71C12 10 12 8 12 7C12 5.67392 11.4732 4.40215 10.5355 3.46447C9.59785 2.52678 8.32608 2 7 2Z" fill="white"/>
                              </svg>
                              &nbsp;&nbsp;
                              Iqbal Road, Mohammadpur, Dhaka-1207.
                          </li>
                      </ul>
                  </Col>
              </Row>
              <p style={{border: '1px solid #808080', marginTop: '20px', marginBottom: '20px'}}></p>

              <Row className={styles.footerBottom}>
                  <Col>
                      <p>@2023 All rights reserved by Bangladesh University</p>
                  </Col>
                  <Col>
                      <ul>
                          <li>
                              <a href='#'>
                                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M10 0.540039C4.5 0.540039 0 5.03004 0 10.56C0 15.56 3.66 19.71 8.44 20.46V13.46H5.9V10.56H8.44V8.35004C8.44 5.84004 9.93 4.46004 12.22 4.46004C13.31 4.46004 14.45 4.65004 14.45 4.65004V7.12004H13.19C11.95 7.12004 11.56 7.89004 11.56 8.68004V10.56H14.34L13.89 13.46H11.56V20.46C13.9164 20.0879 16.0622 18.8856 17.6099 17.0701C19.1576 15.2546 20.0054 12.9457 20 10.56C20 5.03004 15.5 0.540039 10 0.540039Z" fill="white"/>
                                  </svg>

                              </a>
                          </li>
                          <li>
                              <a href='#'>
                                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16 0.5C16.5304 0.5 17.0391 0.710714 17.4142 1.08579C17.7893 1.46086 18 1.96957 18 2.5V16.5C18 17.0304 17.7893 17.5391 17.4142 17.9142C17.0391 18.2893 16.5304 18.5 16 18.5H2C1.46957 18.5 0.960859 18.2893 0.585786 17.9142C0.210714 17.5391 0 17.0304 0 16.5V2.5C0 1.96957 0.210714 1.46086 0.585786 1.08579C0.960859 0.710714 1.46957 0.5 2 0.5H16ZM15.5 16V10.7C15.5 9.83539 15.1565 9.0062 14.5452 8.39483C13.9338 7.78346 13.1046 7.44 12.24 7.44C11.39 7.44 10.4 7.96 9.92 8.74V7.63H7.13V16H9.92V11.07C9.92 10.3 10.54 9.67 11.31 9.67C11.6813 9.67 12.0374 9.8175 12.2999 10.0801C12.5625 10.3426 12.71 10.6987 12.71 11.07V16H15.5ZM3.88 6.06C4.32556 6.06 4.75288 5.883 5.06794 5.56794C5.383 5.25288 5.56 4.82556 5.56 4.38C5.56 3.45 4.81 2.69 3.88 2.69C3.43178 2.69 3.00193 2.86805 2.68499 3.18499C2.36805 3.50193 2.19 3.93178 2.19 4.38C2.19 5.31 2.95 6.06 3.88 6.06ZM5.27 16V7.63H2.5V16H5.27Z" fill="white"/>
                                  </svg>

                              </a>
                          </li>
                          <li>
                              <a href='#'>
                                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M21.4591 2.5C20.6891 2.85 19.8591 3.08 18.9991 3.19C19.8791 2.66 20.5591 1.82 20.8791 0.81C20.0491 1.31 19.1291 1.66 18.1591 1.86C17.3691 1 16.2591 0.5 14.9991 0.5C12.6491 0.5 10.7291 2.42 10.7291 4.79C10.7291 5.13 10.7691 5.46 10.8391 5.77C7.27906 5.59 4.10906 3.88 1.99906 1.29C1.62906 1.92 1.41906 2.66 1.41906 3.44C1.41906 4.93 2.16906 6.25 3.32906 7C2.61906 7 1.95906 6.8 1.37906 6.5C1.37906 6.5 1.37906 6.5 1.37906 6.53C1.37906 8.61 2.85906 10.35 4.81906 10.74C4.45906 10.84 4.07906 10.89 3.68906 10.89C3.41906 10.89 3.14906 10.86 2.88906 10.81C3.42906 12.5 4.99906 13.76 6.88906 13.79C5.42906 14.95 3.57906 15.63 1.55906 15.63C1.21906 15.63 0.879063 15.61 0.539062 15.57C2.43906 16.79 4.69906 17.5 7.11906 17.5C14.9991 17.5 19.3291 10.96 19.3291 5.29C19.3291 5.1 19.3291 4.92 19.3191 4.73C20.1591 4.13 20.8791 3.37 21.4591 2.5Z" fill="white"/>
                                  </svg>

                              </a>
                          </li>
                          <li>
                              <a href='#'>
                                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M10 0.5C12.717 0.5 13.056 0.51 14.122 0.56C15.187 0.61 15.912 0.777 16.55 1.025C17.21 1.279 17.766 1.623 18.322 2.178C18.8305 2.6779 19.224 3.28259 19.475 3.95C19.722 4.587 19.89 5.313 19.94 6.378C19.987 7.444 20 7.783 20 10.5C20 13.217 19.99 13.556 19.94 14.622C19.89 15.687 19.722 16.412 19.475 17.05C19.2247 17.7178 18.8311 18.3226 18.322 18.822C17.822 19.3303 17.2173 19.7238 16.55 19.975C15.913 20.222 15.187 20.39 14.122 20.44C13.056 20.487 12.717 20.5 10 20.5C7.283 20.5 6.944 20.49 5.878 20.44C4.813 20.39 4.088 20.222 3.45 19.975C2.78233 19.7245 2.17753 19.3309 1.678 18.822C1.16941 18.3222 0.775931 17.7175 0.525 17.05C0.277 16.413 0.11 15.687 0.0599999 14.622C0.0129999 13.556 0 13.217 0 10.5C0 7.783 0.00999994 7.444 0.0599999 6.378C0.11 5.312 0.277 4.588 0.525 3.95C0.775236 3.28218 1.1688 2.67732 1.678 2.178C2.17767 1.66923 2.78243 1.27573 3.45 1.025C4.088 0.777 4.812 0.61 5.878 0.56C6.944 0.513 7.283 0.5 10 0.5ZM10 5.5C8.67392 5.5 7.40215 6.02678 6.46447 6.96447C5.52678 7.90215 5 9.17392 5 10.5C5 11.8261 5.52678 13.0979 6.46447 14.0355C7.40215 14.9732 8.67392 15.5 10 15.5C11.3261 15.5 12.5979 14.9732 13.5355 14.0355C14.4732 13.0979 15 11.8261 15 10.5C15 9.17392 14.4732 7.90215 13.5355 6.96447C12.5979 6.02678 11.3261 5.5 10 5.5ZM16.5 5.25C16.5 4.91848 16.3683 4.60054 16.1339 4.36612C15.8995 4.1317 15.5815 4 15.25 4C14.9185 4 14.6005 4.1317 14.3661 4.36612C14.1317 4.60054 14 4.91848 14 5.25C14 5.58152 14.1317 5.89946 14.3661 6.13388C14.6005 6.3683 14.9185 6.5 15.25 6.5C15.5815 6.5 15.8995 6.3683 16.1339 6.13388C16.3683 5.89946 16.5 5.58152 16.5 5.25ZM10 7.5C10.7956 7.5 11.5587 7.81607 12.1213 8.37868C12.6839 8.94129 13 9.70435 13 10.5C13 11.2956 12.6839 12.0587 12.1213 12.6213C11.5587 13.1839 10.7956 13.5 10 13.5C9.20435 13.5 8.44129 13.1839 7.87868 12.6213C7.31607 12.0587 7 11.2956 7 10.5C7 9.70435 7.31607 8.94129 7.87868 8.37868C8.44129 7.81607 9.20435 7.5 10 7.5Z" fill="white"/>
                                  </svg>

                              </a>
                          </li>
                      </ul>
                  </Col>
              </Row>
          </Container>
      </div>
  )
}