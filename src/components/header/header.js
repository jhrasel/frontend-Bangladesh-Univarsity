import { useRouter } from "next/router";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BrandIcon from '../../assets/image/brandIcon.png';
import { Buttons } from "../../components/buttons/button";
import { menuItem } from './constant';

import Image from "next/image";
import Row from 'react-bootstrap/Row';

export const Header = () => {
    const {asPath} = useRouter();

    return (
      <Row>
         <div className='container'>
                <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" className=' main_header' style={{background: '#fff'}}>
                    <Container >
                        <Navbar.Brand href="/home"><Image src={BrandIcon.src} alt={'home image'} width={212} height={32} /></Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: 'none'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M4 26V22.8333H28V26H4ZM9 18.0833V14.9167H28V18.0833H9ZM4 10.1667V7H28V10.1667H4Z" fill="#EB2A2E"/>
                            </svg>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            {
                                menuItem.map((value, index) => {
                                    return <Nav className="me-auto" key={index}>
                                        <Nav.Link
                                            href={value?.path}
                                            style={asPath === value?.path ? {color:'#EB2A2E',fontWeight: 500,  borderBottom: '2px solid #EB2A2E'}: {color: '#2B4476'}}>
                                            {value?.name}
                                        </Nav.Link>
                                        
                                    </Nav>
                                })
                            }
                        <Nav className="desktop-hide">
                            <Nav.Link href='https://65576501eb3f481e3b36037a--mellow-choux-10e2e6.netlify.app/dashboard/banner' target="_blank">
                                <Buttons text={'Teacher login'} bgColor={'#eb2a2e'}/>{' '}
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                         <Nav className="mobile-hide">
                            <Nav.Link href='https://65576501eb3f481e3b36037a--mellow-choux-10e2e6.netlify.app/dashboard/banner' target="_blank">
                                <Buttons text={'Teacher login'} bgColor={'#eb2a2e'}/>{' '}
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
      </Row>
        
    );
}
