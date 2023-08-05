
import styles from './style.module.css'
import {Row, Col} from "react-bootstrap";
import profileImg from '../../../assets/image/image.png'
export const Messages = () => {
  return (
      <div className={styles.mainMessage}>
          <Row>
              <Col style={{paddingRight: '35px'}}>
                  <div className={styles.messageCard}>
                      <span>Message from President</span>
                      <h4>I would like to extend my warmest Welcome to the Computer Science and Engineering </h4>
                      <a className={'readMore'}>Read More <span className={'arrow'}>&#8250;</span></a>
                      <div className={styles.messageCardImage}>
                          <img src={profileImg.src} alt='image'/>
                      </div>
                  </div>
              </Col>
              <Col style={{paddingLeft: '35px'}}>
                  <div className={styles.messageCard}>
                      <span>Message from President</span>
                      <h4>I would like to extend my warmest Welcome to the Computer Science and Engineering </h4>
                      <a className={'readMore'}>Read More <span className={'arrow'}>&#8250;</span></a>
                      <div className={styles.messageCardImage}>
                          <img src={profileImg.src} alt='image'/>
                      </div>
                  </div>
              </Col>
          </Row>
      </div>
  )
}