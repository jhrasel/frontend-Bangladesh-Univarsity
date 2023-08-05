import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {menuItem} from './constant'
import BrandIcon from '../../assets/image/brandIcon.png'
import {Buttons} from "../../components/buttons/button";
import {useRouter} from "next/router";

export const Header = () => {
    const {asPath} = useRouter();

    return (
        // fixed="top"
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className='justify-content-between main_header'>
            <Container>
                <Navbar.Brand href="#">
                    <img src={BrandIcon.src} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {
                        menuItem.map((value, index) => {
                            return <Nav className="me-auto" key={index}>
                                <Nav.Link
                                    href={value?.path}
                                    style={{color: asPath === value?.path ? '#9D0F0F': '#000'}}>
                                    {value?.name}
                                </Nav.Link>
                            </Nav>
                        })
                    }
                    <Nav className="me-auto">
                        <Nav.Link href='/login'>
                            <Buttons text={'log in'} bgColor={'#F7D4D4'}/>{' '}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
