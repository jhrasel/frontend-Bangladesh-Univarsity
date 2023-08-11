import styles from "./styles.module.css";
import bannerImg from "../../assets/image/slider.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from "react";
import {useMutation} from "react-query";
import ApiRequest from "../../services/api-services";


export const ContactUs = () => {
    const [contactValue, setContactValue] = useState({})
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log()
    }

    const changeHandler = (value) => {
        setContactValue({...contactValue, [value.target.name]: value.target.value})
        mutation.mutate(contactValue)

    }

    const mutation = useMutation({
        mutationFn: ({payload}) => ApiRequest.post('contact', payload),
    })
    return (
        <>
            <div className={styles.mainContact}>
                <img src={bannerImg.src} alt={'bannerImg'}/>
                <h1 className={'headingTitle'} style={{margin: '40px 0px'}}>
                    Get In Touch With Us
                </h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe width="100%" height="100%" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=bangladesh university&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="full_name" onChange={changeHandler}>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text"  name='fullname' placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email" onChange={changeHandler}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email"  name='email' placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="message" onChange={changeHandler}>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea"  name='message' rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}
