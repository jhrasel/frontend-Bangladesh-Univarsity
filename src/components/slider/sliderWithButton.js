import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import life from '../../assets/image/life.png';
import styles from './sliderWithButton.module.css';

import athletics from '../../assets/image/athletics.png';
import graduation from '../../assets/image/graduation.png';
import social from '../../assets/image/social.png';

export const SliderWithButton = () => {
    return(
        <Container className={styles.mainSlider_with_btn}>
             <div className={styles.sliderWithButton}>
            <Row>
                <Col xs='12' md='6' lg="3" className='item_middle'>
                    <div className={styles.innerSliderWithButton} style={{border: '1px solid transparent'}}>
                        <img src={life.src} alt={'slider image'}/>
                        <p>University Life</p>
                        <span>Explore Your Campus Adventure.</span>
                    </div>
                </Col>
    
                <Col xs='12' md='6' lg="3" className='item_middle' >
                    <div className={styles.innerSliderWithButton} style={{border: '1px solid transparent'}}>
                        <img src={graduation.src} alt={'slider image'}/>

                        <p>Graduation</p>
                        <span>Your Academic Milestone</span>
                    </div>
                </Col>
                <Col xs='12' md='6' lg="3" className='item_middle'>
                    <div className={styles.innerSliderWithButton}  style={{border: '1px solid transparent'}}>
                        <img src={athletics.src} alt={'slider image'}/>
                        <p>Athletics</p>
                        <span>Where Champions Are Forged</span>
                    </div>
                </Col>
                <Col xs='12' md='6' lg="3" className='item_middle' >
                    <div className={styles.innerSliderWithButton} style={{border: '1px solid transparent'}}>
                        <img src={social.src} alt={'slider image'}/>

                        <p>Social</p>
                        <span>Unite, Engage, Thrive</span>
                    </div>
                </Col>
            </Row>
        </div>
       </Container>
    )
}