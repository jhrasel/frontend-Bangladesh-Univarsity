import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './sliderWithButton.module.css'
import apartmentImg from '../../assets/image/apartment.png'
import schoolsImg from '../../assets/image/school.png'
import sportsImg from '../../assets/image/sports_soccer.png'
import groupImg from '../../assets/image/groups.png'

export const SliderWithButton = () => {
    return(
        <div className={styles.sliderWithButton}>
            <Row>
                <Col className='item_middle'>
                    <div className={styles.innerSliderWithButton}>
                        <img src={apartmentImg.src} />
                        <p>University Life</p>
                        <span>Overall in here</span>
                    </div>
                </Col>
                <Col className='item_middle'>
                    <div className={styles.innerSliderWithButton}>
                        <img src={sportsImg.src} />
                        <p>Athletics</p>
                        <span>Sports Clubs</span>
                    </div>
                </Col>
                <Col className='item_middle'>
                    <div className={styles.innerSliderWithButton}>
                        <img src={schoolsImg.src} />

                        <p>Graduation</p>
                        <span>Getting Diploma</span>
                    </div>
                </Col>
                <Col className='item_middle'>
                    <div className={styles.innerSliderWithButton}>
                        <img src={groupImg.src} />

                        <p>Social</p>
                        <span>Overall in here</span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}