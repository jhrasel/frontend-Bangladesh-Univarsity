import axios from "axios";
import { useRouter } from 'next/router';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './styles.module.css';
export const Login = () => {
    const [studentToggle, setStudentToggle] = useState(false);
    const [formVisiable, setFormVisiable] = useState(false);
    const router = useRouter()
    const signInTeacherForm = () => {
        router.push('https://bangladesh-university.vercel.app/')
    }
    const signInStudentForm = () => {
        setFormVisiable(true)
        setStudentToggle(true)
    }

    const submitHandler = (e) => {

        e.preventDefault();
        // console.log('ok')
        // ApiRequest.post('/auth/login', {
        //     "id" : "01832400687",
        //     "password" : "password"
        // }).then((res) => {
        //     console.log(res)}).then(err => console.log(err))

        axios.post('http://localhost:1212/auth/login', {
            "id" : "01832400687",
            "password" : "password"
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
  return(
      <div className={styles.mainLogin}>
          {
              !formVisiable ? (
                  <div className={styles.signInBtn}>
                      <h4 className={'headingTitle'} style={{textAlign: 'left', fontSize: '22px'}} onClick={signInTeacherForm}>
                          Sign in to Teacher
                      </h4>
                      <h4 className={'headingTitle'} style={{textAlign: 'left', fontSize: '22px'}} onClick={signInTeacherForm}>
                          Sign in to Student
                      </h4>
                  </div>
              ) : (
                  <div style={{width: '300px'}}>
                      <h4 className={'headingTitle'} style={{textAlign: 'left', fontSize: '30px', lineHeight: '40px'}}>
                          Login by your <br /> ID & Password
                      </h4>
                      <br />
                      <Form>
                          {
                              studentToggle ? (
                                  <>
                                      <Form.Group className="mb-3" controlId="formBasicEmail" >
                                          <Form.Control type="email" placeholder="Student ID" />
                                      </Form.Group>

                                      <Form.Group className="mb-3" controlId="formBasicPassword">
                                          <Form.Control type="password" placeholder="Password" />
                                      </Form.Group>
                                  </>
                              ) : (
                                  <>
                                      <Form.Group className="mb-3" controlId="formBasicEmail" >
                                          <Form.Control type="email" placeholder="Teacher ID" />
                                      </Form.Group>

                                      <Form.Group className="mb-3" controlId="formBasicPassword">
                                          <Form.Control type="password" placeholder="Password" />
                                      </Form.Group>
                                  </>
                              )
                          }
                          <Button variant="primary" type="submit" className={styles.submitButton} onClick={submitHandler}>
                              Submit
                          </Button>
                      </Form>
                      <p className={styles.formText}>
                          If you do not have any ID & Password, Please contact with the Admin
                      </p>
                  </div>
              )
          }
      </div>
  )
}