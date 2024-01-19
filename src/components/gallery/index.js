import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from 'react-bootstrap/Modal';
import Row from "react-bootstrap/Row";
import { useQuery } from "react-query";
import slider from '../../assets/image/contact-banner.png';
import closeIcon from '../../assets/image/modal/close.svg';
import downloadIcon from '../../assets/image/modal/download.svg';
import zoomInIcon from "../../assets/image/zoomin.svg";
import { Addmission } from '../../components/admission/index';
import { PageBanner } from '../../components/pagebanner/index';
import ApiRequest from "../../services/api-services";
import { BulletinePreloader } from '../homePage/bulletine/bulletineLoader';
import styles from './gallery.module.css';
const GalleryContainer = () => {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = (image) => {
        setShow(true)
        setImage(image)
    }

    const {data, isLoading} = useQuery(['gallery-item'],()=> ApiRequest.get('gallery/all'))

    return(
        <div className={styles.mainGallery}>
            <Container fluid style={{padding: 0}} className="mt_60">
                <PageBanner title={'Gallery'} photo={slider.src} position={'top'}/>
            </Container>

            <Container className={styles.mt}>
                {
                    isLoading && (
                            <Row>
                                <Col  xs='12' md='4' lg="4">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='4' lg="4">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='4' lg="4">
                                    <BulletinePreloader />
                            </Col>
                             <Col  xs='12' md='4' lg="4">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='4' lg="4">
                                    <BulletinePreloader />
                                </Col>
                                <Col  xs='12' md='4' lg="4">
                                    <BulletinePreloader />
                                </Col>
                            </Row>
                    )
                  }
                <Row>
                    {
                        data?.data?.body?.map((image, i) => {
                            return (
                                <Col key={i} xs='12' md='12' lg="4" style={{marginBottom: '25px'}}>
                                    <div className={styles.galleryImg} onClick={()=>handleShow(image?.image)}>
                                        <img alt={'image'} src={image?.image}/>

                                        <div className={styles.overlay}>
                                            <img src={zoomInIcon.src} alt={'img'} />
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }

                </Row>


                <div className={styles.modals}>
                    <Modal show={show} onHide={handleClose}
                           size="lg"
                           aria-labelledby="contained-modal-title-vcenter"
                           centered
                        // dialogClassName="modal-90w"
                           fullscreen={true}
                    >
                        <Modal.Header>
                            <div className={styles.extraTools}>
                                <ul>

                                    <li>
                                        <a href={image} download>
                                            <img src={downloadIcon.src} alt={'icon'} />
                                        </a>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <img src={copyIcon.src} alt={'icon'} />*/}
                                    {/*</li>*/}
                                    <li onClick={handleClose}>
                                        <img src={closeIcon.src} alt={'icon'} />
                                    </li>
                                </ul>
                            </div>
                        </Modal.Header>
                        <Modal.Body>
                            {
                                image && (
                                    <img alt={'image'} src={image} style={{width: '100%', height: '100%'}}/>
                                )
                            }


                        </Modal.Body>
                    </Modal>
                </div>
            </Container>
             <Addmission />
        </div>
    )
}
export default GalleryContainer;