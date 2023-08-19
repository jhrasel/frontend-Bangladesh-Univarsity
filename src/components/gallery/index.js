import styles from './gallery.module.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import zoomInIcon from "../../assets/image/zoomin.svg";
import {useQuery} from "react-query";
import ApiRequest from "../../services/api-services";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";
import closeIcon from '../../assets/image/modal/close.svg'
import downloadIcon from '../../assets/image/modal/download.svg'
import copyIcon from '../../assets/image/modal/copy.svg'

const GalleryContainer = () => {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState('')
    const handleClose = () => setShow(false);
    const handleShow = (image) => {
        setShow(true)
        setImage(image)
    }

    const url = 'https://backend-bangladesh-university.onrender.com'
    const {data, isLoading} = useQuery(['gallery-item'],()=> ApiRequest.get('gallery/all'))

    return(
        <div className={styles.mainGallery}>
            <Container fluid>
                <Row>
                    {
                        data?.data?.body?.map((image, i) => {
                            return (
                                <Col key={i} xs='12' md='12' lg="4" style={{marginBottom: '25px'}}>
                                    <div className={styles.galleryImg} onClick={()=>handleShow(image?.image)}>
                                        <img alt={'image'} src={url+image?.image}/>

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
                                        <a href={url+image} download>
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
                                    <img alt={'image'} src={url+image} style={{width: '100%', height: '100%'}}/>
                                )
                            }


                        </Modal.Body>
                    </Modal>
                </div>
            </Container>
        </div>
    )
}
export default GalleryContainer;