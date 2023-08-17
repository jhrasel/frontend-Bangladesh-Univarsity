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
                <Col xs='6' md='6' lg="3" className='item_middle' >
                    <div className={styles.innerSliderWithButton} style={{border: '1px solid transparent'}}>
                        <img src={apartmentImg.src} alt={'slider image'}/>
                        <p>University Life</p>
                        <span>Overall in here</span>
                    </div>
                </Col>
                <Col xs='6' md='6' lg="3" className='item_middle'>
                    <div className={styles.innerSliderWithButton}  style={{border: '1px solid transparent'}}>
                        <img src={sportsImg.src} alt={'slider image'}/>
                        <p>Athletics</p>
                        <span>Sports Clubs</span>
                    </div>
                </Col>
                <Col xs='6' md='6' lg="3" className='item_middle' >
                    <div className={styles.innerSliderWithButton} style={{border: '1px solid transparent'}}>
                        <img src={schoolsImg.src} alt={'slider image'}/>

                        <p>Graduation</p>
                        <span>Getting Diploma</span>
                    </div>
                </Col>
                <Col xs='6' md='6' lg="3" className='item_middle' >
                    <div className={styles.innerSliderWithButton} style={{border: '1px solid transparent'}}>
                        <img src={groupImg.src} alt={'slider image'}/>

                        <p>Social</p>
                        <span>Overall in here</span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}